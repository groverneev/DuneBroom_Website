"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main style={{ background: "#f5f6fa", fontFamily: "Inter, sans-serif" }}>
      {/* ───────── ABOUT US SECTION ───────── */}
      <section
        style={{
          padding: "6rem 2rem",
          background: "#0E1321",
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#fff",
            textAlign: "center",
            marginBottom: "4rem",
            letterSpacing: "-0.02em",
          }}
        >
          About Us
        </h2>

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "4rem",
            width: "100%",
          }}
        >
          {/* Person 1 - Neev Grover */}
          <div
            style={{
              background: "#1e2533",
              borderRadius: 16,
              padding: "3rem",
              textAlign: "center",
              color: "#fff",
            }}
          >
            {/* Profile Image */}
            <div style={{ flex: "none", marginBottom: "1.5rem" }}>
              <Image
                src="/neev_profile.png"
                alt="Neev Grover, founder of DuneBroom"
                width={140}
                height={140}
                style={{
                  borderRadius: "50%",
                  border: "4px solid #1e2533",
                  boxShadow: "0 4px 18px rgba(0,0,0,0.3)",
                  background: "#eee",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>

            <h1
              style={{
                fontSize: 36,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                margin: 0,
                marginBottom: "0.5rem",
              }}
            >
              Neev Grover
            </h1>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 400,
                margin: "0 0 1.5rem 0",
                color: "#9ca3af",
              }}
            >
              Sophomore at the Harker School
            </h2>
            <p
              style={{
                fontSize: 18,
                maxWidth: "100%",
                margin: "0 auto 2rem auto",
                lineHeight: 1.6,
                color: "#e5e7eb",
              }}
            >
              Neev is passionate about Computer Science, Chess, and the
              Environment. He enjoys building projects, playing competitive
              chess, and writing about technology on his blog.
            </p>
          </div>

          {/* Person 2 - Test Person */}
          <div
            style={{
              background: "#1e2533",
              borderRadius: 16,
              padding: "3rem",
              textAlign: "center",
              color: "#fff",
            }}
          >
            {/* Profile Image 
            <div style={{ flex: "none", marginBottom: "1.5rem" }}>
              <Image
                src="/neev_profile.png"
                alt="Test Person, team member of DuneBroom"
                width={140}
                height={140}
                style={{
                  borderRadius: "50%",
                  border: "4px solid #1e2533",
                  boxShadow: "0 4px 18px rgba(0,0,0,0.3)",
                  background: "#eee",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>
*/}
            <h1
              style={{
                fontSize: 36,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                margin: 0,
                marginBottom: "0.5rem",
              }}
            >
              Work in Progress
            </h1>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 400,
                margin: "0 0 1.5rem 0",
                color: "#9ca3af",
              }}
            >
              Work in Progress
            </h2>
            <p
              style={{
                fontSize: 18,
                maxWidth: "100%",
                margin: "0 auto 2rem auto",
                lineHeight: 1.6,
                color: "#e5e7eb",
              }}
            >
              Work in Progress{" "}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
