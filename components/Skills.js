'use client';

const skills = {
  'Cloud & Security': ['Python', 'Go', 'Bash', 'AWS', 'Kubernetes', 'Docker'],
  'AI & Development': ['TypeScript', 'React/Next', 'FastAPI', 'LangChain', 'Neo4j'],
  'Security Tools': ['Burp Suite', 'Metasploit', 'Nmap', 'Wireshark', 'OWASP'],
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="skills-container">
        <h2 className="section-title">
          <span className="text-gradient">Technical Skills</span>
        </h2>

        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skills-category">
            <h3 className="skills-category-title">{category}</h3>
            <div className="skills-list">
              {items.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
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
