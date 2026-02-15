"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main style={{ fontFamily: "Inter, sans-serif", background: "#fff", minHeight: "100vh" }}>
      <section
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "4rem 2rem 6rem 2rem",
        }}
      >
        <h1
          style={{
            fontSize: 44,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#111827",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          About Us
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* Neev Grover */}
          <div
            style={{
              background: "#f9fafb",
              borderRadius: 12,
              padding: "2.5rem",
              textAlign: "center",
              border: "1px solid #e5e7eb",
            }}
          >
            <div style={{ marginBottom: "1.5rem" }}>
              <Image
                src="/neev_profile.png"
                alt="Neev Grover, founder of DuneBroom"
                width={130}
                height={130}
                style={{
                  borderRadius: "50%",
                  border: "4px solid #fff",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  background: "#eee",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                margin: 0,
                marginBottom: "0.5rem",
                color: "#111827",
              }}
            >
              Neev Grover
            </h2>
            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                margin: "0 0 1.5rem 0",
                color: "#6b7280",
              }}
            >
              Sophomore at the Harker School
            </p>
            <p
              style={{
                fontSize: 16,
                maxWidth: "100%",
                margin: "0 auto",
                lineHeight: 1.6,
                color: "#374151",
              }}
            >
              Neev is passionate about Computer Science, Chess, and the
              Environment. He enjoys building projects, playing competitive
              chess, and writing about technology on his blog.
            </p>
          </div>

          {/* Shradha Rachamreddy */}
          <div
            style={{
              background: "#f9fafb",
              borderRadius: 12,
              padding: "2.5rem",
              textAlign: "center",
              border: "1px solid #e5e7eb",
            }}
          >
            <div style={{ marginBottom: "1.5rem" }}>
              <Image
                src="/shradha_profile.png"
                alt="Shradha Rachamreddy"
                width={130}
                height={130}
                style={{
                  borderRadius: "50%",
                  border: "4px solid #fff",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  background: "#eee",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                margin: 0,
                marginBottom: "0.5rem",
                color: "#111827",
              }}
            >
              Shradha Rachamreddy
            </h2>
            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                margin: "0 0 1.5rem 0",
                color: "#6b7280",
              }}
            >
              Sophomore at Stanford Online High School
            </p>
            <p
              style={{
                fontSize: 16,
                maxWidth: "100%",
                margin: "0 auto",
                lineHeight: 1.6,
                color: "#374151",
              }}
            >
              Shradha enjoys tutoring, scrapbooking for her school&apos;s yearbook,
              baking, and reading thriller novels. She&apos;s passionate about the AI
              field and its ability to impact the community.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
