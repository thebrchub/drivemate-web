import React from 'react';
import { motion, type Variants } from 'framer-motion';

const CtaSection: React.FC = () => {
  // Apple-style buttery smooth easing curve
  const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: customEase } 
    }
  };

  return (
    <section className="relative w-full py-12 lg:py-16 bg-transparent transition-colors duration-500 overflow-hidden flex items-center justify-center">
      
      {/* Subtle Background Glow to draw focus to the center - Now Animated! */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="w-[600px] h-[600px] bg-[#F46B2C]/10 blur-[150px] rounded-full mix-blend-screen" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6 leading-[1.1]"
          >
            Your vehicles deserve better than forgotten dates.
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-medium mb-12"
          >
            Put your garage in your pocket.
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.button 
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white text-white dark:text-zinc-900 px-8 py-4 rounded-2xl transition-colors duration-300 shadow-[0_0_40px_rgba(244,107,44,0.2)] hover:shadow-[0_0_60px_rgba(244,107,44,0.4)]"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5V3.5C3 2.9 3.3 2.5 3.8 2.2L14.7 12L3.8 21.8C3.3 21.5 3 21.1 3 20.5Z" fill="#00e676"/>
                <path d="M14.7 12L18.4 8.7L21.3 10.4C22.2 10.9 22.2 11.8 21.3 12.3L18.4 14L14.7 12Z" fill="#ffeb3b"/>
                <path d="M3.8 2.2L14.7 12L18.4 8.7L3.8 2.2Z" fill="#f44336"/>
                <path d="M3.8 21.8L14.7 12L18.4 15.3L3.8 21.8Z" fill="#2196f3"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-wider">GET IT ON</div>
                <div className="text-lg font-black leading-tight -mt-0.5">Google Play</div>
              </div>
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;