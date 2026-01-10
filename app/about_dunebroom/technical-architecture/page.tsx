import Link from "next/link";

export default function TechnicalArchitecturePage() {
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
          Technical Architecture
        </h1>
        <p style={{ fontSize: 18, color: "#9ca3af", marginBottom: "2rem" }}>
          Hardware Implementation
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
            The DuneBroom robot was engineered using a modular hardware stack defined by specific
            performance constraints. The system is organized into four functional subsystems.
          </p>
        </div>

        {/* Power System */}
        <div
          style={{
            background: "#1e2533",
            borderRadius: 16,
            padding: "2rem",
            marginBottom: "1.5rem",
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
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#f59e0b",
              }}
            />
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#f59e0b", margin: 0 }}>
              Power System
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#e5e7eb", margin: 0 }}>
            A high-capacity battery serves as the central power source, distributing power to the
            motor control module and the Raspberry Pi. The power budget was calculated to sustain
            continuous autonomous operation for <strong>over 1 hour</strong> on a single charge.
          </p>
        </div>

        {/* High-Level Processing */}
        <div
          style={{
            background: "#1e2533",
            borderRadius: 16,
            padding: "2rem",
            marginBottom: "1.5rem",
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
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#8b5cf6",
              }}
            />
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#8b5cf6", margin: 0 }}>
              High-Level Processing
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#e5e7eb", marginBottom: "1.5rem" }}>
            This subsystem handles the computationally intensive tasks required to classify objects
            in front of the robot as nature versus trash.
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
                Raspberry Pi 5
              </h4>
              <p style={{ fontSize: 15, color: "#9ca3af", margin: 0, lineHeight: 1.6 }}>
                Serves as the robot&apos;s primary computer. Executes the YOLOv8 ML model to classify
                objects as &quot;trash&quot; or &quot;nature&quot;. Makes high-level navigation
                decisions and sends commands via serial connection to the Arduino.
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
                Webcam
              </h4>
              <p style={{ fontSize: 15, color: "#9ca3af", margin: 0, lineHeight: 1.6 }}>
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
            background: "#1e2533",
            borderRadius: 16,
            padding: "2rem",
            marginBottom: "1.5rem",
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
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#3b82f6",
              }}
            />
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#3b82f6", margin: 0 }}>
              Low-Level Control
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#e5e7eb", marginBottom: "1.5rem" }}>
            This subsystem manages real-time sensor data and hardware protocols.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div
              style={{
                background: "#0E1321",
                borderRadius: 12,
                padding: "1.25rem",
                borderLeft: "4px solid #3b82f6",
              }}
            >
              <h4 style={{ fontSize: 16, fontWeight: 600, color: "#3b82f6", marginBottom: "0.5rem" }}>
                Arduino Microcontroller
              </h4>
              <p style={{ fontSize: 15, color: "#9ca3af", margin: 0, lineHeight: 1.6 }}>
                Acts as the hardware interface. Manages real-time input/output by reading data from
                the ultrasonic distance sensors and sending signals to the motor control module and
                the scooper&apos;s servo motor.
              </p>
            </div>
            <div
              style={{
                background: "#0E1321",
                borderRadius: 12,
                padding: "1.25rem",
                borderLeft: "4px solid #3b82f6",
              }}
            >
              <h4 style={{ fontSize: 16, fontWeight: 600, color: "#3b82f6", marginBottom: "0.5rem" }}>
                Distance Sensors
              </h4>
              <p style={{ fontSize: 15, color: "#9ca3af", margin: 0, lineHeight: 1.6 }}>
                Ultrasonic sensors connected to the Arduino continuously monitor the path for
                obstacles within a 3-inch range. These sensors serve as the hardware
                &quot;trigger&quot; that wakes the vision system.
              </p>
            </div>
            <div
              style={{
                background: "#0E1321",
                borderRadius: 12,
                padding: "1.25rem",
                borderLeft: "4px solid #3b82f6",
              }}
            >
              <h4 style={{ fontSize: 16, fontWeight: 600, color: "#3b82f6", marginBottom: "0.5rem" }}>
                Motor Control Module
              </h4>
              <p style={{ fontSize: 15, color: "#9ca3af", margin: 0, lineHeight: 1.6 }}>
                An intermediate driver that interprets signals from the Arduino and uses power from
                the battery to control the motors.
              </p>
            </div>
          </div>
        </div>

        {/* Actuators */}
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
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#10b981",
              }}
            />
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#10b981", margin: 0 }}>
              Actuators
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#e5e7eb", marginBottom: "1.5rem" }}>
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
                background: "#0E1321",
                borderRadius: 12,
                padding: "1.5rem",
                border: "2px solid #10b981",
              }}
            >
              <h4 style={{ fontSize: 17, fontWeight: 600, color: "#10b981", marginBottom: "0.75rem" }}>
                Drivetrain Motors
              </h4>
              <p style={{ fontSize: 15, color: "#9ca3af", margin: 0, lineHeight: 1.6 }}>
                High-torque DC motors operating between 200-300 RPM. These motors drive a tank-tread
                chassis designed to maintain traction on soft sand while achieving a speed of
                approximately 2 km/hr.
              </p>
            </div>
            <div
              style={{
                background: "#0E1321",
                borderRadius: 12,
                padding: "1.5rem",
                border: "2px solid #10b981",
              }}
            >
              <h4 style={{ fontSize: 17, fontWeight: 600, color: "#10b981", marginBottom: "0.75rem" }}>
                Servo Motor (Scooper Lift)
              </h4>
              <p style={{ fontSize: 15, color: "#9ca3af", margin: 0, lineHeight: 1.6 }}>
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
