
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector3, Mesh } from 'three';
import { motion } from 'framer-motion';
import { useMotionValue, useTransform, MotionValue } from 'framer-motion';

interface PerformanceSphereProps {
  position?: [number, number, number];
}

const PerformanceSphere: React.FC<PerformanceSphereProps> = ({ position = [0, 0, 0] }) => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.z += delta * 0.1;
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
      <sphereGeometry args={[0.9, 32, 32]} />
      <meshStandardMaterial 
        color="#007AFF" 
        roughness={0.3}
        metalness={0.5}
      />
    </mesh>
  );
};

export default PerformanceSphere;
