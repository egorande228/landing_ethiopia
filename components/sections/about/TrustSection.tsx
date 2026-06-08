import type { EthiopiaLocale } from "@/config/ethiopia-globals";
import type { EthiopiaContent } from "@/content/ethiopia-content";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/layout/SectionShell";

type TrustSectionProps = {
  content: EthiopiaContent["about"]["trust"];
  locale: EthiopiaLocale;
};

export function TrustSection({ content, locale }: TrustSectionProps) {
  return (
    <SectionShell body={content.body} eyebrow={content.eyebrow} id="trust" title={content.title}>
      <div className="trust-grid">
        <Reveal as="div" className="surface surface--stage hero-stage" variant="left">
          <MediaSlot locale={locale} slotId={content.mediaSlotId} />
        </Reveal>

        <div className="trust-grid__items">
          {content.items.map((item, index) => (
            <Reveal as="article" className="trust-tile" delay={index * 55} key={item.title}>
              <h3 className="type-card-title">{item.title}</h3>
              <p className="type-body">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
