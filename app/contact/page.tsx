export default function ContactPage() {
  return (
    <main style={{
      minHeight: '80vh',
      padding: '4rem 0 2rem 0',
      background: '#fafafa'
    }}>
      <div style={{
        maxWidth: 640,
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontWeight: 700,
          fontSize: 36,
          marginBottom: 8,
          color: '#18181b',
          letterSpacing: '-0.03em'
        }}>Contact Us</h1>
        <p style={{
          color: '#52525b',
          fontSize: 18,
          marginBottom: 32
        }}>
          Drop us a line, ask a question, or just say hello!
        </p>
        <div style={{
          display: 'flex',
          gap: 16,
          justifyContent: 'center',
          marginBottom: 32
        }}>
          <a
            href="https://github.com/groverneev"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#18181b',
              color: '#fff',
              borderRadius: 8,
              padding: '10px 24px',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            GitHub
          </a>
          <a
            href="https://x.com/lightningpro535"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#14b8a6',
              color: '#fff',
              borderRadius: 8,
              padding: '10px 24px',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            X (Twitter)
          </a>
        </div>
        {/* Embedded Google Form */}
        <div style={{
          background: '#fff',
          borderRadius: 16,
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          padding: 24,
          minHeight: 420,
          margin: '0 auto',
        }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc2Mu-JSmoX_qaa0uosqCasG70Cu_TV9zOaYJND9c8svt6qgQ/viewform?embedded=true"
            width="100%"
            height="420"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            style={{ border: 'none' }}
            title="Contact Form"
          />
        </div>
      </div>
    </main>
  );
}



