// import { AnimatedSection, SlideIn } from "../AnimatedSection";
// import { Badge } from "@/components/ui/badge";
// import { Briefcase, GraduationCap } from "lucide-react";

// export function Experience() {
//   return (
//     <AnimatedSection id="experience">
//       <div className="container mx-auto px-4 md:px-6 max-w-8xl">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Experience & Education</h2>
//           <p className="text-muted-foreground text-lg">My professional journey and academic background.</p>
//         </div>

//         <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">

//           {/* Experience Item */}
//           <SlideIn direction="up" className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
//             <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
//               <Briefcase size={16} />
//             </div>
//             <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl hover-elevate">
//               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
//                 <h3 className="font-bold text-xl text-foreground">Backend Developer (Node.js)</h3>
//                 <Badge variant="outline" className="w-fit text-primary border-primary/20 bg-primary/5">Present</Badge>
//               </div>
//               <p className="text-primary font-medium mb-4">Aimwindow Info Tech</p>
//               <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside ml-4">
//                 <li>Designed and deployed production-grade REST APIs serving multiple application modules.</li>
//                 <li>Implemented secure authentication and authorization using JWT and Role-Based Access Control (RBAC).</li>
//                 <li>Optimized MongoDB and PostgreSQL queries using indexing and aggregation, improving API response performance.</li>
//                 <li>Integrated third-party services including payment gateways and external APIs.</li>
//                 <li>Built real-time communication features using WebSockets.</li>
//                 <li>Structured backend architecture following MVC pattern and clean code principles.</li>
//                 <li>Reduced redundant database calls through query refactoring and schema optimization.</li>
//               </ul>
//             </div>
//           </SlideIn>

//           {/* Education Item */}
//           <SlideIn direction="up" delay={0.2} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
//             <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent text-accent-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
//               <GraduationCap size={16} />
//             </div>
//             <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl hover-elevate">
//               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
//                 <h3 className="font-bold text-xl text-foreground">Java Development Course</h3>
//                 {/* <Badge variant="outline" className="w-fit text-accent border-accent/20 bg-accent/5">Completed</Badge> */}
//               </div>
//               <p className="text-accent font-medium mb-4">Kodnest</p>
//               <p className="text-muted-foreground text-sm">
//                 <li>Completed intensive training in Core Java and OOP concepts.</li>
//                 <li>Worked on application development and backend programming fundamentals.</li>
//                 <li>Built strong logical thinking and software development skills.</li>
//               </p>
//             </div>
//           </SlideIn>

//         </div>
//       </div>
//     </AnimatedSection>
//   );
// }
import { AnimatedSection, SlideIn } from "../AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <AnimatedSection id="experience">
      <div className="container mx-auto px-4 md:px-6 max-w-8xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Experience & Education</h2>
          <p className="text-muted-foreground text-lg">My professional journey and academic background.</p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line - centered on desktop */}
          <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>

          {/* Experience Item - Image on LEFT */}
          <div className="relative mb-20">
            {/* Timeline Icon */}
            <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 z-10">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg">
                <Briefcase size={16} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Image - LEFT side */}
              <div className="ml-14 md:ml-0 md:w-1/2 md:pr-12">
                <SlideIn direction="right" className="w-full">
                  <div className="relative overflow-hidden rounded-2xl h-64 group-hover:scale-[1.02] transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop" 
                      alt="Backend development workspace"
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
                  </div>
                </SlideIn>
              </div>

              {/* Content - RIGHT side */}
              <div className="ml-14 md:ml-0 md:w-1/2 md:pl-12 mt-6 md:mt-0">
                <SlideIn direction="left" delay={0.1}>
                  <div className="glass-card p-6 rounded-2xl hover-elevate">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <h3 className="font-bold text-xl text-foreground">Backend Developer (Node.js)</h3>
                      <Badge variant="outline" className="w-fit text-primary border-primary/20 bg-primary/5">Present</Badge>
                    </div>
                    <p className="text-primary font-medium mb-4">Aimwindow Info Tech</p>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        <span>Designed and deployed production-grade REST APIs serving multiple application modules.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        <span>Implemented secure authentication and authorization using JWT and Role-Based Access Control (RBAC).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        <span>Optimized MongoDB and PostgreSQL queries using indexing and aggregation, improving API response performance.</span>
                      </li>
                   
                    </ul>
                  </div>
                </SlideIn>
              </div>
            </div>
          </div>

          {/* Education Item - Image on RIGHT (alternating) */}
          <div className="relative">
            {/* Timeline Icon */}
            <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 z-10">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent text-accent-foreground shadow-lg">
                <GraduationCap size={16} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Content - LEFT side */}
              <div className="ml-14 md:ml-0 md:w-1/2 md:pr-12 md:order-1">
                <SlideIn direction="right" delay={0.2}>
                  <div className="glass-card p-6 rounded-2xl hover-elevate">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <h3 className="font-bold text-xl text-foreground">Java Development Course</h3>
                    </div>
                    <p className="text-accent font-medium mb-4">Kodnest</p>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1.5 shrink-0">•</span>
                        <span>Completed intensive training in Core Java and OOP concepts.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1.5 shrink-0">•</span>
                        <span>Worked on application development and backend programming fundamentals.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1.5 shrink-0">•</span>
                        <span>Built strong logical thinking and software development skills.</span>
                      </li>
                         <li className="flex items-start gap-2">
                        <span className="text-accent mt-1.5 shrink-0">•</span>
                        <span>Built strong logical thinking and software development skills.</span>
                      </li>
                    </ul>
                  </div>
                </SlideIn>
              </div>

              {/* Image - RIGHT side */}
              <div className="ml-14 md:ml-0 md:w-1/2 md:pl-12 md:order-2 mt-6 md:mt-0">
                <SlideIn direction="left" delay={0.3} className="w-full">
                  <div className="relative overflow-hidden rounded-2xl h-64 group-hover:scale-[1.02] transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop" 
                      alt="Java programming education"
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
                  </div>
                </SlideIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}