// // // // import { motion } from "framer-motion";
// // // // import { ArrowRight, Code2, Database, Server } from "lucide-react";
// // // // import { Button } from "@/components/ui/button";

// // // // export function Hero() {
// // // //   return (
// // // //     <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
// // // //       {/* Background abstract elements */}
// // // //       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-pulse"></div>
// // // //       <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full mix-blend-screen filter blur-[120px] opacity-30"></div>

// // // //       <div className="container mx-auto px-4 md:px-6 relative z-10">
// // // //         <div className="max-w-4xl">
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.5 }}
// // // //             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-white/5 text-sm text-muted-foreground mb-6"
// // // //           >
// // // //             <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
// // // //             Available for new opportunities
// // // //           </motion.div>

// // // //           <motion.h1
// // // //             className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.5, delay: 0.1 }}
// // // //           >
// // // //             Hi, I'm{" "}
// // // //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">
// // // //               Sreenath
// // // //             </span>.
// // // //             <br />
// // // //             Backend Engineer specializing in scalable and secure API architecture.
// // // //           </motion.h1>

// // // //           <motion.p
// // // //             className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.5, delay: 0.2 }}
// // // //           >
// // // //             I design and build secure, high-performance backend systems using Node.js, Express, MongoDB, and PostgreSQL.
// // // //              Currently contributing to production-grade applications at{" "}
// // // //             <span className="text-foreground font-medium">
// // // //               Aimwindow Info Tech
// // // //             </span>
// // // //           </motion.p>

// // // //           <motion.div
// // // //             className="flex flex-col sm:flex-row gap-4"
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.5, delay: 0.3 }}
// // // //           >
// // // //             <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base shadow-lg shadow-primary/25">
// // // //               <a href="#projects" className="flex items-center gap-2">
// // // //                 View My Work <ArrowRight size={18} />
// // // //               </a>
// // // //             </Button>
// // // //             <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base bg-background/50 backdrop-blur-sm border-white/10 hover:bg-secondary">
// // // //               <a href="#contact">Contact Me</a>
// // // //             </Button>
// // // //           </motion.div>

// // // //           {/* Tech Stack Pills */}
// // // //           <motion.div
// // // //             className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6"
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             transition={{ duration: 1, delay: 0.6 }}
// // // //           >
// // // //             <div className="flex flex-col gap-2">
// // // //               <div className="flex items-center gap-2 text-primary">
// // // //                 <Server size={20} />
// // // //                 <span className="font-mono text-sm font-semibold">Backend</span>
// // // //               </div>
// // // //               <p className="text-sm text-muted-foreground">Node.js, Express, REST APIs</p>
// // // //             </div>
// // // //             <div className="flex flex-col gap-2">
// // // //               <div className="flex items-center gap-2 text-accent">
// // // //                 <Database size={20} />
// // // //                 <span className="font-mono text-sm font-semibold">Database</span>
// // // //               </div>
// // // //               <p className="text-sm text-muted-foreground">PostgreSQL, MongoDB</p>
// // // //             </div>
// // // //             <div className="flex flex-col gap-2">
// // // //               <div className="flex items-center gap-2 text-green-400">
// // // //                 <Code2 size={20} />
// // // //                 <span className="font-mono text-sm font-semibold">Architecture</span>
// // // //               </div>
// // // //               <p className="text-sm text-muted-foreground">
// // // //                 REST APIs, RBAC, Real-Time Systems</p>
// // // //             </div>
// // // //           </motion.div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }
// // // import { motion } from "framer-motion";
// // // import { ArrowRight, Building2, Home, Users, ChevronRight } from "lucide-react";
// // // import { Button } from "@/components/ui/button";

// // // export function Hero() {
// // //   return (
// // //     <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
// // //       {/* Background abstract elements - matching original colors */}
// // //       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-pulse"></div>
// // //       <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full mix-blend-screen filter blur-[120px] opacity-30"></div>

// // //       <div className="container mx-auto px-4 md:px-6 relative z-10 mt-2">
// // //         <div className="max-w-4xl">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.5 }}
// // //             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-white/5 text-sm text-muted-foreground mb-2"
// // //           >
// // //             <span className="w-2 h-2 rounded-full bg-primary animate-pulse "></span>
// // //            Open to Opportunities
// // //           </motion.div>

// // //           <motion.h1
// // //             className="text-4xl md:text-6xl font-bold mb-10 leading-tight"
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.5, delay: 0.1 }}
// // //           >
           
// // //             <br />
// // //             I'm Developer
// // //             <br />
// // //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">
// // //               Sreenath Reddy
// // //             </span>
// // //           </motion.h1>

// // //           <motion.p
// // //             className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
// // //               style={{ textAlign: "justify" }}
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.5, delay: 0.2 }}
// // //           >
// // //             The entire of Blackrock senior living solutions, and senior housing is being developed by{" "}
// // //             <span className="text-foreground font-medium">
// // //               Wilkerson Hardin
// // //             </span>.
// // //             <br />
// // //             We would be happy to help you with your senior housing needs in the future.
// // //           </motion.p>

// // //           <motion.div
// // //             className="flex flex-col sm:flex-row gap-4"
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.5, delay: 0.3 }}
// // //           >
// // //             <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base shadow-lg shadow-primary/25">
// // //               <a href="#contact" className="flex items-center gap-2">
// // //                 Start Your Journey <ArrowRight size={18} />
// // //               </a>
// // //             </Button>
// // //             <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base bg-background/50 backdrop-blur-sm border-white/10 hover:bg-secondary">
// // //               <a href="#services">Learn More</a>
// // //             </Button>
// // //           </motion.div>

// // //           {/* Senior Housing Solutions Pills - matching original color scheme */}
// // //           <motion.div
// // //             className="mt-10 pt-10 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6"
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             transition={{ duration: 1, delay: 0.6 }}
// // //           >
// // //             <div className="flex flex-col gap-2">
// // //               <div className="flex items-center gap-2 text-primary">
// // //                 <Building2 size={20} />
// // //                 <span className="font-mono text-sm font-semibold">Senior Living</span>
// // //               </div>
// // //               <p className="text-sm text-muted-foreground">Luxury independent living communities</p>
// // //             </div>
// // //             <div className="flex flex-col gap-2">
// // //               <div className="flex items-center gap-2 text-accent">
// // //                 <Home size={20} />
// // //                 <span className="font-mono text-sm font-semibold">Assisted Living</span>
// // //               </div>
// // //               <p className="text-sm text-muted-foreground">24/7 personalized care and support</p>
// // //             </div>
// // //             <div className="flex flex-col gap-2">
// // //               <div className="flex items-center gap-2 text-primary">
// // //                 <Users size={20} />
// // //                 <span className="font-mono text-sm font-semibold">Memory Care</span>
// // //               </div>
// // //               <p className="text-sm text-muted-foreground">Specialized compassionate care</p>
// // //             </div>
// // //           </motion.div>

        
        
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }
// // import { motion } from "framer-motion";
// // import { ArrowRight, Building2, Home, Users, ChevronRight } from "lucide-react";
// // import { Button } from "@/components/ui/button";

// // export function Hero() {
// //   return (
// //     <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
// //       {/* Background abstract elements - matching original colors */}
// //       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-pulse"></div>
// //       <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full mix-blend-screen filter blur-[120px] opacity-30"></div>

// //       <div className="container mx-auto px-4 md:px-6 relative z-10">
// //         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
// //           {/* Left Content */}
// //           <div className="flex-1 max-w-4xl">
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5 }}
// //               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-white/5 text-sm text-muted-foreground mb-2"
// //             >
// //               <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
// //               Open to Opportunities
// //             </motion.div>

// //             <motion.h1
// //               className="text-4xl md:text-6xl font-bold mb-10 leading-tight"
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: 0.1 }}
// //             >
// //               <br />
// //               I'm Developer
// //               <br />
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">
// //                 Sreenath Reddy
// //               </span>
// //             </motion.h1>

// //             <motion.p
// //               className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
// //               style={{ textAlign: "justify" }}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: 0.2 }}
// //             >
// //               The entire of Blackrock senior living solutions, and senior housing is being developed by{" "}
// //               <span className="text-foreground font-medium">
// //                 Wilkerson Hardin
// //               </span>.
// //               <br />
// //               We would be happy to help you with your senior housing needs in the future.
// //             </motion.p>

// //             <motion.div
// //               className="flex flex-col sm:flex-row gap-4"
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: 0.3 }}
// //             >
// //               <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base shadow-lg shadow-primary/25">
// //                 <a href="#contact" className="flex items-center gap-2">
// //                   Start Your Journey <ArrowRight size={18} />
// //                 </a>
// //               </Button>
// //               <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base bg-background/50 backdrop-blur-sm border-white/10 hover:bg-secondary">
// //                 <a href="#services">Learn More</a>
// //               </Button>
// //             </motion.div>

// //             {/* Senior Housing Solutions Pills */}
// //             <motion.div
// //               className="mt-10 pt-10 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ duration: 1, delay: 0.6 }}
// //             >
// //               <div className="flex flex-col gap-2">
// //                 <div className="flex items-center gap-2 text-primary">
// //                   <Building2 size={20} />
// //                   <span className="font-mono text-sm font-semibold">Senior Living</span>
// //                 </div>
// //                 <p className="text-sm text-muted-foreground">Luxury independent living communities</p>
// //               </div>
// //               <div className="flex flex-col gap-2">
// //                 <div className="flex items-center gap-2 text-accent">
// //                   <Home size={20} />
// //                   <span className="font-mono text-sm font-semibold">Assisted Living</span>
// //                 </div>
// //                 <p className="text-sm text-muted-foreground">24/7 personalized care and support</p>
// //               </div>
// //               <div className="flex flex-col gap-2">
// //                 <div className="flex items-center gap-2 text-primary">
// //                   <Users size={20} />
// //                   <span className="font-mono text-sm font-semibold">Memory Care</span>
// //                 </div>
// //                 <p className="text-sm text-muted-foreground">Specialized compassionate care</p>
// //               </div>
// //             </motion.div>
// //           </div>

// //           {/* Right Side Image */}
// //           <motion.div 
// //             className="flex-1 flex justify-center lg:justify-end"
// //             initial={{ opacity: 0, x: 50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.7, delay: 0.3 }}
// //           >
// //             <div className="relative">
// //               {/* Background glow effect */}
// //               <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
              
// //               {/* Image Container */}
// //               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
// //             <img 
// //   src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop" 
// //   alt="Senior living consultant"
// //   className="w-full max-w-md h-auto object-cover rounded-2xl"
// // />
                
// //                 {/* Optional overlay gradient */}
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
// //               </div>
              
// //               {/* Optional floating badge */}
// //               <div className="absolute -bottom-4 -right-4 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/30 shadow-lg">
// //                 <p className="text-xs font-medium text-primary">1+ Years Experience</p>
// //               </div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// import { motion } from "framer-motion";
// import { ArrowRight, Building2, Home, Users } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
//       {/* Background abstract elements */}
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-pulse"></div>
//       <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full mix-blend-screen filter blur-[120px] opacity-30"></div>

//       <div className="container mx-auto px-4 md:px-6 relative z-10">
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
//           {/* Left Content */}
//           <div className="flex-1 max-w-4xl">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-white/5 text-sm text-muted-foreground mb-2"
//             >
//               <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
//               Open to Opportunities
//             </motion.div>

//             <motion.h1
//               className="text-4xl md:text-6xl font-bold mb-10 leading-tight"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//             >
//               <br />
//               I'm Developer
//               <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">
//                 Sreenath Reddy
//               </span>
//             </motion.h1>

//             <motion.p
//               className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
//               style={{ textAlign: "justify" }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               The entire of Blackrock senior living solutions, and senior housing is being developed by{" "}
//               <span className="text-foreground font-medium">
//                 Wilkerson Hardin
//               </span>.
//               <br />
//               We would be happy to help you with your senior housing needs in the future.
//             </motion.p>

//             <motion.div
//               className="flex flex-col sm:flex-row gap-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//             >
//               <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base shadow-lg shadow-primary/25">
//                 <a href="#contact" className="flex items-center gap-2">
//                   Start Your Journey <ArrowRight size={18} />
//                 </a>
//               </Button>
//               <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base bg-background/50 backdrop-blur-sm border-white/10 hover:bg-secondary">
//                 <a href="#services">Learn More</a>
//               </Button>
//             </motion.div>

//             {/* Senior Housing Solutions Pills */}
//             <motion.div
//               className="mt-10 pt-10 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 0.6 }}
//             >
//               <div className="flex flex-col gap-2">
//                 <div className="flex items-center gap-2 text-primary">
//                   <Building2 size={20} />
//                   <span className="font-mono text-sm font-semibold">Senior Living</span>
//                 </div>
//                 <p className="text-sm text-muted-foreground">Luxury independent living communities</p>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <div className="flex items-center gap-2 text-accent">
//                   <Home size={20} />
//                   <span className="font-mono text-sm font-semibold">Assisted Living</span>
//                 </div>
//                 <p className="text-sm text-muted-foreground">24/7 personalized care and support</p>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <div className="flex items-center gap-2 text-primary">
//                   <Users size={20} />
//                   <span className="font-mono text-sm font-semibold">Memory Care</span>
//                 </div>
//                 <p className="text-sm text-muted-foreground">Specialized compassionate care</p>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Side Image */}
//           <motion.div 
//             className="flex-1 flex justify-center lg:justify-end"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, delay: 0.3 }}
//           >
//             <div className="relative">
//               {/* Background glow effect */}
//               <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
              
//               {/* Image Container */}
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
//                 {/* Use your local image - rename your file to hero.jpg */}
//     <img 
//   src="/profile.jpeg" 
//   alt="profile"
//   className="w-full max-w-md h-auto object-cover rounded-2xl"
// />
//               </div>
              
//               {/* Floating badge */}
//               <div className="absolute -bottom-4 -right-4 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/30 shadow-lg">
//                 <p className="text-xs font-medium text-primary">15+ Years Experience</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import { ArrowRight, Building2, Home, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background abstract elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full mix-blend-screen filter blur-[120px] opacity-30"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="flex-1 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-white/5 text-sm text-muted-foreground mb-2"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Open to Opportunities
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-10 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <br />
              I'm Developer
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">
                Sreenath Reddy
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
              style={{ textAlign: "justify" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The entire of Blackrock senior living solutions, and senior housing is being developed by{" "}
              <span className="text-foreground font-medium">
                Wilkerson Hardin
              </span>.
              <br />
              We would be happy to help you with your senior housing needs in the future.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base shadow-lg shadow-primary/25">
                <a href="#contact" className="flex items-center gap-2">
                  Start Your Journey <ArrowRight size={18} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base bg-background/50 backdrop-blur-sm border-white/10 hover:bg-secondary">
                <a href="#services">Learn More</a>
              </Button>
            </motion.div>

            {/* Senior Housing Solutions Pills */}
            <motion.div
              className="mt-10 pt-10 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary">
                  <Building2 size={20} />
                  <span className="font-mono text-sm font-semibold">Senior Living</span>
                </div>
                <p className="text-sm text-muted-foreground">Luxury independent living communities</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-accent">
                  <Home size={20} />
                  <span className="font-mono text-sm font-semibold">Assisted Living</span>
                </div>
                <p className="text-sm text-muted-foreground">24/7 personalized care and support</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary">
                  <Users size={20} />
                  <span className="font-mono text-sm font-semibold">Memory Care</span>
                </div>
                <p className="text-sm text-muted-foreground">Specialized compassionate care</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side Image */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              {/* Background glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                {/* Use the correct image name - img.jpeg */}
 <img 
  src="https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=500&h=500&fit=crop"
  alt="Senior living consultant"
  className="w-full max-w-md h-auto object-cover rounded-2xl"
/>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/30 shadow-lg">
                <p className="text-xs font-medium text-primary">1+ Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}