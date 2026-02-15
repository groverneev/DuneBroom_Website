export default function Footer() {
  return (
    <footer
      style={{
        padding: "24px 2rem",
        background: "var(--background)",
        borderTop: "1px solid var(--border)",
        textAlign: "center",
        color: "var(--muted)",
        fontSize: 14,
        transition: "background-color 0.3s, border-color 0.3s, color 0.3s",
      }}
    >
      &copy; {new Date().getFullYear()} DuneBroom. All rights reserved.
    </footer>
  );
}
