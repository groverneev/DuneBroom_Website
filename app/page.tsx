import ContactSection from "@/components/ContactSection"; // ← make sure the path matches your project

export default function Home() {
  return (
    <main
      style={{
        background: "#f5f6fa",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* HERO SECTION */}
      <section
        id="hero"
        style={{
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0e0e0e",
          color: "#fff",
          textAlign: "center",
          padding: "0 2rem",
        }}
      >
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
        <h2 style={{ fontSize: 28, fontWeight: 400, margin: "1.2rem 0" }}>
          Sweep Clean, Think Smart
        </h2>
        <p style={{ fontSize: 22, maxWidth: 600, margin: "0 auto 2rem auto" }}>
          Robotics, Innovation, and Clean Oceans.
        </p>
        <a
          href="/mission_statement"
          style={{
            background: "#fff",
            color: "#0e0e0e",
            fontWeight: 700,
            fontSize: 20,
            borderRadius: 8,
            padding: "12px 32px",
            textDecoration: "none",
            boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
          }}
        >
          Mission Statement
        </a>
      </section>

      {/* ABOUT PREVIEW */}
      <section
        id="about"
        style={{
          background: "#eafcf6",
          color: "#111",
          padding: "5rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: 34, fontWeight: 700, marginBottom: 16 }}>
          About DuneBroom
        </h2>
        <p style={{ fontSize: 20, maxWidth: 650, textAlign: "center" }}>
          DuneBroom is a student-led robotics project tackling beach pollution
          with autonomous robots and edge AI.
        </p>
        <a
          href="/about_me"
          style={{
            marginTop: 24,
            display: "inline-block",
            background: "#13c285",
            color: "#fff",
            fontWeight: 700,
            borderRadius: 8,
            padding: "12px 32px",
            fontSize: 17,
            textDecoration: "none",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            transition: "background 0.2s, color 0.2s",
          }}
        >
          Learn More &rarr;
        </a>
      </section>

      {/* OUTREACH PREVIEW */}
      <section
        id="outreach"
        style={{
          background: "#f3f7fd",
          color: "#111",
          padding: "5rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: 34, fontWeight: 700, marginBottom: 16 }}>
          About Me
        </h2>
        <p style={{ fontSize: 20, maxWidth: 650, textAlign: "center" }}>
          Neev is a rising sophomore at The Harker School who is passionate about Computer Science, Chess, and Music.
        </p>
        <a
          href="/about_me"
          style={{
            marginTop: 24,
            display: "inline-block",
            background: "#2563eb",
            color: "#fff",
            fontWeight: 700,
            borderRadius: 8,
            padding: "12px 32px",
            fontSize: 17,
            textDecoration: "none",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            transition: "background 0.2s, color 0.2s",
          }}
        >
          Learn More About Me &rarr;
        </a>
      </section>

      {/* CONTACT PREVIEW */}

      <section id="contact" style={{}}>
        {/* ───────── CONTACT SECTION (new) ───────── */}
        <ContactSection />
      </section>
    </main>
  );
}
