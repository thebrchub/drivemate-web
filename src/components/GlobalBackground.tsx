import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const GlobalBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div className="fixed inset-0 z-0 bg-zinc-50 dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden pointer-events-none">
      
      {/* 
        We make the image container slightly larger than the screen (120%) 
        so that when Framer Motion moves it down, the edges don't show!
      */}
      <motion.div 
        style={{ y }}
        className="absolute inset-[-10%] w-[120%] h-[120%]"
      >
        {/* 1. Light Mode Background Image */}
        <img 
          src="/images/hero_bg_light.png" 
          alt="Light Theme Background" 
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-100 dark:opacity-0"
        />

        {/* 2. Dark Mode Background Image */}
        <img 
          src="/images/hero_bg_dark.png" 
          alt="Dark Theme Background" 
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 dark:opacity-100"
        />
      </motion.div>
      
      {/* 3. Subtle 10% Overlay */}
      {/* Acts as a static lens over the moving images to ensure text readability */}
      <div className="absolute inset-0 bg-white/30 dark:bg-black/30 transition-colors duration-700"></div>

    </div>
  );
};

export default GlobalBackground;