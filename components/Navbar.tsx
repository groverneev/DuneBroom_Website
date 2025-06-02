'use client';
import { useState } from 'react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/challenge', label: 'Challenge' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/outreach', label: 'Outreach' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      background: '#fff',
      borderBottom: '1px solid #e5e7eb',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem'
      }}>
        <a href="/" style={{ fontWeight: 800, fontSize: 28, color: '#111', textDecoration: 'none' }}>DuneBroom</a>
        {/* Hamburger for small screens */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: 28,
            cursor: 'pointer'
          }}
          className="navbar-hamburger"
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: 32,
            margin: 0,
            padding: 0,
            alignItems: 'center'
          }}
          className="navbar-links"
        >
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  color: '#111',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: 18,
                  transition: 'color 0.2s'
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .navbar-links {
            display: none;
          }
          .navbar-hamburger {
            display: block !important;
          }
        }
        @media (max-width: 900px) {
          nav.open .navbar-links {
            display: flex !important;
            flex-direction: column;
            gap: 20px;
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background: #fff;
            border-top: 1px solid #e5e7eb;
            padding: 1.5rem 0;
            z-index: 99;
          }
        }
      `}</style>
      {/* Small screen menu */}
      {open && (
        <ul
          className="navbar-links"
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            position: 'absolute',
            top: 70,
            left: 0,
            width: '100%',
            background: '#fff',
            borderTop: '1px solid #e5e7eb',
            padding: '1.5rem 0',
            margin: 0,
            zIndex: 99
          }}
        >
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  color: '#111',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: 18
                }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
