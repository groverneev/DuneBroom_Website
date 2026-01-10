import Link from "next/link";

export default function SystemLogicPage() {
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
            marginBottom: "0.5rem",
          }}
        >
          Conceptual System Logic
        </h1>
        <p style={{ fontSize: 18, color: "#9ca3af", marginBottom: "2rem" }}>
          Process Overview
        </p>

        {/* Introduction */}
        <div
          style={{
            background: "#1e2533",
            borderRadius: 16,
            padding: "2rem",
            marginBottom: "2rem",
          }}
        >
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#e5e7eb", margin: 0 }}>
            To achieve autonomous beach cleaning, the robot operates on a continuous decision-making
            loop designed to selectively target debris while actively ignoring natural elements. The
            system functions in an &quot;Autonomous Patrol Mode,&quot; prioritizing energy efficiency
            and rapid reaction times to effectively cover large beach areas.
          </p>
        </div>

        {/* Autonomous Patrol Mode */}
        <div
          style={{
            background: "#1e2533",
            borderRadius: 16,
            padding: "2rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "#3b82f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              1
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#fff", margin: 0 }}>
              Autonomous Patrol Mode
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#e5e7eb", margin: 0 }}>
            Upon activation, the robot enters its primary operational state, referred to as
            &quot;Autonomous Patrol&quot;. In this mode, the robot continuously traverses the beach
            while maintaining a low-power surveillance state. The primary input comes from ultrasonic
            distance sensors that continuously poll the environment to detect the proximity of objects
            in the robot&apos;s path. This allows the robot to &quot;watch&quot; for potential targets
            without the heavy battery drain and computational cost of continuous video processing.
          </p>
        </div>

        {/* Event-Driven Identification */}
        <div
          style={{
            background: "#1e2533",
            borderRadius: 16,
            padding: "2rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "#8b5cf6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              2
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#fff", margin: 0 }}>
              Event-Driven Identification
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#e5e7eb", marginBottom: "1.5rem" }}>
            The system shifts from &quot;Patrol&quot; to &quot;Analysis&quot; only when a physical
            object is detected within a specific range (approximately 3 inches). This detection acts
            as a hardware trigger to initiate the vision system:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div
              style={{
                background: "#0E1321",
                borderRadius: 12,
                padding: "1.25rem",
                borderLeft: "4px solid #8b5cf6",
              }}
            >
              <h4 style={{ fontSize: 16, fontWeight: 600, color: "#8b5cf6", marginBottom: "0.5rem" }}>
                Visual Capture
              </h4>
              <p style={{ fontSize: 15, color: "#9ca3af", margin: 0, lineHeight: 1.6 }}>
                The robot stops moving and captures a picture of the obstacle in front of it.
              </p>
            </div>
            <div
              style={{
                background: "#0E1321",
                borderRadius: 12,
                padding: "1.25rem",
                borderLeft: "4px solid #8b5cf6",
              }}
            >
              <h4 style={{ fontSize: 16, fontWeight: 600, color: "#8b5cf6", marginBottom: "0.5rem" }}>
                Classification
              </h4>
              <p style={{ fontSize: 15, color: "#9ca3af", margin: 0, lineHeight: 1.6 }}>
                A Machine Learning (ML) Model running on the robot analyzes the image to classify
                the object as either &quot;Trash&quot; (e.g., plastic bottles, wrappers) or
                &quot;Nature&quot; (e.g., rocks, seaweed).
              </p>
            </div>
          </div>
        </div>

        {/* Discriminative Actuation */}
        <div
          style={{
            background: "#1e2533",
            borderRadius: 16,
            padding: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "#10b981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              3
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#fff", margin: 0 }}>
              Discriminative Actuation
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#e5e7eb", marginBottom: "1.5rem" }}>
            Based on the ML classification, the robot executes a specific physical response:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            <div
              style={{
                background: "#0E1321",
                borderRadius: 12,
                padding: "1.5rem",
                border: "2px solid #10b981",
              }}
            >
              <h4 style={{ fontSize: 17, fontWeight: 600, color: "#10b981", marginBottom: "0.75rem" }}>
                Collection (Trash Detected)
              </h4>
              <p style={{ fontSize: 15, color: "#9ca3af", margin: 0, lineHeight: 1.6 }}>
                If the object is classified as trash, the collection mechanism is lowered to scoop
                the item. As the robot resumes movement, a filtration system sifts out sand through
                a 2mm mesh while retaining debris in a storage bag.
              </p>
            </div>
            <div
              style={{
                background: "#0E1321",
                borderRadius: 12,
                padding: "1.5rem",
                border: "2px solid #f59e0b",
              }}
            >
              <h4 style={{ fontSize: 17, fontWeight: 600, color: "#f59e0b", marginBottom: "0.75rem" }}>
                Preservation (Nature Detected)
              </h4>
              <p style={{ fontSize: 15, color: "#9ca3af", margin: 0, lineHeight: 1.6 }}>
                If the object is classified as nature, the scooper remains raised, and the robot
                executes a navigation maneuver to go around the element, ensuring the ecosystem
                remains undisturbed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
