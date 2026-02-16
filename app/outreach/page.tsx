export default function OutreachPage() {
  return (
    <main style={{ fontFamily: "Inter, sans-serif", background: "var(--background)", minHeight: "100vh", transition: "background-color 0.3s" }}>
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "4rem 2rem 6rem 2rem",
          color: "var(--foreground)",
        }}
      >
        <h1
          style={{
            fontSize: 44,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: "0.5rem",
          }}
        >
          Outreach &amp; Impact
        </h1>
        <p style={{ fontSize: 20, color: "var(--muted)", marginBottom: "1rem", lineHeight: 1.7 }}>
          Empowering the Next Generation of Clean Energy Leaders
        </p>
        <p style={{ fontSize: 17, color: "var(--subtle)", marginBottom: "2.5rem", lineHeight: 1.7 }}>
          At DuneBroom, we are committed to cultivating the mindset needed for a sustainable future.
          We believe that the transition to clean energy requires more than just maintaining hardware
          — it requires education, awareness, and stewardship. To support this, DuneBroom is
          developing a comprehensive suite of educational materials designed to help children across
          the world understand the environment and the critical systems that sustain it.
        </p>

        {/* Adventures of Sunbeam */}
        <div
          style={{
            background: "var(--surface)",
            borderRadius: 12,
            padding: "2rem",
            marginBottom: "1.5rem",
            border: "1px solid var(--border)",
          }}
        >
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: "0.75rem", color: "var(--foreground)" }}>
            Our First Foray: Adventures of Sunbeam
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--subtle)", marginBottom: "1.5rem" }}>
            As the first step in this global initiative, we are proud to present{" "}
            <strong>&ldquo;Adventures of Sunbeam&rdquo;</strong> by Neev Grover. This narrative guide
            breaks down complex energy topics into an engaging story, following a single sunbeam named
            &ldquo;Luma&rdquo; as she travels 93 million miles to find her purpose on the electric grid.
          </p>

          <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: "1.25rem", color: "var(--foreground)" }}>
            What We Aim to Teach
          </h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--muted)", marginBottom: "1.25rem" }}>
            Through Adventures of Sunbeam, we aim to demystify the science of sustainability for
            students, educators, and families. Our resources cover:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
            <div
              style={{
                background: "var(--card-bg)",
                borderRadius: 8,
                padding: "1.25rem",
                border: "1px solid var(--border)",
                borderLeft: "4px solid #10b981",
              }}
            >
              <h4 style={{ fontSize: 17, fontWeight: 600, color: "var(--foreground)", marginBottom: "0.5rem" }}>
                Environmental Stewardship
              </h4>
              <p style={{ fontSize: 15, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
                We teach the vital difference between photosynthesis (how light creates life in plants)
                and photodegradation (how light breaks down plastic waste into harmful microplastics),
                helping children understand how pollution alters the sun&apos;s impact on our planet.
              </p>
            </div>

            <div
              style={{
                background: "var(--card-bg)",
                borderRadius: 8,
                padding: "1.25rem",
                border: "1px solid var(--border)",
                borderLeft: "4px solid #f59e0b",
              }}
            >
              <h4 style={{ fontSize: 17, fontWeight: 600, color: "var(--foreground)", marginBottom: "0.5rem" }}>
                The Science of Generation
              </h4>
              <p style={{ fontSize: 15, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
                We explain the Photovoltaic Effect, illustrating how a photon hits silicon crystals to
                knock electrons loose, transforming a simple beam of light into the electricity that
                powers our world.
              </p>
            </div>

            <div
              style={{
                background: "var(--card-bg)",
                borderRadius: 8,
                padding: "1.25rem",
                border: "1px solid var(--border)",
                borderLeft: "4px solid var(--accent)",
              }}
            >
              <h4 style={{ fontSize: 17, fontWeight: 600, color: "var(--foreground)", marginBottom: "0.5rem" }}>
                Grid Dynamics
              </h4>
              <p style={{ fontSize: 15, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
                We illustrate the electric grid not just as wires, but as a giant &ldquo;balancing
                scale&rdquo; where Supply (generation) and Demand (usage) must match perfectly to keep
                the system stable.
              </p>
            </div>

            <div
              style={{
                background: "var(--card-bg)",
                borderRadius: 8,
                padding: "1.25rem",
                border: "1px solid var(--border)",
                borderLeft: "4px solid #8b5cf6",
              }}
            >
              <h4 style={{ fontSize: 17, fontWeight: 600, color: "var(--foreground)", marginBottom: "0.5rem" }}>
                The &ldquo;Duck Curve&rdquo; &amp; Storage
              </h4>
              <p style={{ fontSize: 15, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
                We explain the timing mismatch between peak solar generation (midday) and peak human
                demand (evening), showing why battery storage is the essential &ldquo;waiting room&rdquo;
                needed to make solar power reliable around the clock.
              </p>
            </div>
          </div>

          <a
            href="https://www.amazon.com/Adventures-Sunbeam-heartwarming-sustainability-potential-ebook/dp/B0GKCXW4DL/ref=sr_1_1?crid=1PTTUTLDD8ITA&dib=eyJ2IjoiMSJ9.kzj3oIII20a8taLbAuz-RQ.uO4vRYbcqFMUFQYcNnhkiWwPhPbBAYOIOfitbxxy2oc&dib_tag=se&keywords=adventures+of+sunbeam+neev+grover&qid=1771214917&sprefix=adventures+of+sunbeam+neev+grove%2Caps%2C152&sr=8-1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "var(--accent)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 16,
              borderRadius: 8,
              padding: "12px 28px",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
          >
            Read Adventures of Sunbeam &rarr;
          </a>
        </div>

        {/* Earth Day Art Competition */}
        <div
          style={{
            background: "var(--surface)",
            borderRadius: 12,
            padding: "2rem",
            border: "1px solid var(--border)",
          }}
        >
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: "0.75rem", color: "var(--foreground)" }}>
            Earth Day Art Competition
          </h2>
          <p style={{ fontSize: 20, color: "var(--muted)", marginBottom: "1rem", fontWeight: 500 }}>
            Visualizing a Clean Future
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--subtle)", marginBottom: "1rem" }}>
            At DuneBroom, we believe that before we can build a sustainable world, we must first be
            able to imagine it. Creativity is just as important as engineering in the fight for a
            cleaner planet.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--subtle)", marginBottom: "1.5rem" }}>
            To celebrate our commitment to the environment, we are inviting students to participate
            in our Earth Day Art Competition. We want to see your vision of a
            &ldquo;Clean Energy Future&rdquo;. Visit our competition portal to download templates,
            view guidelines, and submit your masterpiece.
          </p>

          <a
            href="https://earthdayartcontest.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "var(--accent)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 16,
              borderRadius: 8,
              padding: "12px 28px",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
          >
            Enter the Art Competition &rarr;
          </a>
        </div>
      </section>
    </main>
  );
}
