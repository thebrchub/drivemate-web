import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pb-6 mt-20">
      {/* FIX: Changed dark:bg-zinc-900/50 to dark:bg-zinc-900 to remove the transparency */}
      <footer className="relative w-full border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden transition-colors duration-300 shadow-xl dark:shadow-none">
        
        {/* Main Content */}
        <div className="px-8 pt-16 pb-32 md:pb-48 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-12">
            
            {/* Brand Column */}
            <div className="md:col-span-2 space-y-6">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center shadow-[0_0_15px_rgba(244,107,44,0.4)] group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-bold text-xl text-zinc-900 dark:text-white tracking-tight">
                  DriveMate
                </span>
              </Link>
              <p className="text-zinc-500 dark:text-zinc-400 max-w-sm text-sm leading-relaxed">
                Your digital garage, perfected. Manage vehicles, track maintenance, and handle reminders with total privacy. Designed for offline-first performance.
              </p>
            </div>

            {/* Legal Links */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold tracking-wider text-zinc-900 dark:text-white uppercase">Legal</h3>
              <ul className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400">
                <li>
                  <Link to="/privacy" className="hover:text-brand transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-brand transition-colors">Terms of Use</Link>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold tracking-wider text-zinc-900 dark:text-white uppercase">Support</h3>
              <ul className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400">
                <li>
                  <Link to="/contact" className="hover:text-brand transition-colors">Contact Us</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-brand transition-colors">Feature Request</Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Developer Credit & Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-zinc-200/80 dark:border-zinc-800/80 pt-6">
            <p className="text-xs text-zinc-500 dark:text-zinc-500 font-medium">
              © {new Date().getFullYear()} DriveMate App. All rights reserved.
            </p>
            <div className="text-xs text-zinc-500 dark:text-zinc-500 font-medium">
              App developed by <a href="https://www.brchub.tech" target="_blank" rel="noopener noreferrer" className="text-zinc-700 dark:text-zinc-300 hover:text-brand dark:hover:text-brand transition-colors">BRC HUB LLP</a>
            </div>
          </div>
        </div>

        {/* Giant Half-Cut Background Text */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none">
          <h1 className="text-[17vw] font-black leading-[0.75] tracking-tighter text-zinc-100 dark:text-zinc-950 translate-y-[28%]">
            DRIVEMATE
          </h1>
        </div>
        
      </footer>
    </div>
  );
};

export default Footer;