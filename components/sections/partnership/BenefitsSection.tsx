import type { EthiopiaContent } from "@/content/ethiopia-content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/layout/SectionShell";

type BenefitsSectionProps = {
  content: EthiopiaContent["partnership"]["benefits"];
};

export function BenefitsSection({ content }: BenefitsSectionProps) {
  return (
    <SectionShell body={content.body} eyebrow={content.eyebrow} id="benefits" title={content.title}>
      <div className="section-grid section-grid--four">
        {content.items.map((item, index) => (
          <Reveal as="article" className="surface content-card" delay={index * 60} key={item.title}>
            <span className="badge">{item.metric}</span>
            <h3 className="type-card-title">{item.title}</h3>
            <p className="type-body">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
