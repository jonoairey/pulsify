// src/components/stats/StatsCounter.js
import React, { useState, useEffect, useRef } from 'react';

const StatsCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const startTime = performance.now();
          const updateCount = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            setCount(Math.floor(end * progress));

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            }
          };
          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = countRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      console.log('Cleanup function:', currentRef);
    };
  }, [end, duration]);

  return (
    <div ref={countRef} className="text-4xl font-bold">
      {count}{suffix}
      <p>Count: {countRef.current}</p>
    </div>
  );
};

export default StatsCounter;