import HeroBanner from '../components/HeroBanner'
import ActionVideo from '../components/ActionVideo'

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <ActionVideo />
      <section style={{ maxWidth: 700, margin: '3rem auto', textAlign: 'center' }}>
        <h2>Building the next generation of robotic ocean stewards</h2>
        <p>
          Join our youth-powered mission for clean beaches with robotics, edge AI, and open data!
        </p>
        <div style={{ marginTop: 32 }}>
          <a href="/challenge" style={{
            padding: '12px 24px', background: '#059669', color: 'white',
            borderRadius: 8, textDecoration: 'none', marginRight: 16
          }}>#BuildTheBroom Challenge</a>
          <a href="/podcast" style={{
            padding: '12px 24px', background: '#0ea5e9', color: 'white',
            borderRadius: 8, textDecoration: 'none'
          }}>Listen to the Podcast</a>
        </div>
      </section>
    </main>
  )
}
