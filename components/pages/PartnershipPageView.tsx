import type { EthiopiaLocale } from "@/config/ethiopia-globals";
import { MarketPageShell } from "@/components/layout/MarketPageShell";
import { BenefitsSection } from "@/components/sections/partnership/BenefitsSection";
import { PartnershipHero } from "@/components/sections/partnership/PartnershipHero";
import { PathsSection } from "@/components/sections/partnership/PathsSection";
import { StepsSection } from "@/components/sections/partnership/StepsSection";
import { ToolsSection } from "@/components/sections/partnership/ToolsSection";
import { getEthiopiaContent } from "@/content/ethiopia-content";

type PartnershipPageViewProps = {
  locale: EthiopiaLocale;
};

export function PartnershipPageView({ locale }: PartnershipPageViewProps) {
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
