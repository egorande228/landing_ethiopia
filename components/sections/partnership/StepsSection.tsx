import type { EthiopiaContent } from "@/content/ethiopia-content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/layout/SectionShell";

type StepsSectionProps = {
  content: EthiopiaContent["partnership"]["steps"];
};

export function StepsSection({ content }: StepsSectionProps) {
  return (
    <SectionShell body={content.body} eyebrow={content.eyebrow} id="steps" title={content.title}>
      <div className="timeline-grid">
        {content.items.map((item, index) => (
          <Reveal as="article" className="surface timeline-step" delay={index * 70} key={item.step}>
            <span className="step-index" dir="ltr">
              {item.step}
            </span>
            <h3 className="type-card-title">{item.title}</h3>
            <p className="type-body">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
