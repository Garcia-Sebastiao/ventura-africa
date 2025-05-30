import { Footer } from "@/components/layout/footer/footer";
import { HomeAbout } from "./components/home-about/home-about";
import { HomeExperience } from "./components/home-experience/home-experience";
import { HomeExplore } from "./components/home-explore/home-explore";
import { HomeGalleries } from "./components/home-galleries/home-galleries";
import { HomeHero } from "./components/home-hero/home-hero";

export function HomeView() {
  return (
    <div className="w-full flex flex-col gap-y-2 lg:gap-y-[130px]">
      <HomeHero />
      <HomeAbout />
      <HomeGalleries />
      <HomeExplore />
      <div className="w-full">
        <HomeExperience />
        <Footer />
      </div>
    </div>
  );
}
