import { AnimatedSection, SlideIn } from "../AnimatedSection";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const highlights = [
    "1+ Years of Production Experience",
    "MERN Full Stack Course from Kodenest",
    "Scalable Architecture Design",
    "RESTful API Development",
    "Database Optimization",
    "Real-time Data Processing"
  ];

  return (
    <AnimatedSection id="about" className="bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <SlideIn direction="right">
            <div className="relative">
              {/* Abstract decorative code window */}
              <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-secondary px-4 py-3 flex items-center gap-2 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 font-mono text-xs text-muted-foreground">developer.ts</div>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                  <p><span className="text-accent">const</span> <span className="text-primary">developer</span> = {'{'}</p>
                  <p className="ml-4"><span className="text-muted-foreground">name:</span> <span className="text-green-400">"Sreenath"</span>,</p>
                  <p className="ml-4"><span className="text-muted-foreground">role:</span> <span className="text-green-400">"Backend Developer"</span>,</p>
                  <p className="ml-4"><span className="text-muted-foreground">company:</span> <span className="text-green-400">"Aimwindow Info Tech"</span>,</p>
                  <p className="ml-4"><span className="text-muted-foreground">experience:</span> <span className="text-orange-400">1.5</span>,</p>
                  <p className="ml-4"><span className="text-muted-foreground">skills:</span> [</p>
                  <p className="ml-8 text-green-400">"Node.js", "Express", "MongoDB",</p>
                  <p className="ml-8 text-green-400">"React", "PostgreSQL", "REST APIs"</p>
                  <p className="ml-4">],</p>
                  <p className="ml-4"><span className="text-accent">execute:</span> <span className="text-primary">function</span>() {'{'}</p>
                  <p className="ml-8 text-muted-foreground">// Build scalable solutions</p>
                  <p className="ml-8"><span className="text-accent">return</span> <span className="text-green-400">"Success"</span>;</p>
                  <p className="ml-4">{'}'}</p>
                  <p>{'}'};</p>
                </div>
              </div>
            </div>
          </SlideIn>

          <SlideIn direction="left">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">the unseen.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                I am a passionate Node.js Backend Developer with over a year of hands-on experience in building robust, 
                real-time applications. My journey started with a comprehensive MERN Full Stack course at Kodenest, 
                which laid a rock-solid foundation for my engineering career.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Currently, I contribute to the success of Aimwindow Info Tech by designing and implementing scalable server architectures. 
                I thrive on solving complex backend challenges, optimizing database queries, and ensuring seamless data flow between the server and client.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                    <span className="text-sm font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </SlideIn>

        </div>
      </div>
    </AnimatedSection>
  );
}
