import Image from "next/image";

export default function AboutPage() {
  return (
    <main style={{
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'inherit'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        {/* Replace /profile.jpg with your actual image, put your image in /public folder */}
        <Image
          src="/profile.jpg"
          alt="Neev Grover, founder of DuneBroom"
          width={160}
          height={160}
          style={{
            borderRadius: '50%',
            border: '4px solid #bbf7d0',
            boxShadow: '0 4px 24px rgba(16, 102, 52, 0.15)'
          }}
        />
        <div>
          <h1 style={{ marginBottom: 6 }}>About DuneBroom</h1>
          <h2 style={{
            fontWeight: 400,
            fontSize: 18,
            color: '#166534',
            marginTop: 0,
            marginBottom: 12
          }}>
            Neev Grover • Founder & Student Engineer
          </h2>
        </div>
      </div>
      <section>
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
      {/* (Optional) Add a few fun facts or call to action */}
      <div style={{
        marginTop: 32,
        background: "#bbf7d0",
        padding: "1.5rem",
        borderRadius: 12,
        textAlign: "center"
      }}>
        <strong style={{ color: "#000000" }}>Want to learn more or get involved?</strong>
        <br />
        <a href="/contact" style={{
          color: "#000000",
          textDecoration: "underline",
          fontWeight: 500
        }}>
          Contact us here!
        </a>
      </div>
    </main>
  );
}
