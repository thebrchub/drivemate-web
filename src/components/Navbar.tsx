import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const location = useLocation();

  // Smart Scroll Logic
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // If scrolling down AND past the 100px mark, hide the navbar
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      // If scrolling up or at the very top, show the navbar
      setHidden(false);
    }
  });

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.div 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" } // Slides completely out of view (including padding)
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <nav className="pointer-events-auto flex items-center justify-between w-full max-w-4xl px-6 py-3 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 rounded-full shadow-lg dark:shadow-black/20 transition-colors duration-300">
        
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="Quantacel">
          {/* Logo Container */}
          <div className="relative w-9 h-9 shrink-0">
            {/* Light Mode Logo (Visible in light, fades out in dark) */}
            <img 
              src="/images/logo_w.png" 
              alt="Quantacel Icon" 
              className="absolute inset-0 w-full h-full object-contain transition-all duration-500 opacity-100 dark:opacity-0 group-hover:scale-105"
            />
            
            {/* Dark Mode Logo (Hidden in light, fades in in dark) */}
            <img 
              src="/images/logo_d.png" 
              alt="Quantacel Icon" 
              className="absolute inset-0 w-full h-full object-contain transition-all duration-500 opacity-0 dark:opacity-100 group-hover:scale-105"
            />
          </div>
          
          {/* App Name */}
          <span className="font-bold text-xl tracking-tight text-zinc-900 dark:text-white group-hover:text-[#F46B2C] dark:group-hover:text-[#F46B2C] transition-colors duration-300">
            Quantacel
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1 bg-zinc-100/50 dark:bg-zinc-950/50 p-1 rounded-full border border-zinc-200/50 dark:border-zinc-800/50">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-white dark:bg-zinc-800 text-brand shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-zinc-800/50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
          
          <a
            href="#download"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-semibold hover:bg-[#F46B2C] dark:hover:bg-[#F46B2C] hover:text-white dark:hover:text-white transition-colors duration-200"
          >
            Get App
          </a>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;