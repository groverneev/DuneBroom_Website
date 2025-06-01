export default function ActionVideo() {
  return (
    <section style={{
      maxWidth: 760, margin: '2rem auto', textAlign: 'center'
    }}>
      <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 12 }}>See DuneBroom in Action</h2>
      {/* Replace src with your YouTube or video URL */}
      <div style={{
        width: '100%', aspectRatio: '16/9', background: '#e5e7eb', borderRadius: 16,
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="DuneBroom in Action"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </section>
  )
}
