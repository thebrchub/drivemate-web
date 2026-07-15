import React from 'react';
import { motion, type Variants } from 'framer-motion';

const LocalFirst: React.FC = () => {
  // Apple-style buttery smooth easing curve
  const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  // Stagger variants for the text content
  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: customEase } 
    }
  };

  // Variants for the main visual card
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: customEase, delay: 0.3 }
    }
  };

  return (
    <section className="relative w-full py-12 lg:py-16 bg-transparent transition-colors duration-500 overflow-hidden">
      
      {/* Subtle Background Glows with slow breathing effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F46B2C]/5 blur-[150px] rounded-full mix-blend-screen" 
        />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Badge */}
          <motion.div variants={textItemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-700 text-xs font-bold tracking-widest text-zinc-700 dark:text-zinc-300 uppercase mb-8 mx-auto shadow-sm">
            <svg className="w-4 h-4 text-[#F46B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Privacy-by-Design Architecture
          </motion.div>
          
          {/* Massive Headline */}
          <motion.h2 variants={textItemVariants} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8 text-zinc-900 dark:text-white">
            Your garage. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F46B2C] to-[#ff8c56]">
              Your data.
            </span>
          </motion.h2>
          
          {/* Description */}
          <motion.p variants={textItemVariants} className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
            DriveMate is built on the principle that your core vehicle data is stored securely on your local device storage. Once implemented, an optional Google Drive backup will be available, but the choice is always yours.
          </motion.p>
        </motion.div>

        {/* Custom Standalone UI Visual */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full max-w-3xl mx-auto mt-12 bg-white dark:bg-[#121212] rounded-[3rem] p-8 md:p-16 border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden group"
        >
           
           {/* Decorative tech grid background inside the card */}
           <div className="absolute inset-0 opacity-[0.03] dark:opacity-5" style={{ backgroundImage: 'radial-gradient(#F46B2C 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
           
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
             
             {/* The "Device" Representation */}
             <motion.div 
               animate={{ y: [0, -8, 0] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
               className="relative w-48 h-80 bg-zinc-100 dark:bg-black rounded-[2.5rem] border-8 border-zinc-200 dark:border-zinc-800 shadow-xl flex flex-col items-center justify-center overflow-hidden"
             >
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
                
                {/* Internal UI elements inside the mock device */}
                <div className="space-y-4 w-full px-6 mt-6">
                  <motion.div whileHover={{ scale: 1.05 }} className="w-full h-12 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center cursor-default">
                     <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="w-full h-12 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center cursor-default">
                     <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                  </motion.div>
                </div>
             </motion.div>

             {/* Connection Path (Animated data stream dots) */}
             <div className="hidden md:flex items-center space-x-3">
                {[0, 1, 2].map((i) => (
                  <motion.div 
                    key={i}
                    animate={{ 
                      opacity: [0.2, 1, 0.2],
                      scale: [0.8, 1.2, 0.8],
                      backgroundColor: ['#f46b2c40', '#F46B2C', '#f46b2c40']
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5, 
                      delay: i * 0.2,
                      ease: "easeInOut" 
                    }}
                    className="w-2.5 h-2.5 rounded-full"
                  />
                ))}
             </div>

             {/* The Lock / Vault Status */}
             <motion.div 
               whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
               transition={{ duration: 0.4 }}
               className="flex flex-col items-center gap-4 cursor-default"
             >
                <div className="w-20 h-20 rounded-2xl bg-[#F46B2C]/10 flex items-center justify-center border border-[#F46B2C]/30 shadow-[0_0_40px_rgba(244,107,44,0.2)]">
                  <svg className="w-10 h-10 text-[#F46B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="text-sm font-bold text-zinc-900 dark:text-zinc-300 uppercase tracking-widest bg-zinc-100 dark:bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700/50">
                  Stored Locally
                </div>
             </motion.div>

           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default LocalFirst;