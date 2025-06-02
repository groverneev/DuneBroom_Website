import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      width: "100%",
      padding: "0.75rem 2rem",
      background: "#bbf7d0",
      borderBottom: "2px solidrgb(0, 0, 0)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    }}>
      {/* Logo/Brand */}
      <Link href="/" style={{
        fontWeight: 700, fontSize: 24, color: "#000000", textDecoration: "none"
      }}>
        DuneBroom
      </Link>
      {/* Menu Links */}
      <div style={{
        display: "flex",
        gap: "2rem",
        fontSize: 16,
        alignItems: "center"
      }}>
        <Link href="/about">About</Link>
        <Link href="/podcast">Podcast</Link>
        <Link href="/outreach">Outreach</Link>
        <Link href="/challenge">Challenge</Link>
        <Link href="/data">Open Data</Link>
        <Link href="/policy">Policy</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
