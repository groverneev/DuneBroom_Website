import Image from "next/image";

export default function SystemLogicPage() {
  return (
    <main style={{ fontFamily: "Inter, sans-serif", background: "var(--background)", minHeight: "100vh", transition: "background-color 0.3s" }}>
      <section
        style={{
          maxWidth: 860,
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
            marginBottom: "0.5rem",
          }}
        >
          System Logic
        </h1>
        <p style={{ fontSize: 17, color: "var(--muted)", marginBottom: "2.5rem", marginTop: 0 }}>
          Process Overview
        </p>

        {/* Figure */}
        <div
          style={{
            marginBottom: "3rem",
            borderRadius: 4,
            overflow: "hidden",
            background: "var(--surface)",
            padding: "1rem",
          }}
        >
          <Image
            src="/Figure_3_Collection_Sequence.png"
            alt="Figure 3: Debris Collection Sequence"
            width={800}
            height={600}
            style={{ width: "100%", height: "auto", borderRadius: 4, display: "block" }}
          />
          <p
            style={{
              fontSize: 13,
              color: "var(--muted)",
              textAlign: "center",
              marginTop: "0.75rem",
              marginBottom: 0,
              fontStyle: "italic",
            }}
          >
            Figure 3: Debris Collection Sequence
          </p>
        </div>

        {/* Introduction */}
        <div style={{ paddingBottom: "2.5rem", marginBottom: "2.5rem", borderBottom: "1px solid var(--border)" }}>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--subtle)", margin: 0 }}>
            To achieve autonomous beach cleaning, the robot operates on a continuous decision-making
            loop designed to selectively target debris while actively ignoring natural elements. The
            system functions in an &quot;Autonomous Patrol Mode,&quot; prioritizing energy efficiency
            and rapid reaction times to effectively cover large beach areas.
          </p>
        </div>

        {/* Step 1 */}
        <div style={{ paddingBottom: "2.5rem", marginBottom: "2.5rem", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem" }}>
            <span style={{ fontWeight: 700, fontSize: 15, color: "var(--accent)", minWidth: 28 }}>
              01
            </span>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "var(--foreground)", margin: 0 }}>
              Autonomous Patrol Mode
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--subtle)", margin: 0 }}>
            Upon activation, the robot enters its primary operational state, referred to as
            &quot;Autonomous Patrol&quot;. In this mode, the robot continuously traverses the beach
            while maintaining a low-power surveillance state. The primary input comes from ultrasonic
            distance sensors that continuously poll the environment to detect the proximity of objects
            in the robot&apos;s path. This allows the robot to &quot;watch&quot; for potential targets
            without the heavy battery drain and computational cost of continuous video processing.
          </p>
        </div>

        {/* Step 2 */}
        <div style={{ paddingBottom: "2.5rem", marginBottom: "2.5rem", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem" }}>
            <span style={{ fontWeight: 700, fontSize: 15, color: "var(--accent)", minWidth: 28 }}>
              02
            </span>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "var(--foreground)", margin: 0 }}>
              Event-Driven Identification
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--subtle)", marginBottom: "1.5rem" }}>
            The system shifts from &quot;Patrol&quot; to &quot;Analysis&quot; only when a physical
            object is detected within a specific range (approximately 3 inches). This detection acts
            as a hardware trigger to initiate the vision system:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div
              style={{
                borderRadius: 4,
                padding: "1.25rem 1.5rem",
                borderLeft: "3px solid var(--accent)",
                background: "var(--surface)",
              }}
            >
              <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)", marginBottom: "0.4rem", marginTop: 0 }}>
                Visual Capture
              </h4>
              <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
                The robot stops moving and captures a picture of the obstacle in front of it.
              </p>
            </div>
            <div
              style={{
                borderRadius: 4,
                padding: "1.25rem 1.5rem",
                borderLeft: "3px solid var(--accent)",
                background: "var(--surface)",
              }}
            >
              <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)", marginBottom: "0.4rem", marginTop: 0 }}>
                Classification
              </h4>
              <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
                A Machine Learning (ML) Model running on the robot analyzes the image to classify
                the object as either &quot;Trash&quot; (e.g., plastic bottles, wrappers) or
                &quot;Nature&quot; (e.g., rocks, seaweed).
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem" }}>
            <span style={{ fontWeight: 700, fontSize: 15, color: "var(--accent)", minWidth: 28 }}>
              03
            </span>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "var(--foreground)", margin: 0 }}>
              Discriminative Actuation
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--subtle)", marginBottom: "1.5rem" }}>
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
                background: "var(--surface)",
                borderRadius: 4,
                padding: "1.5rem",
                borderTop: "2px solid var(--accent)",
              }}
            >
              <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem", marginTop: 0 }}>
                Collection (Trash Detected)
              </h4>
              <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
                If the object is classified as trash, the collection mechanism is lowered to scoop
                the item. As the robot resumes movement, a filtration system sifts out sand through
                a 2mm mesh while retaining debris in a storage bag.
              </p>
            </div>
            <div
              style={{
                background: "var(--surface)",
                borderRadius: 4,
                padding: "1.5rem",
                borderTop: "2px solid var(--border)",
              }}
            >
              <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem", marginTop: 0 }}>
                Preservation (Nature Detected)
              </h4>
              <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
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
