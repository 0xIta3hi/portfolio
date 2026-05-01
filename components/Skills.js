'use client';

import { useEffect, useRef } from 'react';

const skills = {
  'Cloud & Security': ['Python', 'Go', 'Bash', 'AWS', 'Kubernetes', 'Docker'],
  'AI & Development': ['TypeScript', 'React/Next', 'FastAPI', 'LangChain', 'Neo4j'],
  'Security Tools': ['Burp Suite', 'Metasploit', 'Nmap', 'Wireshark', 'OWASP'],
};

export default function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.anime) {
      const anime = window.anime;

      // Animate skill items on scroll
      const skillItems = containerRef.current?.querySelectorAll('.skill-item');
      if (skillItems) {
        anime({
          targets: '.skill-item',
          opacity: [0, 1],
          scale: [0.8, 1],
          duration: 600,
          delay: anime.stagger(50),
          easing: 'easeOutExpo',
        });

        // Hover animation
        skillItems.forEach((item) => {
          item.addEventListener('mouseenter', () => {
            anime({
              targets: item,
              scale: 1.15,
              duration: 200,
              easing: 'easeOutQuad',
            });
          });

          item.addEventListener('mouseleave', () => {
            anime({
              targets: item,
              scale: 1,
              duration: 200,
              easing: 'easeOutQuad',
            });
          });
        });
      }
    }
  }, []);

  return (
    <section className="section" id="skills">
      <div className="skills-container" ref={containerRef}>
        <h2 className="section-title">
          <span className="text-gradient">Technical Skills</span>
        </h2>

        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skills-category">
            <h3 className="skills-category-title">{category}</h3>
            <div className="skills-list">
              {items.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
