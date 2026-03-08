"use client";
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
        <h1
          style={{
            fontSize: 44,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--foreground)",
            marginBottom: "1rem",
            marginTop: 0,
          }}
        >
          About Us
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "var(--muted)",
            maxWidth: 600,
            marginBottom: "3.5rem",
            marginTop: 0,
            lineHeight: 1.75,
          }}
        >
          DuneBroom is a student-led robotics project combining machine learning and mechanical
          engineering to clean beach environments autonomously.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {/* Neev Grover */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "flex-start",
              borderBottom: "1px solid var(--border)",
              paddingBottom: "2.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <Image
              src="/neev_profile.png"
              alt="Neev Grover, founder of DuneBroom"
              width={96}
              height={96}
              style={{
                borderRadius: "50%",
                flexShrink: 0,
                display: "block",
                background: "var(--surface)",
              }}
            />
            <div style={{ textAlign: "left" }}>
              <h2
                style={{
                  fontSize: 22,
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
                  fontSize: 14,
                  fontWeight: 400,
                  margin: "0 0 1rem 0",
                  color: "var(--muted)",
                }}
              >
                Sophomore at the Harker School
              </p>
              <p
                style={{
                  fontSize: 15,
                  margin: 0,
                  lineHeight: 1.7,
                  color: "var(--subtle)",
                }}
              >
                Neev is passionate about Computer Science, Chess, and the
                Environment. He enjoys building projects, playing competitive
                chess, and writing about technology on his blog.
              </p>
            </div>
          </div>

          {/* Shradha Rachamreddy */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "flex-start",
            }}
          >
            <Image
              src="/shradha_profile.png"
              alt="Shradha Rachamreddy"
              width={96}
              height={96}
              style={{
                borderRadius: "50%",
                flexShrink: 0,
                display: "block",
                background: "var(--surface)",
              }}
            />
            <div style={{ textAlign: "left" }}>
              <h2
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  margin: "0 0 0.25rem 0",
                  color: "var(--foreground)",
                }}
              >
                Shradha Rachamreddy
              </h2>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  margin: "0 0 1rem 0",
                  color: "var(--muted)",
                }}
              >
                Sophomore at Stanford Online High School
              </p>
              <p
                style={{
                  fontSize: 15,
                  margin: 0,
                  lineHeight: 1.7,
                  color: "var(--subtle)",
                }}
              >
                Shradha enjoys tutoring, scrapbooking for her school&apos;s yearbook,
                baking, and reading thriller novels. She&apos;s passionate about the AI
                field and its ability to impact the community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
