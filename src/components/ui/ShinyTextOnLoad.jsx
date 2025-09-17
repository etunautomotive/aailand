import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ShinyTextOnLoad = ({ 
  text, 
  speed = 3, 
  className = '', 
  shimmerDuration = 3000 // 3 seconds default
}) => {
  const [showShimmer, setShowShimmer] = useState(true);
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === 'dark';

  useEffect(() => {
    // Show shimmer effect for the specified duration, then hide it
    const timer = setTimeout(() => {
      setShowShimmer(false);
    }, shimmerDuration);

    return () => clearTimeout(timer);
  }, [shimmerDuration]);

  const animationDuration = `${speed}s`;

  return (
    <div
      className={`inline-block ${className}`}
      style={{
        color: showShimmer ? '#b5b5b5a4' : (isDark ? 'white' : 'black'),
        backgroundImage: showShimmer 
          ? 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)'
          : 'none',
        backgroundSize: showShimmer ? '200% 100%' : 'auto',
        WebkitBackgroundClip: showShimmer ? 'text' : 'initial',
        backgroundClip: showShimmer ? 'text' : 'initial',
        animationDuration: showShimmer ? animationDuration : 'none',
        animationName: showShimmer ? 'shine' : 'none',
        animationIterationCount: showShimmer ? 'infinite' : 'none',
        animationTimingFunction: showShimmer ? 'linear' : 'none',
        transition: 'color 0.5s ease-in-out'
      }}
    >
      {text}
    </div>
  );
};

export default ShinyTextOnLoad;
