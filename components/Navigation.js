'use client';

import { useEffect, useRef } from 'react';

export default function Navigation() {
  const navRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.anime) {
      const anime = window.anime;

      anime({
        targets: 'nav',
        opacity: [0, 1],
        y: [-20, 0],
        duration: 600,
        easing: 'easeOutExpo',
      });

      const handleScroll = (e) => {
        const links = document.querySelectorAll('.nav-links a');
        const sections = document.querySelectorAll('.section');
        const mainContent = document.querySelector('.main-content');
        const scrollTop = mainContent?.scrollTop || window.scrollY;

        let current = '';
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          if (scrollTop >= sectionTop - 200) {
            current = section.getAttribute('id');
          }
        });

        links.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
          }
        });
      };

      const mainContent = document.querySelector('.main-content');
      if (mainContent) {
        mainContent.addEventListener('scroll', handleScroll);
        return () => mainContent.removeEventListener('scroll', handleScroll);
      } else {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }
    }
  }, []);

  return (
    <nav ref={navRef} className="sidebar-nav">
      <div className="nav-container">
        <a href="#" className="nav-logo">
          🏠
        </a>
        <ul className="nav-links">
          <li>
            <a href="#projects" title="Projects">
              <span className="icon">📁</span>
              <span className="label">Projects</span>
            </a>
          </li>
          <li>
            <a href="#skills" title="Skills">
              <span className="icon">👤</span>
              <span className="label">About</span>
            </a>
          </li>
          <li>
            <a href="#blog" title="Blog">
              <span className="icon">🎵</span>
              <span className="label">Blog</span>
            </a>
          </li>
          <li>
            <a href="#contact" title="Contact">
              <span className="icon">📡</span>
              <span className="label">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
