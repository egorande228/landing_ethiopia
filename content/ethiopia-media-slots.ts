import type { EthiopiaLocale } from "@/config/ethiopia-globals";

export type MediaFit = "cover" | "contain";
export type MediaFallbackType =
  | "hero"
  | "games"
  | "sports"
  | "offers"
  | "partnership"
  | "about"
  | "cta";

export type EthiopiaMediaSlotId =
  | "homeHeroStage"
  | "casinoDiscoveryCard"
  | "slotsCard"
  | "liveGamesCard"
  | "sportsFootballCard"
  | "sportsLiveMatchCard"
  | "sportsMobileCard"
  | "sportsRewardsCard"
  | "offersWelcomeCard"
  | "rewardsGiftsCard"
  | "offersMobileCard"
  | "finalPlayerCtaVisual"
  | "partnershipHeroVisual"
  | "partnershipBenefitsVisual"
  | "partnershipToolsVisual"
  | "partnershipPartnerRouteVisual"
  | "partnershipAgentRouteVisual"
  | "partnershipFinalCtaVisual"
  | "aboutHeroVisual"
  | "aboutStoryVisual"
  | "aboutTrustVisual"
  | "aboutFinalCtaVisual";

type LocalizedAlt = Partial<Record<EthiopiaLocale, string>> & {
  en: string;
  am: string;
};

type EthiopiaMediaSlot = {
  slotId: EthiopiaMediaSlotId;
  page: "home" | "partnership" | "about";
  section: string;
  targetPath: string;
  ratio: string;
  fit: MediaFit;
  imageScale?: number;
  alt: LocalizedAlt;
  fallbackType: MediaFallbackType;
  visualIntent: string;
  overlaySafeArea: "center" | "bottom" | "left" | "right";
};

const ethiopiaMediaSlots: Record<EthiopiaMediaSlotId, EthiopiaMediaSlot> = {
  homeHeroStage: {
    slotId: "homeHeroStage",
    page: "home",
    section: "hero",
    targetPath: "/home.webp",
    ratio: "1 / 1.04",
    fit: "cover",
    alt: {
      en: "Highland-inspired match and casino stage for Ethiopia home hero.",
      am: "ለኢትዮጵያ መነሻ ገጽ የተዘጋጀ ከደጋማ ሁኔታ የተነሳ የስፖርትና ካሲኖ መድረክ።",
    },
    fallbackType: "hero",
    visualIntent: "gold-lit stage with highland depth and sports energy",
    overlaySafeArea: "left",
  },
  casinoDiscoveryCard: {
    slotId: "casinoDiscoveryCard",
    page: "home",
    section: "games",
    targetPath: "/games/casino.webp",
    ratio: "1 / 1",
    fit: "cover",
    alt: {
      en: "Casino discovery card for Ethiopia.",
      am: "ለኢትዮጵያ የካሲኖ ማስተዋወቂያ ካርድ።",
    },
    fallbackType: "games",
    visualIntent: "obsidian card with gold ring and felt-table mood",
    overlaySafeArea: "bottom",
  },
  slotsCard: {
    slotId: "slotsCard",
    page: "home",
    section: "games",
    targetPath: "/games/slots.webp",
    ratio: "1 / 1",
    fit: "cover",
    imageScale: 1.16,
    alt: {
      en: "Slots card for Ethiopia.",
      am: "ለኢትዮጵያ የስሎት ካርድ።",
    },
    fallbackType: "games",
    visualIntent: "slot-like glow with layered reels and warm edge light",
    overlaySafeArea: "center",
  },
  liveGamesCard: {
    slotId: "liveGamesCard",
    page: "home",
    section: "games",
    targetPath: "/games/live.webp",
    ratio: "1 / 1",
    fit: "cover",
    alt: {
      en: "Live games card for Ethiopia.",
      am: "ለኢትዮጵያ የቀጥታ ጨዋታዎች ካርድ።",
    },
    fallbackType: "games",
    visualIntent: "live table spotlight with coffee-dark depth",
    overlaySafeArea: "bottom",
  },
  sportsFootballCard: {
    slotId: "sportsFootballCard",
    page: "home",
    section: "sports",
    targetPath: "/sports/football.webp",
    ratio: "4 / 5",
    fit: "cover",
    alt: {
      en: "Football spotlight card for Ethiopia.",
      am: "ለኢትዮጵያ የእግር ኳስ ማብራሪያ ካርድ።",
    },
    fallbackType: "sports",
    visualIntent: "stadium floodlights with green-to-gold lift",
    overlaySafeArea: "bottom",
  },
  sportsLiveMatchCard: {
    slotId: "sportsLiveMatchCard",
    page: "home",
    section: "sports",
    targetPath: "/sports/live.webp",
    ratio: "4 / 5",
    fit: "cover",
    alt: {
      en: "Live match board card for Ethiopia.",
      am: "ለኢትዮጵያ የቀጥታ ጨዋታ ቦርድ ካርድ።",
    },
    fallbackType: "sports",
    visualIntent: "live odds board with kinetic pitch lines",
    overlaySafeArea: "center",
  },
  sportsMobileCard: {
    slotId: "sportsMobileCard",
    page: "home",
    section: "sports",
    targetPath: "/sports/mobile.webp",
    ratio: "4 / 5",
    fit: "cover",
    alt: {
      en: "Mobile play card for Ethiopia sports access.",
      am: "ለኢትዮጵያ የሞባይል የስፖርት መዳረሻ ካርድ።",
    },
    fallbackType: "sports",
    visualIntent: "mobile board with layered odds panels",
    overlaySafeArea: "bottom",
  },
  sportsRewardsCard: {
    slotId: "sportsRewardsCard",
    page: "home",
    section: "sports",
    targetPath: "/sports/rewards.webp",
    ratio: "4 / 5",
    fit: "cover",
    alt: {
      en: "Rewards and match-day card for Ethiopia.",
      am: "ለኢትዮጵያ የሽልማት እና የጨዋታ ቀን ካርድ።",
    },
    fallbackType: "sports",
    visualIntent: "match-day ticket glow with bronze details",
    overlaySafeArea: "bottom",
  },
  offersWelcomeCard: {
    slotId: "offersWelcomeCard",
    page: "home",
    section: "offers",
    targetPath: "/offers/welcome.webp",
    ratio: "16 / 10",
    fit: "cover",
    alt: {
      en: "Welcome offer card for Ethiopia.",
      am: "ለኢትዮጵያ የእንኳን ደህና መጡ ቅናሽ ካርድ።",
    },
    fallbackType: "offers",
    visualIntent: "warm welcome ticket with gold flare",
    overlaySafeArea: "center",
  },
  rewardsGiftsCard: {
    slotId: "rewardsGiftsCard",
    page: "home",
    section: "offers",
    targetPath: "/offers/rewards.webp",
    ratio: "16 / 10",
    fit: "cover",
    alt: {
      en: "Rewards and gifts card for Ethiopia.",
      am: "ለኢትዮጵያ የሽልማትና ስጦታ ካርድ።",
    },
    fallbackType: "offers",
    visualIntent: "gift reward visual with layered topography",
    overlaySafeArea: "center",
  },
  offersMobileCard: {
    slotId: "offersMobileCard",
    page: "home",
    section: "offers",
    targetPath: "/offers/mobile.webp",
    ratio: "16 / 10",
    fit: "cover",
    alt: {
      en: "Mobile-ready offer card for Ethiopia.",
      am: "ለኢትዮጵያ ለሞባይል የተዘጋጀ ቅናሽ ካርድ።",
    },
    fallbackType: "offers",
    visualIntent: "mobile rewards panel with soft red accent",
    overlaySafeArea: "right",
  },
  finalPlayerCtaVisual: {
    slotId: "finalPlayerCtaVisual",
    page: "home",
    section: "final-cta",
    targetPath: "/offers/mobile.webp",
    ratio: "16 / 10",
    fit: "cover",
    alt: {
      en: "Final player call-to-action visual for Ethiopia.",
      am: "ለኢትዮጵያ የመጨረሻ የተጫዋች ጥሪ ምስል።",
    },
    fallbackType: "cta",
    visualIntent: "highland spotlight with layered CTA glow",
    overlaySafeArea: "left",
  },
  partnershipHeroVisual: {
    slotId: "partnershipHeroVisual",
    page: "partnership",
    section: "hero",
    targetPath: "/partnership/tools.webp",
    ratio: "16 / 10",
    fit: "contain",
    alt: {
      en: "Partnership hero visual for Ethiopia.",
      am: "ለኢትዮጵያ የፓርትነርሺፕ ዋና ምስል።",
    },
    fallbackType: "partnership",
    visualIntent: "editorial partnership board with support rails",
    overlaySafeArea: "right",
  },
  partnershipBenefitsVisual: {
    slotId: "partnershipBenefitsVisual",
    page: "partnership",
    section: "benefits",
    targetPath: "/partnership/tools.webp",
    ratio: "16 / 10",
    fit: "cover",
    alt: {
      en: "Benefits and support visual for Ethiopia partnership.",
      am: "ለኢትዮጵያ ፓርትነርሺፕ የጥቅሞችና ድጋፍ ምስል።",
    },
    fallbackType: "partnership",
    visualIntent: "support board with tracking and manager focus",
    overlaySafeArea: "center",
  },
  partnershipToolsVisual: {
    slotId: "partnershipToolsVisual",
    page: "partnership",
    section: "tools",
    targetPath: "/partnership/tools.webp",
    ratio: "16 / 10",
    fit: "cover",
    alt: {
      en: "Tools showcase visual for Ethiopia partnership.",
      am: "ለኢትዮጵያ ፓርትነርሺፕ የመሳሪያዎች ማሳያ ምስል።",
    },
    fallbackType: "partnership",
    visualIntent: "dashboard, campaign tools, and route overview",
    overlaySafeArea: "left",
  },
  partnershipPartnerRouteVisual: {
    slotId: "partnershipPartnerRouteVisual",
    page: "partnership",
    section: "paths",
    targetPath: "/partnership/partner.webp",
    ratio: "16 / 10",
    fit: "cover",
    alt: {
      en: "Partner route visual for Ethiopia.",
      am: "ለኢትዮጵያ የፓርትነር መንገድ ምስል።",
    },
    fallbackType: "partnership",
    visualIntent: "audience and campaign route cue",
    overlaySafeArea: "right",
  },
  partnershipAgentRouteVisual: {
    slotId: "partnershipAgentRouteVisual",
    page: "partnership",
    section: "paths",
    targetPath: "/partnership/agent.webp",
    ratio: "16 / 10",
    fit: "cover",
    alt: {
      en: "Agent route visual for Ethiopia.",
      am: "ለኢትዮጵያ የወኪል መንገድ ምስል።",
    },
    fallbackType: "partnership",
    visualIntent: "local cashier and support route cue",
    overlaySafeArea: "right",
  },
  partnershipFinalCtaVisual: {
    slotId: "partnershipFinalCtaVisual",
    page: "partnership",
    section: "final-cta",
    targetPath: "/partnership/tools.webp",
    ratio: "16 / 10",
    fit: "cover",
    alt: {
      en: "Final partnership contact visual for Ethiopia.",
      am: "ለኢትዮጵያ የፓርትነርሺፕ የመጨረሻ ግንኙነት ምስል።",
    },
    fallbackType: "cta",
    visualIntent: "contact panel with green and gold signal lines",
    overlaySafeArea: "left",
  },
  aboutHeroVisual: {
    slotId: "aboutHeroVisual",
    page: "about",
    section: "hero",
    targetPath: "/about/about.webp",
    ratio: "16 / 10",
    fit: "cover",
    alt: {
      en: "About hero visual for Ethiopia.",
      am: "ለኢትዮጵያ ስለ እኛ ገጽ ዋና ምስል።",
    },
    fallbackType: "about",
    visualIntent: "brand atmosphere with ridge light and emblem echo",
    overlaySafeArea: "center",
  },
  aboutStoryVisual: {
    slotId: "aboutStoryVisual",
    page: "about",
    section: "story",
    targetPath: "/about/about.webp",
    ratio: "16 / 10",
    fit: "cover",
    alt: {
      en: "Brand story visual for Ethiopia.",
      am: "ለኢትዮጵያ የብራንድ ታሪክ ምስል።",
    },
    fallbackType: "about",
    visualIntent: "story panel with highland contour and bronze warmth",
    overlaySafeArea: "left",
  },
  aboutTrustVisual: {
    slotId: "aboutTrustVisual",
    page: "about",
    section: "trust",
    targetPath: "/about/about.webp",
    ratio: "16 / 10",
    fit: "cover",
    alt: {
      en: "Trust and support visual for Ethiopia about page.",
      am: "ለኢትዮጵያ ስለ እኛ ገጽ የእምነትና ድጋፍ ምስል።",
    },
    fallbackType: "about",
    visualIntent: "support matrix with calm gold edge light",
    overlaySafeArea: "right",
  },
  aboutFinalCtaVisual: {
    slotId: "aboutFinalCtaVisual",
    page: "about",
    section: "final-cta",
    targetPath: "/about/about.webp",
    ratio: "16 / 10",
    fit: "cover",
    alt: {
      en: "Final call-to-action visual for Ethiopia about page.",
      am: "ለኢትዮጵያ ስለ እኛ ገጽ የመጨረሻ ጥሪ ምስል።",
    },
    fallbackType: "cta",
    visualIntent: "closing panel that bridges players and partners",
    overlaySafeArea: "left",
  },
};

export const getMediaSlot = (slotId: EthiopiaMediaSlotId, locale: EthiopiaLocale) => {
  const slot = ethiopiaMediaSlots[slotId];

  return {
    ...slot,
    alt: slot.alt[locale] ?? slot.alt.en,
  };
};
