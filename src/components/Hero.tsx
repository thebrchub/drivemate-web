import React from 'react';

const Hero: React.FC = () => {
  return (
    // Dynamic background and text colors added to the root section
    <section className="relative w-full h-[100dvh] min-h-[750px] flex items-center pt-20 overflow-hidden text-zinc-900 dark:text-white transition-colors duration-500">
      
      {/* 1. Deep Background Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Commented out backgrounds and glows preserved as requested */}
      </div>

      {/* 3. Main Content Container */}
      <div className="container mx-auto px-6 max-w-[1400px] relative z-10 pb-16">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (Content & Glass Box) */}
          <div className="lg:col-span-7 flex flex-col relative z-20">
            
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F46B2C] shadow-[0_0_10px_#F46B2C]"></span>
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-zinc-500 dark:text-zinc-400 uppercase">
                Offline-First. Privacy First.
              </span>
            </div>
            
            {/* Dynamic Typography */}
            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.05] mb-6 text-zinc-900 dark:text-white">
              Your digital <br />
              garage, <span className="text-[#F46B2C]">perfected.</span><br />
              
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl leading-relaxed font-medium">
              Track service, manage renewals, get smart reminders and keep every vehicle detail in one place.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 mb-10">
              <button className="group flex items-center gap-3 bg-zinc-900 dark:bg-transparent border border-zinc-900 dark:border-zinc-700 hover:border-[#F46B2C] dark:hover:border-[#F46B2C] text-white px-5 py-3 rounded-2xl transition-all duration-300">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5V3.5C3 2.9 3.3 2.5 3.8 2.2L14.7 12L3.8 21.8C3.3 21.5 3 21.1 3 20.5Z" fill="#00e676"/>
                  <path d="M14.7 12L18.4 8.7L21.3 10.4C22.2 10.9 22.2 11.8 21.3 12.3L18.4 14L14.7 12Z" fill="#ffeb3b"/>
                  <path d="M3.8 2.2L14.7 12L18.4 8.7L3.8 2.2Z" fill="#f44336"/>
                  <path d="M3.8 21.8L14.7 12L18.4 15.3L3.8 21.8Z" fill="#2196f3"/>
                </svg>
                <div className="text-left">
                  <div className="text-[9px] uppercase font-semibold text-zinc-400 tracking-wider">GET IT ON</div>
                  <div className="text-base font-bold leading-tight -mt-1 text-white">Google Play</div>
                </div>
              </button>

              <a href="#how-it-works" className="flex items-center gap-3 text-zinc-600 dark:text-white text-sm font-semibold hover:text-[#F46B2C] dark:hover:text-[#F46B2C] transition-colors group">
                <div className="w-8 h-8 rounded-full border border-zinc-300 dark:border-zinc-700 group-hover:border-[#F46B2C] flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                See how it works
              </a>
            </div>

          </div>

          {/* Right Column - Cleaned up for your images with Light/Dark fading */}
          <div className="lg:col-span-5 relative h-[450px] lg:h-[550px] w-full hidden md:block mt-8 lg:mt-0">
            
            {/* === SECONDARY MOCKUP (Background/Right) === */}
            {/* Light Mode Image */}
            <img 
              src="/images/your_secondary_mockup_light.png" 
              alt="DriveMate Secondary App View Light" 
              className="absolute top-[10%] right-[-5%] w-[220px] lg:w-[260px] z-10 transform translate-y-4 drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-opacity duration-500 opacity-100 dark:opacity-0" 
            />
            {/* Dark Mode Image */}
            <img 
              src="/images/your_secondary_mockup_dark.png" 
              alt="DriveMate Secondary App View Dark" 
              className="absolute top-[10%] right-[-5%] w-[220px] lg:w-[260px] z-10 transform translate-y-4 drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)] transition-opacity duration-500 opacity-0 dark:opacity-100" 
            />

            {/* === PRIMARY MOCKUP (Foreground/Left) === */}
            {/* Light Mode Image */}
            <img 
              src="/images/your_primary_mockup_light.png" 
              alt="DriveMate Primary App View Light" 
              className="absolute top-[2%] right-[30%] w-[240px] lg:w-[290px] z-20 drop-shadow-[0_30px_50px_rgba(0,0,0,0.4)] transition-opacity duration-500 opacity-100 dark:opacity-0" 
            />
            {/* Dark Mode Image */}
            <img 
              src="/images/your_primary_mockup_dark.png" 
              alt="DriveMate Primary App View Dark" 
              className="absolute top-[2%] right-[30%] w-[240px] lg:w-[290px] z-20 drop-shadow-[0_30px_50px_rgba(0,0,0,0.9)] transition-opacity duration-500 opacity-0 dark:opacity-100" 
            />
            
          </div>

        </div>
      </div>
   
    </section>
  );
};

// FIX: Deleted the unused FeatureItem component here!

export default Hero;