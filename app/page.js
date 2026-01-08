'use client';

import dynamic from 'next/dynamic';
import { useHackerMode } from '@/lib/store';
import { useEffect, useState } from 'react';

const Canvas = dynamic(
  () => import('@react-three/fiber').then((mod) => mod.Canvas),
  { ssr: false }
);

const ProjectGraph = dynamic(
  () => import('@/components/ProjectGraph').then((mod) => mod.ProjectGraph),
  { ssr: false }
);

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { isHackerMode, toggleHackerMode } = useHackerMode();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-screen h-screen bg-black relative overflow-hidden">
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ProjectGraph />
      </Canvas>

      {/* UI Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left: Title */}
        <div className="absolute top-6 left-6 pointer-events-auto">
          <h1 className="text-2xl font-bold text-cyan-400 font-mono tracking-widest">
            NEURAL_NEXUS
          </h1>
          <p className="text-xs text-cyan-500 font-mono mt-1 opacity-70">
            Knowledge Graph V1.0
          </p>
        </div>

        {/* Top-right: Hacker Mode Toggle */}
        <div className="absolute top-6 right-6 pointer-events-auto">
          <button
            onClick={toggleHackerMode}
            className={`px-4 py-2 font-mono text-sm font-bold rounded border-2 transition-all duration-300 ${
              isHackerMode
                ? 'bg-red-500/20 border-red-500 text-red-400 shadow-lg shadow-red-500/50'
                : 'bg-cyan-500/10 border-cyan-500 text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30'
            }`}
          >
            {isHackerMode ? '⚡ HACKER_MODE [ON]' : '◯ HACKER_MODE [OFF]'}
          </button>
        </div>

        {/* Bottom: Credits/Info */}
        <div className="absolute bottom-6 left-6 pointer-events-auto text-xs font-mono text-cyan-600/60">
          <p>Hover over nodes to explore • Use mouse to rotate • Scroll to zoom</p>
          <p className="mt-2">Built with Three.js • React Three Fiber • Cyber-Neural Aesthetic</p>
        </div>

        {/* Bottom-right: Status Indicator */}
        <div className="absolute bottom-6 right-6 pointer-events-auto">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-500">
            <div className={`w-2 h-2 rounded-full ${isHackerMode ? 'bg-red-500' : 'bg-cyan-500'} animate-pulse`}></div>
            <span>{isHackerMode ? 'GLITCH_MODE' : 'STABLE_MODE'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
