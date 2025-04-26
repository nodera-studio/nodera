
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion-3d';
import { useFrame } from '@react-three/fiber';
import { MeshStandardMaterial } from 'three';

const UXCube = (props: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Subtle continuous rotation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
      
      // Smooth color transition on hover
      if (meshRef.current.material instanceof MeshStandardMaterial) {
        const material = meshRef.current.material;
        material.color.lerp(
          hovered ? { r: 0.82, g: 0.64, b: 1.0 } : { r: 0.63, g: 0.53, b: 1.0 },
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
        rotateY: Math.PI/16 
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 15
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#A08AFF"
        roughness={0.6} 
        metalness={0.1}
      />
    </motion.mesh>
  );
};

export default UXCube;
