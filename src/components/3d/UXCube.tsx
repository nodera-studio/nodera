
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector3, Mesh } from 'three';
import { motion } from 'framer-motion';

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
    <motion.mesh
      ref={meshRef}
      position={new Vector3(...position)}
      whileHover={{ scale: 1.05, y: position[1] + 0.1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial 
        color="#A08AFF" 
        roughness={0.6}
        metalness={0.2}
      />
    </motion.mesh>
  );
};

export default UXCube;
