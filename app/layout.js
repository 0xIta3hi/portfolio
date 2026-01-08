import './globals.css';

export const metadata = {
  title: 'System Breach Portfolio',
  description: 'A dual-mode portfolio showcasing corporate and hacker aesthetics',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
