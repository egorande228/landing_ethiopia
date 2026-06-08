"use client";

import Link from "next/link";
import { useState } from "react";
import type { EthiopiaContent } from "@/content/ethiopia-content";
import { type EthiopiaLocale, type EthiopiaPage } from "@/config/ethiopia-globals";
import { getLocalizedPagePath, getPagePath, localizeHref } from "@/lib/direction";
import { EthiopiaLogo } from "@/components/brand/EthiopiaLogo";

type SiteHeaderProps = {
  page: EthiopiaPage;
  locale: EthiopiaLocale;
  content: EthiopiaContent;
};

const localeOptions: Array<{
  locale: EthiopiaLocale;
  shortLabel: string;
  fullLabel: string;
}> = [
  { locale: "en", shortLabel: "EN", fullLabel: "English" },
  { locale: "ar", shortLabel: "AR", fullLabel: "العربية" },
  { locale: "am", shortLabel: "አማ", fullLabel: "አማርኛ" },
];

const languageSwitcherLabel: Record<EthiopiaLocale, string> = {
  en: "Language",
  ar: "اللغة",
  am: "ቋንቋ",
};

export function SiteHeader({ page, locale, content }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = getPagePath(page);
  const navItems = content.chrome.nav;
  const currentNavItem = navItems.find((item) => item.href === currentPath) ?? navItems[0];

  return (
    <header className="site-header">
      <div className="site-header__shell">
        <div className="site-header__row">
          <Link
            aria-label={content.chrome.a11y.homeLinkLabel}
            href={getLocalizedPagePath("home", locale)}
            onClick={() => setMenuOpen(false)}
          >
            <EthiopiaLogo />
          </Link>

          <nav aria-label={content.chrome.a11y.navLabel} className="site-header__nav">
            {navItems.map((item) => (
              <Link
                className="site-header__nav-link"
                data-active={item.href === currentPath}
                href={localizeHref(item.href, locale)}
                key={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-header__actions">
            <div
              aria-label={languageSwitcherLabel[locale]}
              className="site-header__locale-switcher"
              role="group"
            >
              <span className="sr-only">{languageSwitcherLabel[locale]}</span>
              {localeOptions.map((option) => (
                <Link
                  aria-current={option.locale === locale ? "true" : undefined}
                  aria-label={option.fullLabel}
                  className="site-header__locale-link"
                  data-active={option.locale === locale}
                  href={localizeHref(currentPath, option.locale)}
                  key={option.locale}
                  lang={option.locale}
                  onClick={() => setMenuOpen(false)}
                  title={option.fullLabel}
                >
                  {option.shortLabel}
                </Link>
              ))}
            </div>

            <div className="site-header__mobile-select">
              <button
                aria-controls="site-header-dropdown"
                aria-expanded={menuOpen}
                aria-haspopup="menu"
                aria-label={
                  menuOpen
                    ? content.chrome.a11y.closeMenuLabel
                    : content.chrome.a11y.openMenuLabel
                }
                className="site-header__dropdown-trigger"
                onClick={() => setMenuOpen((current) => !current)}
                type="button"
              >
                <span className="site-header__dropdown-current">{currentNavItem.label}</span>
                <span aria-hidden="true" className="site-header__dropdown-icon" />
              </button>

              <div
                className="site-header__dropdown"
                data-open={menuOpen}
                id="site-header-dropdown"
                role="menu"
              >
                {navItems.map((item) => (
                  <Link
                    className="site-header__dropdown-link"
                    data-active={item.href === currentPath}
                    href={localizeHref(item.href, locale)}
                    key={`mobile-${item.href}`}
                    onClick={() => setMenuOpen(false)}
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
