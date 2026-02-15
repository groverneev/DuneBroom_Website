"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { href: "/overview", label: "Overview" },
  { href: "/system-logic", label: "System Logic" },
  { href: "/technical-architecture", label: "Technical Architecture" },
  { href: "/about_us", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
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
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 2rem",
        }}
      >
        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setOpen(!open)}
          className="navbar-hamburger"
          style={{
            background: "none",
            border: "none",
            fontSize: 28,
            cursor: "pointer",
            display: "none",
            color: "var(--foreground)",
          }}
          aria-label="Open menu"
        >
          ☰
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="navbar-logo"
          style={{
            fontWeight: 800,
            fontSize: 24,
            color: "var(--foreground)",
            textDecoration: "none",
          }}
        >
          DuneBroom
        </Link>

        {/* Desktop links + toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <ul
            className="navbar-links"
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
                      borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent",
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
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.3)",
            zIndex: 1000,
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{
              background: "var(--background)",
              width: "85vw",
              maxWidth: 320,
              minHeight: "100vh",
              boxShadow: "2px 0 16px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              padding: "2rem 1.5rem",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
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
                }}
              >
                {theme === "light" ? "\u{1F319}" : "\u2600\uFE0F"}
              </button>
              <button
                onClick={() => setOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: 28,
                  cursor: "pointer",
                  color: "var(--foreground)",
                }}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 24,
                padding: 0,
                margin: 0,
              }}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      style={{
                        color: isActive ? "var(--accent)" : "var(--foreground)",
                        textDecoration: "none",
                        fontWeight: isActive ? 600 : 500,
                        fontSize: 20,
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .navbar-links {
            display: none !important;
          }
          .navbar-hamburger {
            display: block !important;
          }
          .navbar-logo {
            position: absolute;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            width: fit-content;
          }
        }
      `}</style>
    </nav>
  );
}
