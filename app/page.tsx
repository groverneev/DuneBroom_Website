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
          background: "var(--surface)",
          textAlign: "center",
          padding: "4rem 2rem",
          transition: "background-color 0.3s",
        }}
      >
        <h1
          style={{
            fontSize: 64,
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
            fontSize: 24,
            fontWeight: 400,
            margin: "1rem 0 2rem 0",
            color: "var(--muted)",
          }}
        >
          Robotics, Innovation, and Clean Beaches
        </h2>

        <div
          style={{
            maxWidth: 700,
            width: "100%",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            marginBottom: "2.5rem",
          }}
        >
          <Image
            src="/DuneBroom_Robot.jpg"
            alt="DuneBroom autonomous beach-cleaning robot"
            width={700}
            height={525}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </div>

        <p
          style={{
            fontSize: 18,
            lineHeight: 1.7,
            color: "var(--subtle)",
            maxWidth: 650,
            margin: "0 auto 2rem auto",
          }}
        >
          DuneBroom is a low-cost autonomous beach-cleaning robot that combines
          machine-learning-based vision and mechanical sieving to efficiently
          identify and collect debris from soft-sand environments, helping keep
          our beaches and oceans clean.
        </p>

        <a
          href="#overview"
          style={{
            background: "var(--accent)",
            color: "#fff",
            fontWeight: 600,
            fontSize: 18,
            borderRadius: 8,
            padding: "12px 32px",
            textDecoration: "none",
            transition: "background 0.2s",
          }}
        >
          Learn More
        </a>
      </section>

      {/* OVERVIEW SECTION */}
      <section
        id="overview"
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "4rem 2rem 2rem 2rem",
          color: "var(--foreground)",
        }}
      >
        <h2
          style={{
            fontSize: 36,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "2rem",
            color: "var(--foreground)",
          }}
        >
          Overview
        </h2>

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
          <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: "1rem", color: "var(--foreground)" }}>
            The Problem
          </h3>
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
          <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: "1rem", color: "var(--foreground)" }}>
            Hypothesis
          </h3>
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
          <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: "1.5rem", color: "var(--foreground)" }}>
            Key Capabilities
          </h3>
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
              <h4 style={{ fontSize: 17, fontWeight: 600, color: "var(--accent)", marginBottom: "0.5rem" }}>
                ML-Based Vision
              </h4>
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
              <h4 style={{ fontSize: 17, fontWeight: 600, color: "var(--accent)", marginBottom: "0.5rem" }}>
                Mechanical Sieving
              </h4>
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
              <h4 style={{ fontSize: 17, fontWeight: 600, color: "var(--accent)", marginBottom: "0.5rem" }}>
                Autonomous Operation
              </h4>
              <p style={{ fontSize: 15, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
                Fully autonomous patrol and collection on soft-sand beach environments without human
                intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS SECTION */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "2rem 2rem 4rem 2rem",
        }}
      >
        <h2
          style={{
            fontSize: 28,
            fontWeight: 700,
            marginBottom: "1.5rem",
            color: "var(--foreground)",
          }}
        >
          Awards
        </h2>
        <div
          style={{
            background: "var(--surface)",
            borderRadius: 12,
            padding: "2rem",
            border: "1px solid var(--border)",
          }}
        >
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
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
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Learn about Conrad Innovators &rarr;
          </a>
        </div>
      </section>
    </main>
  );
}
