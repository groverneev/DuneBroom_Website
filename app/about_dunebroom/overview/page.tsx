import Link from "next/link";

export default function OverviewPage() {
  return (
    <main style={{ background: "#0E1321", fontFamily: "Inter, sans-serif", minHeight: "100vh" }}>
      {/* Back Navigation */}
      <div style={{ padding: "2rem 2rem 0 2rem" }}>
        <Link
          href="/about_dunebroom"
          style={{
            color: "#9ca3af",
            textDecoration: "none",
            fontSize: 14,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          &larr; Back to About DuneBroom
        </Link>
      </div>

      {/* Content Section */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "3rem 2rem 6rem 2rem",
          color: "#fff",
        }}
      >
        <h1
          style={{
            fontSize: 48,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
          }}
        >
          Overview
        </h1>

        {/* Problem Statement */}
        <div
          style={{
            background: "#1e2533",
            borderRadius: 16,
            padding: "2rem",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: "1rem", color: "#fff" }}>
            The Problem
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#e5e7eb", margin: 0 }}>
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
            background: "#1e2533",
            borderRadius: 16,
            padding: "2rem",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: "1rem", color: "#fff" }}>
            Hypothesis
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#e5e7eb", margin: 0 }}>
            This project investigates whether DuneBroom, a low-cost autonomous beach-cleaning robot
            combining machine-learning-based vision and mechanical sieving, can efficiently identify
            and collect both large (&ge; 20 mm, e.g., bottle caps) and small (&ge; 2 mm, e.g.,
            cigarette butts) debris from soft-sand environments.
          </p>
          <div
            style={{
              marginTop: "1.5rem",
              padding: "1.5rem",
              background: "#0E1321",
              borderRadius: 12,
              borderLeft: "4px solid #3b82f6",
            }}
          >
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#9ca3af", margin: 0 }}>
              We hypothesize that its integrated scooper-sieve system will achieve{" "}
              <strong style={{ color: "#3b82f6" }}>&ge; 90% collection efficiency</strong> across
              debris sizes, while the ML vision model maintains{" "}
              <strong style={{ color: "#3b82f6" }}>&ge; 95% accuracy</strong> in distinguishing
              litter such as caps and wrappers from natural materials including seaweed and rocks.
            </p>
          </div>
        </div>

        {/* Key Capabilities */}
        <div
          style={{
            background: "#1e2533",
            borderRadius: 16,
            padding: "2rem",
          }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: "1.5rem", color: "#fff" }}>
            Key Capabilities
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <div
              style={{
                background: "#0E1321",
                borderRadius: 12,
                padding: "1.5rem",
              }}
            >
              <h3 style={{ fontSize: 18, fontWeight: 600, color: "#3b82f6", marginBottom: "0.5rem" }}>
                ML-Based Vision
              </h3>
              <p style={{ fontSize: 15, color: "#9ca3af", margin: 0, lineHeight: 1.6 }}>
                Machine learning model distinguishes trash from natural materials like seaweed and
                rocks with high accuracy.
              </p>
            </div>
            <div
              style={{
                background: "#0E1321",
                borderRadius: 12,
                padding: "1.5rem",
              }}
            >
              <h3 style={{ fontSize: 18, fontWeight: 600, color: "#3b82f6", marginBottom: "0.5rem" }}>
                Mechanical Sieving
              </h3>
              <p style={{ fontSize: 15, color: "#9ca3af", margin: 0, lineHeight: 1.6 }}>
                Integrated scooper-sieve system collects debris while filtering out sand through a
                2mm mesh.
              </p>
            </div>
            <div
              style={{
                background: "#0E1321",
                borderRadius: 12,
                padding: "1.5rem",
              }}
            >
              <h3 style={{ fontSize: 18, fontWeight: 600, color: "#3b82f6", marginBottom: "0.5rem" }}>
                Autonomous Operation
              </h3>
              <p style={{ fontSize: 15, color: "#9ca3af", margin: 0, lineHeight: 1.6 }}>
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
