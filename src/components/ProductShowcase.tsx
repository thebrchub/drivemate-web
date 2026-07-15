import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Import your coded screens here!
import AddVehicleScreen from './AppScreens/AddVehicleScreen';
import ScheduleScreen from './AppScreens/ScheduleScreen'; 
import NotificationScreen from './AppScreens/NotificationScreen';
import HistoryScreen from './AppScreens/HistoryScreen';

const ProductShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // FIX: Explicitly typed as a 4-number tuple!
  const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const features = [
    {
      id: '01',
      title: 'Add your vehicles',
      desc: 'Quickly set up your digital garage. Scan your RC or enter details manually, and DriveMate instantly builds a comprehensive profile for every car or bike you own.',
      screen: <AddVehicleScreen />, 
    },
    {
      id: '02',
      title: 'Schedule what matters',
      desc: 'Insurance renewals, PUC certificates, or routine servicing. Log your dates once and set up recurring schedules in seconds so you never miss a deadline.',
      screen: <ScheduleScreen />, 
    },
    {
      id: '03',
      title: 'Get reminded',
      desc: 'Smart, offline-first background notifications alert you days before your documents expire or your vehicle hits its next maintenance milestone.',
      screen: <NotificationScreen />, 
    },
    {
      id: '04',
      title: 'Build your vehicle history',
      desc: 'Log every oil change, repair, and part replacement. Maintaining a perfect, easily exportable digital ledger drastically increases your vehicle\'s resale value.',
      screen: <HistoryScreen />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            if (index !== null) {
              setActiveFeature(parseInt(index, 10));
            }
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px', 
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full py-12 lg:py-16 bg-transparent transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header with smooth scroll entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-32"
        >
          <h2 className="text-[#F46B2C] font-bold tracking-widest text-sm uppercase mb-4">
            Product Showcase
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">
            Meet your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F46B2C] to-[#ff8c56]">
              digital garage.
            </span>
          </h3>
        </motion.div>

        <div className="flex flex-col md:flex-row relative items-start">
          
          {/* Left Column: Scrolling Text Blocks */}
          <div className="w-full md:w-1/2 pb-32 md:pb-[30vh]">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.id}
                data-index={index}
                ref={(el) => { sectionRefs.current[index] = el; }}
                // SMART ANIMATION: The active text pushes forward and scales up slightly
                animate={{
                  opacity: activeFeature === index ? 1 : 0.25,
                  scale: activeFeature === index ? 1 : 0.95,
                  x: activeFeature === index ? 0 : -10,
                }}
                transition={{ duration: 0.5, ease: customEase }}
                className="flex flex-col justify-center min-h-screen md:min-h-[70vh] pr-0 md:pr-12"
              >
                <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-zinc-300 to-zinc-400 dark:from-zinc-700 dark:to-zinc-800 mb-6">
                  {feature.id}
                </div>
                <h4 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
                  {feature.title}
                </h4>
                <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed max-w-lg">
                  {feature.desc}
                </p>

                {/* Mobile-only Screen */}
                <div className="md:hidden mt-12 w-full max-w-[280px] mx-auto relative rounded-[2.5rem] border-[8px] border-zinc-900 dark:border-zinc-800 shadow-2xl overflow-hidden aspect-[1/2.1]">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-900 dark:bg-black rounded-full z-20"></div>
                  <div className="absolute inset-0 w-full h-full bg-zinc-100 dark:bg-zinc-950">
                    {feature.screen}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Sticky Mockup Container (Desktop Only) */}
          <div className="hidden md:flex w-1/2 sticky top-0 h-screen items-center justify-center pointer-events-none">
            
            {/* The Device Frame - Spring loaded entrance */}
            <motion.div 
              initial={{ opacity: 0, y: 120, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              className="relative w-[320px] lg:w-[360px] aspect-[1/2.1] bg-zinc-900 dark:bg-black rounded-[3rem] border-[10px] border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden pointer-events-auto"
            >
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-zinc-200 dark:bg-black rounded-full z-30 shadow-inner"></div>
              
              {/* Screen Content Layers with Depth Transition */}
              {features.map((feature, index) => (
                <motion.div 
                  key={`screen-${feature.id}`}
                  animate={{
                    opacity: activeFeature === index ? 1 : 0,
                    // Inactive screens zoom in slightly in the background to create a 3D depth crossfade
                    scale: activeFeature === index ? 1 : 1.05,
                    zIndex: activeFeature === index ? 20 : 10
                  }}
                  transition={{ duration: 0.7, ease: customEase }}
                  className="absolute inset-0 w-full h-full bg-zinc-50 dark:bg-zinc-950"
                >
                  
                  {/* The actual App UI Component! */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                     {feature.screen}
                  </div>

                </motion.div>
              ))}

              {/* Fake Screen Glare */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-40"></div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;