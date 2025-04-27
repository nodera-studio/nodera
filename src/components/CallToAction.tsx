
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax effect for the shadow text
  const shadowTextX = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);
  const shadowTextY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);
  
  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  // Split text into lines for animation
  const lines = [
    "You've got a vision.",
    "We've got the code.",
    "Let's build something remarkable."
  ];

  return (
    <div className="bg-white py-20 md:py-28 lg:py-36 px-6 text-center border-b border-[#F1F1F1] relative overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariants}
        className="max-w-3xl mx-auto relative z-10"
      >
        <motion.div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-baloo font-medium leading-tight mb-12 space-y-2">
          {lines.map((line, index) => (
            <motion.div 
              key={index} 
              variants={lineVariants}
              className="overflow-hidden"
            >
              <motion.span
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.23, 1, 0.32, 1],
                  delay: index * 0.2 
                }}
                className="inline-block"
              >
                {line}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            ease: [0.23, 1, 0.32, 1],
            delay: 0.6
          }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button 
              asChild
              size="lg" 
              className="bg-black hover:bg-zinc-800 text-white rounded-xl font-baloo font-semibold text-lg px-8 py-6 relative z-10"
            >
              <a href="#contact">
                Get in Touch
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Shadow Text */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none"
        style={{ 
          x: shadowTextX,
          y: shadowTextY,
        }}
      >
        <div className="text-[20vw] font-comfortaa font-bold text-[#22222208] whitespace-nowrap">
          Nodera
        </div>
      </motion.div>
    </div>
  );
};

export default CallToAction;
