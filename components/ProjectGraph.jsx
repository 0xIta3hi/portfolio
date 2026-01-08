'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Line, Stars } from '@react-three/drei';
import { EffectComposer, Bloom, Glitch } from '@react-three/postprocessing';
import { useHackerMode } from '@/lib/store';
import { Node } from './Node';
import * as THREE from 'three';

// Define the nodes representing projects
const PROJECT_NODES = [
  { id: 1, label: 'Nettacker', position: [-3, 2, 0] },
  { id: 2, label: 'Lattice', position: [3, 2, 0] },
  { id: 3, label: 'mlpack', position: [0, -2, 2] },
  { id: 4, label: 'NeuroFlow', position: [-2, -1, -2] },
  { id: 5, label: 'CyberShell', position: [2, -1, -2] },
  { id: 6, label: 'Nexus', position: [0, 3, -1] },
];

// Create connections between nearby nodes
function createConnections() {
  const connections = [];
  for (let i = 0; i < PROJECT_NODES.length; i++) {
    for (let j = i + 1; j < PROJECT_NODES.length; j++) {
      const dist = new THREE.Vector3(...PROJECT_NODES[i].position).distanceTo(
        new THREE.Vector3(...PROJECT_NODES[j].position)
      );
      // Connect nodes that are close enough
      if (dist < 5.5) {
        connections.push([PROJECT_NODES[i].position, PROJECT_NODES[j].position]);
      }
    }
  }
  return connections;
}

function ConnectionLine({ start, end, isHackerMode }) {
  const lineColor = isHackerMode ? '#ff0055' : '#00ffff';
  return (
    <Line
      points={[start, end]}
      color={lineColor}
      lineWidth={0.5}
      transparent
      opacity={isHackerMode ? 0.6 : 0.3}
      fog={true}
    />
  );
}

export function ProjectGraph() {
  const groupRef = useRef();
  const { isHackerMode } = useHackerMode();
  const connections = useMemo(() => createConnections(), []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.0001;
    }
  });

  return (
    <>
      <color attach="background" args={['#050505']} />

      {/* Stars background */}
      <Stars radius={100} depth={50} count={500} factor={4} saturation={0.2} fade speed={1} />

      {/* Lighting */}
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />

      {/* Main graph group */}
      <group ref={groupRef}>
        {/* Render connections */}
        {connections.map((connection, idx) => (
          <ConnectionLine
            key={idx}
            start={connection[0]}
            end={connection[1]}
            isHackerMode={isHackerMode}
          />
        ))}

        {/* Render nodes */}
        {PROJECT_NODES.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            label={node.label}
            data={node}
          />
        ))}
      </group>

      {/* Orbit Controls */}
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={2}
        enableDamping
        dampingFactor={0.05}
      />

      {/* Post-processing Effects */}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          intensity={1.5}
          mipmapBlur
        />
        {isHackerMode && (
          <Glitch
            delay={new THREE.Vector2(1.5, 3.5)}
            duration={new THREE.Vector2(0.6, 1.0)}
            strength={new THREE.Vector2(0.3, 0.5)}
          />
        )}
      </EffectComposer>
    </>
  );
}
