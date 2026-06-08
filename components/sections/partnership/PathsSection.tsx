import type { EthiopiaLocale } from "@/config/ethiopia-globals";
import type { EthiopiaContent } from "@/content/ethiopia-content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/layout/SectionShell";

type PathsSectionProps = {
  content: EthiopiaContent["partnership"]["paths"];
  locale: EthiopiaLocale;
};

export function PathsSection({ content, locale }: PathsSectionProps) {
  return (
    <SectionShell body={content.body} eyebrow={content.eyebrow} id="paths" title={content.title}>
      <div className="paths-grid">
        {content.cards.map((card, index) => (
          <Reveal
            as="article"
            className="surface surface--accent route-card"
            delay={index * 70}
            key={card.title}
          >
            <span className="badge">{card.asideLabel}</span>
            <MediaSlot locale={locale} slotId={card.mediaSlotId} />
            <div className="route-card__body">
              <h3 className="type-card-title">{card.title}</h3>
              <p className="type-body">{card.body}</p>
            </div>
            <ul>
              {card.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="button-row">
              {card.ctas.map((cta) => (
                <ButtonLink cta={cta} key={`${cta.label}-${cta.href}`} locale={locale} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
