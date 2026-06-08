import type { EthiopiaLocale } from "@/config/ethiopia-globals";
import type { EthiopiaContent } from "@/content/ethiopia-content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

type AboutFinalCtaProps = {
  content: EthiopiaContent["about"]["finalCta"];
  locale: EthiopiaLocale;
};

export function AboutFinalCta({ content, locale }: AboutFinalCtaProps) {
  return (
    <section className="section-shell" id="about-cta">
      <div className="container">
        <div className="surface surface--accent cta-panel cta-grid">
          <Reveal as="div" className="cta-panel__copy">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <h2 className="type-heading">{content.title}</h2>
            <p className="type-subheading">{content.body}</p>
            <div className="button-row">
              <ButtonLink cta={content.primaryCta} locale={locale} />
              <ButtonLink cta={content.secondaryCta} locale={locale} />
            </div>
          </Reveal>
          <Reveal as="div" className="cta-panel__media-shell" delay={90}>
            <MediaSlot className="cta-panel__media" locale={locale} slotId={content.mediaSlotId} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
