'use client';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  if (windowWidth === null) return null; // Avoid SSR mismatch

  const meteorCount = number || 20;
  const meteors = new Array(meteorCount).fill(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ overflow: 'hidden' }}
    >
      {meteors.map((_, idx) => {
        const position = idx * (windowWidth / meteorCount);

        return (
          <span
            key={`meteor-${idx}`}
            className={cn(
              'animate-meteor-effect absolute -z-50 h-0.5 w-0.5 rotate-[45deg] rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]',
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              className,
            )}
            style={{
              left: `${position}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.floor(Math.random() * 7 + 8)}s`,
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};
