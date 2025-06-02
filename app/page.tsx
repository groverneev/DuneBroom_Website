import HeroBanner from '../components/HeroBanner'
import ActionVideo from '../components/ActionVideo'

export default function Home() {
  return (
    <main style={{ background: '#f8fafc' }}>
      <HeroBanner />
      <ActionVideo />
      <section style={{ 
        maxWidth: 700, 
        margin: '3rem auto', 
        textAlign: 'center',
        background: '#ffffff',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(37,99,235,0.06)',
        padding: '2rem'
      }}>
        <h2 style={{ color: "#2563eb" }}>Building the next generation of robotic ocean stewards</h2>
        <p style={{ color: "#64748b" }}>
          Join our youth-powered mission for clean beaches with robotics, edge AI, and open data!
        </p>
        <div style={{ marginTop: 32 }}>
          <a href="/challenge" style={{
            padding: '12px 24px',
            background: '#4ade80', // Seafoam green
            color: '#22223b',
            borderRadius: 8,
            textDecoration: 'none',
            marginRight: 16,
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(16,185,129,0.10)'
          }}>#BuildTheBroom Challenge</a>
          <a href="/podcast" style={{
            padding: '12px 24px',
            background: '#2563eb', // Deep blue
            color: 'white',
            borderRadius: 8,
            textDecoration: 'none',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(37,99,235,0.10)'
          }}>Listen to the Podcast</a>
        </div>
      </section>
    </main>
  )
}
