'use client';

import { useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import './home.css';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.anime) {
      const anime = window.anime;

      // Stagger fade-in for sections
      anime.set('.section', { opacity: 0, y: 30 });
      
      const observerOptions = {
        threshold: 0.1,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            anime({
              targets: entry.target,
              opacity: [0, 1],
              y: [30, 0],
              duration: 800,
              easing: 'easeOutExpo',
            });
          }
        });
      }, observerOptions);

      document.querySelectorAll('.section').forEach((section) => {
        observer.observe(section);
      });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <main className="min-h-screen" ref={containerRef}>
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </main>
  );
}
