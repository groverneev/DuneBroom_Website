export default function ContactPage() {
  return (
    <main style={{
      padding: '2rem',
      maxWidth: '600px',
      margin: '0 auto',
      fontFamily: 'inherit'
    }}>
      <h1 style={{ marginBottom: 16 }}>Contact Us</h1>
      <p>
        Interested in DuneBroom? Have a question, want to collaborate, or just want to say hi?  
        Here are some ways you can contact us:
      </p>
      <div style={{
        margin: "2rem 0",
        padding: "2rem",
        background: "#bbf7d0",
        borderRadius: 10,
        boxShadow: "0 2px 12px rgba(16,102,52,0.06)",
        color: "#111" // sets all text to dark
      }}>
        <div style={{ marginBottom: "1rem" }}>
          <strong style={{ color: "#111" }}>Email:</strong><br />
          <a href="mailto:groverneev@gmail.com" style={{ color: "#166534", fontWeight: 500 }}>groverneev@gmail.com</a>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <strong style={{ color: "#111" }}>GitHub:</strong><br />
          <a href="https://github.com/groverneev" target="_blank" rel="noopener noreferrer" style={{ color: "#166534", fontWeight: 500 }}>
            github.com/groverneev
          </a>
        </div>
        <div>
          <strong style={{ color: "#111" }}>X:</strong><br />
          <span style={{ color: "#666", fontWeight: 500 }}>Coming soon!</span>
        </div>
      </div>
      <p>
        ...
      </p>
    </main>
  );
}
