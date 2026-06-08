import type { ReactNode } from "react";
import Link from "next/link";
import type { EthiopiaContent } from "@/content/ethiopia-content";
import type { EthiopiaLocale } from "@/config/ethiopia-globals";
import { localizeHref } from "@/lib/direction";
import { EthiopiaLogo } from "@/components/brand/EthiopiaLogo";

type SiteFooterProps = {
  locale: EthiopiaLocale;
  content: EthiopiaContent;
};

const externalProtocol = /^(?:[a-z]+:|\/\/)/i;

function FooterAnchor({
  href,
  locale,
  children,
}: {
  href: string;
  locale: EthiopiaLocale;
  children: ReactNode;
}) {
  const localizedHref = localizeHref(href, locale);

  if (externalProtocol.test(localizedHref)) {
    return <a href={localizedHref}>{children}</a>;
  }

  return <Link href={localizedHref}>{children}</Link>;
}

export function SiteFooter({ locale, content }: SiteFooterProps) {
  return (
    <footer className="footer-shell">
      <div className="footer-panel">
        <div className="footer-top">
          <div className="footer-column">
            <EthiopiaLogo animated={false} size="lg" />
            <p className="type-body">{content.footer.description}</p>
            <div className="footer-contact">
              {content.footer.contactLinks.map((link) => (
                <FooterAnchor
                  href={link.href}
                  key={`${link.label}-${link.href}`}
                  locale={locale}
                >
                  {link.label}
                </FooterAnchor>
              ))}
            </div>
          </div>

          <div className="footer-columns">
            {content.footer.columns.map((column) => (
              <div className="footer-column" key={column.title}>
                <strong className="type-card-title">{column.title}</strong>
                <ul className="footer-links">
                  {column.links.map((link) => (
                    <li key={`${link.label}-${link.href}`}>
                      <FooterAnchor href={link.href} locale={locale}>
                        {link.label}
                      </FooterAnchor>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-note">
          <span>{content.footer.note}</span>
          <span>{content.footer.legalLine}</span>
        </div>
      </div>
    </footer>
  );
}
