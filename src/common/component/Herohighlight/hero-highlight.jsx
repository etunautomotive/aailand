import React, { useEffect, useState, useRef } from 'react';
import styles from './hero-highlight.module.css';

const PurpleHighlight = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const highlightRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (highlightRef.current) {
            observer.unobserve(highlightRef.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -250px 0px'
      }
    );

    if (highlightRef.current) {
      observer.observe(highlightRef.current);
    }

    return () => {
      if (highlightRef.current) {
        observer.unobserve(highlightRef.current);
      }
    };
  }, []);

  return (
    <span
      ref={highlightRef}
      style={{
        position: 'relative',
        display: 'inline-block',
        overflow: 'hidden',
        padding: '0 6px',
        borderRadius: '4px',
      }}
      className="relative"
    >
      {isVisible && (
        <span className={styles.purpleHighlightOverlay}>
          <span className={styles.spark} />
        </span>
      )}
      <span className="relative z-10 text-black dark:text-white font-bold">{children}</span>
    </span>
  );
};

export default PurpleHighlight;
