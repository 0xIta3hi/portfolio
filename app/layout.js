import './globals.css';

export const metadata = {
  title: 'Aryan Bharadiya | Cloud Security Researcher & AI Architect',
  description: 'Cloud security researcher and AI architect. Specializing in Neo4j memory systems, enterprise AI middleware, cloud security, and agentic AI development.',
  keywords: ['cloud security', 'AI architect', 'security researcher', 'Neo4j', 'LangChain', 'AWS', 'Azure', 'GCP'],
  authors: [{ name: 'Aryan Bharadiya', url: 'https://github.com/0xIta3hi' }],
  creator: 'Aryan Bharadiya',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://0xita3hi.com',
    title: 'Aryan Bharadiya | Cloud Security Researcher & AI Architect',
    description: 'Cloud security researcher and AI architect building secure systems and intelligent agents.',
    siteName: 'Aryan Bharadiya Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aryan Bharadiya | Cloud Security Researcher & AI Architect',
    description: 'Cloud security researcher and AI architect.',
    creator: '@0xIta3hi',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
