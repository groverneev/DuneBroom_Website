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
    </footer>
  );
}
