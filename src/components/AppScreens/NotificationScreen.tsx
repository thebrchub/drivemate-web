import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NotificationScreen: React.FC = () => {
  const [showPush, setShowPush] = useState(false);

  useEffect(() => {
    // Loop the push notification dropping down every 4 seconds
    const interval = setInterval(() => {
      setShowPush(true);
      
      // Hide it after 2.5 seconds
      setTimeout(() => {
        setShowPush(false);
      }, 2500);
    }, 4000);

    // Initial trigger
    setTimeout(() => setShowPush(true), 1000);
    setTimeout(() => setShowPush(false), 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-zinc-50 dark:bg-[#121212] pt-12 pb-6 px-5 flex flex-col font-sans relative overflow-hidden">
      
      {/* App Bar */}
      <div className="flex items-center justify-between mb-8">
        <svg className="w-6 h-6 text-zinc-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Notifications</h2>
        <div className="w-6" /> {/* Spacer */}
      </div>

      {/* 
        Scrollable Notification List 
        Hidden scrollbar for clean UI 
      */}
      <div className="flex-1 overflow-y-auto pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        {/* Item 1: Insurance Renewal */}
        <NotificationCard 
          icon={
            <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          title="Insurance Renewal"
          subtitle="Action required for DAILY COMMUTE."
          trailing="Overdue"
        />

        {/* Item 2: General Service */}
        <NotificationCard 
          icon={
            <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          title="General Service"
          subtitle="Action required for DAILY COMMUTE."
          trailing="Overdue"
        />

        {/* Item 3: PUC Renewal */}
        <NotificationCard 
          icon={
            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          title="PUC Renewal"
          subtitle="Action required for DAILY COMMUTE."
          trailing="In 16d"
        />
        
      </div>

      {/* --- THE SMART PART: SIMULATED OS PUSH NOTIFICATION --- */}
      <AnimatePresence>
        {showPush && (
          <motion.div
            initial={{ y: -100, opacity: 0, scale: 0.9 }}
            animate={{ y: 10, opacity: 1, scale: 1 }}
            exit={{ y: -100, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="absolute top-0 left-4 right-4 z-50"
          >
            {/* Native OS-style floating banner */}
            <div className="bg-white/90 dark:bg-[#2A2A2D]/90 backdrop-blur-xl p-4 rounded-[1.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.2)] border border-white/20 dark:border-white/10 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#F46B2C] flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-xs font-bold text-zinc-900 dark:text-white">DriveMate</span>
                  <span className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">now</span>
                </div>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 leading-tight mb-1">
                  Upcoming: General Service
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-tight">
                  Your WEEKEND CRUISER is due for service in 3 days.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

// Reusable Notification Card matching your screenshot
const NotificationCard = ({ icon, title, subtitle, trailing }: { icon: React.ReactNode, title: string, subtitle: string, trailing: string }) => {
  return (
    <div className="w-full bg-white dark:bg-[#1C1C1E] p-4 rounded-2xl mb-4 flex items-start gap-3 shadow-sm border border-transparent dark:border-zinc-800/50">
      <div className="mt-0.5">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-[15px] font-bold text-zinc-900 dark:text-white tracking-tight">{title}</h3>
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{trailing}</span>
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed pr-6">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default NotificationScreen;