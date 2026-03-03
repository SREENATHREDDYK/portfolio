export function BackendComponent() {
  return (
    <section id="Technical Skills" className="py-10">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core technical strengths in backend engineering and scalable system design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* API & Architecture */}
          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-4">API & Architecture</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>RESTful API Design</li>
              <li>MVC Architecture</li>
              <li>Middleware Design</li>
              <li>Error Handling Strategy</li>
            </ul>
          </div>

          {/* Authentication & Security */}
          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-4">Authentication & Security</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>JWT Authentication</li>
              <li>Role-Based Access Control</li>
              <li>Password Hashing (bcrypt)</li>
              <li>Secure API Practices</li>
            </ul>
          </div>

          {/* Database Engineering */}
          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-4">Database Engineering</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>MongoDB Aggregation</li>
              <li>Indexing Strategies</li>
              <li>PostgreSQL Optimization</li>
              <li>Schema Design</li>
            </ul>
          </div>

          {/* Real-Time Systems */}
          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-4">Real-Time Systems</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>WebSockets</li>
              <li>Event-Based Communication</li>
              <li>Activity Logging</li>
              <li>Scalable System Design</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}