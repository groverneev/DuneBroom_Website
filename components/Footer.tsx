export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 48,
        padding: 24,
        background: "#0e1321",
        textAlign: "center",
        color: "#828893",
        fontSize: 14,
      }}
    >
      &copy; {new Date().getFullYear()} DuneBroom. All rights reserved.{" "}
      <a
        href="/privacy-policy"
        style={{
          color: "#828893",
          textDecoration: "none",
          fontSize: "14px",
          marginTop: "8px",
          display: "inline-block",
        }}
      >
        Privacy Policy
      </a>
    </footer>
  );
}
