"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main style={{ background: "#0E1321", fontFamily: "Inter, sans-serif" }}>
      {/* ───────── NAVIGATION CARDS SECTION ───────── */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "4rem 2rem 6rem 2rem",
        }}
      >
        <h2
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: "#fff",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          Learn More About DuneBroom
        </h2>


      {/* Robot Image */}
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto 3rem auto",
          borderRadius: 12,
          overflow: "hidden",
          background: "#0E1321",
          padding: "1rem",
        }}
      >
        <img
          src="/DuneBroom_Robot.jpg"
          alt="DuneBroom autonomous beach-cleaning robot with collection mechanism and Raspberry Pi controller"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: 8,
          }}
        />
        <p
          style={{
            fontSize: 14,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: "0.75rem",
            marginBottom: 0,
            fontStyle: "italic",
          }}
        >
          The DuneBroom Robot
        </p>
      </div>



        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            alignItems: "stretch",
          }}
        >
          {/* Overview Card */}
          <Link
            href="/about_dunebroom/overview"
            style={{
              textDecoration: "none",
              display: "flex",
              height: "100%",
            }}
          >
            <div
              style={{
                background: "#1e2533",
                borderRadius: 16,
                padding: "2.5rem",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer",
                border: "2px solid transparent",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(59, 130, 246, 0.2)";
                e.currentTarget.style.borderColor = "#3b82f6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "transparent";
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  fontSize: 28,
                }}
              >
                📊
              </div>
              <h3
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "0.75rem",
                }}
              >
                Overview
              </h3>
              <p
                style={{
                  fontSize: 16,
                  color: "#9ca3af",
                  lineHeight: 1.6,
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                Learn about the problem DuneBroom addresses, our hypothesis, and
                the key capabilities that make this autonomous beach-cleaning robot
                effective.
              </p>
            </div>
          </Link>

          {/* System Logic Card */}
          <Link
            href="/about_dunebroom/system-logic"
            style={{
              textDecoration: "none",
              display: "flex",
              height: "100%",
            }}
          >
            <div
              style={{
                background: "#1e2533",
                borderRadius: 16,
                padding: "2.5rem",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer",
                border: "2px solid transparent",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(139, 92, 246, 0.2)";
                e.currentTarget.style.borderColor = "#8b5cf6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "transparent";
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  fontSize: 28,
                }}
              >
                ⚙️
              </div>
              <h3
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "0.75rem",
                }}
              >
                System Logic
              </h3>
              <p
                style={{
                  fontSize: 16,
                  color: "#9ca3af",
                  lineHeight: 1.6,
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                Discover how DuneBroom operates autonomously through patrol mode,
                event-driven identification, and intelligent decision-making to
                clean beaches efficiently.
              </p>
            </div>
          </Link>

          {/* Technical Architecture Card */}
          <Link
            href="/about_dunebroom/technical-architecture"
            style={{
              textDecoration: "none",
              display: "flex",
              height: "100%",
            }}
          >
            <div
              style={{
                background: "#1e2533",
                borderRadius: 16,
                padding: "2.5rem",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer",
                border: "2px solid transparent",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(16, 185, 129, 0.2)";
                e.currentTarget.style.borderColor = "#10b981";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "transparent";
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  fontSize: 28,
                }}
              >
                🔧
              </div>
              <h3
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "0.75rem",
                }}
              >
                Technical Architecture
              </h3>
              <p
                style={{
                  fontSize: 16,
                  color: "#9ca3af",
                  lineHeight: 1.6,
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                Explore the hardware implementation, including power systems,
                processing units, sensors, and actuators that bring DuneBroom to life.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
