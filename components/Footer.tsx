export default function Footer() {
  return (
    <footer
      style={{
        padding: "24px 2rem",
        background: "#fff",
        borderTop: "1px solid #e5e7eb",
        textAlign: "center",
        color: "#6b7280",
        fontSize: 14,
      }}
    >
      &copy; {new Date().getFullYear()} DuneBroom. All rights reserved.
    </footer>
  );
}
