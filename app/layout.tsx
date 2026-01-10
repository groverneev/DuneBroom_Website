import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "DuneBroom",
  description: "Robotics, Innovation, and Clean Oceans",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          boxSizing: "border-box",
        }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
