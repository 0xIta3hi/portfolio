import "./globals.css";

export const metadata = {
  title: "Aryan Bharadiya | Cloud Security Researcher & AI Architect",
  description:
    "Cloud security researcher and AI architect with expertise in building secure, scalable systems and intelligent agent architectures.",
  keywords: [
    "cloud security",
    "AI",
    "security research",
    "AI architect",
    "software engineer",
  ],
  authors: [{ name: "Aryan Bharadiya" }],
  openGraph: {
    title: "Aryan Bharadiya",
    description:
      "Cloud security researcher and AI architect",
    type: "website",
    url: "https://aryanbharadiya.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
