import type { EthiopiaLocale } from "@/config/ethiopia-globals";
import type { EthiopiaContent } from "@/content/ethiopia-content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

type PartnershipFinalCtaProps = {
  content: EthiopiaContent["partnership"]["finalCta"];
  locale: EthiopiaLocale;
};

export function PartnershipFinalCta({
  content,
  locale,
}: PartnershipFinalCtaProps) {
  return (
    <section className="section-shell" id="final-cta">
      <div className="container">
        <div className="surface surface--accent cta-panel cta-grid">
          <Reveal as="div" className="cta-panel__copy">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <h2 className="type-heading">{content.title}</h2>
            <p className="type-subheading">{content.body}</p>
            <ul className="check-list">
              {content.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="button-row">
              <ButtonLink cta={content.primaryCta} locale={locale} />
              <ButtonLink cta={content.secondaryCta} locale={locale} />
            </div>
          </Reveal>

          <Reveal as="div" className="cta-panel__media-shell" delay={100}>
            <MediaSlot className="cta-panel__media" locale={locale} slotId={content.mediaSlotId} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
