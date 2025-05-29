'use client';
import { ProjectCard } from '@/components/ui/project-card';
import { TechBadge } from '@/components/ui/tech-badge';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Navbar, NavBody, NavItems } from '@/components/ui/resizable-navbar';
import { motion } from 'motion/react';

export default function Home() {
  const arrowShowTime: number = 7500;
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let timeoutId: NodeJS.Timeout;
    let hasScrolled = false;

    function handleScroll() {
      if (!hasScrolled) {
        setShowArrow(false);
        hasScrolled = true;
        clearTimeout(timeoutId);
        window.removeEventListener('scroll', handleScroll);
      }
    }

    timeoutId = setTimeout(() => {
      if (!hasScrolled) {
        setShowArrow(true);
      }
    }, arrowShowTime);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navItems = [
    {
      name: 'About',
      link: '#about',
    },
    {
      name: 'Technologies',
      link: '#technologies',
    },
    {
      name: 'Projects',
      link: '#projects',
    },
    {
      name: 'Contact',
      link: '#contact',
    },
  ];
  //   function removeAnimationElement() {
  //     document.querySelector('[data-remove="hithere-animation"]')?.remove();
  //     document.querySelector('[data-remove=\"hide\"]').classList.remove('hidden');
  //   }
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    const nav = document.querySelector('[data-remove="hide"]');
    nav?.classList.add('hidden');

    const timer = setTimeout(() => {
      document.body.classList.remove('overflow-hidden');
      document.querySelector('[data-remove="hithere-animation"]')?.remove();
      nav?.classList.remove('hidden');
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div data-remove="hide">
        <Navbar>
          <NavBody>
            <div className="flex h-8 items-center gap-4">
              <NavItems items={navItems} />
            </div>
          </NavBody>
        </Navbar>
      </div>
      <div
        className="grid h-screen place-items-center bg-black"
        data-remove="hithere-animation"
      >
        <h1 className="animate-fade-in-out text-6xl text-white">Hello!</h1>
      </div>
      {/*my intro part*/}
      <main
        className="flex h-screen w-screen flex-col items-center justify-center"
        id="about"
      >
        <Image
          src="/special/pfp.png"
          width="64"
          alt="My profile picture"
          height="64"
          className="m-5 rounded-full"
        />
        <div className="text-center text-xl">Front-End Developer</div>
        <div className="text-9xl">
          I&apos;m<span className="text-blue-500"> Ahan Das.</span>
        </div>
        <p className="m-2 text-xl font-semibold"> Based in Bangalore, India</p>
        <div className="absolute bottom-8 flex flex-col items-center justify-center">
          <motion.img
            className={`fixed bottom-8 left-1/2 h-24 w-24 -translate-x-1/2 transition-opacity duration-500 ${showArrow ? 'opacity-100' : 'opacity-0'}`}
            src="/special/down-arrow.svg"
            animate={{
              y: [0, -30, 0, -15, 0, -30, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeOut',
            }}
          />
        </div>
      </main>
      {/*technologies part*/}
      <div className="h-16" id="technologies"></div>
      <div className="my-[14rem] h-fit w-screen px-24">
        {/* TechBadge components go here */}
        <p className="my-6 text-3xl">Technologies i know:</p>
        <div className="flex h-fit w-fit flex-row flex-wrap gap-4">
          <TechBadge
            techName="Semantic HTML"
            techSubtitle="Not a <div> hellscape"
            techIconSrc="/logos/html.svg"
            techBgColor="rgba(233, 87, 43, 0.3)"
          />
          <TechBadge
            techName="CSS"
            techSubtitle="Styling for HTML"
            techIconSrc="/logos/css.svg"
            techBgColor="rgba(73, 148, 236, 0.3)"
          />
          <TechBadge
            techName="Frontend JavaScript"
            techSubtitle="Functionality for HTML + CSS"
            techIconSrc="/logos/js.svg"
            techBgColor="rgba(249, 223, 75, 0.3)"
          />
          <TechBadge
            techName="Git"
            techSubtitle="Version control system"
            techIconSrc="/logos/git.svg"
            techBgColor="rgba(221, 76, 58, 0.3)"
          />
          <br />
          <TechBadge
            techName="Tailwind"
            techSubtitle="CSS but better & faster"
            techIconSrc="/logos/tailwind.svg"
            techBgColor="rgba(102, 187, 242, 0.3)"
          />
          <TechBadge
            techName="Python"
            techSubtitle="A programming language"
            techIconSrc="/logos/python.svg"
            techBgColor="linear-gradient(to bottom right, rgba(76, 120, 166, 0.3) 25%, rgba(250, 223, 110, 0.3))"
          />
          <TechBadge
            techName="Vite"
            techSubtitle="A frontend build tool"
            techIconSrc="/logos/vite.svg"
            techBgColor="linear-gradient(to bottom right, rgba(111, 180, 248, 0.3) 15%, rgba(171, 66, 245, 0.3))"
          />
        </div>

        <p className="my-6 text-3xl">Technologies I am learning:</p>
        <div className="flex h-fit w-fit flex-row flex-wrap gap-4">
          <TechBadge
            techName="Backend JavaScript"
            techSubtitle="Accessing API's, DBs, etc."
            techIconSrc="/logos/js.svg"
            techBgColor="rgba(249, 223, 75, 0.3)"
          />
          <TechBadge
            techName="TypeScript"
            techSubtitle="JavaScript with types"
            techIconSrc="/logos/ts.svg"
            techBgColor="rgba(68, 118, 192, 0.3)"
          />
          <TechBadge
            techName="Supabase"
            techSubtitle="Firebase Alternative"
            techIconSrc="/logos/supabase.svg"
            techBgColor="rgba(108, 204, 147, 0.3)"
          />
          <TechBadge
            techName="Swift & Swiftui"
            techSubtitle="Used for making darwin apps"
            techIconSrc="/logos/swift.svg"
            techBgColor="rgba(227, 91, 58, 0.3)"
          />
          <TechBadge
            techName="Vue"
            techSubtitle="A JavaScript Framework"
            techIconSrc="/logos/vue.svg"
            techBgColor="rgba(90, 255, 124, 0.3)"
          />
          <TechBadge
            techName="Svelte"
            techSubtitle="A JavaScript Framework"
            techIconSrc="/logos/svelte.svg"
            techBgColor="rgba(235, 80, 39, 0.3)"
          />
          <TechBadge
            techName="Next.js"
            techSubtitle="A Full Stack JS Framework"
            techIconSrc="/logos/nextjs.svg"
            techBgColor="rgba(0, 0, 0, 0.3)"
          />
          <TechBadge
            techName="React"
            techSubtitle="A JavaScript Framework"
            techIconSrc="/logos/react.svg"
            techBgColor="rgba(130, 215, 247, 0.3)"
          />
        </div>
      </div>
      {/* projects part */}
      <p className="my-6 px-24 text-3xl" id="projects">
        My projects:
      </p>
      <div className="flex h-fit w-fit flex-row flex-wrap gap-4 px-24">
        <ProjectCard
          projectName="Kheti"
          projectDescription="A one stop solution for farmers that provides them with all the information they need such a GUI for buyers and sellers for crops, etc."
          projectImageSrc="/project_photos/Kheti.png"
          projectLink="https://amogh-prabhakar.github.io/Kheti/"
          githubLink="https://github.com/Amogh-Prabhakar/Kheti"
          techstacks={['HTML', 'CSS', 'JS']}
        />
        <ProjectCard
          projectName="InstaMacro"
          projectDescription="A website where people can contact me for making macros for them using python to automate repetitive tasks.(Business idea)"
          projectImageSrc="/project_photos/InstaMacro.png"
          projectLink="https://insta-macro.vercel.app"
          githubLink="https://github.com/Ultra23Ahan/InstaMacro/"
          techstacks={['HTML', 'CSS', 'JS']}
        />
      </div>
      <footer
        className="mt-18 flex h-fit flex-col bg-[#444] p-[1.25rem] text-white"
        id="contact"
      >
        <div className="flex justify-between">
          <h2 className="m-0 text-2xl">
            Let&apos;s Collaborate!
            <br />
            My email:
            <br />
            <a href="mailto:ahandas234@gmail.com" className="no-underline">
              → <span className="text-green-500">click here</span> ←
            </a>
            <br />
            My Discord username is : <br />
            <code className="text-lg">ultra23ahan</code>
          </h2>
          <div className="flex w-[8rem] justify-between">
            <div className="h-fit w-fit rounded-lg border border-[#868686] p-2.5 transition-colors duration-200 select-none hover:border-[#525252] hover:bg-[#3e3e3e]">
              <a
                href="https://github.com/Ultra23Ahan"
                className="no-underline"
                target="_blank"
              >
                <Image
                  className="p-[0.16rem] select-none"
                  src="/logos/github.svg"
                  width="32"
                  height={0}
                  alt="Github logo"
                />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-[6rem] mb-0 self-center text-[1.25rem]">
          Made by Ahan Das ©
        </p>
      </footer>
    </>
  );
}
