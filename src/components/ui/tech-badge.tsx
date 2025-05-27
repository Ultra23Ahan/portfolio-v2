import { clsx } from 'clsx';
type TechBadgeProps = {
  techName: string;
  techSubtitle: string;
  techIcon: string;
  techBgColor: string;
};

function TechBadge({
  techName,
  techSubtitle,
  techIcon,
  techBgColor, //in rgba
}: TechBadgeProps) {
  const islongSubtitle = techSubtitle.length > 30;
  const cardParentClassName = clsx(
    'select-none hover:border-[#3e3e3e] gap-5 flex rounded-xl border-2 border-[#2a2a2a] bg-[#1f1f1f] p-2.5 transition-all duration-200 hover:bg-[#2a2a2a]',
    islongSubtitle ? 'max-w-max' : 'w-[17.875rem]',
  );
  return (
    <div className={cardParentClassName}>
      <div
        className="h-14 w-14 overflow-hidden rounded-md p-3"
        style={{ backgroundColor: techBgColor }}
      >
        <img
          className="h-8 w-8 rounded-sm select-none"
          src={techIcon}
          alt={`${techName} logo`}
        />
      </div>
      <div className="flex flex-col justify-center gap-1">
        <h4 className="m-0 text-[1.125rem] font-medium text-white">
          {techName}
        </h4>
        <p className="m-0 justify-self-center text-[0.875rem] text-white/70">
          {techSubtitle}
        </p>
      </div>
    </div>
  );
}

export { TechBadge };
