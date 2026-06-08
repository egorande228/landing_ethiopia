import Link from "next/link";
import type { ContentCta } from "@/content/ethiopia-content";
import type { EthiopiaLocale } from "@/config/ethiopia-globals";
import { localizeHref } from "@/lib/direction";

type ButtonLinkProps = {
  cta: ContentCta;
  locale: EthiopiaLocale;
  className?: string;
};

const httpProtocol = /^https?:\/\//i;
const externalProtocol = /^(?:[a-z]+:|\/\/)/i;

export function ButtonLink({ cta, locale, className }: ButtonLinkProps) {
  const variant = cta.variant ?? "primary";
  const href = localizeHref(cta.href, locale);
  const classes = ["button-link", `button-link--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  if (externalProtocol.test(href)) {
    const openInNewTab = httpProtocol.test(href);

    return (
      <a
        className={classes}
        href={href}
        rel={openInNewTab ? "noreferrer" : undefined}
        target={openInNewTab ? "_blank" : undefined}
      >
        {cta.label}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {cta.label}
    </Link>
  );
}
