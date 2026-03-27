import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold">
              Sreenath<span className="text-primary">.</span>
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            Copyright {new Date().getFullYear()} Sreenath. Built with Next.js.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="rounded-full bg-secondary p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="rounded-full bg-secondary p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="rounded-full bg-secondary p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
            >
              <Twitter size={18} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="rounded-full bg-secondary p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
