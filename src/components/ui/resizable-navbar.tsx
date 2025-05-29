'use client';
import { cn } from '@/lib/utils';
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from 'motion/react';

import React, { useRef, useState } from 'react';

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn('fixed inset-x-0 top-0 z-40 w-full', className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(10px)' : 'none',
        boxShadow: visible ? 'none' : 'none',
        width: visible ? '40%' : '100%',
        y: visible ? 20 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: '800px',
      }}
      className={cn(
        'relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex',
        visible && 'bg-neutral-800',
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-100 hover:text-zinc-800 lg:flex lg:space-x-2',
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-neutral-300"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-neutral-700"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};
