import { AnimatedSection, SlideIn } from "../AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <AnimatedSection id="experience">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Experience & Education</h2>
          <p className="text-muted-foreground text-lg">My professional journey and academic background.</p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
          
          {/* Experience Item */}
          <SlideIn direction="up" className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Briefcase size={16} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl hover-elevate">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <h3 className="font-bold text-xl text-foreground">Backend Developer (Node.js)</h3>
                <Badge variant="outline" className="w-fit text-primary border-primary/20 bg-primary/5">Present</Badge>
              </div>
              <p className="text-primary font-medium mb-4">Aimwindow Info Tech</p>
              <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside ml-4">
                <li>Developed and maintained RESTful APIs for production-grade applications.</li>
                <li>Worked on real-time projects including E-commerce platforms, LMS, and PMT.</li>
                <li>Optimized database queries for improved application performance.</li>
                <li>Collaborated with frontend teams to integrate seamless user experiences.</li>
              </ul>
            </div>
          </SlideIn>

          {/* Education Item */}
          <SlideIn direction="up" delay={0.2} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent text-accent-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <GraduationCap size={16} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl hover-elevate">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <h3 className="font-bold text-xl text-foreground">MERN Full Stack Developer</h3>
                <Badge variant="outline" className="w-fit text-accent border-accent/20 bg-accent/5">Completed</Badge>
              </div>
              <p className="text-accent font-medium mb-4">Kodenest</p>
              <p className="text-muted-foreground text-sm">
                Intensive training program covering MongoDB, Express.js, React.js, and Node.js. 
                Built multiple full-stack projects focusing on state management, authentications, and REST API architectures.
              </p>
            </div>
          </SlideIn>

        </div>
      </div>
    </AnimatedSection>
  );
}
