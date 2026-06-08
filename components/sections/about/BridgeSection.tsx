import type { EthiopiaLocale } from "@/config/ethiopia-globals";
import type { EthiopiaContent } from "@/content/ethiopia-content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/layout/SectionShell";

type BridgeSectionProps = {
  content: EthiopiaContent["about"]["bridge"];
  locale: EthiopiaLocale;
};

export function BridgeSection({ content, locale }: BridgeSectionProps) {
  return (
    <SectionShell body={content.body} eyebrow={content.eyebrow} id="bridge" title={content.title}>
      <div className="bridge-grid">
        {content.cards.map((card, index) => (
          <Reveal
            as="article"
            className="surface surface--accent about-bridge-card"
            delay={index * 80}
            key={card.title}
          >
            <h3 className="type-card-title">{card.title}</h3>
            <p className="type-body">{card.body}</p>
            <ButtonLink cta={card.cta} locale={locale} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
