// export function BackendComponent() {
//   return (
//     <section id="Technical Skills" className="py-10">
//       <div className="container mx-auto px-6">

//         <div className="text-center mb-16" >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Technical Skills
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Core technical strengths in backend engineering and scalable system design.
//           </p>

//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

//           {/* API & Architecture */}
//           <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition">
//             <h3 className="text-lg font-semibold mb-4">API & Architecture</h3>
//             <ul className="space-y-2 text-sm text-muted-foreground">
//               <li>RESTful API Design</li>
//               <li>MVC Architecture</li>
//               <li>Middleware Design</li>
//               <li>Error Handling Strategy</li>
//             </ul>
//           </div>

//           {/* Authentication & Security */}
//           <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition">
//             <h3 className="text-lg font-semibold mb-4">Authentication & Security</h3>
//             <ul className="space-y-2 text-sm text-muted-foreground">
//               <li>JWT Authentication</li>
//               <li>Role-Based Access Control</li>
//               <li>Password Hashing (bcrypt)</li>
//               <li>Secure API Practices</li>
//             </ul>
//           </div>

//           {/* Database Engineering */}
//           <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition">
//             <h3 className="text-lg font-semibold mb-4">Database Engineering</h3>
//             <ul className="space-y-2 text-sm text-muted-foreground">
//               <li>MongoDB Aggregation</li>
//               <li>Indexing Strategies</li>
//               <li>PostgreSQL Optimization</li>
//               <li>Schema Design</li>
//             </ul>
//           </div>

//           {/* Real-Time Systems */}
//           <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition">
//             <h3 className="text-lg font-semibold mb-4">Real-Time Systems</h3>
//             <ul className="space-y-2 text-sm text-muted-foreground">
//               <li>WebSockets</li>
//               <li>Event-Based Communication</li>
//               <li>Activity Logging</li>
//               <li>Scalable System Design</li>
//             </ul>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }
import {
  FaFigma,
  FaSketch,
  FaReact,
  FaWordpress,
  FaJsSquare,
} from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";

const skills = [
  { name: "Figma", percent: "92%", icon: <FaFigma /> },
  { name: "Sketch", percent: "80%", icon: <FaSketch /> },
  { name: "XD", percent: "85%", icon: <SiAdobexd /> },
  { name: "WordPress", percent: "99%", icon: <FaWordpress /> },
  { name: "React", percent: "89%", icon: <FaReact /> },
  { name: "JavaScript", percent: "93%", icon: <FaJsSquare /> },
];

export function BackendComponent() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10 sticky top-0 bg-background z-10 py-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We put your ideas and thus your wishes in the form of a unique web project.
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div className="overflow-x-auto">
          {/* <div className="flex gap-6 min-w-max px-2">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 min-w-[140px] flex flex-col items-center justify-center hover:shadow-lg transition"
              >
                <div className="text-3xl mb-3 text-primary">
                  {skill.icon}
                </div>

                <p className="font-semibold">{skill.percent}</p>

                <p className="text-sm text-muted-foreground">
                  {skill.name}
                </p>
              </div>
            ))}

          </div> */}
          <div className="flex w-full gap-6">
  {skills.map((skill, index) => (
    <div
      key={index}
      className="flex-1 basis-0 bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition"
    >
      <div className="text-3xl mb-3 text-primary">
        {skill.icon}
      </div>

      <p className="font-semibold">{skill.percent}</p>

      <p className="text-sm text-muted-foreground text-center">
        {skill.name}
      </p>
    </div>
  ))}
</div>
        </div>

      </div>
    </section>
  );
}