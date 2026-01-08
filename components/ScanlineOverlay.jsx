'use client';

import { useBreachMode } from '@/lib/useBreachMode';

export function ScanlineOverlay() {
  const { isBreached } = useBreachMode();

  if (!isBreached) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        backgroundImage: `repeating-linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.05) 0px,
          rgba(0, 0, 0, 0.05) 1px,
          transparent 1px,
          transparent 2px
        )`,
        animation: 'scanlines 15s linear infinite',
      }}
    >
      <style jsx>{`
        @keyframes scanlines {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(3px);
          }
        }
      `}</style>
    </div>
  );
}
