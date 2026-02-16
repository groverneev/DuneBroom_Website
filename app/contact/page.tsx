"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xnnvbrzq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      href: "https://x.com/groverneev01",
      label: "Twitter",
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      href: "https://github.com/groverneev",
      label: "GitHub",
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      href: "https://techunpacked.substack.com",
      label: "Blog",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
        </svg>
      ),
    },
    {
      href: "https://neevgrover.com",
      label: "Website",
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "var(--background)", transition: "background-color 0.3s" }}>
      {/* Hero Section */}
      <div
        style={{
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, marginBottom: 12, color: "var(--foreground)" }}>Contact</h1>
        <p style={{ color: "var(--muted)", fontSize: 18, maxWidth: 640, margin: "0 auto" }}>
          Have any questions or suggestions? Get in touch!
        </p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "3rem 1rem" }}>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          {/* Contact Form */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "2rem",
              transition: "background-color 0.3s, border-color 0.3s",
            }}
          >
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--foreground)", marginBottom: 24 }}>
              Send a Message
            </h2>

            {status === "success" ? (
              <div
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: "1.5rem 1rem",
                  textAlign: "center",
                }}
              >
                <svg
                  width="48"
                  height="48"
                  fill="none"
                  stroke="var(--accent)"
                  viewBox="0 0 24 24"
                  style={{ margin: "0 auto 12px auto", display: "block" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p style={{ fontWeight: 600, marginBottom: 4, color: "var(--foreground)" }}>Message sent!</p>
                <p style={{ fontSize: 14, color: "var(--muted)" }}>
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    marginTop: 16,
                    background: "none",
                    border: "none",
                    color: "var(--accent)",
                    textDecoration: "underline",
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "var(--subtle)", marginBottom: 4 }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="form-input"
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "var(--subtle)", marginBottom: 4 }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email"
                    className="form-input"
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "var(--subtle)", marginBottom: 4 }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Your message..."
                    className="form-input"
                    style={{ resize: "vertical" }}
                  />
                </div>

                {status === "error" && (
                  <div style={{ background: "#fef2f2", border: "1px solid #fecaca", color: "#dc2626", padding: "12px 16px", borderRadius: 8, fontSize: 14 }}>
                    Something went wrong. Please try again or email directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    width: "100%",
                    background: "var(--accent)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 16,
                    padding: "12px 16px",
                    borderRadius: 8,
                    border: "none",
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    opacity: status === "loading" ? 0.7 : 1,
                    transition: "opacity 0.2s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  {status === "loading" && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ animation: "spin 1s linear infinite" }}>
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                  )}
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "2rem",
                transition: "background-color 0.3s, border-color 0.3s",
              }}
            >
              <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--foreground)", marginBottom: 16 }}>
                Other Ways to Reach Me
              </h2>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="var(--muted)"
                  viewBox="0 0 24 24"
                  style={{ marginTop: 2, flexShrink: 0 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p style={{ fontWeight: 500, color: "var(--foreground)", margin: 0 }}>Email</p>
                  <p style={{ color: "var(--muted)", margin: "4px 0 0 0" }}>groverneev at gmail dot com</p>
                </div>
              </div>
            </div>

            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "2rem",
                transition: "background-color 0.3s, border-color 0.3s",
              }}
            >
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--foreground)", marginBottom: 16 }}>
                Connect on Social
              </h2>
              <div style={{ display: "flex", gap: 12 }}>
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 10,
                      border: "1px solid var(--border)",
                      background: "var(--card-bg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--foreground)",
                      textDecoration: "none",
                      transition: "border-color 0.2s, background-color 0.3s",
                    }}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 700px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
