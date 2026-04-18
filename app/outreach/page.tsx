import Image from "next/image";

export default function OutreachPage() {
  return (
    <main style={{ fontFamily: "Inter, sans-serif", background: "var(--background)", minHeight: "100vh", transition: "background-color 0.3s" }}>
      <section
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "4rem 2rem 6rem 2rem",
          color: "var(--foreground)",
        }}
      >
        <p
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--accent)",
            margin: "0 0 8px 0",
          }}
        >
          Environment Awareness Program
        </p>
        <h1
          style={{
            fontSize: 44,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: "0.5rem",
            marginTop: 0,
          }}
        >
          Outreach &amp; Impact
        </h1>
        <p style={{ fontSize: 17, color: "var(--muted)", marginBottom: "1rem", lineHeight: 1.7, marginTop: 0 }}>
          Combining grassroots education, environmental literacy, and technological innovation
          to empower the next generation of eco-innovators.
        </p>

        {/* Stats */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3.5rem" }}>
          <div style={{ background: "var(--surface)", borderRadius: 4, padding: "1rem 1.75rem", textAlign: "center" }}>
            <span style={{ fontSize: 36, fontWeight: 800, color: "var(--accent)", lineHeight: 1, display: "block", letterSpacing: "-0.03em" }}>450</span>
            <span style={{ fontSize: 13, color: "var(--muted)" }}>students reached</span>
          </div>
          <div style={{ background: "var(--surface)", borderRadius: 4, padding: "1rem 1.75rem", textAlign: "center" }}>
            <span style={{ fontSize: 36, fontWeight: 800, color: "var(--accent)", lineHeight: 1, display: "block", letterSpacing: "-0.03em" }}>5</span>
            <span style={{ fontSize: 13, color: "var(--muted)" }}>partner schools</span>
          </div>
        </div>

        {/* SECTION 1 — GRASSROOTS EDUCATION */}
        <div style={{ paddingBottom: "3.5rem", marginBottom: "3.5rem", borderBottom: "1px solid var(--border)" }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--accent)",
              margin: "0 0 8px 0",
            }}
          >
            01 — Grassroots Education
          </p>
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "1rem", marginTop: 0, color: "var(--foreground)" }}>
            Empowering Youth Across Borders
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--subtle)", marginBottom: "2rem" }}>
            Environmental protection is a global responsibility that requires global education.
            By partnering with multiple schools across India, we hosted interactive environmental
            awareness workshops to engage students directly. This education was translated into
            active participation through large-scale environmental-theme drawing competitions,
            giving hundreds of students a creative platform to express their vision for a cleaner,
            greener Earth.
          </p>

          <div style={{ width: "100%", overflow: "hidden", borderRadius: 4, marginBottom: "0.75rem" }}>
            <Image
              src="/in-classroom.jpg"
              alt="Students in classroom watching a virtual environmental awareness workshop"
              width={860}
              height={580}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
          <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: "3rem", marginTop: 0 }}>
            Virtual environmental awareness workshop — Kasturba Gandhi Balika Vidyalaya, Andhra Pradesh
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: "0.5rem", marginTop: 0, color: "var(--foreground)" }}>
            In the News
          </h3>
          <p style={{ fontSize: 15, color: "var(--muted)", marginBottom: "1.5rem", lineHeight: 1.65 }}>
            As covered by regional press across Andhra Pradesh · March 2026
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              { src: "/article-1.jpg", alt: "Prajasakti newspaper coverage of DuneBroom school outreach" },
              { src: "/article-2.jpg", alt: "Andhra Prabha newspaper coverage of DuneBroom school outreach" },
              { src: "/article-3.jpg", alt: "Eenadu newspaper coverage of DuneBroom school outreach" },
              { src: "/article-4.jpg", alt: "Manam newspaper coverage of DuneBroom school outreach" },
            ].map((article) => (
              <div
                key={article.src}
                style={{ overflow: "hidden", borderRadius: 4, border: "1px solid var(--border)" }}
              >
                <Image
                  src={article.src}
                  alt={article.alt}
                  width={420}
                  height={560}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2 — ENVIRONMENTAL LITERACY */}
        <div>
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--accent)",
              margin: "0 0 8px 0",
            }}
          >
            02 — Environmental Literacy
          </p>
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "1rem", marginTop: 0, color: "var(--foreground)" }}>
            Educating Through Pages
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--subtle)", marginBottom: "1.5rem" }}>
            Real change starts with understanding. To help kids connect with the environment,
            Neev wrote <strong>Adventures of Sunbeam</strong> — a book that turns complex
            environmental issues into inspiring stories for young readers. It includes an appendix
            full of interactive activities and drawing pages, and now serves as the foundation for
            our educational programs everywhere.
          </p>

          <a
            href="https://www.amazon.com/Adventures-Sunbeam-heartwarming-sustainability-potential-ebook/dp/B0GKCXW4DL/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "var(--accent)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 15,
              borderRadius: 4,
              padding: "11px 28px",
              textDecoration: "none",
              transition: "opacity 0.2s",
              marginBottom: "2.5rem",
            }}
          >
            Read Adventures of Sunbeam &rarr;
          </a>

          <div style={{ width: "100%", overflow: "hidden", borderRadius: 4, marginBottom: "0.75rem" }}>
            <Image
              src="/people-holding-up-book.jpg"
              alt="Students holding up copies of Adventures of Sunbeam"
              width={860}
              height={490}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
          <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 0 }}>
            Students receiving copies of <em>Adventures of Sunbeam</em> — Andhra Pradesh, India
          </p>
        </div>
      </section>
    </main>
  );
}
