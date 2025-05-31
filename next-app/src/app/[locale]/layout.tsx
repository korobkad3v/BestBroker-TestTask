import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { AppConfig } from "@/utils/config";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/ui/footer-section";
import Preloader from "@/components/Preloader";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Preloader dev={AppConfig.preloader.dev} />
          <HeaderWrapper />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
