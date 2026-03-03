import { type Express } from "express";
import { type Server } from "http";
import viteConfig from "../vite.config";
import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

export async function setupVite(server: Server, app: Express) {
  // Vite v7 uses crypto.hash, which is not available in some Node 20 builds.
  // Patch it before importing Vite so dev mode can start on older runtimes.
  const crypto = require("node:crypto") as typeof import("node:crypto") & {
    hash?: (
      algorithm: string,
      data: string | Buffer,
      outputEncoding?: import("node:crypto").BinaryToTextEncoding,
    ) => string;
  };
  if (typeof crypto.hash !== "function") {
    (crypto as any).hash = (
      algorithm: string,
      data: string | Buffer,
      outputEncoding: import("node:crypto").BinaryToTextEncoding = "hex",
    ) => crypto.createHash(algorithm).update(data).digest(outputEncoding);
  }

  const { createServer: createViteServer, createLogger } = await import("vite");
  const viteLogger = createLogger();

  const serverOptions = {
    middlewareMode: true,
    hmr: { server, path: "/vite-hmr" },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("/{*path}", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}
