"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { href: "/system-logic", label: "System Logic" },
  { href: "/technical-architecture", label: "Technical Architecture" },
  { href: "/about_us", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      style={{
        background: "var(--background)",
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        transition: "background-color 0.3s, border-color 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontWeight: 800,
              fontSize: 24,
              color: "var(--foreground)",
              textDecoration: "none",
            }}
          >
            DuneBroom
          </Link>

          {/* Desktop links + theme toggle */}
          <div
            className="navbar-desktop"
            style={{ display: "flex", alignItems: "center", gap: 28 }}
          >
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                gap: 28,
                margin: 0,
                padding: 0,
                alignItems: "center",
              }}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        color: isActive ? "var(--accent)" : "var(--subtle)",
                        textDecoration: "none",
                        fontWeight: isActive ? 600 : 500,
                        fontSize: 16,
                        transition: "color 0.2s",
                        borderBottom: isActive
                          ? "2px solid var(--accent)"
                          : "2px solid transparent",
                        paddingBottom: 4,
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                background: "none",
                border: "1px solid var(--border)",
                borderRadius: 8,
                width: 38,
                height: 38,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                color: "var(--foreground)",
                transition: "border-color 0.3s, color 0.3s",
              }}
            >
              {theme === "light" ? "\u{1F319}" : "\u2600\uFE0F"}
            </button>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div
            className="navbar-mobile-buttons"
            style={{
              display: "none",
              alignItems: "center",
              gap: 8,
            }}
          >
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                background: "none",
                border: "1px solid var(--border)",
                borderRadius: 8,
                width: 38,
                height: 38,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                color: "var(--foreground)",
                transition: "border-color 0.3s, color 0.3s",
              }}
            >
              {theme === "light" ? "\u{1F319}" : "\u2600\uFE0F"}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              style={{
                padding: 8,
                borderRadius: 6,
                background: "none",
                border: "none",
                color: "var(--foreground)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {mobileMenuOpen ? (
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div
            className="navbar-mobile-menu"
            style={{
              borderTop: "1px solid var(--border)",
              paddingTop: 16,
              paddingBottom: 16,
              display: "none",
            }}
          >
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      color: isActive ? "var(--accent)" : "var(--foreground)",
                      textDecoration: "none",
                      fontWeight: isActive ? 600 : 500,
                      fontSize: 16,
                      padding: "8px 8px",
                      borderRadius: 6,
                      transition: "background-color 0.2s, color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "var(--surface)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .navbar-desktop {
            display: none !important;
          }
          .navbar-mobile-buttons {
            display: flex !important;
          }
          .navbar-mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
