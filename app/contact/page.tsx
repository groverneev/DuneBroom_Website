// app/contact/page.tsx

export default function ContactPage() {
  return (
    <main style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#fff',
      padding: 0,
      margin: 0,
      fontFamily: 'Inter, Arial, Helvetica, sans-serif'
    }}>
      <section style={{
        marginTop: '5rem',
        background: '#f7f7f7',
        borderRadius: 24,
        boxShadow: '0 6px 32px rgba(20,20,25,0.06)',
        padding: '3rem 2rem 2rem 2rem',
        width: '100%',
        maxWidth: 540,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h1 style={{
          fontSize: 34,
          fontWeight: 800,
          letterSpacing: '-0.01em',
          color: '#0e0e0e',
          marginBottom: 22
        }}>Contact</h1>
        
        {/* --- Contact Links --- */}
        <div style={{ display: 'flex', gap: 30, marginBottom: 30 }}>
          <a
            href="https://github.com/groverneev"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#111',
              color: '#fff',
              fontWeight: 600,
              padding: '12px 24px',
              borderRadius: 8,
              textDecoration: 'none',
              fontSize: 18,
              transition: 'background 0.2s'
            }}
          >
            GitHub
          </a>
          <a
            href="https://x.com/lightningpro535"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#13c285',
              color: '#fff',
              fontWeight: 600,
              padding: '12px 24px',
              borderRadius: 8,
              textDecoration: 'none',
              fontSize: 18,
              transition: 'background 0.2s'
            }}
          >
            X (Twitter)
          </a>
        </div>

        {/* --- Google Form Embed --- */}
        <div style={{ width: '100%' }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeCYe7XtNxxxxxxxYOUR_FORM_LINK_HERE/viewform?embedded=true"
            width="100%"
            height="560"
            frameBorder="0"
            style={{
              border: "none",
              borderRadius: 10,
              background: "#fff",
              minHeight: 380,
              marginTop: 10
            }}
            allowFullScreen
            title="Contact Form"
          >
            Loading…
          </iframe>
        </div>
      </section>
    </main>
  );
}
