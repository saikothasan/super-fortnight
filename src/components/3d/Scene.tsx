import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.5;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]}>
      <meshStandardMaterial
        color="#4c1d95"
        roughness={0.1}
        metalness={0.8}
        wireframe
      />
    </Sphere>
  );
};

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedSphere />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Scene;