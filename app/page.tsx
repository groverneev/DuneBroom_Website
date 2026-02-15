import Image from "next/image";
import Link from "next/link";

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
          identify and collect debris from soft-sand environments — helping keep
          our beaches and oceans clean.
        </p>

        <Link
          href="/overview"
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
        </Link>
      </section>
    </main>
  );
}
