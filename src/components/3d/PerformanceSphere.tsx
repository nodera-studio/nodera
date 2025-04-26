
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Color, Mesh, MeshStandardMaterial } from 'three';
import { useSpring, animated } from '@react-spring/three';

interface PerformanceSphereProps {
  position?: [number, number, number];
}

const PerformanceSphere = ({ position = [0, 0, 0] }: PerformanceSphereProps) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Animation with react-spring
  const springs = useSpring({
    scale: hovered ? 1.05 : 1,
    config: { tension: 300, friction: 15 }
  });
  
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      
      if (meshRef.current.material) {
        const material = meshRef.current.material as MeshStandardMaterial;
        const targetColor = hovered ? new Color(0.2, 0.6, 1.0) : new Color(0.0, 0.47, 1.0);
        material.color.lerp(targetColor, 0.1);
      }
    }
  });

  return (
    <animated.mesh
      position={position}
      ref={meshRef}
      scale={springs.scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial 
        color="#007AFF"
        roughness={0.2} 
        metalness={0.8}
      />
    </animated.mesh>
  );
};

export default PerformanceSphere;
