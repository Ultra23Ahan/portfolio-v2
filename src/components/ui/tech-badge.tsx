import { clsx } from 'clsx';
import Image from 'next/image';

type TechBadgeProps = {
  techName: string;
  techSubtitle: string;
  techIconSrc: string;
  techBgColor: string; // Can be a solid color OR a CSS gradient
};

function TechBadge({
  techName = "Enter name",
  techSubtitle = "A thingy",
  techIconSrc = "/logos/external-link.svg",
  techBgColor = "rgba(69, 69 ,69, 0.6)",
}: TechBadgeProps) {
  const isLongSubtitle = techSubtitle?.length > 25;
  const cardParentClassName = clsx(
    'select-none hover:border-[#3e3e3e] gap-5 flex rounded-xl border-2 border-[#2a2a2a] bg-[#1f1f1f] p-2.5 transition-all duration-200 hover:bg-[#2a2a2a] h-[80px]',
    isLongSubtitle ? 'max-w-max' : 'w-[17.875rem]',
  );

  const iconBgStyle = techBgColor
    ? techBgColor.includes('gradient')
      ? { backgroundImage: techBgColor }
      : { backgroundColor: techBgColor }
    : undefined;

  return (
    <div className={cardParentClassName}>
      <div
        className="h-14 w-14 overflow-hidden rounded-md p-3 flex items-center justify-center"
        style={iconBgStyle}
      >
        <Image
          className="rounded-sm select-none"
          src={techIconSrc}
          alt={`${techName} logo`}
          height={32}
          width={32}
        />
      </div>
      <div className="flex flex-col justify-center gap-1">
        <h4 className="m-0 text-[1.125rem] font-medium text-white">{techName}</h4>
        <p className="m-0 justify-self-center px-1 text-[0.875rem] text-white/70">
          {techSubtitle}
        </p>
      </div>
    </div>
  );
}

export { TechBadge };
