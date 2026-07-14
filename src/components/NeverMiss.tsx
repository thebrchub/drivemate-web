import React from 'react';

const NeverMiss: React.FC = () => {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-transparent transition-colors duration-500 overflow-hidden">
      
      {/* --- TOP SVG CURVE DIVIDER --- */}
      {/* This color strictly matches the ProductShowcase background to blend the transition */}
      {/* <svg 
        className="absolute top-0 left-0 w-full h-[8vh] min-h-[60px] max-h-[120px] text-zinc-50 dark:text-[#0a0a0a] z-30 drop-shadow-sm -translate-y-[1px] rotate-180 transition-colors duration-500" 
        viewBox="0 0 1440 200" 
        fill="currentColor" 
        preserveAspectRatio="none"
      >
        <path d="M0,200 L1440,200 L1440,0 C1100,250 400,250 0,100 Z" />
      </svg> */}

      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full mix-blend-screen transform -translate-y-1/2" />
        <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-[#F46B2C]/5 blur-[120px] rounded-full mix-blend-screen transform -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Emotional Copy */}
          <div className="flex flex-col items-start max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-700 text-xs font-bold tracking-wide text-zinc-600 dark:text-zinc-400 uppercase mb-8">
              <svg className="w-4 h-4 text-[#F46B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              Smart Notifications
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              Never miss <br />
              what matters.
            </h2>
            
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed mb-8">
              Your vehicle has enough things to remember. You shouldn't have to remember all of them.
            </p>
            
            <p className="text-lg text-zinc-500 dark:text-zinc-500 leading-relaxed">
              DriveMate operates silently in the background, keeping track of your critical dates. It delivers precise, offline alerts for renewals and maintenance exactly when you need them.
            </p>
          </div>

          {/* Right Column: Dynamic Reminder Widget */}
          <div className="relative w-full h-[500px] flex items-center justify-center">
            
            {/* Custom CSS for gentle floating animations */}
            <style>
              {`
                @keyframes float-1 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
                @keyframes float-2 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
                @keyframes float-3 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
                @keyframes float-4 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
                
                .anim-float-1 { animation: float-1 4s ease-in-out infinite; }
                .anim-float-2 { animation: float-2 5s ease-in-out infinite 0.5s; }
                .anim-float-3 { animation: float-3 4.5s ease-in-out infinite 1s; }
                .anim-float-4 { animation: float-4 5.5s ease-in-out infinite 1.5s; }
              `}
            </style>

            <div className="relative w-full max-w-md space-y-4">
              
              {/* Reminder 1 */}
              <div className="anim-float-1 relative bg-white dark:bg-[#1a1a1a] p-5 rounded-2xl border border-[#F46B2C]/30 shadow-[0_10px_30px_rgba(244,107,44,0.15)] flex items-center gap-4 z-40 transform translate-x-4">
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
              </div>

              {/* Reminder 2 */}
              <div className="anim-float-2 relative bg-white dark:bg-[#1a1a1a] p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center gap-4 z-30 transform -translate-x-2">
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
              </div>

              {/* Reminder 3 */}
              <div className="anim-float-3 relative bg-white dark:bg-[#1a1a1a] p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-lg flex items-center gap-4 z-20 transform translate-x-6">
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
              </div>

              {/* Reminder 4 */}
              <div className="anim-float-4 relative bg-zinc-50 dark:bg-[#161616] p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800/50 shadow-sm flex items-center gap-4 z-10 opacity-70 transform -translate-x-4">
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
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* --- BOTTOM SVG CURVE DIVIDER --- */}
      {/* This sets up the cut-out for the footer or final CTA section */}
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

export default NeverMiss;