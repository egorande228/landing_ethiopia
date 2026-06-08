import type { Metadata } from "next";
import { MarketPageShell } from "@/components/layout/MarketPageShell";
import { GamesSection } from "@/components/sections/home/GamesSection";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { OffersSection } from "@/components/sections/home/OffersSection";
import { SportsSection } from "@/components/sections/home/SportsSection";
import { getEthiopiaContent } from "@/content/ethiopia-content";
import { resolveLocale } from "@/lib/direction";

export const metadata: Metadata = {
  title: "Sports, Casino, Offers, and Mobile Play",
  description: getEthiopiaContent("en").seo.homeDescription,
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

type HomePageProps = {
  searchParams: SearchParams;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const locale = resolveLocale((await searchParams).lang);
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
