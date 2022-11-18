import { Hero } from "./hero/Hero";
import { HeroLinksMobile } from "./hero/HeroLinksMobile";
import { MainPageCards } from "./MainPageCards";

export function MainPage() {
  return (
    <div className="">
      <Hero />
      <MainPageCards />
      <HeroLinksMobile />
    </div>
  );
}
