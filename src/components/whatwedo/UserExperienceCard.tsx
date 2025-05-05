
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Showcases.module.css';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import BrowserWindow from './BrowserWindow';

interface UserExperienceCardProps {
  shouldReduceMotion: boolean;
}

const UserExperienceCard: React.FC<UserExperienceCardProps> = ({ shouldReduceMotion }) => {
  const pulseAnimation = shouldReduceMotion
    ? {}
    : {
        opacity: [0.6, 0.8, 0.6],
        transition: {
          repeat: Infinity,
          repeatType: "mirror" as const,
          duration: 2.5,
          ease: "easeInOut"
        }
      };

  return (
    <div className={`${styles.showcaseCard} transform-none`}>
      {/* Apply a subtle gradient background with low opacity */}
      <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-br from-blue-300 to-purple-100 opacity-10 backdrop-blur-sm rounded-xl" />
      
      <div className="flex flex-col items-center text-center px-5 md:px-8 pt-10 pb-8 relative z-10 h-full">
        <h3 className="text-3xl md:text-4xl mb-3 font-light">The Art of User Experience</h3>
        <p className="text-gray-600 text-lg mb-6 max-w-lg">
          Powerful code that anticipates challenges. Scalable architecture paired with intuitive interfaces transforms visions into digital reality, no compromise needed.
        </p>
        
        <Button
          variant="primary"
          size="default"
          asChild
          className="mb-8 bg-gradient-to-r from-blue-500 to-indigo-500 border-none shadow-sm hover:shadow-md transition-shadow"
        >
          <Link to="/services">Learn more</Link>
        </Button>
        
        <BrowserWindow>
          <div className="p-6 bg-white bg-opacity-90 space-y-6">
            {/* Skeleton-like loading lines */}
            <motion.div 
              className="h-4 bg-gradient-to-r from-gray-200 to-gray-100 w-3/4 rounded-md"
              animate={pulseAnimation}
            />
            <motion.div 
              className="h-4 bg-gradient-to-r from-gray-200 to-gray-100 w-full rounded-md"
              animate={pulseAnimation}
            />
            
            <div className="grid grid-cols-2 gap-5 pt-4">
              {[1, 2, 3, 4].map((_, index) => (
                <motion.div 
                  key={index}
                  className="h-24 rounded-xl backdrop-blur-sm flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139,92,246,0.7), rgba(124,58,237,0.5))',
                    boxShadow: '0 4px 12px rgba(139,92,246,0.15)'
                  }}
                  animate={pulseAnimation}
                >
                  <div className="h-10 w-10 bg-white bg-opacity-30 rounded-lg" />
                </motion.div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-3">
              <motion.div 
                className="h-16 rounded-xl bg-gradient-to-r from-blue-100 to-blue-50"
                animate={pulseAnimation}
              />
              <motion.div 
                className="h-16 rounded-xl col-span-2 bg-gradient-to-r from-blue-50 to-indigo-50"
                animate={pulseAnimation}
              />
            </div>
            
            <div className="flex justify-end space-x-3 pt-3">
              <motion.div 
                className="h-9 w-9 rounded-xl bg-gradient-to-br from-green-400 to-green-300"
                animate={pulseAnimation}
              />
              <motion.div 
                className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-400 to-blue-300"
                animate={pulseAnimation}
              />
            </div>
          </div>
        </BrowserWindow>
      </div>
    </div>
  );
};

export default UserExperienceCard;
