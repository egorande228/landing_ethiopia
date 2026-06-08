import type { EthiopiaLocale } from "@/config/ethiopia-globals";
import type { EthiopiaContent } from "@/content/ethiopia-content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/layout/SectionShell";

type SportsSectionProps = {
  content: EthiopiaContent["home"]["sports"];
  locale: EthiopiaLocale;
};

export function SportsSection({ content, locale }: SportsSectionProps) {
  const orderedCards = [...content.cards].sort((left, right) => {
    const orderBySlotId = {
      sportsFootballCard: 0,
      sportsLiveMatchCard: 1,
      sportsRewardsCard: 2,
      sportsMobileCard: 3,
    } as const;

    const leftOrder = orderBySlotId[left.mediaSlotId as keyof typeof orderBySlotId] ?? 99;
    const rightOrder = orderBySlotId[right.mediaSlotId as keyof typeof orderBySlotId] ?? 99;

    return leftOrder - rightOrder;
  });

  return (
    <SectionShell className="sports-section" id="sports">
      <Reveal as="div" className="surface sports-showcase" variant="scale">
        <header className="sports-showcase__header">
          <span className="sports-showcase__eyebrow">{content.eyebrow}</span>
          <div className="sports-showcase__copy">
            <h2 className="sports-showcase__title">{content.title}</h2>
          </div>
        </header>

        <div className="section-grid section-grid--four sports-grid">
          {orderedCards.map((card, index) => {
            const cardNumber = String(index + 1).padStart(2, "0");

            return (
              <Reveal
                as="article"
                className="surface sports-card"
                delay={index * 70}
                key={card.title}
              >
                <div className="sports-card__visual">
                  <MediaSlot className="sports-card__media" locale={locale} slotId={card.mediaSlotId} />
                  <div className="sports-card__badges">
                    <span className="sports-card__tag">{card.accentLabel}</span>
                    <span className="sports-card__index" dir="ltr">
                      {cardNumber}
                    </span>
                  </div>
                </div>

                <div className="sports-card__body">
                  <h3 className="sports-card__title">{card.title}</h3>
                  <p className="sports-card__copy">{card.body}</p>
                </div>

                <div className="sports-card__footer">
                  <ButtonLink className="sports-card__cta" cta={card.cta} locale={locale} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </Reveal>
    </SectionShell>
  );
}
