'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const GlassNavbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering theme-dependent content after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="fixed top-6 left-6 z-50">
      <div className="flex items-center gap-4 px-5 py-2.5 bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full shadow-lg min-w-fit">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {/* Light mode logo (dark) */}
          <img 
            src="/darkautoai.svg" 
            alt="Automotive AI" 
            className="w-6 h-6 block dark:hidden"
          />
          
          {/* Dark mode logo (light) */}
          <img 
            src="/lightautoai.svg" 
            alt="Automotive AI" 
            className="w-6 h-6 hidden dark:block"
          />
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center space-x-0.5">
          <Link 
            href="/bookademo"
            className="px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 rounded-full hover:bg-white/10 dark:hover:bg-white/5 whitespace-nowrap"
          >
            Schedule a Demo
          </Link>
          
          <Link 
            href="/signin"
            className="px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 rounded-full hover:bg-white/10 dark:hover:bg-white/5 whitespace-nowrap"
          >
            Sign In
          </Link>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 rounded-full hover:bg-white/10 dark:hover:bg-white/5"
          aria-label="Toggle theme"
        >
          {mounted ? (
            theme === 'dark' ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )
          ) : (
            // Show a placeholder icon during SSR to prevent hydration mismatch
            <div className="w-4 h-4" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default GlassNavbar;
