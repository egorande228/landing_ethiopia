import {
  ethiopiaGlobals,
  type Direction,
  type EthiopiaLocale,
  type EthiopiaPage,
} from "@/config/ethiopia-globals";

type SearchParamValue = string | string[] | undefined;

const externalProtocol = /^(?:[a-z]+:|\/\/)/i;

export const getDirection = (
  locale: EthiopiaLocale = ethiopiaGlobals.defaultLocale,
): Direction => ethiopiaGlobals.directionByLocale[locale];

export const isRtl = (locale: EthiopiaLocale = ethiopiaGlobals.defaultLocale) =>
  getDirection(locale) === "rtl";

export const resolveLocale = (input?: SearchParamValue): EthiopiaLocale => {
  const candidate = Array.isArray(input) ? input[0] : input;

  return ethiopiaGlobals.locales.includes(candidate as EthiopiaLocale)
    ? (candidate as EthiopiaLocale)
    : ethiopiaGlobals.defaultLocale;
};

export const getPagePath = (page: EthiopiaPage) => {
  if (page === "partnership") {
    return "/partnership";
  }

  if (page === "about") {
    return "/about";
  }

  return "/";
};

export const localizeHref = (href: string, locale: EthiopiaLocale) => {
  if (externalProtocol.test(href)) {
    return href;
  }

  const [pathPart, hashPart] = href.split("#");
  const normalizedPath = pathPart || "/";
  const needsLocale = locale !== ethiopiaGlobals.defaultLocale;
  const joiner = normalizedPath.includes("?") ? "&" : "?";
  const withLocale = needsLocale ? `${normalizedPath}${joiner}lang=${locale}` : normalizedPath;

  return hashPart ? `${withLocale}#${hashPart}` : withLocale;
};

export const getLocalizedPagePath = (page: EthiopiaPage, locale: EthiopiaLocale) =>
  localizeHref(getPagePath(page), locale);
