'use client';

import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.anime) {
      const anime = window.anime;

      // Stagger text animation
      anime({
        targets: '.hero-title',
        opacity: [0, 1],
        y: [40, 0],
        duration: 800,
        delay: 200,
        easing: 'easeOutExpo',
      });

      anime({
        targets: '.hero-subtitle',
        opacity: [0, 1],
        y: [40, 0],
        duration: 800,
        delay: 400,
        easing: 'easeOutExpo',
      });

      anime({
        targets: '.hero-description',
        opacity: [0, 1],
        y: [40, 0],
        duration: 800,
        delay: 600,
        easing: 'easeOutExpo',
      });

      anime({
        targets: '.cta-button',
        opacity: [0, 1],
        y: [40, 0],
        duration: 800,
        delay: 800,
        easing: 'easeOutExpo',
      });
    }
  }, []);

  return (
    <section className="section hero-container" id="home">
      <div className="text-center">
        <h1 className="hero-title">
          <span className="text-gradient">Aryan Bharadiya</span>
        </h1>
        <p className="hero-subtitle">Cloud Security Researcher & AI Architect</p>
        <p className="hero-description">
          Building secure, scalable systems and intelligent agent architectures. Passionate about
          breaking into secure systems, understanding vulnerabilities, and architecting AI-driven
          solutions. Currently working on Neo4j-based memory systems for NPCs, enterprise AI
          middleware, and cloud security projects across AWS, Azure, and GCP.
        </p>
        <a href="#projects" className="cta-button">
          Explore My Work
        </a>
      </div>
    </section>
  );
}
