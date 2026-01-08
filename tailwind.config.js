/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        corporate: {
          bg: '#F3F4F6',
          text: '#1F2937',
          accent: '#3B82F6',
        },
        hacker: {
          bg: '#050505',
          text: '#00FF41',
          accent: '#FF0055',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Geist', 'sans-serif'],
      },
      backgroundColor: {
        black: '#050505',
      },
      textColor: {
        neon: '#00FF41',
      },
    },
  },
  plugins: [],
};
