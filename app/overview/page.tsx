export default function OverviewPage() {
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
            marginBottom: "2rem",
            color: "var(--foreground)",
          }}
        >
          Overview
        </h1>

        {/* Problem Statement */}
        <div
          style={{
            background: "var(--surface)",
            borderRadius: 12,
            padding: "2rem",
            marginBottom: "1.5rem",
            border: "1px solid var(--border)",
          }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: "1rem", color: "var(--foreground)" }}>
            The Problem
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--subtle)", margin: 0 }}>
            Each year, approximately <strong>8 million metric tons of plastic</strong> enter the
            oceans, with much of it washing up on shores, posing a serious threat to marine
            ecosystems. Hundreds of thousands of volunteers every year around the world put in the
            hours to remove this trash from the beaches, but only <strong>&lt;1%</strong> of the
            trash gets removed given the sheer volume.
          </p>
        </div>

        {/* Hypothesis */}
        <div
          style={{
            background: "var(--surface)",
            borderRadius: 12,
            padding: "2rem",
            marginBottom: "1.5rem",
            border: "1px solid var(--border)",
          }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: "1rem", color: "var(--foreground)" }}>
            Hypothesis
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--subtle)", margin: 0 }}>
            This project investigates whether DuneBroom, a low-cost autonomous beach-cleaning robot
            combining machine-learning-based vision and mechanical sieving, can efficiently identify
            and collect both large (&ge; 20 mm, e.g., bottle caps) and small (&ge; 2 mm, e.g.,
            cigarette butts) debris from soft-sand environments.
          </p>
          <div
            style={{
              marginTop: "1.5rem",
              padding: "1.5rem",
              background: "var(--card-bg)",
              borderRadius: 8,
              borderLeft: "4px solid var(--accent)",
            }}
          >
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--muted)", margin: 0 }}>
              We hypothesize that its integrated scooper-sieve system will achieve{" "}
              <strong style={{ color: "var(--accent)" }}>&ge; 90% collection efficiency</strong> across
              debris sizes, while the ML vision model maintains{" "}
              <strong style={{ color: "var(--accent)" }}>&ge; 95% accuracy</strong> in distinguishing
              litter such as caps and wrappers from natural materials including seaweed and rocks.
            </p>
          </div>
        </div>

        {/* Key Capabilities */}
        <div
          style={{
            background: "var(--surface)",
            borderRadius: 12,
            padding: "2rem",
            border: "1px solid var(--border)",
          }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: "1.5rem", color: "var(--foreground)" }}>
            Key Capabilities
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <div
              style={{
                background: "var(--card-bg)",
                borderRadius: 8,
                padding: "1.5rem",
                border: "1px solid var(--border)",
              }}
            >
              <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--accent)", marginBottom: "0.5rem" }}>
                ML-Based Vision
              </h3>
              <p style={{ fontSize: 15, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
                Machine learning model distinguishes trash from natural materials like seaweed and
                rocks with high accuracy.
              </p>
            </div>
            <div
              style={{
                background: "var(--card-bg)",
                borderRadius: 8,
                padding: "1.5rem",
                border: "1px solid var(--border)",
              }}
            >
              <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--accent)", marginBottom: "0.5rem" }}>
                Mechanical Sieving
              </h3>
              <p style={{ fontSize: 15, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
                Integrated scooper-sieve system collects debris while filtering out sand through a
                2mm mesh.
              </p>
            </div>
            <div
              style={{
                background: "var(--card-bg)",
                borderRadius: 8,
                padding: "1.5rem",
                border: "1px solid var(--border)",
              }}
            >
              <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--accent)", marginBottom: "0.5rem" }}>
                Autonomous Operation
              </h3>
              <p style={{ fontSize: 15, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
                Fully autonomous patrol and collection on soft-sand beach environments without human
                intervention.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
