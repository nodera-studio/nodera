
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Color } from 'three';
import { animated, useSpring } from '@react-spring/three';

const PerformanceSphere = (props: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Animation with react-spring
  const { scale } = useSpring({
    scale: hovered ? 1.05 : 1,
    config: { tension: 300, friction: 15 }
  });
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      
      if (meshRef.current.material) {
        const material = meshRef.current.material as THREE.MeshStandardMaterial;
        const targetColor = hovered ? new Color(0.2, 0.6, 1.0) : new Color(0.0, 0.47, 1.0);
        material.color.lerp(targetColor, 0.1);
      }
    }
  });

  return (
    <animated.mesh
      {...props}
      ref={meshRef}
      scale={scale}
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
