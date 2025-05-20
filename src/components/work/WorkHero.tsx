import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BrowserWindow } from '../whatwedo/BrowserWindow';
import styles from './EmergingShowcase.module.css';

const WorkHero: React.FC = () => {
  return (
    <section className="h-screen w-full overflow-visible relative flex flex-col justify-center items-center">
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

      {/* Emerging Browser Window - With refined positioning to properly float over the next section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, type: "spring", stiffness: 100 }}
        className="absolute bottom-[-100px] md:bottom-[-133px] w-full max-w-4xl mx-auto px-4"
      >
        <div className={styles.emergingShowcase}>
          <BrowserWindow title="Nodera Showcase" className="h-[300px] md:h-[400px]">
            <div className={styles.browserContent}>
              <div className={`${styles.codeSnippet} p-6 h-full bg-gradient-to-b from-white to-gray-50`}>
                <div className="font-mono text-xs md:text-sm text-left overflow-hidden">
                  <div className="flex items-center">
                    <span className="text-purple-500">import</span>
                    <span className="text-gray-700 ml-2">React</span>
                    <span className="text-gray-500 ml-2">from</span>
                    <span className="text-green-600 ml-2">'react'</span>
                    <span className="text-gray-700">;</span>
                  </div>
                  
                  <div className="mt-4 flex items-center">
                    <span className="text-purple-500">const</span>
                    <span className="text-blue-600 ml-2">NoderaSolution</span>
                    <span className="text-gray-700 ml-2">=</span>
                    <span className="text-purple-500 ml-2">()</span>
                    <span className="text-purple-500 ml-2">=&gt;</span>
                    <span className="text-gray-700 ml-2">&#123;</span>
                  </div>
                  
                  <div className="mt-2 ml-4">
                    <span className="text-purple-500">return</span>
                    <span className="text-gray-700 ml-2">(</span>
                  </div>
                  
                  <div className="mt-2 ml-8">
                    <span className="text-blue-500">&lt;div</span>
                    <span className="text-green-600 ml-2">className</span>
                    <span className="text-gray-700">=</span>
                    <span className="text-orange-500">"digital-experience"</span>
                    <span className="text-blue-500">&gt;</span>
                  </div>
                  
                  <div className="mt-2 ml-12 text-gray-800">
                    Transforming visions into digital reality
                  </div>

                  <div className="mt-2 ml-12">
                    <span className="text-blue-500">&lt;Feature</span>
                    <span className="text-green-600 ml-2">elegance</span>
                    <span className="text-gray-700">=</span>
                    <span className="text-orange-500">&#123;true&#125;</span>
                    <span className="text-blue-500"> /&gt;</span>
                  </div>
                  
                  <div className="mt-2 ml-8">
                    <span className="text-blue-500">&lt;/div&gt;</span>
                  </div>
                  
                  <div className="mt-2 ml-4">
                    <span className="text-gray-700">);</span>
                  </div>
                  
                  <div className="mt-2">
                    <span className="text-gray-700">&#125;;</span>
                  </div>
                  
                  <div className="mt-4">
                    <span className="text-purple-500">export</span>
                    <span className="text-purple-500 ml-2">default</span>
                    <span className="text-blue-600 ml-2">NoderaSolution;</span>
                  </div>
                </div>
              </div>
            </div>
          </BrowserWindow>
        </div>
      </motion.div>
    </section>
  );
};

export default WorkHero;
