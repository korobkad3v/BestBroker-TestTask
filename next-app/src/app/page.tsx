import Image from "next/image";
import Logo from "@/components/Logo";
import Preloader from "@/components/Preloader";
import Section from "@/components/Section";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

export default function Home() {
  return (
    <>
      <Section className="relative overflow-hidden flex items-center justify-center">
        {/* Bg layer, cause no opacity property for background */}
        <div className="absolute inset-0 bg-intro-section bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-65"></div>
        {/* Content */}
        <HeroGeometric
          badge="Real Estate Company"
          title1="Your dream home in "
          title2="Miami starts here"
          subtitle="Luxury properties. Smart investments. 
Local expertise you can trust."
        />
      </Section>
    </>
  );
}
