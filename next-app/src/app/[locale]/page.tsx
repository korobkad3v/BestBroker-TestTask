import Section from "@/components/Section";
import Header from "@/components/HeaderWrapper";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { useTranslations } from "next-intl";
import { TestimonialsVariant } from "@/components/Testimonials";


export default function Home() {  

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
      <TestimonialsVariant />
    </>
  );
}
