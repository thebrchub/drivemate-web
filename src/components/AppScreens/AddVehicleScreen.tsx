import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AddVehicleScreen: React.FC = () => {
  // Animation States to simulate user input
  const [step, setStep] = useState(0);

  useEffect(() => {
    // A looping sequence to animate the form filling out
    // Increased to 2 seconds so the typing animation has time to finish!
    const timer = setInterval(() => {
      setStep((prev) => (prev >= 8 ? 0 : prev + 1));
    }, 2000); 

    return () => clearInterval(timer);
  }, []);

  const photoUploaded = step >= 1;
  const isResetting = step >= 8; // Used to clear the form smoothly
  const buttonClicked = step === 7;

  return (
    <div className="w-full h-full bg-zinc-50 dark:bg-[#121212] pt-12 pb-6 px-5 flex flex-col font-sans relative overflow-hidden">
      
      {/* App Bar */}
      <div className="flex items-center justify-between mb-8">
        <svg className="w-6 h-6 text-zinc-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Add Vehicle</h2>
        <div className="w-6" /> {/* Spacer for centering */}
      </div>

      {/* 
        Scrollable Content (Simulated) 
        FIX: The arbitrary classes below force-hide the scrollbar in Chrome, Safari, and Firefox! 
      */}
      <div className="flex-1 overflow-y-auto pb-20 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        {/* Photo Picker */}
        <div className="flex justify-center mb-8">
          <div className="relative w-[120px] h-[120px] bg-white dark:bg-[#1C1C1E] rounded-3xl flex flex-col items-center justify-center shadow-sm border border-zinc-200 dark:border-zinc-800 transition-all duration-500 overflow-hidden">
            <AnimatePresence mode="wait">
              {!photoUploaded || isResetting ? (
                <motion.div 
                  key="upload"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center"
                >
                  <svg className="w-10 h-10 text-[#F46B2C] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                  <span className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400">Upload Photo</span>
                </motion.div>
              ) : (
                <motion.div 
                  key="photo"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-[#F46B2C]/20 flex items-center justify-center"
                >
                  <svg className="w-12 h-12 text-[#F46B2C]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Input: Vehicle Name (Uses typing effect) */}
        <MockInput 
          icon={<svg className="w-5 h-5 text-[#F46B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>}
          placeholder="Vehicle Name (e.g. My Daily)"
          targetValue="Weekend Cruiser"
          isActive={step >= 2 && !isResetting}
        />

        {/* Input: Vehicle Type (Dropdowns instant select) */}
        <div className="mb-4">
          <span className="text-xs text-zinc-500 dark:text-zinc-400 ml-2 mb-1 block">Vehicle Type</span>
          <MockInput 
            icon={<svg className="w-5 h-5 text-[#F46B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>}
            placeholder="Select Type"
            targetValue="Car"
            isActive={step >= 3 && !isResetting}
            isDropdown
          />
        </div>

        {/* Row: Brand & Model */}
        <div className="flex gap-3 mb-4">
          <div className="flex-1">
             <MockInput 
                icon={<svg className="w-5 h-5 text-[#F46B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}
                placeholder="Brand"
                targetValue="Porsche"
                isActive={step >= 4 && !isResetting}
             />
          </div>
          <div className="flex-1">
             <MockInput 
                icon={<svg className="w-5 h-5 text-[#F46B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                placeholder="Model"
                targetValue="911 Carrera"
                isActive={step >= 4 && !isResetting}
             />
          </div>
        </div>

        {/* Input: Registration */}
        <MockInput 
          icon={<svg className="w-5 h-5 text-[#F46B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>}
          placeholder="Registration Number"
          targetValue="MH-02-AB-7777"
          isActive={step >= 5 && !isResetting}
        />

        {/* Input: Purchase Date */}
        <MockInput 
          icon={<svg className="w-5 h-5 text-[#F46B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
          placeholder="Select Purchase Date"
          targetValue="Purchased: 14-07-2026"
          isActive={step >= 6 && !isResetting}
          isDropdown // Dates act like dropdowns (instant select)
        />

      </div>

      {/* Sticky Bottom Save Button */}
      <div className="absolute bottom-6 left-5 right-5 z-20">
        <motion.div 
          animate={{ scale: buttonClicked ? 0.95 : 1 }}
          className={`w-full h-14 rounded-2xl flex items-center justify-center font-bold text-white transition-colors duration-300 ${buttonClicked && !isResetting ? 'bg-green-500' : 'bg-[#F46B2C]'}`}
        >
          {buttonClicked && !isResetting ? 'Vehicle Saved!' : 'Save Vehicle'}
        </motion.div>
      </div>

    </div>
  );
};

// ==========================================
// Reusable Mock Input Component (WITH TYPING EFFECT)
// ==========================================
const MockInput = ({ icon, placeholder, targetValue, isActive, isDropdown = false }: { icon: React.ReactNode, placeholder: string, targetValue: string, isActive: boolean, isDropdown?: boolean }) => {
  const [displayedValue, setDisplayedValue] = useState("");

  useEffect(() => {
    // Clear out if inactive
    if (!isActive) {
      setDisplayedValue("");
      return;
    }

    // Dropdowns and dates just snap in instantly
    if (isDropdown) {
      setDisplayedValue(targetValue);
      return;
    }

    // Real typing effect!
    let i = 0;
    setDisplayedValue("");
    
    const typingInterval = setInterval(() => {
      if (i <= targetValue.length) {
        setDisplayedValue(targetValue.substring(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 60); // 60ms per character simulates fast typing

    return () => clearInterval(typingInterval);
  }, [isActive, targetValue, isDropdown]);

  const isFilled = displayedValue.length > 0;
  
  return (
    <div className="w-full h-14 bg-white dark:bg-[#1C1C1E] rounded-2xl flex items-center px-4 mb-4 shadow-sm border border-transparent">
      {icon}
      <div className="ml-3 flex-1 relative h-full flex items-center overflow-hidden">
        
        {/* Placeholder Text */}
        <span className={`absolute left-0 text-sm text-zinc-400 dark:text-zinc-500 transition-opacity duration-300 ${isFilled ? 'opacity-0' : 'opacity-100'}`}>
          {placeholder}
        </span>
        
        {/* Animated Typing Value */}
        <span className="text-sm font-medium text-zinc-900 dark:text-white relative flex items-center">
          {displayedValue}
          
          {/* Fake Blinking Cursor! Only shows while typing */}
          {isActive && displayedValue.length < targetValue.length && !isDropdown && (
            <motion.div 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
              className="w-[2px] h-4 bg-[#F46B2C] ml-[2px]"
            />
          )}
        </span>
      </div>

      {isDropdown && (
        <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )}
    </div>
  );
};

export default AddVehicleScreen;