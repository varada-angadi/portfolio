// src/components/AnimateOnLoad.jsx
import React, { useState, useEffect } from 'react';

/**
 * A component that animates its children based on initial and final classes.
 *
 * @param {object} props - The component props.
 * @param {number} [props.delay=0] - The delay in milliseconds before the animation starts.
 * @param {string} [props.initialClasses='opacity-0'] - Tailwind classes for the element's initial state (before animation).
 * @param {string} [props.animateClasses='opacity-100'] - Tailwind classes for the element's final state (after animation).
 * @param {string} [props.transitionClasses='transition-all duration-700 ease-out'] - Tailwind classes for transition properties.
 * @param {React.ReactNode} props.children - The content to be animated.
 * @param {string} [props.className=''] - Additional Tailwind CSS classes for the wrapper div.
 */
function AnimateOnLoad({
  delay = 0,
  initialClasses = 'opacity-0', // Default: start invisible
  animateClasses = 'opacity-100', // Default: end fully visible
  transitionClasses = 'transition-all duration-700 ease-out', // Default: all properties, 700ms, ease-out
  children,
  className = ''
}) {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`${hasAnimated ? animateClasses : initialClasses} ${transitionClasses} ${className}`}
    >
      {children}
    </div>
  );
}

export default AnimateOnLoad;