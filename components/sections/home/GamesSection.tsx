import type { EthiopiaLocale } from "@/config/ethiopia-globals";
import type { EthiopiaContent } from "@/content/ethiopia-content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/layout/SectionShell";

type GamesSectionProps = {
  content: EthiopiaContent["home"]["games"];
  locale: EthiopiaLocale;
};

export function GamesSection({ content, locale }: GamesSectionProps) {
  return (
    <SectionShell body={content.body} eyebrow={content.eyebrow} id="games" title={content.title}>
      <div className="section-grid section-grid--three">
        {content.cards.map((card, index) => (
          <Reveal
            as="article"
            className="surface content-card"
            delay={index * 70}
            key={card.title}
            variant="scale"
          >
            {card.badge ? <span className="badge">{card.badge}</span> : null}
            <MediaSlot locale={locale} slotId={card.mediaSlotId} />
            <div className="content-card__body">
              <h3 className="type-card-title">{card.title}</h3>
              <p className="type-body">{card.body}</p>
            </div>
            {card.tags?.length ? (
              <ul className="tag-list">
                {card.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            ) : null}
            {card.cta ? <ButtonLink cta={card.cta} locale={locale} /> : null}
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
