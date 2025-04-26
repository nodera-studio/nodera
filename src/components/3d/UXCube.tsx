
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector3, Mesh } from 'three';
import { motion } from 'framer-motion';
import { useMotionValue, useTransform, MotionValue } from 'framer-motion';

interface UXCubeProps {
  position?: [number, number, number];
}

const UXCube: React.FC<UXCubeProps> = ({ position = [0, 0, 0] }) => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.1;
    meshRef.current.rotation.x += delta * 0.05;
  });

  return (
    <mesh
      ref={meshRef}
      position={new Vector3(...position)}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = 'pointer';
        if (meshRef.current) {
          meshRef.current.scale.set(1.05, 1.05, 1.05);
          if (position[1] !== undefined) {
            meshRef.current.position.y = position[1] + 0.1;
          }
        }
      }}
      onPointerOut={(e) => {
        document.body.style.cursor = 'auto';
        if (meshRef.current) {
          meshRef.current.scale.set(1, 1, 1);
          if (position[1] !== undefined) {
            meshRef.current.position.y = position[1];
          }
        }
      }}
    >
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial 
        color="#A08AFF" 
        roughness={0.6}
        metalness={0.2}
      />
    </mesh>
  );
};

export default UXCube;
