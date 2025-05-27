'use client';
import { useEffect, useRef } from 'react';

export default function Home() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (h1Ref.current) h1Ref.current.classList.add('animate-fade-in-out');
    if (divRef.current) divRef.current.classList.add('animate-collapse-space');

    document.body.classList.add('overflow-hidden');

    const timer = setTimeout(() => {
      document.body.classList.remove('overflow-hidden');
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="grid h-screen place-items-center bg-black">
      <h1
        ref={h1Ref}
        className="text-white text-6xl opacity-0 fadeinout-h1"
      >
        Hi There 👋
      </h1>
      <div
        ref={divRef}
        className="collapse-spacer pointer-events-none h-screen mt-screen select-none"
      ></div>
    </main>
  );
}
