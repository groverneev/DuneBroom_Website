import Image from "next/image";

export default function AboutPage() {
  return (
    <main style={{ fontFamily: "Inter, sans-serif", background: "var(--background)", minHeight: "100vh", transition: "background-color 0.3s" }}>
      <section
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "4rem 2rem 6rem 2rem",
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
          The Creator
        </p>
        <h1
          style={{
            fontSize: 44,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--foreground)",
            marginBottom: "3rem",
            marginTop: 0,
          }}
        >
          About
        </h1>

        {/* Profile */}
        <div
          style={{
            display: "flex",
            gap: "3rem",
            alignItems: "flex-start",
            marginBottom: "3.5rem",
            flexWrap: "wrap",
          }}
        >
          <Image
            src="/neev_profile.png"
            alt="Neev Grover, founder of DuneBroom"
            width={160}
            height={160}
            style={{
              borderRadius: "50%",
              flexShrink: 0,
              display: "block",
              background: "var(--surface)",
            }}
          />
          <div style={{ flex: 1, minWidth: 240 }}>
            <h2
              style={{
                fontSize: 30,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                margin: "0 0 0.25rem 0",
                color: "var(--foreground)",
              }}
            >
              Neev Grover
            </h2>
            <p
              style={{
                fontSize: 15,
                fontWeight: 400,
                margin: "0 0 1.5rem 0",
                color: "var(--accent)",
              }}
            >
              Founder · Sophomore at the Harker School
            </p>
            <p
              style={{
                fontSize: 16,
                margin: 0,
                lineHeight: 1.8,
                color: "var(--subtle)",
              }}
            >
              Neev is a student inventor passionate about using technology to solve real-world
              environmental problems. He built DuneBroom from the ground up — designing the
              mechanical sieving system, training the ML vision model, and leading school
              outreach programs across India. Outside of engineering, he enjoys competitive
              chess, writing about technology, and building projects that make a tangible impact.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid var(--border)", marginBottom: "3.5rem" }} />

        {/* The Mission */}
        <div style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
              marginTop: 0,
              color: "var(--foreground)",
            }}
          >
            The Mission
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--subtle)", marginBottom: "1rem" }}>
            DuneBroom started with a simple observation: beach cleanups rely entirely on human
            volunteer hours, and yet less than 1% of coastal debris gets removed each year.
            Neev set out to build a robot that could work autonomously — patrolling and
            collecting without intervention — while staying affordable enough to be deployed
            at scale.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--subtle)", margin: 0 }}>
            The project grew into something larger: an education and awareness program reaching
            450 students across 5 schools in India, a children&apos;s book, and a drawing
            competition that gave young people a creative voice in the fight for a cleaner planet.
          </p>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid var(--border)", marginBottom: "3.5rem" }} />

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {[
            { value: "450+", label: "Students reached" },
            { value: "5", label: "Partner schools" },
            { value: "1", label: "Book published" },
            { value: "2+", label: "Years of research" },
          ].map(({ value, label }) => (
            <div
              key={label}
              style={{
                background: "var(--surface)",
                borderRadius: 4,
                padding: "1.25rem",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: 34,
                  fontWeight: 800,
                  color: "var(--accent)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                {value}
              </span>
              <span style={{ fontSize: 13, color: "var(--muted)" }}>{label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
