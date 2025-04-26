
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion-3d';
import { useFrame } from '@react-three/fiber';
import { MeshStandardMaterial } from 'three';

const PerformanceSphere = (props: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      
      if (meshRef.current.material instanceof MeshStandardMaterial) {
        const material = meshRef.current.material;
        material.color.lerp(
          hovered ? { r: 0.2, g: 0.6, b: 1.0 } : { r: 0.0, g: 0.47, b: 1.0 },
          0.1
        );
      }
    }
  });

  return (
    <motion.mesh
      {...props}
      ref={meshRef}
      whileHover={{ 
        scale: 1.05,
        rotateZ: Math.PI/16 
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 15
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial 
        color="#007AFF"
        roughness={0.2} 
        metalness={0.8}
      />
    </motion.mesh>
  );
};

export default PerformanceSphere;
