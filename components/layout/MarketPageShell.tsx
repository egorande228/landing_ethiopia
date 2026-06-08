import type { ReactNode } from "react";
import type { EthiopiaContent } from "@/content/ethiopia-content";
import {
  type EthiopiaLocale,
  type EthiopiaPage,
} from "@/config/ethiopia-globals";
import { getDirection } from "@/lib/direction";
import { getEthiopiaThemeStyle } from "@/themes/ethiopia-theme";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

type MarketPageShellProps = {
  page: EthiopiaPage;
  locale: EthiopiaLocale;
  content: EthiopiaContent;
  children: ReactNode;
};

export function MarketPageShell({
  page,
  locale,
  content,
  children,
}: MarketPageShellProps) {
  return (
    <div
      className={`page-shell page-shell--${page}`}
      dir={getDirection(locale)}
      lang={locale}
      style={getEthiopiaThemeStyle()}
    >
      <div aria-hidden="true" className="page-shell__backdrop">
        <span className="page-shell__layer page-shell__layer--base" />
        <span className="page-shell__layer page-shell__layer--glow-green" />
        <span className="page-shell__layer page-shell__layer--glow-gold" />
        <span className="page-shell__layer page-shell__layer--ember" />
        <span className="page-shell__layer page-shell__layer--star" />
        <span className="page-shell__layer page-shell__layer--topography" />
        <span className="page-shell__layer page-shell__layer--ridges" />
        <span className="page-shell__layer page-shell__layer--grid" />
        <span className="page-shell__layer page-shell__layer--vignette" />
      </div>

      <div className="page-shell__chrome">
        <SiteHeader content={content} locale={locale} page={page} />
        <main className="page-main">{children}</main>
        <SiteFooter content={content} locale={locale} />
      </div>
    </div>
  );
}
