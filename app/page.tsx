import BlogHero from "@/components/BlogHero";
import ContactHero from "@/components/ContactHero";
import HomeHero from "@/components/HomeHero";
import ProjectsHero from "@/components/ProjectsHero";
import ServicesHero from "@/components/ServicesHero";
import StatHero from "@/components/StatHero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-svw ">
      <div className="h-dvh w-full">
        <HomeHero />
      </div>
      <div id="services" className="h-full w-full" >
        <StatHero />
      </div>
      <div className="h-full w-full" >
        <ServicesHero />
      </div>
      <div className="h-full w-full">
        <ProjectsHero />
      </div>
      <div className="h-dvh w-full">
        <BlogHero />
      </div>
      <div id="contact" className="h-full w-full">
        <ContactHero />
      </div>
    </main>
  );
}
