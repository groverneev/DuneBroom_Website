// app/page.tsx

export default function Home() {
  return (
    <main style={{
      background: '#f5f6fa',
      fontFamily: 'Inter, sans-serif'
    }}>
      {/* HERO SECTION */}
      <section id="hero" style={{
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
        <a href="#challenge" style={{
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

      {/* ABOUT PREVIEW */}
      <section id="about" style={{
        background: '#fff',
        color: '#111',
        padding: '5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{ fontSize: 34, fontWeight: 700, marginBottom: 16 }}>About DuneBroom</h2>
        <p style={{ fontSize: 20, maxWidth: 650, textAlign: 'center' }}>
          DuneBroom is a student-led robotics project tackling beach pollution with autonomous robots and edge AI. Led by youth, powered by community.
        </p>
        <a href="/about" style={{
          marginTop: 24,
          color: '#0e0e0e',
          fontWeight: 600,
          textDecoration: 'underline'
        }}>
          Learn more about us &rarr;
        </a>
      </section>

      {/* CHALLENGE PREVIEW */}
      <section id="challenge" style={{
        background: '#eafcf6',
        color: '#111',
        padding: '5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{ fontSize: 34, fontWeight: 700, marginBottom: 16 }}>#BuildTheBroom Challenge</h2>
        <p style={{ fontSize: 20, maxWidth: 650, textAlign: 'center' }}>
          Compete with other students to build, program, or test new ideas for the DuneBroom robot. Show off your engineering, win prizes, and join a global mission!
        </p>
        <a href="/challenge" style={{
          marginTop: 24,
          color: '#166534',
          fontWeight: 600,
          textDecoration: 'underline'
        }}>
          View the Challenge Details &rarr;
        </a>
      </section>

      {/* PODCAST PREVIEW */}
      <section id="podcast" style={{
        background: '#fff',
        color: '#111',
        padding: '5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{ fontSize: 34, fontWeight: 700, marginBottom: 16 }}>Podcast: Ocean Stewards</h2>
        <p style={{ fontSize: 20, maxWidth: 650, textAlign: 'center' }}>
          Listen to interviews with engineers, youth leaders, and experts working to save our coasts.
        </p>
        <a href="/podcast" style={{
          marginTop: 24,
          color: '#0e0e0e',
          fontWeight: 600,
          textDecoration: 'underline'
        }}>
          Listen to Episodes &rarr;
        </a>
      </section>

      {/* OUTREACH PREVIEW */}
      <section id="outreach" style={{
        background: '#f3f7fd',
        color: '#111',
        padding: '5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{ fontSize: 34, fontWeight: 700, marginBottom: 16 }}>Outreach & Resources</h2>
        <p style={{ fontSize: 20, maxWidth: 650, textAlign: 'center' }}>
          Access lesson plans, advocacy toolkits, and opportunities for teachers and students to join DuneBroom’s movement.
        </p>
        <a href="/outreach" style={{
          marginTop: 24,
          color: '#1e40af',
          fontWeight: 600,
          textDecoration: 'underline'
        }}>
          See all resources &rarr;
        </a>
      </section>

      {/* CONTACT PREVIEW */}
      <section id="contact" style={{
        background: '#fff',
        color: '#111',
        padding: '5rem 2rem 6rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{ fontSize: 34, fontWeight: 700, marginBottom: 16 }}>Contact & Get Involved</h2>
        <p style={{ fontSize: 20, maxWidth: 650, textAlign: 'center' }}>
          Have a question? Want to collaborate, sponsor, or volunteer? Let’s connect!
        </p>
        <a href="/contact" style={{
          marginTop: 24,
          color: '#16a34a',
          fontWeight: 600,
          textDecoration: 'underline'
        }}>
          Get in Touch &rarr;
        </a>
      </section>
    </main>
  );
}
