import React from 'react';
import GlobalBackground from '../components/GlobalBackground';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import ProductShowcase from '../components/ProductShowcase';
import NeverMiss from '../components/NeverMiss';
import LocalFirst from '../components/LocalFirst';
import MultiVehicle from '../components/MultiVehicle';
import CtaSection from '../components/CtaSection';

const HomePage: React.FC = () => {
  return (
    <main className="relative w-full min-h-screen">
      
      {/* 1. The Fixed Parallax Image Background */}
      <GlobalBackground />

      <div className="relative z-10">
        
        {/* 2. THE HERO */}
        <Hero />

        {/* 3. THE GLOWING ISLAND BOX */}
       {/* 3. THE GLOWING ISLAND BOX */}
        <div className="w-full px-4 md:px-8 lg:px-12 py-16">
          
          {/* FIX 1: Removed `overflow-hidden` from this main wrapper so `sticky` can work again! */}
          <div className="relative w-full max-w-[100rem] mx-auto bg-zinc-50 dark:bg-[#0c0c0e] rounded-[3rem] lg:rounded-[4rem] border border-zinc-200 dark:border-zinc-800/80 shadow-2xl">
            
            {/* --- THE AMBIENT INTERNAL GLOWS & SVGS --- */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-[inherit]">
              
              {/* Premium SVG Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{ backgroundImage: 'radial-gradient(#F46B2C 1px, transparent 1px)', backgroundSize: '40px 40px' }}
              ></div>

              {/* === THE ECLIPSE PLANETARY RINGS (Fixed Visibility) === */}
              
              {/* 1. TOP PLANETARY RING */}
              {/* The thick orange base ring */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] md:w-[100vw] max-w-[1400px] aspect-square rounded-full border-[60px] md:border-[100px] border-[#F46B2C] dark:border-[#F46B2C]/60 shadow-[0_0_150px_rgba(244,107,44,0.4)] -translate-y-[60%]"
                style={{
                  // Fades from solid at the bottom to transparent in the middle, creating perfect feathered edges
                  WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 40%)',
                  maskImage: 'linear-gradient(to top, black 0%, transparent 40%)'
                }}
              ></div>
              
              {/* Top Ring Rim Light (Bright white edge) */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] md:w-[100vw] max-w-[1400px] aspect-square rounded-full border-[8px] md:border-[12px] border-white/80 dark:border-white/50 blur-[2px] mix-blend-overlay -translate-y-[60%]"
                style={{
                  WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 40%)',
                  maskImage: 'linear-gradient(to top, black 0%, transparent 40%)'
                }}
              ></div>

              {/* 2. BOTTOM PLANETARY RING */}
              {/* Amber ring sweeping up from the bottom to balance the container */}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150vw] md:w-[100vw] max-w-[1400px] aspect-square rounded-full border-[60px] md:border-[100px] border-amber-500/80 dark:border-amber-500/30 shadow-[0_0_150px_rgba(245,158,11,0.3)] translate-y-[60%]"
                style={{
                  // Reversed mask for the bottom ring
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 40%)',
                  maskImage: 'linear-gradient(to bottom, black 0%, transparent 40%)'
                }}
              ></div>
              {/* ========================================================== */}

              {/* Internal Ambient Glows */}
              <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#F46B2C]/15 dark:bg-[#F46B2C]/20 rounded-full blur-[120px] mix-blend-screen"></div>
              <div className="absolute top-[50%] right-[-10%] w-[600px] h-[600px] bg-amber-500/10 dark:bg-amber-500/15 rounded-full blur-[150px] mix-blend-screen"></div>
              <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-[#F46B2C]/10 dark:bg-[#F46B2C]/15 rounded-full blur-[100px] mix-blend-screen"></div>
              
            </div>
            {/* ----------------------------------------- */}
            {/* ----------------------------------------- */}

            {/* All your middle sections sitting inside the glowing box */}
            <div className="relative z-10 py-12 lg:py-20">
              <HowItWorks />
              <ProductShowcase />
              <NeverMiss />
              <LocalFirst />
              <MultiVehicle />
            </div>

          </div>
        </div>

        {/* 4. THE FOOTER / CTA */}
        {/* Sits outside the box, letting the background fully reveal itself again */}
        <div className="mt-12 lg:mt-24">
          <CtaSection />
        </div>

      </div>

    </main>
  );
};

export default HomePage;