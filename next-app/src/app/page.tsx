import Section from "@/components/Section";
import Header from "@/components/Header";
import { AppConfig } from "@/utils/config";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

export default function Home() {
  return (
    <>
      <Header />
      <Section className="relative overflow-hidden flex items-center justify-center">
        {/* Bg layer, cause no opacity property for background */}
        <div className="absolute inset-0 bg-intro-section bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-65"></div>
        {/* Content */}
        <HeroGeometric
          badge={AppConfig.hero.badge}
          title1={AppConfig.hero.title1}
          title2={AppConfig.hero.title2}
          subtitle={AppConfig.hero.subtitle}
        />
      </Section>
    </>
  );
}
