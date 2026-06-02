import Card from "./components/Card";
import HeroCard from "./components/HeroCard";
import AboutCard from "./components/AboutCard";
import EducationCard from "./components/EducationCard";
import ConnectCard from "./components/ConnectCard";
import NowCard from "./components/NowCard";
import ToolkitCard from "./components/ToolkitCard";
import ProjectsCard from "./components/ProjectsCard";
import SkillsCard from "./components/SkillsCard";
import FooterCard from "./components/FooterCard";
import NotableCard from "./components/NotableCard";

export default function App() {
  return (
    <main className="min-h-screen bg-primary text-white p-4 sm:p-5 md:p-6 relative">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-tan/10 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-0 w-[400px] h-[400px] bg-tan/5 rounded-full blur-[100px]" />

      <div className="mx-auto max-w-6xl grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-15 lg:max-h-[1600px] lg:gap-5 relative">
        <Card className="lg:col-span-2 lg:row-span-4" noPadding>
          <HeroCard />
        </Card>

        <Card className="lg:row-span-4" title="About me">
          <AboutCard />
        </Card>

        <Card className="lg:row-span-2" noPadding>
          <EducationCard />
        </Card>

        <Card className="lg:row-span-2" noPadding>
          <ConnectCard />
        </Card>

        <Card className="lg:row-span-2" title="Now">
          <NowCard />
        </Card>

        <Card className="lg:row-span-2 bg-[#c1a37f] border-[#A88967] hover:border-[#8F7253] hover:bg-[#c1a37f]" noPadding>
          <ToolkitCard />
        </Card>

        <Card className="lg:col-span-2 lg:row-span-2" noPadding>
          <NotableCard />
        </Card>

        <Card className="lg:col-span-4 lg:row-span-1" noPadding>
          <SkillsCard />
        </Card>

        <Card className="lg:col-span-4 lg:row-span-6" noPadding>
          <ProjectsCard />
        </Card>

        <Card className="lg:col-span-4 lg:row-span-1">
          <FooterCard />
        </Card>
      </div>
    </main>
  );
}
