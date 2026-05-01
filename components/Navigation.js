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

      const handleScroll = () => {
        const links = document.querySelectorAll('.nav-links a');
        const sections = document.querySelectorAll('.section');

        let current = '';
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 200) {
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

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <nav ref={navRef} className="bg-dark-bg">
      <div className="nav-container">
        <a href="#" className="nav-logo">
          AB
        </a>
        <ul className="nav-links">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
