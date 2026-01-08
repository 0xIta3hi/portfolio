'use client';

import { useBreachMode } from '@/lib/useBreachMode';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function GlitchContainer({ children, className = '' }) {
  const { isBreached } = useBreachMode();
  const [showGlitch, setShowGlitch] = useState(false);

  useEffect(() => {
    if (!isBreached) {
      setShowGlitch(false);
      return;
    }

    // Initial glitch when entering breach mode
    setShowGlitch(true);
    const initialTimer = setTimeout(() => setShowGlitch(false), 600);

    // Set up recurring glitch every 3-4 seconds
    const interval = setInterval(() => {
      setShowGlitch(true);
      const timer = setTimeout(() => setShowGlitch(false), 600);
      return () => clearTimeout(timer);
    }, 3000 + Math.random() * 1000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isBreached]);

  return (
    <div
      className={cn(
        'relative overflow-hidden transition-all duration-300',
        className
      )}
      style={
        showGlitch
          ? {
              animation: 'glitch-once 0.6s ease-out forwards',
            }
          : {}
      }
    >
      <style jsx>{`
        @keyframes glitch-once {
          0% {
            clip-path: inset(0);
            transform: translate(0, 0);
          }
          20% {
            clip-path: inset(40% 0 61% 0);
            transform: translate(-3px, -2px);
          }
          40% {
            clip-path: inset(92% 0 1% 0);
            transform: translate(3px, 2px);
          }
          60% {
            clip-path: inset(15% 0 75% 0);
            transform: translate(-2px, 3px);
          }
          80% {
            clip-path: inset(60% 0 25% 0);
            transform: translate(2px, -3px);
          }
          100% {
            clip-path: inset(0);
            transform: translate(0, 0);
          }
        }
      `}</style>
      {children}
    </div>
  );
}
