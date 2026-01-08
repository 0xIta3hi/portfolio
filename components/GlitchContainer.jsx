'use client';

import { useBreachMode } from '@/lib/useBreachMode';
import { cn } from '@/lib/utils';

export function GlitchContainer({ children, className = '' }) {
  const { isBreached } = useBreachMode();

  return (
    <div
      className={cn(
        'relative overflow-hidden transition-all duration-300',
        isBreached && 'glitch-container',
        className
      )}
      style={
        isBreached
          ? {
              animation: 'glitch 0.3s infinite',
            }
          : {}
      }
    >
      <style jsx>{`
        @keyframes glitch {
          0% {
            clip-path: inset(40% 0 61% 0);
            transform: translate(-2px, -2px);
          }
          20% {
            clip-path: inset(92% 0 1% 0);
            transform: translate(2px, 2px);
          }
          40% {
            clip-path: inset(43% 0 1% 0);
            transform: translate(-2px, 2px);
          }
          60% {
            clip-path: inset(25% 0 58% 0);
            transform: translate(2px, -2px);
          }
          80% {
            clip-path: inset(54% 0 7% 0);
            transform: translate(-2px, -2px);
          }
          100% {
            clip-path: inset(58% 0 43% 0);
            transform: translate(2px, 2px);
          }
        }
      `}</style>
      {children}
    </div>
  );
}
