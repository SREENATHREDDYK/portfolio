import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full mix-blend-screen filter blur-[120px] opacity-30"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-white/5 text-sm text-muted-foreground mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Available for new opportunities
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-tight tracking-tighter mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">Sreenath</span>.<br />
            Node.js Backend Developer.
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I architect and build scalable, secure, and robust server-side applications. 
            Currently engineering high-performance solutions at <span className="text-foreground font-medium">Aimwindow Info Tech</span>.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base shadow-lg shadow-primary/25">
              <a href="#projects" className="flex items-center gap-2">
                View My Work <ArrowRight size={18} />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base bg-background/50 backdrop-blur-sm border-white/10 hover:bg-secondary">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div 
            className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-primary">
                <Server size={20} />
                <span className="font-mono text-sm font-semibold">Backend</span>
              </div>
              <p className="text-sm text-muted-foreground">Node.js, Express, REST APIs</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-accent">
                <Database size={20} />
                <span className="font-mono text-sm font-semibold">Database</span>
              </div>
              <p className="text-sm text-muted-foreground">PostgreSQL, MongoDB</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-green-400">
                <Code2 size={20} />
                <span className="font-mono text-sm font-semibold">Stack</span>
              </div>
              <p className="text-sm text-muted-foreground">MERN (Kodenest Certified)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
