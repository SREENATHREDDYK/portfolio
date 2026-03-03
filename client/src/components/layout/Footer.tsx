import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-xl"><span className="text-primary"></span></span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sreenath. Built with React & Node.js.
          </p>

          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
              <Github size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
              <Twitter size={18} />
            </a>
            <a href="mailto:contact@example.com" className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
