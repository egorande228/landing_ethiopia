import type { EthiopiaLocale } from "@/config/ethiopia-globals";
import type { EthiopiaContent } from "@/content/ethiopia-content";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/layout/SectionShell";

type MarketStorySectionProps = {
  content: EthiopiaContent["about"]["story"];
  locale: EthiopiaLocale;
};

export function MarketStorySection({
  content,
  locale,
}: MarketStorySectionProps) {
  return (
    <SectionShell body={content.body} eyebrow={content.eyebrow} id="story" title={content.title}>
      <div className="story-grid">
        <Reveal as="article" className="surface surface--accent content-card" variant="left">
          <ul className="story-points">
            {content.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="div" className="surface surface--stage hero-stage" delay={100}>
          <MediaSlot locale={locale} slotId={content.mediaSlotId} />
        </Reveal>
      </div>
    </SectionShell>
  );
}
