import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ShinyTextOnLoad = ({ 
  text, 
  shimmerWords = [], // Array of words that should shimmer
  speed = 3, 
  className = '', 
  shimmerDuration = 3000 // 3 seconds default
}) => {
  const [showShimmer, setShowShimmer] = useState(true);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    // Show shimmer effect for the specified duration, then hide it
    const timer = setTimeout(() => {
      setShowShimmer(false);
    }, shimmerDuration);

    return () => clearTimeout(timer);
  }, [shimmerDuration]);

  const animationDuration = `${speed}s`;

  // If no shimmer words specified, shimmer the entire text (backward compatibility)
  if (shimmerWords.length === 0) {
    return (
      <div
        className={`inline-block ${className} ${showShimmer ? 'animate-shine' : ''}`}
        style={{
          color: isDark ? 'white' : 'black', // Keep text visible during shimmer
          backgroundImage: showShimmer 
            ? 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)'
            : 'none',
          backgroundSize: showShimmer ? '200% 100%' : 'auto',
          WebkitBackgroundClip: showShimmer ? 'text' : 'initial',
          backgroundClip: showShimmer ? 'text' : 'initial',
          transition: 'color 0.5s ease-in-out'
        }}
      >
        {text}
      </div>
    );
  }

  // Split text into words and apply shimmer to specific words
  const words = text.split(' ');
  
  return (
    <div className={`inline-block ${className}`}>
      {words.map((word, index) => {
        const shouldShimmer = shimmerWords.some(shimmerWord => 
          word.toLowerCase().includes(shimmerWord.toLowerCase())
        );
        
        return (
          <span key={index}>
            <span
              className={shouldShimmer && showShimmer ? 'animate-shine' : ''}
              style={{
                color: isDark ? 'white' : 'black',
                backgroundImage: shouldShimmer && showShimmer 
                  ? 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)'
                  : 'none',
                backgroundSize: shouldShimmer && showShimmer ? '200% 100%' : 'auto',
                WebkitBackgroundClip: shouldShimmer && showShimmer ? 'text' : 'initial',
                backgroundClip: shouldShimmer && showShimmer ? 'text' : 'initial',
                transition: 'color 0.5s ease-in-out'
              }}
            >
              {word}
            </span>
            {index < words.length - 1 && ' '}
          </span>
        );
      })}
    </div>
  );
};

export default ShinyTextOnLoad;
