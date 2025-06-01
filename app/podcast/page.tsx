export default function Podcast() {
  return (
    <main style={{ maxWidth: 700, margin: '2rem auto', padding: 24 }}>
      <h1>Youth Voices Podcast</h1>
      <iframe
        src="https://open.spotify.com/embed/show/your-podcast-id"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        loading="lazy"
        title="Podcast Player"
      />
      <ul>
        <li><strong>What is Edge AI?</strong></li>
        <li>Student-led robotics for the planet</li>
      </ul>
      {/* Replace with real podcast and show notes! */}
    </main>
  )
}
