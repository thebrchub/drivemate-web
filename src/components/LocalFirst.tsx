import React from 'react';

const LocalFirst: React.FC = () => {
  return (
    <section className="relative w-full py-12 lg:py-16 bg-transparent transition-colors duration-500 overflow-hidden">
      
      {/* 
        Note: The top transition is handled seamlessly by the bottom curve 
        of the NeverMiss component cutting into this background color. 
      */}

      {/* Subtle Background Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F46B2C]/5 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-700 text-xs font-bold tracking-widest text-zinc-700 dark:text-zinc-300 uppercase mb-8 mx-auto shadow-sm">
          <svg className="w-4 h-4 text-[#F46B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Privacy-by-Design Architecture
        </div>
        
        {/* Massive Headline */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8 text-zinc-900 dark:text-white">
          Your garage. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F46B2C] to-[#ff8c56]">
            Your data.
          </span>
        </h2>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
          DriveMate is built on the principle that your core vehicle data is stored securely on your local device storage. Once implemented, an optional Google Drive backup will be available, but the choice is always yours.
        </p>

        {/* Custom Standalone UI Visual (Replaces the ugly external image) */}
        <div className="relative w-full max-w-3xl mx-auto mt-12 bg-white dark:bg-[#121212] rounded-[3rem] p-8 md:p-16 border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden group">
           
           {/* Decorative tech grid background inside the card */}
           <div className="absolute inset-0 opacity-[0.03] dark:opacity-5" style={{ backgroundImage: 'radial-gradient(#F46B2C 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
           
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
             
             {/* The "Device" Representation */}
             <div className="relative w-48 h-80 bg-zinc-100 dark:bg-black rounded-[2.5rem] border-8 border-zinc-200 dark:border-zinc-800 shadow-xl flex flex-col items-center justify-center overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
                
                {/* Internal UI elements inside the mock device */}
                <div className="space-y-4 w-full px-6 mt-6">
                  <div className="w-full h-12 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                     <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <div className="w-full h-12 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                     <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                  </div>
                </div>
             </div>

             {/* Connection Path (Animated dots) */}
             <div className="hidden md:flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#F46B2C] animate-ping"></div>
                <div className="w-2 h-2 rounded-full bg-[#F46B2C]/50"></div>
                <div className="w-2 h-2 rounded-full bg-[#F46B2C]/30"></div>
             </div>

             {/* The Lock / Vault Status */}
             <div className="flex flex-col items-center gap-4 transform group-hover:scale-105 transition-transform duration-500">
                <div className="w-20 h-20 rounded-2xl bg-[#F46B2C]/10 flex items-center justify-center border border-[#F46B2C]/30 shadow-[0_0_40px_rgba(244,107,44,0.2)]">
                  <svg className="w-10 h-10 text-[#F46B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="text-sm font-bold text-zinc-900 dark:text-zinc-300 uppercase tracking-widest bg-zinc-100 dark:bg-zinc-800/50 px-4 py-2 rounded-lg">
                  Stored Locally
                </div>
             </div>

           </div>
        </div>

      </div>

      {/* --- BOTTOM SVG CURVE DIVIDER --- */}
      {/* 
        This text-color dictates the background color of the NEXT section (e.g., Footer or CTA).
        Right now it's set to transition into zinc-100 / #121212
      */}
      {/* <svg 
        className="absolute bottom-0 left-0 w-full h-[8vh] min-h-[60px] max-h-[120px] text-zinc-100 dark:text-[#121212] z-30 drop-shadow-2xl translate-y-[1px] transition-colors duration-500" 
        viewBox="0 0 1440 200" 
        fill="currentColor" 
        preserveAspectRatio="none"
      >
        <path d="M0,200 L1440,200 L1440,0 C1100,250 400,250 0,100 Z" />
      </svg> */}
    </section>
  );
};

export default LocalFirst;