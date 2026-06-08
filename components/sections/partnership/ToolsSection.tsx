import type { EthiopiaContent } from "@/content/ethiopia-content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/layout/SectionShell";

type ToolsSectionProps = {
  content: EthiopiaContent["partnership"]["tools"];
};

export function ToolsSection({ content }: ToolsSectionProps) {
  return (
    <SectionShell body={content.body} eyebrow={content.eyebrow} id="tools" title={content.title}>
      <div className="section-grid section-grid--three">
        {content.items.map((item, index) => (
          <Reveal as="article" className="surface tool-card" delay={index * 70} key={item.title}>
            <span className="badge">{item.title}</span>
            <p className="type-body">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
