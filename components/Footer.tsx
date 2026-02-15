"use client";

import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { href: "/system-logic", label: "System Logic" },
    { href: "/technical-architecture", label: "Technical Architecture" },
    { href: "/about_us", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://x.com/groverneev01",
      label: "Twitter",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      href: "https://github.com/groverneev",
      label: "GitHub",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
          className="w-5 h-5"
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
    <footer
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        color: "var(--foreground)",
        transition: "background-color 0.3s, border-color 0.3s, color 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          padding: "48px 16px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 32,
          }}
          className="footer-grid"
        >
          {/* Site Info */}
          <div>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 8,
                color: "var(--foreground)",
              }}
            >
              DuneBroom
            </h3>
            <p
              style={{
                color: "var(--muted)",
                fontSize: 14,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              An autonomous beach-cleaning robot designed to keep our coastlines
              pristine. Combining robotics, computer vision, and sustainable
              engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: 12,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--muted)",
                marginBottom: 16,
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: 8 }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "var(--subtle)",
                      textDecoration: "none",
                      fontSize: 14,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--foreground)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--subtle)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4
              style={{
                fontSize: 12,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--muted)",
                marginBottom: 16,
              }}
            >
              Connect
            </h4>
            <div style={{ display: "flex", gap: 16 }}>
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  style={{
                    color: "var(--muted)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--foreground)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--muted)")
                  }
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p
              style={{
                color: "var(--muted)",
                fontSize: 14,
                marginTop: 16,
              }}
            >
              groverneev at gmail dot com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            marginTop: 32,
            paddingTop: 32,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
          }}
        >
          <p style={{ color: "var(--muted)", fontSize: 14, margin: 0 }}>
            &copy; {new Date().getFullYear()} DuneBroom. All rights reserved.
          </p>
          <p
            style={{
              color: "var(--muted)",
              fontSize: 12,
              margin: 0,
              opacity: 0.7,
            }}
          >
            Autonomous beach cleaning for a cleaner tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
}
