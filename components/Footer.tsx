export default function Footer() {
  return (
    <footer style={{
      marginTop: 48,
      padding: 24,
      background: '#f1f5f9',
      textAlign: 'center',
      color: '#64748b',
      fontSize: 14,
    }}>
      &copy; {new Date().getFullYear()} DuneBroom. All rights reserved.
      <br />
      <a 
        href="/contact" 
        style={{
          display: 'inline-block',
          marginTop: 12,
          padding: '8px 20px',
          background: '#bbf7d0',
          color: '#166534',
          borderRadius: 8,
          textDecoration: 'none',
          fontWeight: 600,
          transition: 'background 0.2s'
        }}
      >
        Contact
      </a>
    </footer>
  );
}
