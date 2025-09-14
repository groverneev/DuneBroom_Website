import ContactSection from "@/components/ContactSection";
import BlogSection from "@/components/BlogSection";
import AboutMeSection from "@/components/AboutMeSection";

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
          background: "#0e1321",
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
          Robotics, Innovation, and Clean Beaches
        </h2>
        <p
          style={{ fontSize: 22, maxWidth: 600, margin: "0 auto 0.5rem auto" }}
        >
          {" "}
          {/*adds whitespace */}
        </p>
        <a
          href="/about_dunebroom"
          style={{
            background: "#fff",
            color: "#0e1321",
            fontWeight: 700,
            fontSize: 20,
            borderRadius: 8,
            padding: "12px 32px",
            textDecoration: "none",
            boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
          }}
        >
          About DuneBroom
        </a>
      </section>

      {/* ───────── BLOG SECTION ───────── */}
      <BlogSection />
      {/* ───────── BLOG SECTION ───────── */}
      <AboutMeSection />

      {/* CONTACT SECTION */}

      <section id="contact" style={{}}>
        <ContactSection />
      </section>
    </main>
  );
}
