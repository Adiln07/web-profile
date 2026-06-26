import { Certificates } from "./_components/Certificates";
import { Header } from "./_components/Header";
import { HeroMain } from "./_components/HeroMain";
import { WorkExperiences } from "./_components/WorkExperiences";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroMain />
      <WorkExperiences />
      <Certificates />
    </div>
  );
}
