"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { href: "/about_me", label: "About Me" },
  { 
    href: "/about_dunebroom", 
    label: "About DuneBroom",
    submenu: [
      { href: "/about_dunebroom", label: "Main Page" },
      { href: "/about_dunebroom/overview", label: "Overview" },
      { href: "/about_dunebroom/system-logic", label: "System Logic" },
      { href: "/about_dunebroom/technical-architecture", label: "Technical Architecture" },
    ]
  },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      style={{
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
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
          position: "relative",
        }}
      >
        {/* Hamburger left (visible only on mobile) */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            fontSize: 28,
            cursor: "pointer",
            marginRight: 16,
            display: "none",
          }}
          className="navbar-hamburger"
          aria-label="Open menu"
        >
          ☰
        </button>

        {/* Logo/title */}
        <Link
          href="/"
          className="navbar-logo"
          style={{
            fontWeight: 800,
            fontSize: 28,
            color: "#111",
            textDecoration: "none",
          }}
        >
          DuneBroom
        </Link>

        {/* Main nav links - hidden on mobile */}
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: 32,
            margin: 0,
            padding: 0,
            alignItems: "center",
          }}
          className="navbar-links"
        >
          {navLinks.map((link) => (
            <li 
              key={link.href}
              style={{ position: "relative" }}
              ref={link.submenu ? dropdownRef : null}
            >
              {link.submenu ? (
                <>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#111",
                      textDecoration: "none",
                      fontWeight: 500,
                      fontSize: 18,
                      transition: "color 0.2s",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      padding: 0,
                    }}
                  >
                    {link.label} {dropdownOpen ? "▲" : "▼"}
                  </button>
                  {dropdownOpen && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        marginTop: "0.5rem",
                        background: "#fff",
                        borderRadius: 8,
                        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                        minWidth: 220,
                        padding: "0.5rem 0",
                        zIndex: 1000,
                      }}
                    >
                      {link.submenu.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          onClick={() => setDropdownOpen(false)}
                          style={{
                            display: "block",
                            padding: "0.75rem 1.5rem",
                            color: "#111",
                            textDecoration: "none",
                            fontSize: 16,
                            transition: "background 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#f5f6fa";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                          }}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  style={{
                    color: "#111",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: 18,
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar drawer on mobile */}
      {open && (
        <div className="navbar-drawer" onClick={() => setOpen(false)}>
          <div
            className="navbar-drawer-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                fontSize: 28,
                cursor: "pointer",
                marginBottom: 24,
                alignSelf: "flex-end",
              }}
              aria-label="Close menu"
            >
              ×
            </button>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 28,
                padding: 0,
                margin: 0,
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              {navLinks.map((link) => (
                <li key={link.href} style={{ width: "100%" }}>
                  {link.submenu ? (
                    <div>
                      <div
                        style={{
                          color: "#111",
                          fontWeight: 600,
                          fontSize: 22,
                          marginBottom: 12,
                        }}
                      >
                        {link.label}
                      </div>
                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: 0,
                          marginLeft: 16,
                          display: "flex",
                          flexDirection: "column",
                          gap: 16,
                        }}
                      >
                        {link.submenu.map((subLink) => (
                          <li key={subLink.href}>
                            <Link
                              href={subLink.href}
                              style={{
                                color: "#666",
                                textDecoration: "none",
                                fontWeight: 500,
                                fontSize: 18,
                              }}
                              onClick={() => setOpen(false)}
                            >
                              {subLink.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      style={{
                        color: "#111",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: 22,
                      }}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* CSS for responsive behavior */}
      <style>{`
        @media (max-width: 900px) {
         .navbar-logo {
      position: absolute;
      left: 0;
      right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: fit-content;
  }
  .navbar-hamburger {
    position: relative;
    z-index: 2;
  }
}

        @media (max-width: 900px) {
          .navbar-links {
            display: none !important;
          }
          .navbar-hamburger {
            display: block !important;
          }
        }
        .navbar-drawer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.33);
          z-index: 1000;
          display: flex;
          align-items: flex-start;
        }
        .navbar-drawer-content {
          background: #fff;
          width: 85vw;
          max-width: 320px;
          min-height: 100vh;
          box-shadow: 2px 0 16px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          padding: 2.2rem 2rem 1.2rem 1.3rem;
        }
      `}</style>
    </nav>
  );
}
