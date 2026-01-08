'use client';

import { useBreachMode } from '@/lib/useBreachMode';
import { TextDecrypt } from '@/components/TextDecrypt';
import { GlitchContainer } from '@/components/GlitchContainer';
import { BreachToggle } from '@/components/BreachToggle';
import { ScanlineOverlay } from '@/components/ScanlineOverlay';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  const { isBreached } = useBreachMode();

  const projects = [
    {
      name: 'MemGraph',
      normalDesc: 'Neo4j + LLM Memory Architecture',
      hackerDesc: 'True long-term NPC memory with relationship graphs',
      stack: ['Neo4j', 'LangChain', 'FastAPI', 'React'],
    },
    {
      name: 'AI NPC Middleware',
      normalDesc: 'Enterprise SDK for Game Studios',
      hackerDesc: 'Unity/Unreal integration with <1 hour setup',
      stack: ['TypeScript', 'C++', 'gRPC', 'Docker'],
    },
    {
      name: 'GhostGate',
      normalDesc: 'Multi-Service Honeypot',
      hackerDesc: 'Complete C++ implementation with attack pattern analysis',
      stack: ['C++', 'Networking', 'Security'],
    },
    {
      name: 'Cloud Purple Team Labs',
      normalDesc: '10 Production Security Projects',
      hackerDesc: 'Attack path simulation & CSPM tool development',
      stack: ['Python', 'Terraform', 'Kubernetes', 'Go'],
    },
  ];

  const skills = {
    security: ['Python', 'Go', 'Bash', 'AWS', 'Kubernetes', 'Docker'],
    ai: ['TypeScript', 'React/Next', 'FastAPI', 'LangChain', 'Neo4j'],
    tools: ['Burp Suite', 'Metasploit', 'Nmap', 'Wireshark', 'OWASP'],
  };

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        isBreached
          ? 'bg-black text-[#00FF41]'
          : 'bg-[#F3F4F6] text-[#1F2937]'
      }`}
    >
      <ScanlineOverlay />
      <BreachToggle />

      {/* Hero Section */}
      <header
        className={`relative flex items-center justify-center min-h-screen px-4 ${
          isBreached ? 'border-b border-[#00FF41]/30' : 'border-b border-gray-300'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Terminal Prefix - Hidden from display but for hacker mode */}
          {isBreached && (
            <div
              className={`text-sm font-mono ${
                isBreached
                  ? 'text-[#00FF41]/70'
                  : 'text-[#1F2937]/70'
              }`}
              aria-hidden="true"
            >
              ┌──(0xIta3hi@base)-[~]
            </div>
          )}

          {/* Full Name - H1 for ATS */}
          <GlitchContainer className="mb-6">
            {!isBreached ? (
              <h1
                className={`text-6xl font-bold tracking-tight transition-all duration-300 font-sans`}
              >
                Aryan Bharadiya
              </h1>
            ) : (
              <TextDecrypt
                textNormal="Aryan Bharadiya"
                textHacker="0xIta3hi"
                as="h1"
                className={`text-6xl font-bold tracking-tight transition-all duration-300 ${
                  isBreached
                    ? 'font-mono drop-shadow-[0_0_10px_#00FF41]'
                    : 'font-sans'
                }`}
              />
            )}
          </GlitchContainer>

          {/* Professional Title */}
          <div className={`text-2xl transition-all duration-300 ${
            isBreached
              ? 'font-mono opacity-90'
              : 'opacity-70'
          }`}>
            {isBreached ? (
              <TextDecrypt
                textNormal="Cloud Security Researcher | AI Architect"
                textHacker="Cloud Security Researcher | Exploit Developer"
                as="p"
              />
            ) : (
              <h2>Cloud Security Researcher &amp; AI Architect</h2>
            )}
          </div>

          {/* Professional Summary */}
          <div
            className={`max-w-2xl mx-auto space-y-4 transition-all duration-300 ${
              isBreached ? 'font-mono text-sm' : 'font-sans text-lg'
            }`}
          >
            {isBreached ? (
              <TextDecrypt
                textNormal="I'm a passionate developer creating elegant, performant web applications. Specialized in modern React, Next.js, and cloud technologies."
                textHacker="I hunt vulnerabilities in production systems. Expertise in penetration testing, exploit development, and security auditing across distributed infrastructure."
                as="p"
                className={`leading-relaxed ${
                  isBreached ? 'opacity-80' : 'opacity-60'
                }`}
              />
            ) : (
              <>
                <p className="leading-relaxed opacity-70">
                  Cloud security researcher and AI architect with expertise in building secure, scalable systems and intelligent agent architectures. Passionate about breaking into secure systems, understanding vulnerabilities, and architecting AI-driven solutions.
                </p>
                <p className="leading-relaxed opacity-70">
                  Currently working on Neo4j-based memory systems for NPCs, enterprise AI middleware, and cloud security projects across AWS, Azure, and GCP.
                </p>
              </>
            )}
          </div>

          {/* CTA Buttons */}
          <nav className="flex gap-4 justify-center pt-8" aria-label="Call to action">
            <a
              href="https://github.com/0xIta3hi"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 font-bold transition-all duration-300 rounded border-2 inline-block ${
                isBreached
                  ? 'border-[#00FF41] text-[#00FF41] bg-black hover:bg-[#00FF41] hover:text-black'
                  : 'border-gray-900 text-gray-900 bg-white hover:bg-gray-900 hover:text-white'
              }`}
            >
              {isBreached ? '[ ACCESS EXPLOITS ]' : 'View GitHub'}
            </a>
            <a
              href="mailto:aryanbharadiyak2006@gmail.com"
              className={`px-8 py-3 font-bold transition-all duration-300 rounded border-2 inline-block ${
                isBreached
                  ? 'border-[#00FF41]/50 text-[#00FF41]/70 bg-black/50 hover:border-[#00FF41] hover:text-[#00FF41]'
                  : 'border-gray-400 text-gray-600 bg-gray-50 hover:bg-gray-100'
              }`}
            >
              {isBreached ? '[ CONTACT ]' : 'Contact Me'}
            </a>
          </nav>
        </div>
      </header>

      {/* Featured Projects Section */}
      <section className="py-20 px-4" aria-labelledby="projects-heading">
        <div className="max-w-6xl mx-auto">
          <h2
            id="projects-heading"
            className={`text-4xl font-bold mb-12 ${
              isBreached ? 'font-mono drop-shadow-[0_0_5px_#00FF41]' : ''
            }`}
          >
            {isBreached ? '[ ACTIVE PROJECTS ]' : 'Featured Projects'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <article
                key={idx}
                className={`p-6 rounded transition-all duration-300 ${
                  isBreached
                    ? 'bg-black/50 border border-[#00FF41]/30 hover:border-[#00FF41]/60'
                    : 'bg-white border border-gray-200 hover:border-gray-400'
                }`}
              >
                <GlitchContainer>
                  <h3 className={`text-2xl font-bold mb-3 ${isBreached ? 'font-mono text-[#00FF41]' : 'text-gray-900'}`}>
                    {project.name}
                  </h3>
                  <p className={`text-lg mb-4 ${isBreached ? 'font-mono text-sm opacity-80' : 'opacity-70'}`}>
                    {isBreached ? project.hackerDesc : project.normalDesc}
                  </p>
                </GlitchContainer>
                <div className="flex flex-wrap gap-2" aria-label="Technologies">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1 rounded transition-all duration-300 ${
                        isBreached
                          ? 'bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/30'
                          : 'bg-gray-100 text-gray-700 border border-gray-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className={`py-20 px-4 ${
          isBreached ? 'border-t border-[#00FF41]/20' : 'border-t border-gray-300'
        }`}
        aria-labelledby="skills-heading"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            id="skills-heading"
            className={`text-4xl font-bold mb-12 ${
              isBreached ? 'font-mono drop-shadow-[0_0_5px_#00FF41]' : ''
            }`}
          >
            {isBreached ? '[ ARSENAL ]' : 'Technical Skills'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Security & Cloud */}
            <div>
              <h3
                className={`text-xl font-bold mb-4 ${
                  isBreached ? 'font-mono text-[#00FF41]' : 'text-gray-900'
                }`}
              >
                Cloud &amp; Security
              </h3>
              <dl className="space-y-3">
                {skills.security.map((skill, i) => (
                  <div key={i} className={isBreached ? 'font-mono text-sm' : ''}>
                    <dt className="text-sm font-medium mb-1">{skill}</dt>
                    <dd className="sr-only">Advanced</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* AI & Development */}
            <div>
              <h3
                className={`text-xl font-bold mb-4 ${
                  isBreached ? 'font-mono text-[#00FF41]' : 'text-gray-900'
                }`}
              >
                AI &amp; Development
              </h3>
              <dl className="space-y-3">
                {skills.ai.map((skill, i) => (
                  <div key={i} className={isBreached ? 'font-mono text-sm' : ''}>
                    <dt className="text-sm font-medium mb-1">{skill}</dt>
                    <dd className="sr-only">Advanced</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Offensive Tools */}
            <div>
              <h3
                className={`text-xl font-bold mb-4 ${
                  isBreached ? 'font-mono text-[#00FF41]' : 'text-gray-900'
                }`}
              >
                Security Tools
              </h3>
              <dl className="space-y-3">
                {skills.tools.map((skill, i) => (
                  <div key={i} className={isBreached ? 'font-mono text-sm' : ''}>
                    <dt className="text-sm font-medium mb-1">{skill}</dt>
                    <dd className="sr-only">Advanced</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer
        className={`py-20 px-4 ${
          isBreached ? 'border-t border-[#00FF41]/20' : 'border-t border-gray-300'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-4xl font-bold mb-8 ${
              isBreached ? 'font-mono drop-shadow-[0_0_5px_#00FF41]' : ''
            }`}
          >
            {isBreached ? '[ CONNECT ]' : 'Connect'}
          </h2>

          <nav className="flex gap-4 justify-center flex-wrap mb-8" aria-label="Social links">
            <a
              href="https://twitter.com/0xIta3hi"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 font-bold transition-all duration-300 rounded border ${
                isBreached
                  ? 'border-[#00FF41]/50 text-[#00FF41] hover:border-[#00FF41] hover:bg-[#00FF41]/10'
                  : 'border-gray-400 text-gray-700 hover:border-gray-700 hover:bg-gray-100'
              }`}
            >
              {isBreached ? '[ Twitter ]' : 'Twitter'}
            </a>
            <a
              href="https://linkedin.com/in/aryan-bharadiya"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 font-bold transition-all duration-300 rounded border ${
                isBreached
                  ? 'border-[#00FF41]/50 text-[#00FF41] hover:border-[#00FF41] hover:bg-[#00FF41]/10'
                  : 'border-gray-400 text-gray-700 hover:border-gray-700 hover:bg-gray-100'
              }`}
            >
              {isBreached ? '[ LinkedIn ]' : 'LinkedIn'}
            </a>
            <a
              href="https://github.com/0xIta3hi"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 font-bold transition-all duration-300 rounded border ${
                isBreached
                  ? 'border-[#00FF41]/50 text-[#00FF41] hover:border-[#00FF41] hover:bg-[#00FF41]/10'
                  : 'border-gray-400 text-gray-700 hover:border-gray-700 hover:bg-gray-100'
              }`}
            >
              {isBreached ? '[ GitHub ]' : 'GitHub'}
            </a>
            <a
              href="mailto:aryanbharadiyak2006@gmail.com"
              className={`px-6 py-2 font-bold transition-all duration-300 rounded border ${
                isBreached
                  ? 'border-[#00FF41]/50 text-[#00FF41] hover:border-[#00FF41] hover:bg-[#00FF41]/10'
                  : 'border-gray-400 text-gray-700 hover:border-gray-700 hover:bg-gray-100'
              }`}
            >
              {isBreached ? '[ Email ]' : 'Email'}
            </a>
          </nav>

          <p
            className={`text-sm font-mono ${
              isBreached ? 'text-[#00FF41]/70' : 'text-gray-600'
            }`}
          >
            {isBreached
              ? '└─$ Breaking clouds by day, building sentient NPCs by night'
              : '© 2026 Aryan Bharadiya. All rights reserved.'}
          </p>
        </div>
      </footer>
    </main>
  );
}
