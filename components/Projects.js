'use client';

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
  return (
    <section className="section" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
