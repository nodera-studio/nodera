
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
          <div className="p-4 bg-white space-y-3">
            <motion.div 
              className="h-3 bg-gray-100 w-3/4 rounded"
              animate={lineAnimation}
            />
            <motion.div 
              className="h-3 bg-gray-100 w-full rounded"
              animate={lineAnimation}
            />
            <div className="grid grid-cols-2 gap-2 pt-2">
              {[1, 2, 3, 4].map((_, index) => (
                <motion.div 
                  key={index}
                  className="h-16 rounded bg-blue-50"
                  animate={{
                    backgroundColor: ['#D8D8FF', '#E5E5FF', '#D8D8FF'],
                    transition: {
                      repeat: Infinity,
                      repeatType: "mirror" as const,
                      duration: 2,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </BrowserWindow>
      </div>
    </div>
  );
};

export default UserExperienceCard;
