import type { EthiopiaLocale } from "@/config/ethiopia-globals";
import { MarketPageShell } from "@/components/layout/MarketPageShell";
import { GamesSection } from "@/components/sections/home/GamesSection";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { OffersSection } from "@/components/sections/home/OffersSection";
import { SportsSection } from "@/components/sections/home/SportsSection";
import { getEthiopiaContent } from "@/content/ethiopia-content";

type HomePageViewProps = {
  locale: EthiopiaLocale;
};

export function HomePageView({ locale }: HomePageViewProps) {
  const content = getEthiopiaContent(locale);

  return (
    <MarketPageShell content={content} locale={locale} page="home">
      <HomeHero content={content.home.hero} locale={locale} />
      <GamesSection content={content.home.games} locale={locale} />
      <SportsSection content={content.home.sports} locale={locale} />
      <OffersSection content={content.home.offers} locale={locale} />
    </MarketPageShell>
  );
}
