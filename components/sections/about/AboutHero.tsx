import type { EthiopiaLocale } from "@/config/ethiopia-globals";
import type { EthiopiaContent } from "@/content/ethiopia-content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

type AboutHeroProps = {
  content: EthiopiaContent["about"]["hero"];
  locale: EthiopiaLocale;
};

export function AboutHero({ content, locale }: AboutHeroProps) {
  return (
    <section className="section-shell hero-shell" id="top">
      <div className="container">
        <div className="hero-grid">
          <Reveal as="div" className="surface hero-copy about-hero__copy" variant="left">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <h1 className="type-display">{content.title}</h1>
            <p className="type-body-lg">{content.body}</p>
            <div className="button-row">
              <ButtonLink cta={content.primaryCta} locale={locale} />
              <ButtonLink cta={content.secondaryCta} locale={locale} />
            </div>
            <div className="metrics-grid">
              {content.metrics.map((metric) => (
                <div className="metric-card" key={metric.label}>
                  <div className="metric-card__value type-metric" dir="ltr">
                    {metric.value}
                  </div>
                  <div className="metric-card__label type-body">{metric.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal as="div" className="surface surface--stage hero-stage" delay={120}>
            <MediaSlot locale={locale} priority slotId={content.mediaSlotId} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
