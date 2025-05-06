
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Showcases.module.css';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import BrowserWindow from './BrowserWindow';
import { ChevronDown } from 'lucide-react';

interface UserExperienceCardProps {
  shouldReduceMotion: boolean;
  isMobile?: boolean;
}

const UserExperienceCard: React.FC<UserExperienceCardProps> = ({ shouldReduceMotion, isMobile }) => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollHint, setShowScrollHint] = useState(true);

  // Simulate loading state for the shimmer effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Hide scroll hint after a while
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Hide scroll hint on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollHint(false);
    };
    
    // Find browser content element
    const browserContent = document.querySelector('.website-layout');
    if (browserContent) {
      browserContent.addEventListener('scroll', handleScroll);
      return () => browserContent.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleFeatureHover = (index: number | null) => {
    setActiveFeature(index);
  };

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
        
        <div className="flex-1 w-full flex items-center justify-center mb-4 relative">
          <BrowserWindow className="max-h-[450px] h-[400px] mx-8 md:mx-12">
            <div className="website-layout overflow-auto h-full relative">
              {/* Website Header/Navigation */}
              <div className="sticky top-0 z-10 bg-white border-b border-gray-100">
                <div className="flex justify-between items-center px-4 py-3">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className={`h-7 w-7 rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 ${isLoading ? 'animate-pulse' : ''}`}
                  ></motion.div>
                  <div className="hidden md:flex space-x-5 flex-grow justify-center">
                    {[1, 2, 3, 4].map((item) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (item * 0.1), duration: 0.5 }}
                        className={`h-3 w-14 rounded-full ${isLoading ? 'bg-gray-100 animate-pulse' : 'bg-gray-100 hover:bg-gray-200 transition-colors'}`}
                      ></motion.div>
                    ))}
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className={`h-7 w-7 rounded-full ${isLoading ? 'bg-gray-100 animate-pulse' : 'bg-gray-100 hover:bg-gray-200 transition-colors'}`}
                  ></motion.div>
                </div>
              </div>
              
              {/* Hero Section */}
              <div className="px-4 py-6 md:py-8">
                <div className="text-center space-y-4 mb-6">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className={`h-7 w-3/4 mx-auto rounded-full ${isLoading ? 'bg-gray-100 animate-pulse' : 'bg-gradient-to-r from-blue-300 to-indigo-400 text-white'}`}
                  ></motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className={`h-3 w-full md:w-2/3 mx-auto rounded-full ${isLoading ? 'bg-gray-50 animate-pulse' : 'bg-gray-50'}`}
                  ></motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className={`h-3 w-5/6 md:w-1/2 mx-auto rounded-full ${isLoading ? 'bg-gray-50 animate-pulse' : 'bg-gray-50'}`}
                  ></motion.div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.7 }}
                  className={`h-36 w-full rounded-xl overflow-hidden ${isLoading ? 'bg-gray-100 animate-pulse' : 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/50'}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-center h-full">
                    {!isLoading && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
                        className="h-14 w-14 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center"
                      >
                        <div className="h-6 w-6 bg-white rounded-md"></div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>
              
              {/* Features Section */}
              <div className="px-4 py-6 bg-gray-50/70">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className={`h-5 w-28 mx-auto rounded-full mb-6 ${isLoading ? 'bg-gray-200 animate-pulse' : 'bg-gradient-to-r from-gray-700 to-gray-800'}`}
                ></motion.div>
                
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((feature) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 + (feature * 0.15), duration: 0.5 }}
                      className={`p-3 rounded-xl ${isLoading 
                        ? 'bg-gray-100 animate-pulse' 
                        : activeFeature === feature
                          ? 'bg-gradient-to-br from-blue-50 to-blue-100/80 border border-blue-100 shadow-sm' 
                          : 'bg-white border border-gray-100'
                      }`}
                      whileHover={{ 
                        scale: isLoading ? 1 : 1.03,
                        zIndex: 10
                      }}
                      onHoverStart={() => handleFeatureHover(feature)}
                      onHoverEnd={() => handleFeatureHover(null)}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className={`h-7 w-7 rounded-lg mb-2 ${isLoading 
                          ? 'bg-gray-200' 
                          : activeFeature === feature
                            ? 'bg-gradient-to-r from-blue-400 to-blue-500'
                            : 'bg-gray-100'
                        }`}></div>
                        <div className={`h-2.5 w-2/3 rounded-full mb-1 ${isLoading ? 'bg-gray-200' : 'bg-gray-200'}`}></div>
                        <div className={`h-1.5 w-3/4 rounded-full ${isLoading ? 'bg-gray-200' : 'bg-gray-100'}`}></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="px-4 py-8 text-center">
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 0.5 }}
                  className={`h-5 w-2/3 mx-auto rounded-full mb-4 ${isLoading ? 'bg-gray-100 animate-pulse' : 'bg-gradient-to-r from-gray-700 to-gray-800'}`}
                ></motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.3, duration: 0.5 }}
                  className={`h-3 w-5/6 md:w-1/2 mx-auto rounded-full mb-6 ${isLoading ? 'bg-gray-50 animate-pulse' : 'bg-gray-100'}`}
                ></motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.4, duration: 0.5 }}
                  className={`h-8 w-28 mx-auto rounded-full ${isLoading 
                    ? 'bg-gray-200 animate-pulse' 
                    : 'bg-gradient-to-r from-blue-400 to-indigo-400 hover:from-blue-500 hover:to-indigo-500'
                  }`}
                  whileHover={{ scale: isLoading ? 1 : 1.05 }}
                  whileTap={{ scale: isLoading ? 1 : 0.95 }}
                ></motion.div>
              </div>
              
              {/* Footer */}
              <div className="px-4 py-6 bg-gradient-to-b from-gray-800 to-gray-900">
                <div className="flex flex-wrap justify-between">
                  <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.5, duration: 0.4 }}
                      className={`h-4 w-20 rounded-full mb-3 ${isLoading ? 'bg-gray-700 animate-pulse' : 'bg-gray-700'}`}
                    ></motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.6, duration: 0.4 }}
                      className={`h-2.5 w-4/5 rounded-full mb-2 ${isLoading ? 'bg-gray-700 animate-pulse' : 'bg-gray-700'}`}
                    ></motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.7, duration: 0.4 }}
                      className={`h-2.5 w-3/4 rounded-full ${isLoading ? 'bg-gray-700 animate-pulse' : 'bg-gray-700'}`}
                    ></motion.div>
                  </div>
                  
                  <div className="w-1/2 md:w-1/4">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.8, duration: 0.4 }}
                      className={`h-3.5 w-14 rounded-full mb-3 ${isLoading ? 'bg-gray-700 animate-pulse' : 'bg-gray-700'}`}
                    ></motion.div>
                    {[1, 2, 3].map((item) => (
                      <motion.div 
                        key={item}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.9 + (item * 0.1), duration: 0.4 }}
                        className={`h-2.5 w-16 rounded-full mb-2 ${isLoading ? 'bg-gray-700 animate-pulse' : 'bg-gray-700 hover:bg-gray-600 transition-colors'}`}
                      ></motion.div>
                    ))}
                  </div>
                  
                  <div className="w-1/2 md:w-1/4">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 3.2, duration: 0.4 }}
                      className={`h-3.5 w-14 rounded-full mb-3 ${isLoading ? 'bg-gray-700 animate-pulse' : 'bg-gray-700'}`}
                    ></motion.div>
                    {[1, 2, 3].map((item) => (
                      <motion.div 
                        key={item} 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.3 + (item * 0.1), duration: 0.4 }}
                        className={`h-2.5 w-16 rounded-full mb-2 ${isLoading ? 'bg-gray-700 animate-pulse' : 'bg-gray-700 hover:bg-gray-600 transition-colors'}`}
                      ></motion.div>
                    ))}
                  </div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 3.6, duration: 0.5 }}
                  className={`h-0.5 w-full my-4 origin-left ${isLoading ? 'bg-gray-700 animate-pulse' : 'bg-gray-700'}`}
                ></motion.div>
                
                <div className="flex justify-between items-center">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.7, duration: 0.4 }}
                    className={`h-2.5 w-20 rounded-full ${isLoading ? 'bg-gray-700 animate-pulse' : 'bg-gray-700'}`}
                  ></motion.div>
                  <div className="flex space-x-2">
                    {[1, 2, 3].map((item) => (
                      <motion.div 
                        key={item} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 3.8 + (item * 0.1), duration: 0.4 }}
                        className={`h-5 w-5 rounded-full ${isLoading ? 'bg-gray-700 animate-pulse' : 'bg-gray-700 hover:bg-gray-600 transition-colors'}`}
                      ></motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scroll hint */}
            {showScrollHint && !isLoading && (
              <motion.div 
                className="absolute bottom-4 left-0 right-0 mx-auto w-full flex justify-center pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.0, duration: 0.7 }}
              >
                <motion.div 
                  className="scroll-hint p-1 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200 w-8 h-8 flex items-center justify-center"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <ChevronDown size={16} className="text-gray-500" />
                </motion.div>
              </motion.div>
            )}
          </BrowserWindow>
        </div>
      </div>
    </motion.div>
  );
};

export default UserExperienceCard;
