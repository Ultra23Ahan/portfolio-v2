import { ProjectCard } from '@/components/ui/project-card';
import { TechBadge } from '@/components/ui/tech-badge';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#131313]">
      <TechBadge
        techName="Test"
        techSubtitle="champi"
        techBgColor="rgba(102, 187, 242, 0.3)"
        techIcon="/logos/html.svg"
      />
    </div>
  );
}
