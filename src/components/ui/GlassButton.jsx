'use client';

import React from 'react';
import Link from 'next/link';

const GlassButton = ({ 
  children, 
  href, 
  onClick, 
  className = '', 
  variant = 'primary',
  size = 'md',
  disabled = false,
  ...props 
}) => {
  const baseClasses = `
    relative inline-flex items-center justify-center
    bg-white/10 dark:bg-black/10 
    backdrop-blur-md 
    border border-purple-400/30 dark:border-purple-500/30
    rounded-full 
    font-medium 
    transition-all duration-300 ease-out
    hover:bg-white/20 dark:hover:bg-black/20
    hover:border-purple-500/50 dark:hover:border-purple-400/50
    hover:shadow-lg hover:shadow-purple-500/25
    active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed
    group
    overflow-hidden
    shadow-sm shadow-black/5 dark:shadow-white/5
    ring-1 ring-white/10 dark:ring-white/5
    ${className}
  `;

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'text-gray-900 dark:text-white',
    secondary: 'text-gray-700 dark:text-gray-200',
    outline: 'text-purple-600 dark:text-purple-400'
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`.trim();

  const ButtonContent = () => (
    <>
      {/* Purple trace effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-full border border-purple-400/0 group-hover:border-purple-400/40 transition-all duration-300 animate-pulse" />
      
      {/* Content */}
      <span className="relative z-10 whitespace-nowrap">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        <ButtonContent />
      </Link>
    );
  }

  return (
    <button 
      className={classes} 
      onClick={onClick} 
      disabled={disabled}
      {...props}
    >
      <ButtonContent />
    </button>
  );
};

export default GlassButton;
