import type { EthiopiaLocale } from "@/config/ethiopia-globals";
import type { EthiopiaContent } from "@/content/ethiopia-content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

type PartnershipHeroProps = {
  content: EthiopiaContent["partnership"]["hero"];
  locale: EthiopiaLocale;
};

export function PartnershipHero({ content, locale }: PartnershipHeroProps) {
  return (
    <section className="section-shell hero-shell" id="top">
      <div className="container">
        <Reveal as="div" className="hero-copy partnership-hero__copy" variant="left">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h1 className="type-display">{content.title}</h1>
          <p className="type-body-lg">{content.body}</p>

          <div className="button-row">
            <ButtonLink cta={content.primaryCta} locale={locale} />
            <ButtonLink cta={content.secondaryCta} locale={locale} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
