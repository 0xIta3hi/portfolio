'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { useHackerMode } from '@/lib/store';

export function Node({ position, label, data }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const { isHackerMode } = useHackerMode();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
    }
  });

  const nodeColor = isHackerMode ? '#ff0055' : '#00ffff';
  const scale = hovered ? 1.5 : 1;

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        scale={scale}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial
          color={nodeColor}
          toneMapped={false}
          emissive={nodeColor}
          emissiveIntensity={2}
        />
      </mesh>

      {/* Glow outline */}
      <mesh scale={scale}>
        <sphereGeometry args={[0.52, 32, 32]} />
        <meshBasicMaterial
          color={nodeColor}
          transparent
          opacity={0.1}
          toneMapped={false}
        />
      </mesh>

      {/* Floating label on hover */}
      {hovered && (
        <Html position={[0, 1.2, 0]} center distanceFactor={1.5}>
          <div className="px-3 py-2 bg-black/80 border border-cyan-500 rounded text-xs font-mono text-cyan-400 whitespace-nowrap shadow-lg">
            {label}
          </div>
        </Html>
      )}
    </group>
  );
}
