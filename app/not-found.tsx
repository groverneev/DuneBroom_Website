export default function NotFound() {
  return (
    <main style={{ background: "#fff", minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ color: "#111827", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
          <h1 style={{ fontSize: "20px", fontWeight: "bold", margin: 0 }}>404</h1>
          <div style={{ width: "1px", height: "64px", background: "#e5e7eb" }}></div>
          <p style={{ fontSize: "20px", margin: 0 }}>This page could not be found</p>
        </div>
      </div>
    </main>
  );
}
