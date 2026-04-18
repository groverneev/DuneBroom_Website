"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main style={{ fontFamily: "Inter, sans-serif" }}>
      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "var(--background)",
          textAlign: "center",
          padding: "6rem 2rem 5rem 2rem",
          transition: "background-color 0.3s",
        }}
      >
        <h1
          style={{
            fontSize: 56,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            margin: 0,
            color: "var(--foreground)",
          }}
        >
          DuneBroom
        </h1>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 400,
            margin: "1rem 0 1.5rem 0",
            color: "var(--muted)",
          }}
        >
          Autonomous beach cleaning powered by machine learning
        </h2>

        <p
          style={{
            fontSize: 17,
            lineHeight: 1.7,
            color: "var(--subtle)",
            maxWidth: 580,
            margin: "0 auto 2rem auto",
          }}
        >
          DuneBroom is a low-cost autonomous beach-cleaning robot that combines
          machine-learning-based vision and mechanical sieving to efficiently
          identify and collect debris from soft-sand environments.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
          <a
            href="/system-logic"
            style={{
              background: "var(--accent)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 15,
              borderRadius: 4,
              padding: "11px 28px",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            How It Works
          </a>
          <a
            href="/outreach"
            style={{
              background: "transparent",
              color: "var(--foreground)",
              fontWeight: 500,
              fontSize: 15,
              borderRadius: 4,
              padding: "11px 28px",
              textDecoration: "none",
              border: "1px solid var(--border)",
              transition: "border-color 0.2s, background-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--surface)";
              e.currentTarget.style.borderColor = "var(--muted)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            Our Mission
          </a>
        </div>

        <div
          style={{
            maxWidth: 760,
            width: "100%",
            overflow: "hidden",
            borderRadius: 4,
          }}
        >
          <Image
            src="/DuneBroom_Robot.jpg"
            alt="DuneBroom autonomous beach-cleaning robot"
            width={760}
            height={570}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section
        id="overview"
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "4rem 2rem 2rem 2rem",
          color: "var(--foreground)",
          borderTop: "1px solid var(--border)",
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
          The Project
        </p>
        <h2
          style={{
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: "2.5rem",
            marginTop: 0,
            color: "var(--foreground)",
          }}
        >
          Overview
        </h2>

        {/* Problem Statement */}
        <div style={{ paddingBottom: "2.5rem", marginBottom: "2.5rem", borderBottom: "1px solid var(--border)" }}>
          <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: "1rem", marginTop: 0, color: "var(--foreground)" }}>
            The Problem
          </h3>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--subtle)", margin: 0 }}>
            Each year, approximately <strong>8 million metric tons of plastic</strong> enter the
            oceans, with much of it washing up on shores, posing a serious threat to marine
            ecosystems. Hundreds of thousands of volunteers every year around the world put in the
            hours to remove this trash from the beaches, but only <strong>&lt;1%</strong> of the
            trash gets removed given the sheer volume.
          </p>
        </div>

        {/* Hypothesis */}
        <div style={{ paddingBottom: "2.5rem", marginBottom: "2.5rem", borderBottom: "1px solid var(--border)" }}>
          <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: "1rem", marginTop: 0, color: "var(--foreground)" }}>
            Hypothesis
          </h3>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--subtle)", margin: 0 }}>
            This project investigates whether DuneBroom, a low-cost autonomous beach-cleaning robot
            combining machine-learning-based vision and mechanical sieving, can efficiently identify
            and collect both large (&ge; 20 mm, e.g., bottle caps) and small (&ge; 2 mm, e.g.,
            cigarette butts) debris from soft-sand environments.
          </p>
          <div
            style={{
              marginTop: "1.5rem",
              padding: "1.25rem 1.5rem",
              borderLeft: "3px solid var(--accent)",
            }}
          >
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted)", margin: 0 }}>
              We hypothesize that its integrated scooper-sieve system will achieve{" "}
              <strong style={{ color: "var(--foreground)" }}>&ge; 90% collection efficiency</strong> across
              debris sizes, while the ML vision model maintains{" "}
              <strong style={{ color: "var(--foreground)" }}>&ge; 95% accuracy</strong> in distinguishing
              litter such as caps and wrappers from natural materials including seaweed and rocks.
            </p>
          </div>
        </div>

        {/* Key Capabilities */}
        <div style={{ paddingBottom: "2.5rem", marginBottom: "2.5rem", borderBottom: "1px solid var(--border)" }}>
          <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: "1.5rem", marginTop: 0, color: "var(--foreground)" }}>
            Key Capabilities
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            <div style={{ background: "var(--surface)", borderRadius: 4, padding: "1.25rem" }}>
              <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)", marginBottom: "0.5rem", marginTop: 0 }}>
                ML-Based Vision
              </h4>
              <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
                Machine learning model distinguishes trash from natural materials like seaweed and
                rocks with high accuracy.
              </p>
            </div>
            <div style={{ background: "var(--surface)", borderRadius: 4, padding: "1.25rem" }}>
              <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)", marginBottom: "0.5rem", marginTop: 0 }}>
                Mechanical Sieving
              </h4>
              <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
                Integrated scooper-sieve system collects debris while filtering out sand through a
                2mm mesh.
              </p>
            </div>
            <div style={{ background: "var(--surface)", borderRadius: 4, padding: "1.25rem" }}>
              <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)", marginBottom: "0.5rem", marginTop: 0 }}>
                Autonomous Operation
              </h4>
              <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
                Fully autonomous patrol and collection on soft-sand beach environments without human
                intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTREACH SECTION */}
      <section
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "4rem 2rem",
          borderTop: "1px solid var(--border)",
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
          Outreach
        </p>
        <h2
          style={{
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: "2rem",
            marginTop: 0,
            color: "var(--foreground)",
          }}
        >
          Environment Awareness Program
        </h2>

        <div
          style={{
            background: "var(--surface)",
            borderRadius: 4,
            padding: "1.5rem 2rem",
            marginBottom: "2.5rem",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: 48,
              fontWeight: 800,
              color: "var(--accent)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            450
          </span>
          <p style={{ fontSize: 16, color: "var(--subtle)", margin: 0, lineHeight: 1.65 }}>
            students engaged in environmental activities across{" "}
            <strong style={{ color: "var(--foreground)" }}>5 schools</strong> in Northern and
            Southern India.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          <div style={{ background: "var(--surface)", borderRadius: 4, padding: "1.25rem" }}>
            <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)", marginBottom: "0.5rem", marginTop: 0 }}>
              Grassroots Education
            </h4>
            <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
              Interactive environmental awareness workshops and large-scale drawing competitions
              hosted across partner schools.
            </p>
          </div>
          <div style={{ background: "var(--surface)", borderRadius: 4, padding: "1.25rem" }}>
            <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)", marginBottom: "0.5rem", marginTop: 0 }}>
              Environmental Literacy
            </h4>
            <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
              <em>Adventures of Sunbeam</em> turns complex environmental issues into inspiring
              stories for young readers, complete with interactive activities.
            </p>
          </div>
          <div style={{ background: "var(--surface)", borderRadius: 4, padding: "1.25rem" }}>
            <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)", marginBottom: "0.5rem", marginTop: 0 }}>
              Technology Solutions
            </h4>
            <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
              The DuneBroom rover pairs education with real-world action — a low-cost autonomous
              beach-cleaning robot tackling debris at the source.
            </p>
          </div>
        </div>

        <a
          href="/outreach"
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
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Explore Our Outreach &rarr;
        </a>
      </section>

      {/* AWARDS SECTION */}
      <section
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "0 2rem 5rem 2rem",
        }}
      >
        <h2
          style={{
            fontSize: 20,
            fontWeight: 600,
            marginBottom: "1rem",
            marginTop: 0,
            color: "var(--foreground)",
          }}
        >
          Recognition
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.75,
            color: "var(--subtle)",
            margin: "0 0 1rem 0",
          }}
        >
          DuneBroom was recognized as one of the{" "}
          <strong style={{ color: "var(--foreground)" }}>Conrad Challenge Innovators</strong>,
          highlighting the project&apos;s student-led approach to environmental problem solving.
        </p>
        <a
          href="https://conrad.spacecenter.org/what-is-a-conrad-innovator/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            color: "var(--accent)",
            fontWeight: 500,
            fontSize: 15,
            textDecoration: "none",
          }}
        >
          Learn about Conrad Innovators &rarr;
        </a>
      </section>
    </main>
  );
}
