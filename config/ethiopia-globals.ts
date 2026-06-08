import { ethiopiaTheme } from "@/themes/ethiopia-theme";

export type EthiopiaLocale = "en" | "ar" | "am";
export type EthiopiaPage = "home" | "partnership" | "about";
export type Direction = "ltr" | "rtl";

export const partnershipEmail = "mailto:paypartners-eastafrica@melbet.com";
export const partnershipTelegram = "https://t.me/Teamcash_Ethiopia";
export const sportsLink =
  "https://refpa3665.com/L?tag=d_4092175m_66329c_EthiopiaSport";
export const gamesLink =
  "https://refpa3665.com/L?tag=d_4092175m_66329c_MLBEthiopia26";

export const ethiopiaGlobals = {
  market: "Ethiopia",
  slug: "ethiopia",
  locales: ["en", "ar", "am"] as const satisfies EthiopiaLocale[],
  defaultLocale: "en" as const,
  directionByLocale: {
    en: "ltr",
    ar: "rtl",
    am: "ltr",
  } as const,
  theme: ethiopiaTheme.name,
  chrome: {
    anchors: {
      home: ["top", "games", "sports", "offers"],
      partnership: ["top", "benefits", "steps", "tools", "paths"],
      about: ["top", "story", "offerings", "trust", "bridge", "about-cta"],
    },
  },
  sizing: {
    density: "balanced",
    containerWidth: 1180,
    containerX: "clamp(1rem, 3vw, 1.5rem)",
    sectionY: "clamp(4rem, 7vw, 6rem)",
    sectionYMobile: "clamp(3rem, 9vw, 4rem)",
    heroTop: "clamp(5.5rem, 12vw, 7.5rem)",
    heroBottom: "clamp(3rem, 8vw, 4.5rem)",
    gridGap: "clamp(1rem, 1.8vw, 1.35rem)",
    cardPadding: "clamp(1rem, 2vw, 1.35rem)",
    radii: {
      sm: "12px",
      md: "18px",
      lg: "26px",
      xl: "38px",
      pill: "999px",
    },
    buttonMinHeight: "50px",
  },
  composition: {
    textMeasure: "md",
    surfaceMode: "accent-led",
    motionProfile: "subtle",
  },
  pages: {
    home: {
      enabledSections: ["hero", "games", "sports", "offers"] as const,
      variants: {
        hero: "home-hero-stage",
        games: "home-featured-grid",
        sports: "home-sports-showcase",
        offers: "home-offers-grid",
        footer: "footer-full",
      },
    },
    partnership: {
      enabledSections: ["hero", "benefits", "steps", "tools", "paths"] as const,
      variants: {
        hero: "hero-editorial",
        benefits: "benefits-dashboard",
        steps: "steps-timeline",
        tools: "tools-showcase",
        paths: "paths-dual-card",
        footer: "footer-full",
      },
    },
    about: {
      enabledSections: ["hero", "story", "offerings", "trust", "bridge", "finalCta"] as const,
      variants: {
        hero: "hero-centered",
        story: "story-split",
        offerings: "feature-grid",
        trust: "trust-mix",
        bridge: "paths-choice-cards",
        finalCta: "final-cta-panel",
        footer: "footer-full",
      },
    },
  },
} as const;
