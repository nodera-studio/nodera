
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WorkHero: React.FC = () => {
  return (
    <section className="h-screen w-full overflow-hidden relative flex flex-col justify-center items-center">
      {/* Animated Gradient Background */}
      <div 
        className="absolute inset-0 w-full h-full z-0 animate-gradient"
        style={{
          backgroundImage: `
            radial-gradient(circle at 35% 60%, #D1A2FF 0%, transparent 25%), 
            radial-gradient(ellipse at 73% 102%, #007AFF 2%, transparent 40%), 
            radial-gradient(circle at 10% 76%, #007AFF 0%, transparent 65%), 
            radial-gradient(circle at 71% 96%, #F7F7F7 30%, transparent 85%), 
            radial-gradient(circle at 50% 39%, #fb95fb 35%, transparent 88%)
          `,
          backgroundSize: '200% 200%',
          opacity: 1
        }}
      />
      
      {/* Content Container - Centered vertically */}
      <div className="container max-w-5xl mx-auto px-6 z-10 text-center relative">
        {/* Stagger animations for text elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="text-black/90 text-lg md:text-xl font-baloo tracking-wide">
            Latest Projects
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-black text-4xl md:text-6xl lg:text-7xl font-comfortaa font-bold tracking-tight leading-tight">
            Our work speaks for itself.
          </h1>
        </motion.div>
        
        {/* CTA Button - Directly under the heading text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <Button 
            size="lg"
            className="bg-black hover:bg-zinc-800 text-white rounded-full font-baloo font-semibold text-lg px-8 py-2"
            asChild
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkHero;
