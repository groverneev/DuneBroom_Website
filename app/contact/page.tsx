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
        Fill out the form below or email us directly.
      </p>
      <div style={{
        margin: "2rem 0",
        padding: "2rem",
        background: "#bbf7d0",
        borderRadius: 10,
        boxShadow: "0 2px 12px rgba(16,102,52,0.06)"
      }}>
        {/* Replace with your email */}
        <strong>Email:</strong> <a href="mailto:groverneev@gmail.com" style={{ color: "#000000" }}>groverneev@gmail.com</a>
        <br /><br />
        {/* Optional: Embed a Google Form or Typeform */}
        {/* <iframe src="YOUR_FORM_LINK_HERE" width="100%" height="400" frameBorder="0" style={{border:0}} allowFullScreen></iframe> */}
      </div>
      <p>
        You can also reach out to us on social media or through our project pages.
      </p>
    </main>
  );
}
