import type { Metadata } from "next";
import { MarketPageShell } from "@/components/layout/MarketPageShell";
import { BenefitsSection } from "@/components/sections/partnership/BenefitsSection";
import { PartnershipHero } from "@/components/sections/partnership/PartnershipHero";
import { PathsSection } from "@/components/sections/partnership/PathsSection";
import { StepsSection } from "@/components/sections/partnership/StepsSection";
import { ToolsSection } from "@/components/sections/partnership/ToolsSection";
import { getEthiopiaContent } from "@/content/ethiopia-content";
import { resolveLocale } from "@/lib/direction";

export const metadata: Metadata = {
  title: "Partnership | Partner and Agent Routes",
  description: getEthiopiaContent("en").seo.partnershipDescription,
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

type PartnershipPageProps = {
  searchParams: SearchParams;
};

export default async function PartnershipPage({
  searchParams,
}: PartnershipPageProps) {
  const locale = resolveLocale((await searchParams).lang);
  const content = getEthiopiaContent(locale);

  return (
    <MarketPageShell content={content} locale={locale} page="partnership">
      <PartnershipHero content={content.partnership.hero} locale={locale} />
      <BenefitsSection content={content.partnership.benefits} />
      <StepsSection content={content.partnership.steps} />
      <ToolsSection content={content.partnership.tools} />
      <PathsSection content={content.partnership.paths} locale={locale} />
    </MarketPageShell>
  );
}
