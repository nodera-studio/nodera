
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector3, Mesh } from 'three';
import { motion } from 'framer-motion-3d';

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
    <motion.mesh
      ref={meshRef}
      position={new Vector3(...position)}
      whileHover={{ scale: 1.05, y: position[1] + 0.1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      <sphereGeometry args={[0.9, 32, 32]} />
      <meshStandardMaterial 
        color="#007AFF" 
        roughness={0.3}
        metalness={0.5}
      />
    </motion.mesh>
  );
};

export default PerformanceSphere;
