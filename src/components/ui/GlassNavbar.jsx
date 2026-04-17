'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import NavMobile from '@/common/component/navbar/NavMobile';

const NavigationItem = [
  {
    src: "/",
    title: "Home",
  },
  {
    src: "/agents",
    title: "Agents",
  },
  {
    src: "/about",
    title: "About",
  },
];

const GlassNavbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Prevent hydration mismatch by only rendering theme-dependent content after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-4 px-6 py-2.5 bg-white dark:bg-card backdrop-blur-sm border border-border rounded-xl shadow-sm min-w-fit">
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

          {/* Main Navigation Items */}
          <div className="hidden md:flex items-center space-x-0.5">
            {NavigationItem.map((item, index) => (
              <Link 
                key={index}
                href={item.src}
                className={`px-3 py-1.5 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-secondary dark:hover:bg-secondary/50 whitespace-nowrap relative group ${
                  pathname === item.src
                    ? "text-primary dark:text-accent"
                    : "text-foreground/70 dark:text-foreground/70 hover:text-foreground dark:hover:text-foreground"
                }`}
              >
                {item.title}
                {/* Active indicator */}
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-primary dark:bg-accent transition-all duration-300 ${
                    pathname === item.src ? "w-4" : "w-0 group-hover:w-4"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Links - Desktop only */}
          <div className="hidden md:flex items-center space-x-0.5">
            <Link
              href="/vsldemo"
              className="px-3 py-1.5 text-sm font-medium text-foreground/70 dark:text-foreground/70 hover:text-foreground dark:hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-secondary dark:hover:bg-secondary/50 whitespace-nowrap"
            >
              Schedule a Demo
            </Link>

            <a
              href="https://app.automotiveai.ca/signin"
              className="px-3 py-1.5 text-sm font-medium text-foreground/70 dark:text-foreground/70 hover:text-foreground dark:hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-secondary dark:hover:bg-secondary/50 whitespace-nowrap"
            >
              Sign In
            </a>
          </div>

          {/* Theme Toggle - Desktop only */}
          <button
            onClick={toggleTheme}
            className="hidden md:block p-1.5 text-foreground/70 dark:text-foreground/70 hover:text-foreground dark:hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-secondary dark:hover:bg-secondary/50"
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

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={handleOpen}
              className="p-1.5 text-foreground/70 dark:text-foreground/70 hover:text-foreground dark:hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-secondary dark:hover:bg-secondary/50"
              aria-label="Toggle mobile menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={close}
            />

            {/* Close Button - Above Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-16 right-6 z-50"
            >
              <button
                onClick={close}
                className="w-8 h-8 rounded-lg bg-secondary dark:bg-secondary/50 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-secondary/80 dark:hover:bg-secondary/60 transition-colors shadow-sm"
                aria-label="Close menu"
              >
                <X className="w-4 h-4 text-foreground dark:text-foreground" />
              </button>
            </motion.div>

            {/* Thin Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-20 right-6 w-48 bg-card dark:bg-card backdrop-blur-sm border border-border rounded-xl shadow-md z-40 overflow-hidden"
            >

              {/* Menu Content */}
              <div className="p-3">
                {/* Navigation Items */}
                <div className="space-y-0.5">
                  {NavigationItem.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.src}
                        onClick={close}
                        className={clsx(
                          "block w-full text-left px-3 py-2 rounded-lg text-foreground dark:text-foreground hover:bg-secondary dark:hover:bg-secondary/50 transition-colors duration-200 font-medium text-sm",
                          pathname === item.src && "bg-secondary dark:bg-secondary/50 text-primary dark:text-accent"
                        )}
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-border my-2"></div>

                {/* Action Buttons */}
                <div className="space-y-0.5">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: NavigationItem.length * 0.05 }}
                  >
                    <a
                      href="https://app.automotiveai.ca/signin"
                      onClick={close}
                      className="block w-full text-left px-3 py-2 rounded-lg text-foreground dark:text-foreground hover:bg-secondary dark:hover:bg-secondary/50 transition-colors duration-200 font-medium text-sm"
                    >
                      Sign In
                    </a>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (NavigationItem.length + 1) * 0.05 }}
                  >
                    <Link
                      href="/vsldemo"
                      onClick={close}
                      className="block w-full text-left px-3 py-2 rounded-lg text-foreground dark:text-foreground hover:bg-secondary dark:hover:bg-secondary/50 transition-colors duration-200 font-medium text-sm"
                    >
                      Schedule a Demo
                    </Link>
                  </motion.div>
                </div>

                {/* Theme Toggle for Mobile */}
                <div className="mt-2 pt-2 border-t border-border">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (NavigationItem.length + 2) * 0.05 }}
                  >
                    <button
                      onClick={toggleTheme}
                      className="flex items-center w-full px-3 py-2 rounded-lg text-foreground dark:text-foreground hover:bg-secondary dark:hover:bg-secondary/50 transition-colors duration-200 font-medium text-sm"
                    >
                      {mounted ? (
                        <>
                          {theme === 'dark' ? (
                            <Sun className="w-4 h-4 mr-2" />
                          ) : (
                            <Moon className="w-4 h-4 mr-2" />
                          )}
                          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                        </>
                      ) : (
                        <div className="w-4 h-4 mr-2" />
                      )}
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default GlassNavbar;
