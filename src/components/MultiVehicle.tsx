import React from 'react';

const MultiVehicle: React.FC = () => {
  return (
    <section className="relative w-full py-12 lg:py-16 bg-transparent transition-colors duration-500 overflow-hidden">
      
      {/* 
        The top transition is seamlessly handled by the background color 
        matching the bottom curve of the LocalFirst component.
      */}

      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[300px] bg-[#F46B2C]/5 blur-[120px] rounded-[100%] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
        
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-[#F46B2C] font-bold tracking-widest text-sm uppercase mb-4">
            Unified Dashboard
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight mb-6">
            Built for every vehicle <br className="hidden md:block" />
            <span className="text-zinc-500 dark:text-zinc-400">you call yours.</span>
          </h3>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Whether it's your daily commuter, your weekend ride, or your family SUV—manage their entire lifecycle from a single, beautiful interface.
          </p>
        </div>

        {/* Vehicle Type Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Car */}
          <div className="group relative bg-white dark:bg-[#1a1a1a] rounded-[2.5rem] p-8 lg:p-10 border border-zinc-200 dark:border-zinc-800/80 shadow-xl hover:shadow-2xl hover:border-[#F46B2C]/30 transition-all duration-500 overflow-hidden flex flex-col items-center">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F46B2C]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 border border-zinc-200 dark:border-zinc-800"></div>
              <div className="absolute inset-0 bg-white dark:bg-[#222] rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 border border-zinc-200 dark:border-zinc-700 shadow-sm"></div>
              <svg className="w-10 h-10 text-zinc-800 dark:text-white relative z-10 transform group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-4-3-4H9C7.3 6 6 10 6 10s-2.7.6-4.5 1.1c-.8.2-1.5 1-1.5 1.9v3c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <circle cx="17" cy="17" r="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 6h-4v4h4V6z" />
              </svg>
            </div>
            
            <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 relative z-10">Car</h4>
            <div className="flex flex-wrap justify-center gap-2 relative z-10">
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800/80 rounded-full text-xs font-semibold text-zinc-500 dark:text-zinc-400">Sedans</span>
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800/80 rounded-full text-xs font-semibold text-zinc-500 dark:text-zinc-400">SUVs</span>
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800/80 rounded-full text-xs font-semibold text-zinc-500 dark:text-zinc-400">Hatchbacks</span>
            </div>
          </div>

          {/* Card 2: Bike */}
          <div className="group relative bg-white dark:bg-[#1a1a1a] rounded-[2.5rem] p-8 lg:p-10 border border-zinc-200 dark:border-zinc-800/80 shadow-xl hover:shadow-2xl hover:border-[#F46B2C]/30 transition-all duration-500 overflow-hidden flex flex-col items-center transform md:-translate-y-8">
            {/* Special glowing accent for the center card to break grid monotony */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F46B2C] to-[#ff8c56]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F46B2C]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 border border-zinc-200 dark:border-zinc-800"></div>
              <div className="absolute inset-0 bg-white dark:bg-[#222] rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 border border-[#F46B2C]/30 shadow-[0_0_20px_rgba(244,107,44,0.15)]"></div>
              <svg className="w-10 h-10 text-[#F46B2C] relative z-10 transform group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <circle cx="5.5" cy="16.5" r="3.5" />
                <circle cx="18.5" cy="16.5" r="3.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 6a1 1 0 100-2 1 1 0 000 2zm-3 5.5l-3.5-4L11 6h4l1.5 4H19" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 13L9 6.5l3.5 5" />
              </svg>
            </div>
            
            <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 relative z-10">Motorcycle</h4>
            <div className="flex flex-wrap justify-center gap-2 relative z-10">
              <span className="px-3 py-1 bg-[#F46B2C]/10 rounded-full text-xs font-bold text-[#F46B2C]">Sports</span>
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800/80 rounded-full text-xs font-semibold text-zinc-500 dark:text-zinc-400">Cruisers</span>
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800/80 rounded-full text-xs font-semibold text-zinc-500 dark:text-zinc-400">Off-Road</span>
            </div>
          </div>

          {/* Card 3: Scooter */}
          <div className="group relative bg-white dark:bg-[#1a1a1a] rounded-[2.5rem] p-8 lg:p-10 border border-zinc-200 dark:border-zinc-800/80 shadow-xl hover:shadow-2xl hover:border-[#F46B2C]/30 transition-all duration-500 overflow-hidden flex flex-col items-center">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F46B2C]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 border border-zinc-200 dark:border-zinc-800"></div>
              <div className="absolute inset-0 bg-white dark:bg-[#222] rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 border border-zinc-200 dark:border-zinc-700 shadow-sm"></div>
              <svg className="w-10 h-10 text-zinc-800 dark:text-white relative z-10 transform group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <circle cx="5.5" cy="17.5" r="2.5" />
                <circle cx="18.5" cy="17.5" r="2.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 6a1 1 0 100-2 1 1 0 000 2zm-3 5.5l-3.5-4L11 6h4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 15h7l3-6" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 15L8 10h4" />
              </svg>
            </div>
            
            <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 relative z-10">Scooter</h4>
            <div className="flex flex-wrap justify-center gap-2 relative z-10">
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800/80 rounded-full text-xs font-semibold text-zinc-500 dark:text-zinc-400">Electric</span>
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800/80 rounded-full text-xs font-semibold text-zinc-500 dark:text-zinc-400">Commuter</span>
            </div>
          </div>

        </div>
      </div>

      {/* --- BOTTOM SVG CURVE DIVIDER --- */}
      {/* 
        This cuts into the background color of the NEXT section (e.g., CTA or Footer).
        I've set it to text-zinc-50 dark:text-[#0a0a0a] to seamlessly transition back to deep black.
      */}
      {/* <svg 
        className="absolute bottom-0 left-0 w-full h-[8vh] min-h-[60px] max-h-[120px] text-zinc-50 dark:text-[#0a0a0a] z-30 drop-shadow-2xl translate-y-[1px] transition-colors duration-500" 
        viewBox="0 0 1440 200" 
        fill="currentColor" 
        preserveAspectRatio="none"
      >
        <path d="M0,200 L1440,200 L1440,0 C1100,250 400,250 0,100 Z" />
      </svg> */}
    </section>
  );
};

export default MultiVehicle;