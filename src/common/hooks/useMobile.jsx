import { useEffect, useState } from 'react';

/**
 * Lightweight mobile breakpoint hook.
 * Evaluates on the client only to avoid SSR hydration mismatches.
 * @param {number} breakpoint - px value that separates mobile & desktop (default 768).
 */
export function useMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Guard for environments where window is not defined (SSR)
    if (typeof window === 'undefined') return;

    const query = window.matchMedia(`(max-width: ${breakpoint}px)`);

    // Init on mount
    const updateIsMobile = () => setIsMobile(query.matches);
    updateIsMobile();

    // Listen for changes
    query.addEventListener('change', updateIsMobile);

    return () => query.removeEventListener('change', updateIsMobile);
  }, [breakpoint]);

  return isMobile;
}



