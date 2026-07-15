import React from 'react';
import { motion, type Variants } from 'framer-motion';

const NeverMiss: React.FC = () => {
  // Apple-style buttery smooth easing curve
  const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  // Stagger variants for the left column text
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

  // Stagger variants for the right column reminder cards
  const cardsContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardEntranceVariants: Variants = {
    hidden: { opacity: 0, x: 60, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1, 
      transition: { duration: 0.8, ease: customEase } 
    }
  };

  return (
    <section className="relative w-full py-20 lg:py-28 bg-transparent transition-colors duration-500 overflow-hidden">
      
      {/* Background Accents (Now with subtle breathing animation) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full mix-blend-screen transform -translate-y-1/2" 
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-[#F46B2C]/5 blur-[120px] rounded-full mix-blend-screen transform -translate-y-1/2" 
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Emotional Copy */}
          <motion.div 
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-start max-w-lg"
          >
            <motion.div variants={textItemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-700 text-xs font-bold tracking-wide text-zinc-600 dark:text-zinc-400 uppercase mb-8">
              <svg className="w-4 h-4 text-[#F46B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              Smart Notifications
            </motion.div>
            
            <motion.h2 variants={textItemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              Never miss <br />
              what matters.
            </motion.h2>
            
            <motion.p variants={textItemVariants} className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed mb-8">
              Your vehicle has enough things to remember. You shouldn't have to remember all of them.
            </motion.p>
            
            <motion.p variants={textItemVariants} className="text-lg text-zinc-500 dark:text-zinc-500 leading-relaxed">
              DriveMate operates silently in the background, keeping track of your critical dates. It delivers precise, offline alerts for renewals and maintenance exactly when you need them.
            </motion.p>
          </motion.div>

          {/* Right Column: Dynamic Reminder Widget */}
          <div className="relative w-full h-[500px] flex items-center justify-center">
            
            <motion.div 
              variants={cardsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative w-full max-w-md space-y-4"
            >
              
              {/* Reminder 1 */}
              <motion.div variants={cardEntranceVariants} className="relative z-40">
                {/* Inner wrapper handles the continuous infinite float */}
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="relative bg-white dark:bg-[#1a1a1a] p-5 rounded-2xl border border-[#F46B2C]/30 shadow-[0_10px_30px_rgba(244,107,44,0.15)] flex items-center gap-4 transform translate-x-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F46B2C]/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#F46B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-zinc-900 dark:text-white font-bold text-lg">Insurance Renewal</h4>
                    <p className="text-zinc-500 text-sm font-medium">Honda City • KA 01 AB 1234</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#F46B2C]/10 text-[#F46B2C] text-xs font-bold uppercase tracking-wider">
                      Due in 7 Days
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Reminder 2 */}
              <motion.div variants={cardEntranceVariants} className="relative z-30">
                <motion.div 
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                  className="relative bg-white dark:bg-[#1a1a1a] p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center gap-4 transform -translate-x-2"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-zinc-900 dark:text-white font-bold text-lg">PUC Certificate</h4>
                    <p className="text-zinc-500 text-sm font-medium">KTM RC 390 • KA 01 JZ 9876</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider">
                      Due in 30 Days
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Reminder 3 */}
              <motion.div variants={cardEntranceVariants} className="relative z-20">
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                  className="relative bg-white dark:bg-[#1a1a1a] p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-lg flex items-center gap-4 transform translate-x-6"
                >
                  <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-zinc-900 dark:text-white font-bold text-lg">General Service</h4>
                    <p className="text-zinc-500 text-sm font-medium">Honda City • Scheduled for Oct</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-zinc-400 dark:text-zinc-500 text-xs font-bold uppercase tracking-wider">
                      Upcoming
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Reminder 4 */}
              <motion.div variants={cardEntranceVariants} className="relative z-10">
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
                  className="relative bg-zinc-50 dark:bg-[#161616] p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800/50 shadow-sm flex items-center gap-4 opacity-70 transform -translate-x-4"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-zinc-700 dark:text-zinc-300 font-bold text-lg line-through decoration-zinc-400">Engine Oil Change</h4>
                    <p className="text-zinc-500 text-sm font-medium">Completed on 12 May</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-500 text-xs font-bold uppercase tracking-wider">
                      Completed
                    </span>
                  </div>
                </motion.div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default NeverMiss;