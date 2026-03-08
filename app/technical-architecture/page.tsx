import Image from "next/image";

export default function TechnicalArchitecturePage() {
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
          Technical Architecture
        </h1>
        <p style={{ fontSize: 17, color: "var(--muted)", marginBottom: "2.5rem", marginTop: 0 }}>
          Hardware Implementation
        </p>

        {/* Introduction + Diagram */}
        <div style={{ paddingBottom: "2.5rem", marginBottom: "2.5rem", borderBottom: "1px solid var(--border)" }}>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--subtle)", margin: "0 0 1.5rem 0" }}>
            The DuneBroom robot was engineered using a modular hardware stack defined by specific
            performance constraints. The system is organized into four functional subsystems.
          </p>
          <div
            style={{
              borderRadius: 4,
              overflow: "hidden",
              background: "var(--surface)",
              padding: "1rem",
            }}
          >
            <Image
              src="/Figure_2_Hardware_Architecture.png"
              alt="Figure 2: Hardware Architecture"
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
              Figure 2: Hardware Architecture
            </p>
          </div>
        </div>

        {/* Power System */}
        <div style={{ paddingBottom: "2.5rem", marginBottom: "2.5rem", borderBottom: "1px solid var(--border)" }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, color: "var(--foreground)", margin: "0 0 1rem 0" }}>
            Power System
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--subtle)", margin: 0 }}>
            A high-capacity battery serves as the central power source, distributing power to the
            motor control module and the Raspberry Pi. The power budget was calculated to sustain
            continuous autonomous operation for <strong>over 1 hour</strong> on a single charge.
          </p>
        </div>

        {/* High-Level Processing */}
        <div style={{ paddingBottom: "2.5rem", marginBottom: "2.5rem", borderBottom: "1px solid var(--border)" }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, color: "var(--foreground)", margin: "0 0 1rem 0" }}>
            High-Level Processing
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--subtle)", marginBottom: "1.5rem" }}>
            This subsystem handles the computationally intensive tasks required to classify objects
            in front of the robot as nature versus trash.
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
                Raspberry Pi 5
              </h4>
              <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
                Serves as the robot&apos;s primary computer. Executes the YOLOv8 ML model to classify
                objects as &quot;trash&quot; or &quot;nature&quot;. Makes high-level navigation
                decisions and sends commands via serial connection to the Arduino.
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
                Webcam
              </h4>
              <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
                Connected directly to the Raspberry Pi. Captures a high-resolution image only when
                triggered, providing the visual data necessary for the ML model to differentiate
                between trash and natural elements.
              </p>
            </div>
          </div>
        </div>

        {/* Low-Level Control */}
        <div style={{ paddingBottom: "2.5rem", marginBottom: "2.5rem", borderBottom: "1px solid var(--border)" }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, color: "var(--foreground)", margin: "0 0 1rem 0" }}>
            Low-Level Control
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--subtle)", marginBottom: "1.5rem" }}>
            This subsystem manages real-time sensor data and hardware protocols.
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
                Arduino Microcontroller
              </h4>
              <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
                Acts as the hardware interface. Manages real-time input/output by reading data from
                the ultrasonic distance sensors and sending signals to the motor control module and
                the scooper&apos;s servo motor.
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
                Distance Sensors
              </h4>
              <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
                Ultrasonic sensors connected to the Arduino continuously monitor the path for
                obstacles within a 3-inch range. These sensors serve as the hardware
                &quot;trigger&quot; that wakes the vision system.
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
                Motor Control Module
              </h4>
              <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
                An intermediate driver that interprets signals from the Arduino and uses power from
                the battery to control the motors.
              </p>
            </div>
          </div>
        </div>

        {/* Actuators */}
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 600, color: "var(--foreground)", margin: "0 0 1rem 0" }}>
            Actuators
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--subtle)", marginBottom: "1.5rem" }}>
            This subsystem converts electrical signals into physical motion to navigate and clean the
            beach.
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
                Drivetrain Motors
              </h4>
              <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
                High-torque DC motors operating between 200-300 RPM. These motors drive a tank-tread
                chassis designed to maintain traction on soft sand while achieving a speed of
                approximately 2 km/hr.
              </p>
            </div>
            <div
              style={{
                background: "var(--surface)",
                borderRadius: 4,
                padding: "1.5rem",
                borderTop: "2px solid var(--accent)",
              }}
            >
              <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem", marginTop: 0 }}>
                Servo Motor (Scooper Lift)
              </h4>
              <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
                Controls the vertical articulation of the custom 3D-printed scooper. Lowers the
                mechanism to collect identified trash and raises it to avoid drag or navigate over
                natural obstacles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
