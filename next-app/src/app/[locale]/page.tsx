import Section from "@/components/Section";
import Header from "@/components/HeaderWrapper";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { useTranslations } from "next-intl";

export default function Home() {  

  const t = useTranslations("Hero");
  return (
    <>
      <Section className="relative overflow-hidden flex items-center justify-center">
        {/* Bg layer, cause no opacity property for background */}
        <div className="absolute inset-0 bg-intro-section bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-65"></div>
        {/* Content */}
        <HeroGeometric
          badge={t("badge")}
          title1={t("title1")}
          title2={t("title2")}
          subtitle={t("subtitle")}
        />
      </Section>
    </>
  );
}
