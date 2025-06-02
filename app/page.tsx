// app/page.tsx

export default function Home() {
  return (
    <main style={{ background: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#0e0e0e',
        color: '#fff',
        textAlign: 'center',
        padding: '0 2rem'
      }}>
        <h1 style={{ fontSize: 64, fontWeight: 800, letterSpacing: '-0.03em', margin: 0 }}>DuneBroom</h1>
        <h2 style={{ fontSize: 28, fontWeight: 400, margin: '1.2rem 0' }}>Sweep Clean, Think Smart</h2>
        <p style={{ fontSize: 22, maxWidth: 600, margin: '0 auto 2rem auto' }}>
          Robotics, youth innovation, and clean oceans.
        </p>
        <a href="/challenge" style={{
          background: '#fff',
          color: '#0e0e0e',
          fontWeight: 700,
          fontSize: 20,
          borderRadius: 8,
          padding: '12px 32px',
          textDecoration: 'none',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
        }}>
          Join the Challenge
        </a>
      </section>

      {/* Section 2 */}
      <section style={{
        background: '#fff',
        color: '#111',
        padding: '5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{ fontSize: 38, fontWeight: 700, marginBottom: 16 }}>What We Do</h2>
        <p style={{ fontSize: 20, maxWidth: 650, textAlign: 'center' }}>
          We build autonomous robots powered by edge AI to clean beaches and collect environmental data.
          Join our youth-powered movement for clean coasts and a smarter future.
        </p>
        {/* Optional: Replace with real images */}
        <div style={{ marginTop: 48, display: 'flex', gap: '2rem' }}>
          <div style={{ width: 260, height: 170, background: '#ddd', borderRadius: 18 }} />
          <div style={{ width: 260, height: 170, background: '#bbb', borderRadius: 18 }} />
        </div>
      </section>
    </main>
  );
}
