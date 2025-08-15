import Image from "next/image";

export default function AboutPage() {
  return (
    <main style={{ background: "#f5f6fa", fontFamily: "Inter, sans-serif" }}>
      {/* ───────── HERO SECTION ───────── */}
      <section
        id="hero"
        style={{
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0E1321",
          color: "#fff",
          textAlign: "center",
          padding: "0 2rem",
        }}
      >
        {/* --- Profile Image --- */}
        <div style={{ flex: "none" }}>
          <Image
            src="/dunebroom_robot.png"
            alt="Neev Grover, founder of DuneBroom"
            width={140}
            height={140}
            style={{
              borderRadius: "50%",
              border: "4px solid #111",
              boxShadow: "0 4px 18px rgba(0,0,0,0.09)",
              background: "#eee",
              display: "block",
              margin: 0,
            }}
          />
        </div>

        <h1
          style={{
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            margin: 0,
          }}
        >
          DuneBroom
        </h1>
        <h2 style={{ fontSize: 26, fontWeight: 400, margin: "1.2rem 0" }}>
          Join us as we sweep clean and think smart!
        </h2>
        <p style={{ fontSize: 21, maxWidth: 600, margin: "0 auto 2rem auto" }}>
          <b>DuneBroom</b> is a student-led robotics project dedicated to making
          a real-world impact for our beaches and our planet. Founded by{" "}
          <b>Neev Grover</b>, DuneBroom builds and deploys autonomous robots
          powered by edge AI to clean beaches.
        </p>

        <div
          style={{
            display: "flex",
            gap: 24,
            justifyContent: "center",
            marginBottom: 32,
          }}
        ></div>
      </section>
    </main>
  );
}
