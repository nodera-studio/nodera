
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Showcases = () => {
  const { scrollYProgress } = useScroll();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  // Parallax effects
  const imageParallax = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <div className="bg-white py-16 md:py-24 lg:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#F1F1F1]">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.div 
          variants={itemVariants}
          className="flex justify-between items-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-comfortaa font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Digital Showcases</h2>
          <motion.a 
            href="#" 
            className="text-xl sm:text-2xl font-comfortaa font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            View All →
          </motion.a>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="bg-[#F9F9F9] rounded-3xl p-6 md:p-10 mb-12 md:mb-16 lg:mb-20 overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="lg:w-1/2 space-y-4 md:space-y-6">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="h-1 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"
              ></motion.div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-baloo font-semibold">Museum CMS Platform</h3>
              <p className="text-lg md:text-xl font-baloo font-medium text-zinc-700">
                The behind-the-scenes system that powers museum mobile guides, intuitive for staff, informative for visitors.
              </p>
              <div className="flex gap-4 pt-4">
                <motion.a 
                  href="#" 
                  className="px-6 py-3 bg-black text-white rounded-full font-baloo font-semibold text-lg"
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  The Full Story
                </motion.a>
                <motion.a 
                  href="#" 
                  className="px-6 py-3 bg-white border border-black text-black rounded-full font-baloo font-semibold text-lg"
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  More Creations
                </motion.a>
              </div>
            </div>
            <motion.div 
              className="lg:w-1/2"
              style={{ y: imageParallax }}
            >
              <motion.img 
                src="/lovable-uploads/nous-cms.png" 
                alt="Museum CMS Platform" 
                className="rounded-xl w-full h-auto object-cover shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="bg-[#F9F9F9] rounded-3xl p-6 md:p-10 overflow-hidden"
        >
          <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-center">
            <motion.div 
              className="lg:w-1/2"
              style={{ y: imageParallax }}
            >
              <motion.img 
                src="/lovable-uploads/8379e5c3-25c3-48da-9e3b-916491ac1570.png" 
                alt="Furnihaus Collection" 
                className="rounded-xl w-full h-auto object-cover shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
            <div className="lg:w-1/2 space-y-4 md:space-y-6">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="h-1 bg-gradient-to-r from-blue-500 to-purple-400 rounded-full"
              ></motion.div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-baloo font-semibold">Furnihaus Collection</h3>
              <p className="text-lg md:text-xl font-baloo font-medium text-zinc-700">
                Where craftsmanship meets digital presence. Elegantly showcasing custom furniture and connecting artisans with clients.
              </p>
              <div className="flex gap-4 pt-4">
                <motion.a 
                  href="#" 
                  className="px-6 py-3 bg-black text-white rounded-full font-baloo font-semibold text-lg"
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  The Full Story
                </motion.a>
                <motion.a 
                  href="#" 
                  className="px-6 py-3 bg-white border border-black text-black rounded-full font-baloo font-semibold text-lg"
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  More Creations
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Showcases;
