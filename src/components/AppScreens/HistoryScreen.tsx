import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HistoryScreen: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Looping sequence to animate the filter bottom sheet
    const timer = setInterval(() => {
      setStep((prev) => (prev >= 7 ? 0 : prev + 1));
    }, 2000); 

    return () => clearInterval(timer);
  }, []);

  const isFilterOpen = step >= 2 && step <= 4;
  const carSelected = step >= 3 && step <= 4;
  const serviceSelected = step >= 3 && step <= 4;
  const applyClicked = step === 4;
  const isFiltered = step >= 5 && step <= 6; // Shows only the filtered results

  return (
    <div className="w-full h-full bg-zinc-50 dark:bg-[#121212] flex flex-col font-sans relative overflow-hidden">
      
      {/* 
        HEADER SECTION 
        Simulating the warm orange lighting from your 3D clipboard image using CSS gradients
      */}
      <div className="relative w-full h-[220px] bg-gradient-to-b from-amber-600/40 to-[#121212] pt-12 px-5 flex flex-col justify-end pb-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#121212] z-0"></div>
        <div className="relative z-10">
          <p className="text-zinc-400 font-medium leading-tight mb-2 max-w-[200px]">
            A complete record of your past service and renewals.
          </p>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Maintenance Log
          </h1>
        </div>
      </div>

      {/* SEARCH & ACTIONS */}
      <div className="px-5 py-4 flex gap-3">
        <div className="flex-1 bg-white dark:bg-[#1C1C1E] rounded-2xl flex items-center px-4 shadow-sm border border-transparent dark:border-zinc-800/50">
          <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="ml-2 text-sm text-zinc-500">Search history...</span>
        </div>
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 ${isFilterOpen ? 'bg-zinc-700 text-white' : 'bg-white dark:bg-[#1C1C1E] text-zinc-400'}`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </div>
        <div className="w-12 h-12 bg-white dark:bg-[#1C1C1E] rounded-2xl flex items-center justify-center text-zinc-400">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      </div>

      {/* LIST OF LOGS */}
      <div className="flex-1 overflow-y-auto px-5 pb-24 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        <AnimatePresence mode="popLayout">
          {/* Card 1 */}
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            key="log1"
          >
            <HistoryCard 
              vehicle="DAILY COMMUTE"
              service="Insurance Renewal"
              date="14 Jul, 2026"
              scheduled="13 Jul, 2026"
            />
          </motion.div>

          {/* Card 2 (Hides when filtered) */}
          {!isFiltered && (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, height: 0, marginBottom: 0 }}
              key="log2"
            >
              <HistoryCard 
                vehicle="FAMILY SUV"
                service="PUC / Emission Test"
                date="02 Jun, 2026"
                scheduled="01 Jun, 2026"
              />
            </motion.div>
          )}

          {/* Card 3 */}
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            key="log3"
          >
            <HistoryCard 
              vehicle="WEEKEND CRUISER"
              service="10,000km Major Service"
              date="15 May, 2026"
              scheduled="15 May, 2026"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* BOTTOM NAVIGATION BAR */}
      <div className="absolute bottom-0 left-0 right-0 h-[72px] bg-white dark:bg-[#121212] border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-around px-2 z-10">
        <NavIcon icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />} label="Home" active={false} />
        <NavIcon icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />} label="History" active={true} />
        <NavIcon icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />} label="Settings" active={false} />
      </div>

      {/* 
        SIMULATED BOTTOM SHEET FOR FILTERS 
      */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 z-20"
            />
            
            {/* Sheet Content */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 right-0 bg-[#222222] rounded-t-[2rem] p-6 pb-8 z-30 flex flex-col"
            >
              <div className="w-12 h-1 bg-zinc-600 rounded-full mx-auto mb-6" />
              
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Filter History</h3>
                <span className="text-[#F46B2C] text-sm font-medium">Reset</span>
              </div>

              {/* Vehicle Type Section */}
              <p className="text-[#F46B2C] text-xs font-bold tracking-wider mb-3">VEHICLE TYPE</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <FilterChip label="CAR" active={carSelected} />
                <FilterChip label="BIKE" />
                <FilterChip label="SCOOTER" />
                <FilterChip label="TRUCK" />
                <FilterChip label="VAN" />
                <FilterChip label="BUS" />
                <FilterChip label="OTHER" />
              </div>

              {/* Service Type Section */}
              <p className="text-[#F46B2C] text-xs font-bold tracking-wider mb-3">SERVICE TYPE</p>
              <div className="flex flex-wrap gap-2 mb-8">
                <FilterChip label="INSURANCE" />
                <FilterChip label="PUC" />
                <FilterChip label="SERVICE" active={serviceSelected} />
                <FilterChip label="OILCHANGE" />
                <FilterChip label="CUSTOM" />
              </div>

              {/* Apply Button */}
              <motion.div 
                animate={{ scale: applyClicked ? 0.95 : 1 }}
                className="w-full h-14 bg-[#F46B2C] rounded-2xl flex items-center justify-center font-bold text-white transition-colors"
              >
                Apply Filters
              </motion.div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
};

// --- HELPER COMPONENTS ---

const HistoryCard = ({ vehicle, service, date, scheduled }: { vehicle: string, service: string, date: string, scheduled: string }) => (
  <div className="w-full bg-white dark:bg-[#1C1C1E] p-4 rounded-2xl mb-4 flex gap-4 shadow-sm border border-transparent dark:border-zinc-800/50">
    <div className="w-12 h-12 rounded-xl bg-[#2D452B] flex items-center justify-center shrink-0">
      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>
    <div className="flex-1">
      <p className="text-[10px] font-bold text-zinc-500 tracking-wider uppercase mb-0.5">{vehicle}</p>
      <h3 className="text-base font-bold text-zinc-900 dark:text-white leading-tight truncate max-w-[140px] mb-2">{service}</h3>
    </div>
    <div className="text-right">
      <p className="text-xs font-bold text-green-500 mb-1">Completed</p>
      <p className="text-sm font-bold text-zinc-900 dark:text-white mb-0.5">{date}</p>
      <p className="text-[10px] text-zinc-500">Scheduled: {scheduled}</p>
    </div>
  </div>
);

const NavIcon = ({ icon, label, active }: { icon: React.ReactNode, label: string, active: boolean }) => (
  <div className="flex flex-col items-center justify-center w-16">
    <svg className={`w-6 h-6 mb-1 ${active ? 'text-[#F46B2C]' : 'text-zinc-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {icon}
    </svg>
    <span className={`text-[10px] font-medium ${active ? 'text-[#F46B2C]' : 'text-zinc-500'}`}>{label}</span>
  </div>
);

const FilterChip = ({ label, active = false }: { label: string, active?: boolean }) => (
  <div className={`px-4 py-2 rounded-lg border text-xs font-bold transition-colors ${
    active 
      ? 'border-[#F46B2C] text-[#F46B2C] bg-[#F46B2C]/10' 
      : 'border-zinc-700 text-zinc-300'
  }`}>
    {label}
  </div>
);

export default HistoryScreen;