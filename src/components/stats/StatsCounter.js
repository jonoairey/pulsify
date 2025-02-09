// src/components/stats/StatsCounter.js
import React, { useState, useEffect, useRef } from 'react';

const StatsCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

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

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
      const currentCount = countRef.current;
      console.log('Cleanup function:', currentCount);
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