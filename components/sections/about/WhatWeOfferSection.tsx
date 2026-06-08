import type { EthiopiaContent } from "@/content/ethiopia-content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/layout/SectionShell";

type WhatWeOfferSectionProps = {
  content: EthiopiaContent["about"]["offerings"];
};

export function WhatWeOfferSection({ content }: WhatWeOfferSectionProps) {
  return (
    <SectionShell
      body={content.body}
      eyebrow={content.eyebrow}
      id="offerings"
      title={content.title}
    >
      <div className="section-grid section-grid--three">
        {content.cards.map((card, index) => (
          <Reveal
            as="article"
            className="surface content-card"
            delay={index * 65}
            key={card.title}
            variant="scale"
          >
            <h3 className="type-card-title">{card.title}</h3>
            <p className="type-body">{card.body}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
