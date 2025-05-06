
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Showcases.module.css';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import BrowserWindow from './BrowserWindow';

interface UserExperienceCardProps {
  shouldReduceMotion: boolean;
  isMobile?: boolean;
}

const UserExperienceCard: React.FC<UserExperienceCardProps> = ({ shouldReduceMotion, isMobile }) => {
  return (
    <motion.div 
      className={`${styles.showcaseCard}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className={`h-full w-full absolute top-0 left-0 bg-gradient-to-br from-blue-300/10 to-blue-100/10`} />
      
      <div className="flex flex-col items-center text-center px-5 md:px-8 pt-10 pb-12 relative z-10 h-full">
        <h3 className="text-3xl md:text-4xl mb-3 font-bold">The Art of User Experience</h3>
        <p className="text-gray-600 text-lg mb-6 max-w-lg">
          Powerful code that anticipates challenges. Scalable architecture paired with intuitive interfaces transforms visions into digital reality, no compromise needed.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <Button
            variant="primary"
            size="default"
            asChild
          >
            <Link to="/services">Learn more</Link>
          </Button>
          <Button
            variant="secondary"
            size="default"
            asChild
          >
            <Link to="/services">Our Services</Link>
          </Button>
        </div>
        
        <div className="flex-1 w-full flex items-center justify-center mb-4">
          <BrowserWindow className="max-h-[450px]">
            <div className="p-4 md:p-6 bg-white space-y-6">
              {/* Header lines with improved styling */}
              <div className="space-y-3">
                <div className="h-3 bg-gray-100 w-3/4 rounded-full"></div>
                <div className="h-3 bg-gray-100 w-full rounded-full"></div>
              </div>
              
              {/* Grid of cards with more vibrant colors */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 pt-2">
                {[
                  "bg-indigo-100 border-indigo-200", 
                  "bg-blue-100 border-blue-200", 
                  "bg-cyan-100 border-cyan-200", 
                  "bg-violet-100 border-violet-200"
                ].map((color, index) => (
                  <div 
                    key={index}
                    className={`h-16 md:h-24 rounded-lg flex items-center justify-center ${color} border`}
                  >
                    <div className="h-8 w-8 md:h-10 md:w-10 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <div className="h-4 w-4 bg-blue-400 rounded-sm"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Content sections with better styling */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="h-12 md:h-16 rounded-lg bg-blue-100 border border-blue-200"></div>
                <div className="h-12 md:h-16 rounded-lg col-span-2 bg-gray-100 border border-gray-200"></div>
              </div>
              
              {/* Action buttons with improved design */}
              <div className="flex justify-end space-x-3 pt-2">
                <div className="h-9 w-9 md:h-10 md:w-10 rounded-full flex items-center justify-center bg-green-100 border border-green-200">
                  <div className="h-4 w-4 bg-green-400 rounded-sm"></div>
                </div>
                <div className="h-9 w-9 md:h-10 md:w-10 rounded-full flex items-center justify-center bg-blue-100 border border-blue-200">
                  <div className="h-4 w-4 bg-blue-400 rounded-sm"></div>
                </div>
              </div>
            </div>
          </BrowserWindow>
        </div>
      </div>
    </motion.div>
  );
};

export default UserExperienceCard;
