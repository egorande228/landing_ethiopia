import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  body?: string;
  align?: "start" | "center";
  className?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  body,
  align = "start",
  className,
  children,
}: SectionShellProps) {
  const classes = ["section-shell", className].filter(Boolean).join(" ");
  const hasHeader = Boolean(eyebrow || title || body);

  return (
    <section className={classes} data-align={align} id={id}>
      <div className="container">
        {hasHeader ? (
          <Reveal as="header" className="section-shell__header">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            {title ? <h2 className="type-heading">{title}</h2> : null}
            {body ? <p className="type-subheading">{body}</p> : null}
          </Reveal>
        ) : null}
        {children}
      </div>
    </section>
  );
}
