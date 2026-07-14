import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScheduleScreen: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Looping sequence to animate the form
    const timer = setInterval(() => {
      setStep((prev) => (prev >= 9 ? 0 : prev + 1));
    }, 2000); 

    return () => clearInterval(timer);
  }, []);

  const isResetting = step >= 9;
  const typedTitle = step >= 1 ? "Renew Insurance" : "";
  const dropdownOpen = step === 2 && !isResetting;
  const selectedType = step >= 3 ? "Insurance" : "";
  const typedNotes = step >= 4 ? "Policy #123456789. Call agent." : "";
  const selectedDate = step >= 5 ? "20-08-2026" : "";
  const selectedReminder = step >= 6 ? "7 days before" : "On due date";
  const buttonClicked = step === 7 || step === 8;

  return (
    <div className="w-full h-full bg-zinc-50 dark:bg-[#121212] pt-12 pb-6 px-5 flex flex-col font-sans relative overflow-hidden">
      
      {/* App Bar */}
      <div className="flex items-center justify-between mb-8">
        <svg className="w-6 h-6 text-zinc-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Add Reminder</h2>
        <div className="w-6" />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-24 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative">
        
        {/* Input: Reminder Title */}
        <MockInput 
          icon={<svg className="w-5 h-5 text-[#F46B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>}
          placeholder="Reminder Title (e.g., Renew I..."
          targetValue={typedTitle}
          isActive={step >= 1 && !isResetting}
        />

        {/* Input: Event Type Dropdown */}
        <div className="mb-4 relative">
          <span className="text-xs text-zinc-500 dark:text-zinc-400 ml-2 mb-1 block">Event Type</span>
          <MockInput 
            icon={<svg className="w-5 h-5 text-zinc-400 dark:text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
            placeholder="Select Type"
            targetValue={selectedType}
            isActive={step >= 3 && !isResetting}
            isDropdown
          />

          {/* SIMULATED FLOATING DROPDOWN MENU */}
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute top-16 left-0 right-0 bg-[#1C1C1E] rounded-2xl shadow-2xl border border-zinc-800 z-50 overflow-hidden"
              >
                <DropdownItem icon={<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />} label="Insurance" active />
                <DropdownItem icon={<path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />} label="PUC / Emission" />
                <DropdownItem icon={<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />} label="General Service" />
                <DropdownItem icon={<path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />} label="Oil Change" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input: Notes (Textarea simulation) */}
        <MockInput 
          icon={<svg className="w-5 h-5 text-[#F46B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>}
          placeholder="Notes (Optional)"
          targetValue={typedNotes}
          isActive={step >= 4 && !isResetting}
          isTextArea
        />

        {/* Input: Due Date */}
        <MockInput 
          icon={<svg className="w-5 h-5 text-[#F46B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
          placeholder="Select Due Date"
          targetValue={selectedDate ? `Due: ${selectedDate}` : ""}
          isActive={step >= 5 && !isResetting}
          isDropdown
        />

        {/* Input: Remind Me Dropdown */}
        <div className="mb-4">
          <span className="text-xs text-zinc-500 dark:text-zinc-400 ml-2 mb-1 block">Remind me</span>
          <MockInput 
            icon={<svg className="w-5 h-5 text-[#F46B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>}
            placeholder="On due date"
            targetValue={selectedReminder}
            isActive={step >= 6 && !isResetting}
            isDropdown
          />
        </div>

      </div>

      {/* Sticky Bottom Save Button */}
      <div className="absolute bottom-6 left-5 right-5 z-20">
        <motion.div 
          animate={{ scale: buttonClicked ? 0.95 : 1 }}
          className={`w-full h-14 rounded-2xl flex items-center justify-center font-bold text-white transition-colors duration-300 ${buttonClicked && !isResetting ? 'bg-green-500' : 'bg-[#F46B2C]'}`}
        >
          {buttonClicked && !isResetting ? 'Reminder Saved!' : 'Save Reminder'}
        </motion.div>
      </div>

    </div>
  );
};

// ==========================================
// Reusable Mock Input Component (Updated for TextAreas)
// ==========================================
const MockInput = ({ icon, placeholder, targetValue, isActive, isDropdown = false, isTextArea = false }: { icon: React.ReactNode, placeholder: string, targetValue: string, isActive: boolean, isDropdown?: boolean, isTextArea?: boolean }) => {
  const [displayedValue, setDisplayedValue] = useState("");

  useEffect(() => {
    if (!isActive) {
      setDisplayedValue("");
      return;
    }
    if (isDropdown) {
      setDisplayedValue(targetValue);
      return;
    }

    let i = 0;
    setDisplayedValue("");
    
    const typingInterval = setInterval(() => {
      if (i <= targetValue.length) {
        setDisplayedValue(targetValue.substring(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40); 

    return () => clearInterval(typingInterval);
  }, [isActive, targetValue, isDropdown]);

  const isFilled = displayedValue.length > 0;
  
  return (
    <div className={`w-full bg-white dark:bg-[#1C1C1E] rounded-2xl flex ${isTextArea ? 'items-start pt-4 min-h-[100px]' : 'items-center h-14'} px-4 mb-4 shadow-sm border border-transparent`}>
      {icon}
      <div className={`ml-3 flex-1 relative h-full flex ${isTextArea ? 'items-start' : 'items-center'} overflow-hidden`}>
        <span className={`absolute left-0 text-sm text-zinc-400 dark:text-zinc-500 transition-opacity duration-300 ${isFilled ? 'opacity-0' : 'opacity-100'}`}>
          {placeholder}
        </span>
        <span className="text-sm font-medium text-zinc-900 dark:text-white relative flex items-center flex-wrap">
          {displayedValue}
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

// UI Component for the Dropdown items
const DropdownItem = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
  <div className={`flex items-center px-4 py-4 border-b border-zinc-800 last:border-0 ${active ? 'bg-zinc-800/50' : ''}`}>
    <svg className="w-5 h-5 text-white mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      {icon}
    </svg>
    <span className="text-sm text-white">{label}</span>
  </div>
);

export default ScheduleScreen;