
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
  const lineAnimation = shouldReduceMotion
    ? {}
    : {
        opacity: [0.5, 1, 0.5],
        transition: {
          repeat: Infinity,
          repeatType: "mirror" as const,
          duration: 2,
          ease: "easeInOut"
        }
      };

  return (
    <div className={`${styles.showcaseCard} transform-none`}>
      <div className={`h-full w-full absolute top-0 left-0 bg-gradient-to-br from-blue-300 opacity-10`} />
      
      <div className="flex flex-col items-center text-center px-5 md:px-8 pt-10 pb-8 relative z-10 h-full">
        <h3 className="text-3xl md:text-4xl mb-3">The Art of User Experience</h3>
        <p className="text-gray-600 text-lg mb-6 max-w-lg">
          Powerful code that anticipates challenges. Scalable architecture paired with intuitive interfaces transforms visions into digital reality, no compromise needed.
        </p>
        
        <Button
          variant="primary"
          size="default"
          asChild
          className="mb-8"
        >
          <Link to="/services">Learn more</Link>
        </Button>
        
        <BrowserWindow>
          <div className="p-4 bg-white space-y-5">
            <motion.div 
              className="h-4 bg-gray-200 w-3/4 rounded-md"
              animate={lineAnimation}
            />
            <motion.div 
              className="h-4 bg-gray-200 w-full rounded-md"
              animate={lineAnimation}
            />
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[1, 2, 3, 4].map((_, index) => (
                <motion.div 
                  key={index}
                  className="h-24 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: '#8B5CF6', // Vivid purple for a bolder appearance
                    opacity: 0.8
                  }}
                  animate={{
                    backgroundColor: ['#8B5CF6', '#9061F9', '#8B5CF6'],
                    opacity: [0.8, 0.9, 0.8],
                    scale: [1, 1.02, 1],
                    transition: {
                      repeat: Infinity,
                      repeatType: "mirror" as const,
                      duration: 3,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }
                  }}
                >
                  <div className="h-12 w-12 bg-white bg-opacity-30 rounded-md" />
                </motion.div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-3 pt-2">
              <motion.div 
                className="h-16 rounded-lg bg-blue-100"
                animate={{
                  backgroundColor: ['#E6EFFF', '#F0F7FF', '#E6EFFF'],
                  transition: {
                    repeat: Infinity,
                    repeatType: "mirror" as const,
                    duration: 2.5,
                    ease: "easeInOut"
                  }
                }}
              />
              <motion.div 
                className="h-16 rounded-lg col-span-2 bg-blue-50"
                animate={{
                  backgroundColor: ['#EDF5FF', '#F5F9FF', '#EDF5FF'],
                  transition: {
                    repeat: Infinity,
                    repeatType: "mirror" as const,
                    duration: 3,
                    ease: "easeInOut"
                  }
                }}
              />
            </div>
            
            <div className="flex justify-end space-x-2 pt-2">
              <motion.div 
                className="h-10 w-10 rounded-lg bg-green-400"
                animate={{
                  rotate: shouldReduceMotion ? 0 : [0, 5, 0, -5, 0],
                  transition: {
                    repeat: Infinity,
                    repeatType: "loop" as const,
                    duration: 5,
                    ease: "easeInOut"
                  }
                }}
              />
              <motion.div 
                className="h-10 w-10 rounded-lg bg-blue-400"
                animate={{
                  rotate: shouldReduceMotion ? 0 : [0, -5, 0, 5, 0],
                  transition: {
                    repeat: Infinity,
                    repeatType: "loop" as const,
                    duration: 5,
                    ease: "easeInOut",
                    delay: 0.5
                  }
                }}
              />
            </div>
          </div>
        </BrowserWindow>
      </div>
    </div>
  );
};

export default UserExperienceCard;
