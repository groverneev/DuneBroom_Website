import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      width: '100%',
      padding: '1rem 2rem',
      background: '#f0fdf4',
      borderBottom: '1px solid #bbf7d0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <Link href="/" style={{ fontWeight: 700, fontSize: 22, color: '#059669', textDecoration: 'none' }}>
        DuneBroom
      </Link>
      <div style={{ display: 'flex', gap: '1.5rem', fontSize: 16 }}>
        <Link href="/about">About</Link>
        <Link href="/podcast">Podcast</Link>
        <Link href="/outreach">Outreach</Link>
        <Link href="/challenge">Challenge</Link>
        <Link href="/data">Open Data</Link>
        <Link href="/policy">Policy Toolkit</Link>
        <Link href="/faq">FAQ</Link>
      </div>
    </nav>
  );
}
