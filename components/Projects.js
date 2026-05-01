'use client';

import { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'MemGraph',
    description: 'Neo4j + LLM Memory Architecture for building intelligent memory systems',
    tags: ['Neo4j', 'LangChain', 'FastAPI', 'React'],
  },
  {
    title: 'AI NPC Middleware',
    description: 'Enterprise SDK for Game Studios enabling advanced NPC interactions',
    tags: ['TypeScript', 'C++', 'gRPC', 'Docker'],
  },
  {
    title: 'GhostGate',
    description: 'Multi-Service Honeypot for detecting and analyzing security threats',
    tags: ['C++', 'Networking', 'Security'],
  },
  {
    title: 'Cloud Purple Team Labs',
    description: '10 Production Security Projects covering various cloud security scenarios',
    tags: ['Python', 'Terraform', 'Kubernetes', 'Go'],
  },
];

export default function Projects() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.anime) {
      const anime = window.anime;

      const cards = containerRef.current?.querySelectorAll('.project-card');
      if (!cards) return;

      // Initial animation
      anime({
        targets: '.project-card',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 800,
        delay: anime.stagger(100),
        easing: 'easeOutExpo',
      });

      // Hover effect with anime.js
      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          anime.set(card, { zIndex: 10 });
          anime({
            targets: card,
            translateY: -15,
            duration: 300,
            easing: 'easeOutQuad',
          });

          // Animate the tags
          anime({
            targets: card.querySelectorAll('.tag'),
            opacity: [0.7, 1],
            delay: anime.stagger(20),
            duration: 200,
            easing: 'easeOutQuad',
          });
        });

        card.addEventListener('mouseleave', () => {
          anime({
            targets: card,
            translateY: 0,
            duration: 300,
            easing: 'easeOutQuad',
            complete: () => anime.set(card, { zIndex: 1 }),
          });
        });
      });
    }
  }, []);

  return (
    <section className="section" id="projects">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <h2 className="section-title">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
