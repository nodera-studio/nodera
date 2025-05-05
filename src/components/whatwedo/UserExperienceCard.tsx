
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
          <div className="p-4 bg-white bg-opacity-90 space-y-6">
            {/* Header lines - skeleton style */}
            <div className="space-y-3">
              <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-100 w-3/4 rounded-full"></div>
              <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-100 w-full rounded-full"></div>
            </div>
            
            {/* Grid of cards with subtle gradients */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                "from-purple-100 to-blue-50", 
                "from-blue-50 to-purple-50", 
                "from-indigo-50 to-blue-50", 
                "from-purple-50 to-pink-50"
              ].map((gradient, index) => (
                <div 
                  key={index}
                  className={`h-20 rounded-xl flex items-center justify-center bg-gradient-to-br ${gradient} border border-gray-100`}
                >
                  <div className="h-8 w-8 bg-white bg-opacity-60 rounded-lg shadow-sm"></div>
                </div>
              ))}
            </div>
            
            {/* Content sections */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="h-14 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100"></div>
              <div className="h-14 rounded-xl col-span-2 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-100"></div>
            </div>
            
            {/* Action buttons */}
            <div className="flex justify-end space-x-3 pt-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-green-300 to-green-400 border border-green-200 shadow-sm"></div>
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-300 to-blue-400 border border-blue-200 shadow-sm"></div>
            </div>
          </div>
        </BrowserWindow>
      </div>
    </div>
  );
};

export default UserExperienceCard;
