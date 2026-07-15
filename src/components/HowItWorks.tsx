import React from 'react';
import { motion, type Variants } from 'framer-motion';

const HowItWorks: React.FC = () => {
  // God-level smooth spring animation settings
  const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: customEase } 
    }
  };

  return (
    <section id="how-it-works" className="relative w-full py-12 lg:py-16 bg-transparent">
      
      <div className="w-full max-w-[90rem] mx-auto px-6 md:px-8 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: customEase }}
          className="max-w-3xl mb-16 lg:mb-24"
        >
          <h2 className="text-[#F46B2C] font-bold tracking-widest text-sm uppercase mb-4">
            Core Features
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight mb-6">
            Everything you need. <br className="hidden md:block" />
            <span className="text-zinc-500 dark:text-zinc-400">Nothing you don't.</span>
          </h3>
        </motion.div>

        {/* Bento Box Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          
          {/* Card 1: Smart Alerts */}
          <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
            className="md:col-span-2 group relative bg-white/70 dark:bg-[#1a1a1a]/70 backdrop-blur-2xl rounded-[2rem] p-8 md:p-12 border border-zinc-200 dark:border-zinc-800/80 overflow-hidden hover:border-[#F46B2C]/50 transition-colors duration-500 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F46B2C]/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#F46B2C]/20 transition-colors duration-500" />
            
            <div className="relative z-10 w-full md:w-7/12">
              <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
                <svg className="w-6 h-6 text-[#F46B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Intelligent Reminders</h4>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
                Never pay a late fee again. DriveMate automatically tracks your Insurance, PUC, and service intervals, notifying you well before they expire.
              </p>
            </div>

            {/* Micro-Graphic: Floating Alerts UI */}
            <div className="w-full md:w-5/12 h-[160px] relative hidden md:flex items-center justify-center overflow-visible select-none">
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-full max-w-[220px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-2xl shadow-lg relative"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <div className="w-20 h-2 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
                </div>
                <div className="w-full h-3 bg-zinc-200 dark:bg-zinc-800 rounded-lg" />
                
                {/* Nested child banner sliding upwards on card hover */}
                <motion.div 
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.95 },
                    visible: { y: 0, opacity: 1, scale: 1 }
                  }}
                  whileHover={{ y: -10 }}
                  className="absolute -bottom-6 -right-4 bg-[#F46B2C] text-white text-[11px] font-bold p-3 rounded-xl shadow-xl flex items-center gap-2 border border-white/10"
                >
                  <svg className="w-3 h-3 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                  Renew Insurance!
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2: Offline First */}
          <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
            className="group relative bg-white/70 dark:bg-[#1a1a1a]/70 backdrop-blur-2xl rounded-[2rem] p-8 border border-zinc-200 dark:border-zinc-800/80 overflow-hidden hover:border-[#F46B2C]/50 transition-colors duration-500 flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
                <motion.svg 
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.5 }}
                  className="w-6 h-6 text-[#F46B2C]" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </motion.svg>
              </div>
              <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Offline First</h4>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed text-sm lg:text-base">
                No internet? No problem. Your entire digital garage loads instantly from local storage, anywhere you are.
              </p>
            </div>
            
            {/* Soft background pulse grid visual */}
            <div className="w-full h-8 flex items-center justify-start gap-1.5 opacity-40 mt-6">
              {[...Array(5)].map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ scaleY: [1, 2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.15, ease: "easeInOut" }}
                  className="w-1 h-4 bg-zinc-400 dark:bg-zinc-600 rounded-full origin-center"
                />
              ))}
            </div>
          </motion.div>

          {/* Card 3: 100% Private */}
          <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
            className="group relative bg-white/70 dark:bg-[#1a1a1a]/70 backdrop-blur-2xl rounded-[2rem] p-8 border border-zinc-200 dark:border-zinc-800/80 overflow-hidden hover:border-[#F46B2C]/50 transition-colors duration-500 flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
                <svg className="w-6 h-6 text-[#F46B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">100% Private</h4>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed text-sm lg:text-base">
                We don't want your data. DriveMate keeps your vehicle information securely on your device, exactly where it belongs.
              </p>
            </div>

            {/* Micro-shimmer padlock effect */}
            <div className="relative mt-6 flex justify-end">
              <motion.div 
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="text-[11px] font-bold tracking-wider text-zinc-400 dark:text-zinc-600 border border-dashed border-zinc-300 dark:border-zinc-800 rounded-lg px-2.5 py-1 uppercase"
              >
                Local Encryption Active
              </motion.div>
            </div>
          </motion.div>

          {/* Card 4: Complete Service History */}
          <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
            className="md:col-span-2 group relative bg-white/70 dark:bg-[#1a1a1a]/70 backdrop-blur-2xl rounded-[2rem] p-8 md:p-12 border border-zinc-200 dark:border-zinc-800/80 overflow-hidden hover:border-[#F46B2C]/50 transition-colors duration-500 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="relative z-10 w-full md:w-7/12">
              <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
                <svg className="w-6 h-6 text-[#F46B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Complete Service History</h4>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
                Log every oil change, tire rotation, and repair. Maintain a perfect digital ledger to drastically increase your vehicle's resale value.
              </p>
            </div>

            {/* Micro-Graphic: Interactive Stacked Timeline Rows */}
            <div className="w-full md:w-5/12 hidden md:flex flex-col gap-3 overflow-visible select-none">
              <motion.div 
                whileHover={{ x: 6 }}
                className="w-full bg-zinc-50 dark:bg-zinc-900 p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800/80 flex items-center gap-3 shadow-md"
              >
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 text-[10px] font-bold">✓</div>
                <div>
                  <div className="w-24 h-2 bg-zinc-800 dark:bg-zinc-200 rounded-full mb-1.5" />
                  <div className="w-16 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full" />
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 6 }}
                transition={{ delay: 0.05 }}
                className="w-full bg-zinc-50 dark:bg-zinc-900 p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800/80 flex items-center gap-3 shadow-md translate-x-3"
              >
                <div className="w-6 h-6 rounded-full bg-[#F46B2C]/20 flex items-center justify-center text-[#F46B2C] text-[10px] font-bold">⚙</div>
                <div>
                  <div className="w-20 h-2 bg-zinc-800 dark:bg-zinc-200 rounded-full mb-1.5" />
                  <div className="w-28 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full" />
                </div>
              </motion.div>
            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;