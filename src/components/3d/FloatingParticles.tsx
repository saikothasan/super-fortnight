import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';
import { useSpring } from '@react-spring/three';

function ParticleCloud() {
  const ref = useRef<THREE.Points>(null);
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  const [spring] = useSpring(() => ({
    from: { scale: [0, 0, 0] },
    to: { scale: [1, 1, 1] },
    config: { mass: 1, tension: 280, friction: 120 },
  }));

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

const FloatingParticles = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <ambientLight intensity={0.5} />
      <ParticleCloud />
    </Canvas>
  );
};

export default FloatingParticles;