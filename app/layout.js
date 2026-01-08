import "./globals.css";

export const metadata = {
  title: "Neural Nexus",
  description: "Cyber-Neural Knowledge Graph Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
