import Image from "next/image";

export default function AboutPage() {
  return (
    <main style={{ background: '#f8fafc', minHeight: "100vh", paddingTop: "2rem", paddingBottom: "2rem" }}>
      <section style={{ 
        maxWidth: 720, 
        margin: '2rem auto', 
        background: '#fff', 
        borderRadius: 16, 
        boxShadow: '0 4px 24px rgba(37,99,235,0.06)', 
        padding: '2.5rem 2rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          <Image
            src="/profile.jpg"
            alt="Neev Grover, founder of DuneBroom"
            width={128}
            height={128}
            style={{
              borderRadius: '50%',
              border: '4px solid #4ade80',
              boxShadow: '0 4px 24px rgba(16,185,129,0.09)'
            }}
          />
          <div>
            <h1 style={{ marginBottom: 6, color: "#2563eb", fontSize: 32 }}>About DuneBroom</h1>
            <h2 style={{
              fontWeight: 500,
              fontSize: 18,
              color: '#4ade80',
              margin: 0,
              marginBottom: 10
            }}>
              Neev Grover • Founder & Student Engineer
            </h2>
          </div>
        </div>
        <section style={{ color: "#64748b", lineHeight: 1.65 }}>
          <p>
            <b>DuneBroom</b> is a student-led robotics project dedicated to making a real-world impact for our beaches and our planet.
            Founded by <b>Neev Grover</b>, DuneBroom builds and deploys autonomous robots powered by edge AI to clean beaches and collect environmental data.
          </p>
          <p>
            Our team is made up of youth builders, engineers, and environmental advocates who believe in technology as a force for good. From hardware design to software innovation, we’re proving that young people can build solutions to big challenges—starting with plastic pollution.
          </p>
          <p>
            Join us as we bring together robotics, open data, and youth-powered advocacy to sweep clean and think smart!
          </p>
        </section>
        <div style={{
          marginTop: 32,
          background: "#e0f2fe",
          padding: "1.5rem",
          borderRadius: 12,
          textAlign: "center",
          boxShadow: "0 2px 8px rgba(37,99,235,0.06)"
        }}>
          <strong style={{ color: "#2563eb", fontSize: 18 }}>Want to learn more or get involved?</strong>
          <br />
          <a href="/contact" style={{
            color: "#4ade80",
            textDecoration: "underline",
            fontWeight: 600,
            fontSize: 16
          }}>
            Contact us here!
          </a>
        </div>
      </section>
    </main>
  );
}
