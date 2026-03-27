// import { AnimatedSection, SlideIn } from "../AnimatedSection";
// import { CheckCircle2 } from "lucide-react";

// export function About() {
//   const highlights = [
//     "1+ Years of Production Experience",
//     "MERN Full Stack Course from Kodenest",
//     "Scalable Architecture Design",
//     "RESTful API Development",
//     "Database Optimization",
//     "Real-time Data Processing"
//   ];

//   return (
//     <AnimatedSection id="about" className="bg-secondary/30 relative">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
//           <SlideIn direction="right">
//             <div className="relative">
//               {/* Abstract decorative code window */}
//               <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
//                 <div className="bg-secondary px-4 py-3 flex items-center gap-2 border-b border-white/5">
//                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                   <div className="ml-4 font-mono text-xs text-muted-foreground">developer.ts</div>
//                 </div>
//                 <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
//                   <p><span className="text-accent">const</span> <span className="text-primary">developer</span> = {'{'}</p>
//                   <p className="ml-4"><span className="text-muted-foreground">name:</span> <span className="text-green-400">"Sreenath"</span>,</p>
//                   <p className="ml-4"><span className="text-muted-foreground">role:</span> <span className="text-green-400">"Backend Developer"</span>,</p>
//                   <p className="ml-4"><span className="text-muted-foreground">company:</span> <span className="text-green-400">"Aimwindow Info Tech"</span>,</p>
//                   <p className="ml-4"><span className="text-muted-foreground">experience:</span> <span className="text-orange-400">1.5</span>,</p>
//                   <p className="ml-4"><span className="text-muted-foreground">skills:</span> [</p>
//                   <p className="ml-8 text-green-400">"Node.js", "Express", "MongoDB",</p>
//                   <p className="ml-8 text-green-400">"React", "PostgreSQL", "REST APIs"</p>
//                   <p className="ml-4">],</p>
//                   <p className="ml-4"><span className="text-accent">execute:</span> <span className="text-primary">function</span>() {'{'}</p>
//                   <p className="ml-8 text-muted-foreground">// Build scalable solutions</p>
//                   <p className="ml-8"><span className="text-accent">return</span> <span className="text-green-400">"Success"</span>;</p>
//                   <p className="ml-4">{'}'}</p>
//                   <p>{'}'};</p>
//                 </div>
//               </div>
//             </div>
//           </SlideIn>

//           <SlideIn direction="left">
//             <div>
//               <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
//                 Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">the unseen.</span>
//               </h2>
//               <p className="text-lg text-muted-foreground mb-6">
//                 I am a passionate Node.js Backend Developer with over a year of hands-on experience in building robust, 
//                 real-time applications. My journey started with a comprehensive MERN Full Stack course at Kodenest, 
//                 which laid a rock-solid foundation for my engineering career.
//               </p>
//               <p className="text-lg text-muted-foreground mb-8">
//                 Currently, I contribute to the success of Aimwindow Info Tech by designing and implementing scalable server architectures. 
//                 I thrive on solving complex backend challenges, optimizing database queries, and ensuring seamless data flow between the server and client.
//               </p>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {highlights.map((highlight, index) => (
//                   <div key={index} className="flex items-center gap-3">
//                     <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
//                     <span className="text-sm font-medium">{highlight}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </SlideIn>

//         </div>
//       </div>
//     </AnimatedSection>
//   );
// }
import { AnimatedSection, SlideIn } from "../AnimatedSection";

export function About() {
  const skills = [
    { name: "Node.js", level: 90 },
    { name: "Express", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "React", level: 70 },
    { name: "REST APIs", level: 92 },
  ];

  const codeLines = [
    { tokens: [{ t: "const", c: "keyword" }, { t: " developer", c: "var" }, { t: " = {", c: "plain" }] },
    { tokens: [{ t: "  name:", c: "key" }, { t: ' "Sreenath"', c: "str" }, { t: ",", c: "plain" }] },
    { tokens: [{ t: "  role:", c: "key" }, { t: ' "Backend Developer"', c: "str" }, { t: ",", c: "plain" }] },
    { tokens: [{ t: "  exp:", c: "key" }, { t: " 1.5", c: "num" }, { t: ",", c: "plain" }] },
    { tokens: [{ t: "  passion:", c: "key" }, { t: ' "Scalable Systems"', c: "str" }] },
    { tokens: [{ t: "};", c: "plain" }] },
  ];

  const colorMap: Record<string, string> = {
    keyword: "#c792ea",
    var: "#82aaff",
    key: "#f78c6c",
    str: "#c3e88d",
    num: "#f78c6c",
    plain: "#8892a4",
  };

  return (
    <AnimatedSection id="about" className="py-24 md:py-36">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap');
      `}</style>

      <div className="container mx-auto px-6 md:px-5 max-w-8xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">

          {/* ── LEFT — Bio + Code ── */}
          <SlideIn direction="right">
            <div style={{ fontFamily: "'Outfit', sans-serif" }}>

              <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", opacity: 0.4, textTransform: "uppercase", marginBottom: "1rem" }}>
                About me
              </p>

              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "1.5rem" }}>
                I build things{" "}
                <span style={{ fontWeight: 300, fontStyle: "italic", opacity: 0.4 }}>
                  that live in the server.
                </span>
              </h2>

              <p style={{ fontSize: "1rem", lineHeight: 1.85, opacity: 0.6, marginBottom: "0.9rem", fontWeight: 300 }}>
                Passionate Node.js developer with{" "}
                <strong style={{ fontWeight: 600, opacity: 1 }}>1.5 years</strong> of production
                experience. Started with a comprehensive MERN course at{" "}
                <strong style={{ fontWeight: 600, opacity: 1 }}>Kodenest</strong> and have since been
                crafting real-time, scalable systems at Aimwindow Info Tech.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.85, opacity: 0.4, fontWeight: 300, marginBottom: "2.5rem" }}>
                My focus is clean architecture, fast APIs, and databases that don't break under pressure.
              </p>

              {/* Code snippet card */}
              <div style={{
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid rgba(128,128,128,0.12)",
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 16px",
                  borderBottom: "1px solid rgba(128,128,128,0.08)",
                  background: "rgba(128,128,128,0.03)",
                }}>
                  {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                    <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, display: "inline-block" }} />
                  ))}
                  <span style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.65rem", opacity: 0.3, marginLeft: 8 }}>
                    developer.ts
                  </span>
                </div>
                <div style={{ padding: "20px 24px", fontFamily: "'Fira Code', monospace", fontSize: "0.8rem", lineHeight: 2 }}>
                  {codeLines.map((line, i) => (
                    <div key={i}>
                      {line.tokens.map((tok, j) => (
                        <span key={j} style={{ color: colorMap[tok.c] }}>{tok.t}</span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SlideIn>

          {/* ── RIGHT — Skills + Info ── */}
          <SlideIn direction="left">
            <div style={{ fontFamily: "'Outfit', sans-serif" }}>

              <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", opacity: 0.4, textTransform: "uppercase", marginBottom: "2rem" }}>
                Core Stack
              </p>

              {/* Skill bars */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem", marginBottom: "2.5rem" }}>
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                      <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>{skill.name}</span>
                      <span style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.7rem", opacity: 0.3 }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div style={{
                      height: "3px",
                      borderRadius: "99px",
                      background: "rgba(128,128,128,0.12)",
                      overflow: "hidden",
                    }}>
                      <div style={{
                        height: "100%",
                        width: `${skill.level}%`,
                        borderRadius: "99px",
                        background: "linear-gradient(90deg, currentColor 0%, rgba(128,128,128,0.25) 100%)",
                        transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
                      }} />
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ height: "1px", background: "rgba(128,128,128,0.1)", marginBottom: "2rem" }} />

              {/* Info grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem", marginBottom: "1.5rem" }}>
                {[
                  { label: "Experience", value: "1.5 Years" },
                  { label: "Company", value: "Aimwindow" },
                  { label: "Certified", value: "MERN Stack" },
                  { label: "Focus", value: "Backend" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    style={{
                      padding: "14px 16px",
                      borderRadius: "10px",
                      border: "1px solid rgba(128,128,128,0.1)",
                      background: "rgba(128,128,128,0.03)",
                    }}
                  >
                    <p style={{ fontSize: "0.62rem", opacity: 0.35, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "4px", fontFamily: "'Fira Code', monospace" }}>
                      {label}
                    </p>
                    <p style={{ fontSize: "0.92rem", fontWeight: 600 }}>{value}</p>
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