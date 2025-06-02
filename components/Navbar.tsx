// components/Navbar.tsx

export default function Navbar() {
  return (
    <nav style={{
      width: '100%',
      background: '#fff',
      borderBottom: '1px solid #eee',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.5rem 3vw',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      fontFamily: 'Inter, sans-serif'
    }}>
      <a href="/" style={{ fontSize: 30, fontWeight: 900, color: '#111', letterSpacing: '-0.03em', textDecoration: 'none' }}>
        DuneBroom
      </a>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <a href="/about" style={navLink}>About</a>
        <a href="/challenge" style={navLink}>Challenge</a>
        <a href="/podcast" style={navLink}>Podcast</a>
        <a href="/outreach" style={navLink}>Outreach</a>
        <a href="/contact" style={navLink}>Contact</a>
      </div>
    </nav>
  );
}

const navLink = {
  fontSize: 17,
  color: '#222',
  textDecoration: 'none',
  fontWeight: 600,
  letterSpacing: '-0.01em',
  transition: 'color 0.2s',
  padding: '4px 8px',
  borderRadius: 4,
  // Add hover
  cursor: 'pointer'
};
