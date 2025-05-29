import Image from 'next/image';
type ProjectCardProps = {
  projectName: string;
  projectDescription: string;
  projectImageSrc: string;
  githubLink: string;
  projectLink: string;
  techstacks: string[];
};

function ProjectCard({
  projectName = 'Project Name',
  projectDescription = 'Project Description here',
  projectImageSrc = '/logos/html.svg',
  githubLink = '#',
  projectLink = '#',
  techstacks = ['enter', 'techstacks', 'here'],
}: ProjectCardProps) {
  return (
    <div className="flex h-[36rem] w-[30rem] flex-col rounded-lg border border-white bg-[#1f1f1f] px-[1.4rem] text-white">
      <Image
        className="rounded-[5px] pt-8 select-none"
        src={projectImageSrc}
        alt={`Image of ${projectName}`}
        height="256"
        width="448"
      />
      <h3 className="my-4 text-2xl font-semibold text-white">{projectName}</h3>
      <div className="flex flex-grow">
        <p className="text-[16px]">{projectDescription}</p>
      </div>
      <div className="mt-auto mb-7 flex w-full items-end justify-between gap-5">
        {/* projectinfocontainer */}
        <div className="mt-12 mb-0 flex w-32 justify-between pb-0 select-none">
          <a href={githubLink} target="_blank">
            <div className="flex h-fit w-fit items-center rounded-xl border-[3px] border-[#3e3e3e] p-2.5 transition-colors duration-200 select-none hover:border-[#525252] hover:bg-[#3e3e3e]">
              <Image
                className="select-none"
                src="/logos/github.svg"
                width="32"
                height="32"
                alt="Github Link"
              />
            </div>
          </a>
          <a href={projectLink} target="_blank">
            <div className="flex w-fit items-center rounded-xl border-[3px] border-[#3e3e3e] p-2.5 transition-colors duration-200 select-none hover:border-[#525252] hover:bg-[#3e3e3e]">
              <Image
                className="select-none"
                src="/logos/external-link.svg"
                height="32"
                width="32"
                alt="External Link"
              />
            </div>
          </a>
        </div>
        <div className="flex h-fit w-fit gap-[0.1rem]">
          {techstacks.map((stack, index) => (
            <p
              key={index}
              className="rounded-lg border border-[#868686] bg-[#1f1f1f] p-2.5 text-[0.938rem] leading-none transition-colors duration-200 select-none hover:border-[#525252] hover:bg-[#3e3e3e]"
            >
              {stack}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export { ProjectCard };
