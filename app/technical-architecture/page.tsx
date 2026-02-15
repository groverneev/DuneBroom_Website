import Image from "next/image";

export default function TechnicalArchitecturePage() {
  return (
    <main style={{ fontFamily: "Inter, sans-serif", background: "#fff", minHeight: "100vh" }}>
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "4rem 2rem 6rem 2rem",
          color: "#111827",
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
        <p style={{ fontSize: 18, color: "#6b7280", marginBottom: "2rem" }}>
          Hardware Implementation
        </p>

        {/* Introduction + Diagram */}
        <div
          style={{
            background: "#f9fafb",
            borderRadius: 12,
            padding: "2rem",
            marginBottom: "1.5rem",
            border: "1px solid #e5e7eb",
          }}
        >
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#374151", margin: 0, marginBottom: "1.5rem" }}>
            The DuneBroom robot was engineered using a modular hardware stack defined by specific
            performance constraints. The system is organized into four functional subsystems.
          </p>
          <div
            style={{
              borderRadius: 8,
              overflow: "hidden",
              background: "#fff",
              padding: "1rem",
              border: "1px solid #e5e7eb",
            }}
          >
            <Image
              src="/Figure_2_Hardware_Architecture.png"
              alt="Figure 2: Hardware Architecture"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto", borderRadius: 8 }}
            />
            <p
              style={{
                fontSize: 14,
                color: "#6b7280",
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
        <div
          style={{
            background: "#f9fafb",
            borderRadius: 12,
            padding: "2rem",
            marginBottom: "1.5rem",
            border: "1px solid #e5e7eb",
          }}
        >
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: 0, marginBottom: "1rem" }}>
            Power System
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#374151", margin: 0 }}>
            A high-capacity battery serves as the central power source, distributing power to the
            motor control module and the Raspberry Pi. The power budget was calculated to sustain
            continuous autonomous operation for <strong>over 1 hour</strong> on a single charge.
          </p>
        </div>

        {/* High-Level Processing */}
        <div
          style={{
            background: "#f9fafb",
            borderRadius: 12,
            padding: "2rem",
            marginBottom: "1.5rem",
            border: "1px solid #e5e7eb",
          }}
        >
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: 0, marginBottom: "1rem" }}>
            High-Level Processing
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#374151", marginBottom: "1.5rem" }}>
            This subsystem handles the computationally intensive tasks required to classify objects
            in front of the robot as nature versus trash.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div
              style={{
                background: "#fff",
                borderRadius: 8,
                padding: "1.25rem",
                borderLeft: "4px solid #3b82f6",
              }}
            >
              <h4 style={{ fontSize: 16, fontWeight: 600, color: "#111827", marginBottom: "0.5rem" }}>
                Raspberry Pi 5
              </h4>
              <p style={{ fontSize: 15, color: "#6b7280", margin: 0, lineHeight: 1.6 }}>
                Serves as the robot&apos;s primary computer. Executes the YOLOv8 ML model to classify
                objects as &quot;trash&quot; or &quot;nature&quot;. Makes high-level navigation
                decisions and sends commands via serial connection to the Arduino.
              </p>
            </div>
            <div
              style={{
                background: "#fff",
                borderRadius: 8,
                padding: "1.25rem",
                borderLeft: "4px solid #3b82f6",
              }}
            >
              <h4 style={{ fontSize: 16, fontWeight: 600, color: "#111827", marginBottom: "0.5rem" }}>
                Webcam
              </h4>
              <p style={{ fontSize: 15, color: "#6b7280", margin: 0, lineHeight: 1.6 }}>
                Connected directly to the Raspberry Pi. Captures a high-resolution image only when
                triggered, providing the visual data necessary for the ML model to differentiate
                between trash and natural elements.
              </p>
            </div>
          </div>
        </div>

        {/* Low-Level Control */}
        <div
          style={{
            background: "#f9fafb",
            borderRadius: 12,
            padding: "2rem",
            marginBottom: "1.5rem",
            border: "1px solid #e5e7eb",
          }}
        >
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: 0, marginBottom: "1rem" }}>
            Low-Level Control
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#374151", marginBottom: "1.5rem" }}>
            This subsystem manages real-time sensor data and hardware protocols.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div
              style={{
                background: "#fff",
                borderRadius: 8,
                padding: "1.25rem",
                borderLeft: "4px solid #3b82f6",
              }}
            >
              <h4 style={{ fontSize: 16, fontWeight: 600, color: "#111827", marginBottom: "0.5rem" }}>
                Arduino Microcontroller
              </h4>
              <p style={{ fontSize: 15, color: "#6b7280", margin: 0, lineHeight: 1.6 }}>
                Acts as the hardware interface. Manages real-time input/output by reading data from
                the ultrasonic distance sensors and sending signals to the motor control module and
                the scooper&apos;s servo motor.
              </p>
            </div>
            <div
              style={{
                background: "#fff",
                borderRadius: 8,
                padding: "1.25rem",
                borderLeft: "4px solid #3b82f6",
              }}
            >
              <h4 style={{ fontSize: 16, fontWeight: 600, color: "#111827", marginBottom: "0.5rem" }}>
                Distance Sensors
              </h4>
              <p style={{ fontSize: 15, color: "#6b7280", margin: 0, lineHeight: 1.6 }}>
                Ultrasonic sensors connected to the Arduino continuously monitor the path for
                obstacles within a 3-inch range. These sensors serve as the hardware
                &quot;trigger&quot; that wakes the vision system.
              </p>
            </div>
            <div
              style={{
                background: "#fff",
                borderRadius: 8,
                padding: "1.25rem",
                borderLeft: "4px solid #3b82f6",
              }}
            >
              <h4 style={{ fontSize: 16, fontWeight: 600, color: "#111827", marginBottom: "0.5rem" }}>
                Motor Control Module
              </h4>
              <p style={{ fontSize: 15, color: "#6b7280", margin: 0, lineHeight: 1.6 }}>
                An intermediate driver that interprets signals from the Arduino and uses power from
                the battery to control the motors.
              </p>
            </div>
          </div>
        </div>

        {/* Actuators */}
        <div
          style={{
            background: "#f9fafb",
            borderRadius: 12,
            padding: "2rem",
            border: "1px solid #e5e7eb",
          }}
        >
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: 0, marginBottom: "1rem" }}>
            Actuators
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#374151", marginBottom: "1.5rem" }}>
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
                background: "#fff",
                borderRadius: 8,
                padding: "1.5rem",
                border: "1px solid #e5e7eb",
                borderTop: "3px solid #3b82f6",
              }}
            >
              <h4 style={{ fontSize: 17, fontWeight: 600, color: "#111827", marginBottom: "0.75rem" }}>
                Drivetrain Motors
              </h4>
              <p style={{ fontSize: 15, color: "#6b7280", margin: 0, lineHeight: 1.6 }}>
                High-torque DC motors operating between 200-300 RPM. These motors drive a tank-tread
                chassis designed to maintain traction on soft sand while achieving a speed of
                approximately 2 km/hr.
              </p>
            </div>
            <div
              style={{
                background: "#fff",
                borderRadius: 8,
                padding: "1.5rem",
                border: "1px solid #e5e7eb",
                borderTop: "3px solid #3b82f6",
              }}
            >
              <h4 style={{ fontSize: 17, fontWeight: 600, color: "#111827", marginBottom: "0.75rem" }}>
                Servo Motor (Scooper Lift)
              </h4>
              <p style={{ fontSize: 15, color: "#6b7280", margin: 0, lineHeight: 1.6 }}>
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
