"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xnnvbrzq", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (response.ok) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main style={{ fontFamily: "Inter, sans-serif", background: "#fff", minHeight: "100vh" }}>
      <section
        style={{
          maxWidth: 600,
          margin: "0 auto",
          padding: "4rem 2rem 6rem 2rem",
        }}
      >
        <h1
          style={{
            fontSize: 44,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: "0.5rem",
            color: "#111827",
          }}
        >
          Contact Us
        </h1>
        <p style={{ fontSize: 18, color: "#6b7280", marginBottom: "2.5rem" }}>
          Have a question or want to get in touch? Send us a message.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div>
            <label style={{ fontWeight: 500, fontSize: 15, color: "#374151", display: "block", marginBottom: 6 }}>
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={{ fontWeight: 500, fontSize: 15, color: "#374151", display: "block", marginBottom: 6 }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={{ fontWeight: 500, fontSize: 15, color: "#374151", display: "block", marginBottom: 6 }}>
              Message
            </label>
            <textarea
              name="message"
              required
              placeholder="Write your message here..."
              rows={5}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              background: "#3b82f6",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 0",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 0.2s ease",
              width: "100%",
              marginTop: 8,
            }}
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Sent!"
              : "Send Message"}
          </button>

          {status === "sent" && (
            <p style={{ color: "#16a34a", marginTop: 8, fontSize: 15 }}>
              Thanks! We&apos;ll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p style={{ color: "#dc2626", marginTop: 8, fontSize: 15 }}>
              Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 8,
  border: "1px solid #e5e7eb",
  background: "#f9fafb",
  color: "#111827",
  fontSize: 16,
  outline: "none",
  boxSizing: "border-box",
};
