'use client';
import { useEffect, useRef } from 'react';
import { ProjectCard } from '@/components/ui/project-card';
import { TechBadge } from '@/components/ui/tech-badge';
export default function Home() {
    const h1Ref = useRef<HTMLHeadingElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger animation
    h1Ref.current?.classList.add('animate-fade-in-out');
    divRef.current?.classList.add('animate-collapse-space');

    // Lock scroll
    document.body.classList.add('overflow-hidden');

    // Unlock scroll after animation (3.5s)
    const timer = setTimeout(() => {
      document.body.classList.remove('overflow-hidden');
    }, 3500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <main>
      <h1 className="animate-[fade-in-out_3s_forwards] place-self-center text-8xl text-white font-medium text-center mt-20">
        Hi There👋
      </h1>
      <div className="mt-screen pointer-events-none h-screen animate-collapse-space select-none"></div>
    </main>
  );
}
