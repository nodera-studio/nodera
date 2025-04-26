
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Color, Mesh, MeshStandardMaterial } from 'three';
import { animated, useSpring } from '@react-spring/three';

const UXCube = (props: any) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Animation with react-spring
  const { scale } = useSpring({
    scale: hovered ? 1.05 : 1,
    config: { tension: 300, friction: 15 }
  });
  
  // Subtle continuous rotation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
      
      // Smooth color transition on hover
      if (meshRef.current.material) {
        const material = meshRef.current.material as MeshStandardMaterial;
        const targetColor = hovered ? new Color('#E6CFFF') : new Color('#A08AFF');
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
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#A08AFF"
        roughness={0.6} 
        metalness={0.1}
      />
    </animated.mesh>
  );
};

export default UXCube;
