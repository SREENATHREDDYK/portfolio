import { AnimatedSection, SlideIn } from "../AnimatedSection";
import { ShoppingCart, BookOpen, Trello, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Built a production-ready e-commerce backend with secure authentication, role-based access control, product management, order processing, and Stripe payment integration. Designed for high scalability and clean architecture.",
      icon: <ShoppingCart className="w-10 h-10 text-primary" />,
      tags: ["Node.js", "Express", "MongoDB", "Stripe API"],
      delay: 0.1
    },
    {
      title: "Learning Management System (LMS)",
      description: "Developed a scalable backend for a learning platform supporting course creation, student enrollment, progress tracking, secure content delivery, and real-time updates using WebSockets.",
      icon: <BookOpen className="w-10 h-10 text-accent" />,
      tags: ["Node.js", "PostgreSQL", "AWS S3", "WebSockets"],
      delay: 0.2
    },
    {
      title: "Project Management Tool (PMT)",
      description: "Engineered a real-time project management backend with sprint planning, task tracking, role-based permissions, activity logging, and WebSocket-powered live updates.",
      icon: <Trello className="w-10 h-10 text-green-400" />,
      tags: ["Express", "Socket.io", "Redis", "JWT"],
      delay: 0.3
    }
  ];

  return (
    <AnimatedSection id="projects" className="bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Production-grade backend systems designed with scalability, performance, and security at the core.            </p>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2">
            <Github size={16} /> View Github Profile
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <SlideIn key={index} direction="up" delay={project.delay} className="h-full">
              <Card className="h-full bg-background/50 backdrop-blur-sm border-white/5 hover:border-primary/30 transition-colors duration-300 hover-elevate flex flex-col">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 border border-white/5">
                    {project.icon}
                  </div>
                  <CardTitle className="text-xl font-display">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed text-base">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/80 text-xs font-mono">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-6 border-t border-white/5 mt-auto">
                  <div className="flex gap-4 w-full">
                    <Button variant="ghost" size="sm" className="flex-1 gap-2 text-muted-foreground hover:text-primary">
                      <ExternalLink size={16} /> Live Demo
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1 gap-2 text-muted-foreground hover:text-foreground">
                      <Github size={16} /> Source
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </SlideIn>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
