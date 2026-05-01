'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.anime) {
      const anime = window.anime;

      // Split text into letters for stagger animation
      const titleElement = titleRef.current;
      if (titleElement) {
        const text = titleElement.textContent;
        titleElement.textContent = '';
        
        text.split('').forEach((letter, index) => {
          const span = document.createElement('span');
          span.textContent = letter === ' ' ? '\u00A0' : letter;
          span.className = 'letter';
          span.style.display = 'inline-block';
          span.style.opacity = '0';
          titleElement.appendChild(span);
        });

        // Animate letters
        anime({
          targets: '.hero-title .letter',
          opacity: [0, 1],
          translateY: [40, 0],
          duration: 600,
          delay: anime.stagger(30),
          easing: 'easeOutExpo',
        });
      }

      // Stagger other elements
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

      // Floating animation
      anime({
        targets: '.hero-container',
        translateY: [0, -10, 0],
        duration: 4000,
        loop: true,
        easing: 'easeInOutSine',
      });
    }

    // Mouse tracking effect for text magnification
    const handleMouseMove = (e) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create magnifying effect
      const distance = Math.sqrt(
        Math.pow(x - rect.width / 2, 2) + Math.pow(y - rect.height / 2, 2)
      );
      const maxDistance = Math.sqrt(
        Math.pow(rect.width / 2, 2) + Math.pow(rect.height / 2, 2)
      );
      const scale = 1 + (1 - distance / maxDistance) * 0.1;

      const letters = titleRef.current?.querySelectorAll('.letter');
      if (letters) {
        letters.forEach((letter) => {
          const letterRect = letter.getBoundingClientRect();
          const letterX = letterRect.left - rect.left + letterRect.width / 2;
          const letterY = letterRect.top - rect.top + letterRect.height / 2;

          const letterDistance = Math.sqrt(
            Math.pow(x - letterX, 2) + Math.pow(y - letterY, 2)
          );
          const letterScale = 1 + Math.max(0, 1 - letterDistance / 150) * 0.3;

          letter.style.transform = `scale(${letterScale})`;
          letter.style.transition = 'transform 0.1s ease-out';
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section
      className="section hero-container"
      id="home"
      ref={containerRef}
    >
      <div className="text-center">
        <h1 className="hero-title text-gradient" ref={titleRef}>
          Aryan Bharadiya
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
