// Hero.tsx
import Section from "@/components/sections/Section";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { useTranslations } from "next-intl";

export default function Hero() {
    const t = useTranslations("Hero");
    return (
        <>
          <Section className="relative overflow-hidden flex items-center justify-center">
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