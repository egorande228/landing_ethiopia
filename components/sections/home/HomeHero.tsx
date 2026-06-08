import type { EthiopiaLocale } from "@/config/ethiopia-globals";
import type { EthiopiaContent } from "@/content/ethiopia-content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

type HomeHeroProps = {
  content: EthiopiaContent["home"]["hero"];
  locale: EthiopiaLocale;
};

export function HomeHero({ content, locale }: HomeHeroProps) {
  return (
    <section className="section-shell hero-shell" id="top">
      <div className="container">
        <div className="hero-grid">
          <Reveal as="div" className="surface surface--accent hero-copy home-hero__copy" variant="left">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <h1 className="type-display">{content.title}</h1>
            <p className="type-body-lg">{content.body}</p>

            <div className="hero-copy__actions">
              <div className="button-row">
                <ButtonLink cta={content.primaryCta} locale={locale} />
                <ButtonLink cta={content.secondaryCta} locale={locale} />
              </div>
              <div className="hero-copy__support">
                {content.supportCtas.map((cta) => (
                  <ButtonLink
                    cta={cta}
                    className="button-link--ghost"
                    key={`${cta.label}-${cta.href}`}
                    locale={locale}
                  />
                ))}
              </div>
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
            <div className="hero-stage__media">
              <MediaSlot locale={locale} priority slotId={content.mediaSlotId} />
            </div>
            <div className="hero-stage__notes">
              <span className="badge">{content.stageLabel}</span>
              <ul>
                {content.stagePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
