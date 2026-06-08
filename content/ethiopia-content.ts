import {
  gamesLink,
  partnershipEmail,
  partnershipTelegram,
  sportsLink,
  type EthiopiaLocale,
} from "@/config/ethiopia-globals";
import { ethiopiaContentAm } from "@/content/ethiopia-content.am";
import type { EthiopiaMediaSlotId } from "@/content/ethiopia-media-slots";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export type ContentCta = {
  label: string;
  href: string;
  variant?: ButtonVariant;
};

export type MetricItem = {
  value: string;
  label: string;
  note?: string;
};

export type MediaCard = {
  title: string;
  body: string;
  badge?: string;
  tags?: string[];
  mediaSlotId: EthiopiaMediaSlotId;
  cta?: ContentCta;
};

export type SpotlightCard = {
  accentLabel: string;
  title: string;
  body: string;
  mediaSlotId: EthiopiaMediaSlotId;
  cta: ContentCta;
};

export type RouteCard = {
  asideLabel: string;
  title: string;
  body: string;
  bullets: string[];
  mediaSlotId: EthiopiaMediaSlotId;
  ctas: ContentCta[];
};

export type FooterLink = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

type SimpleCard = {
  title: string;
  body: string;
};

type BenefitItem = {
  title: string;
  body: string;
  metric: string;
};

type StepItem = {
  step: string;
  title: string;
  body: string;
};

type HeroCtas = {
  primaryCta: ContentCta;
  secondaryCta: ContentCta;
};

type HomeHeroContent = HeroCtas & {
  eyebrow: string;
  title: string;
  body: string;
  supportCtas: ContentCta[];
  highlights: string[];
  metrics: MetricItem[];
  mediaSlotId: EthiopiaMediaSlotId;
  stageLabel: string;
  stagePoints: string[];
};

type PartnershipHeroContent = HeroCtas & {
  eyebrow: string;
  title: string;
  body: string;
  supportCtas: ContentCta[];
  metrics: MetricItem[];
  mediaSlotId: EthiopiaMediaSlotId;
  railsLabel: string;
  rails: string[];
};

type AboutHeroContent = HeroCtas & {
  eyebrow: string;
  title: string;
  body: string;
  metrics: MetricItem[];
  mediaSlotId: EthiopiaMediaSlotId;
};

type FinalCtaContent = HeroCtas & {
  eyebrow: string;
  title: string;
  body: string;
  mediaSlotId: EthiopiaMediaSlotId;
  checklist?: string[];
};

export type EthiopiaContent = {
  brand: {
    name: string;
    shortName: string;
    strapline: string;
  };
  seo: {
    homeTitle: string;
    homeDescription: string;
    partnershipTitle: string;
    partnershipDescription: string;
    aboutTitle: string;
    aboutDescription: string;
  };
  chrome: {
    nav: NavItem[];
    a11y: {
      homeLinkLabel: string;
      navLabel: string;
      openMenuLabel: string;
      closeMenuLabel: string;
    };
  };
  home: {
    hero: HomeHeroContent;
    games: {
      eyebrow: string;
      title: string;
      body: string;
      cards: MediaCard[];
    };
    sports: {
      eyebrow: string;
      title: string;
      body: string;
      cards: SpotlightCard[];
    };
    offers: {
      eyebrow: string;
      title: string;
      body: string;
      cards: MediaCard[];
    };
    finalCta: FinalCtaContent & {
      checklist: string[];
    };
  };
  partnership: {
    hero: PartnershipHeroContent;
    benefits: {
      eyebrow: string;
      title: string;
      body: string;
      items: BenefitItem[];
      mediaSlotId: EthiopiaMediaSlotId;
    };
    steps: {
      eyebrow: string;
      title: string;
      body: string;
      items: StepItem[];
    };
    paths: {
      eyebrow: string;
      title: string;
      body: string;
      cards: RouteCard[];
    };
    tools: {
      eyebrow: string;
      title: string;
      body: string;
      items: SimpleCard[];
      stats: MetricItem[];
      mediaSlotId: EthiopiaMediaSlotId;
    };
    finalCta: FinalCtaContent & {
      checklist: string[];
    };
  };
  about: {
    hero: AboutHeroContent;
    story: {
      eyebrow: string;
      title: string;
      body: string;
      points: string[];
      mediaSlotId: EthiopiaMediaSlotId;
    };
    offerings: {
      eyebrow: string;
      title: string;
      body: string;
      cards: SimpleCard[];
    };
    trust: {
      eyebrow: string;
      title: string;
      body: string;
      items: SimpleCard[];
      mediaSlotId: EthiopiaMediaSlotId;
    };
    bridge: {
      eyebrow: string;
      title: string;
      body: string;
      cards: Array<SimpleCard & { cta: ContentCta }>;
    };
    finalCta: FinalCtaContent;
  };
  footer: {
    description: string;
    columns: FooterColumn[];
    contactLinks: FooterLink[];
    note: string;
    legalLine: string;
  };
};

const ethiopiaContent: Record<Exclude<EthiopiaLocale, "am">, EthiopiaContent> = {
  en: {
    brand: {
      name: "MELBET Ethiopia",
      shortName: "Ethiopia",
      strapline: "Your fast route to football, casino play, and standout offers in Ethiopia.",
    },
    seo: {
      homeTitle: "MELBET Ethiopia | Football, Casino Games, Offers, and Mobile Play",
      homeDescription:
        "Join football action, open casino favorites, claim current offers, and play faster from a mobile-ready MELBET Ethiopia experience.",
      partnershipTitle: "MELBET Ethiopia Partnership | Partner and Agent Routes",
      partnershipDescription:
        "Grow with MELBET Ethiopia through a partner or agent route with direct support, practical tools, and a clear way to start.",
      aboutTitle: "About MELBET Ethiopia | Company, Services, and Support",
      aboutDescription:
        "Learn what MELBET Ethiopia provides across sports, casino play, offers, and partnership support, with a focus on speed, efficiency, and quality.",
    },
    chrome: {
      nav: [
        { label: "Home", href: "/" },
        { label: "Partnership", href: "/partnership" },
      ],
      a11y: {
        homeLinkLabel: "Go to MELBET Ethiopia home",
        navLabel: "Primary navigation",
        openMenuLabel: "Open navigation menu",
        closeMenuLabel: "Close navigation menu",
      },
    },
    home: {
      hero: {
        eyebrow: "Play your way",
        title: "Jump into football, casino favorites, and live action with less waiting and more play.",
        body:
          "You are one tap away from match-day odds, slots, live tables, and fresh offers. Pick what fits your mood, move fast on mobile, and keep the next win within reach.",
        primaryCta: { label: "Start playing", href: gamesLink, variant: "primary" as const },
        secondaryCta: { label: "See offers", href: "/#offers", variant: "secondary" as const },
        supportCtas: [
          { label: "Open sports", href: sportsLink, variant: "ghost" as const },
          { label: "Telegram", href: partnershipTelegram, variant: "ghost" as const },
        ] as ContentCta[],
        highlights: [
          "Football, slots, and live tables without the back-and-forth",
          "A mobile-ready flow that keeps your next move clear",
          "Offers and rewards placed close to the action",
        ],
        metrics: [
          { value: "Football", label: "match-day action" },
          { value: "Casino", label: "slots and live tables" },
          { value: "Offers", label: "bonus value ready to claim" },
        ] as MetricItem[],
        mediaSlotId: "homeHeroStage" as const,
        stageLabel: "Made to keep you moving",
        stagePoints: [
          "Go straight from the hero into football, casino, and offers",
          "A premium local look that stays sharp on desktop and mobile",
          "Clear sections that help you choose faster and play faster",
        ],
      },
      games: {
        eyebrow: "Casino picks",
        title: "Choose what you want to play and get into the game without the slow browse.",
        body:
          "From featured rooms to quick slot sessions and live tables, everything here is built to help you find the right energy fast and stay in the mood to keep playing.",
        cards: [
          {
            badge: "Casino",
            title: "Open featured casino rooms first",
            body: "Start with the categories players look for most and move straight into tables, crash games, or quick-hit picks without a crowded detour.",
            tags: ["Top rooms", "Fast access", "Ready to play"],
            mediaSlotId: "casinoDiscoveryCard" as const,
            cta: { label: "Open casino", href: gamesLink, variant: "primary" as const },
          },
          {
            badge: "Slots",
            title: "Spin into slots whenever you want a quick session",
            body: "Jump into reels when you want fast play, stay longer when the energy is right, and keep rewards close when extra value is live.",
            tags: ["Quick spins", "Easy returns", "Extra value"],
            mediaSlotId: "slotsCard" as const,
            cta: { label: "Play slots", href: gamesLink, variant: "secondary" as const },
          },
          {
            badge: "Live",
            title: "Go live when you want real-time table energy",
            body: "Step into roulette, blackjack, and other live formats when you want the closer, more active feeling of a real table.",
            tags: ["Live tables", "Real-time play", "Closer action"],
            mediaSlotId: "liveGamesCard" as const,
            cta: { label: "Open live games", href: gamesLink, variant: "secondary" as const },
          },
        ] as MediaCard[],
      },
      sports: {
        eyebrow: "Sports board",
        title: "Stay on top of the match, read the live board fast, and move when the moment feels right.",
        body:
          "Football leads the page, but you can still keep live movement, mobile access, and bonus value close without breaking your focus.",
        cards: [
          {
            accentLabel: "Main board",
            title: "Football first",
            body: "Open the leagues, live boards, and match-day markets players want first and stay close to the action that matters most.",
            mediaSlotId: "sportsFootballCard" as const,
            cta: { label: "Open football", href: sportsLink, variant: "ghost" as const },
          },
          {
            accentLabel: "Live read",
            title: "Live board access",
            body: "Follow in-play swings, score changes, and quick market movement without losing your place on the board.",
            mediaSlotId: "sportsLiveMatchCard" as const,
            cta: { label: "See live board", href: sportsLink, variant: "ghost" as const },
          },
          {
            accentLabel: "Mobile",
            title: "Built for mobile bets",
            body: "Keep the board, odds, and next tap easy to read when you are moving fast on your phone.",
            mediaSlotId: "sportsMobileCard" as const,
            cta: { label: "Open on mobile", href: sportsLink, variant: "ghost" as const },
          },
          {
            accentLabel: "Reward layer",
            title: "Offers near the match",
            body: "Keep bonus value within reach so you can claim extra upside without stepping away from the action.",
            mediaSlotId: "sportsRewardsCard" as const,
            cta: { label: "Get offer", href: sportsLink, variant: "ghost" as const },
          },
        ] as SpotlightCard[],
      },
      offers: {
        eyebrow: "Bonus center",
        title: "Choose the offer that fits your next move and turn extra value into more play.",
        body:
          "Welcome deals, rewards, and phone-friendly bonus paths stay simple here, so you can claim faster and get back to the action.",
        cards: [
          {
            badge: "Welcome",
            title: "Start stronger with welcome offers",
            body: "Take the first-step bonus that helps you begin with more value and less hesitation.",
            tags: ["Fast start", "More value"],
            mediaSlotId: "offersWelcomeCard" as const,
            cta: { label: "Get welcome offer", href: gamesLink, variant: "primary" as const },
          },
          {
            badge: "Rewards",
            title: "Claim rewards that keep your sessions going",
            body: "Use repeat-play rewards, gifts, and extra value when you want more from the next visit.",
            tags: ["Come back stronger", "Session value"],
            mediaSlotId: "rewardsGiftsCard" as const,
            cta: { label: "Claim rewards", href: gamesLink, variant: "secondary" as const },
          },
          {
            badge: "Mobile",
            title: "Grab bonuses easily on your phone",
            body: "Move from football or casino into the right offer without hunting through extra screens.",
            tags: ["Phone-ready", "Quick claim"],
            mediaSlotId: "offersMobileCard" as const,
            cta: { label: "Open offers", href: gamesLink, variant: "secondary" as const },
          },
        ] as MediaCard[],
      },
      finalCta: {
        eyebrow: "Keep it moving",
        title: "Choose your next stop and stay close to the action you came for.",
        body:
          "Go straight into casino games, jump back to the sports board, or grab current offers without losing your pace.",
        primaryCta: { label: "Start now", href: gamesLink, variant: "primary" as const },
        secondaryCta: { label: "Open sports", href: sportsLink, variant: "secondary" as const },
        mediaSlotId: "finalPlayerCtaVisual" as const,
        checklist: [
          "Football and live boards ready to open",
          "Slots and live casino rooms one tap away",
          "Offers and rewards that stay easy to claim",
        ],
      },
    },
    partnership: {
      hero: {
        eyebrow: "Grow with MELBET Ethiopia",
        title: "Bring your traffic or local reach and turn it into a partnership route that is clear from day one.",
        body:
          "If you can attract players, guide a community, or support local transactions, you can start with the model that fits you and get direct help to move faster.",
        primaryCta: { label: "Talk on Telegram", href: partnershipTelegram, variant: "primary" as const },
        secondaryCta: { label: "See your routes", href: "/partnership#paths", variant: "secondary" as const },
        supportCtas: [
          { label: "Send email", href: partnershipEmail, variant: "ghost" as const },
        ] as ContentCta[],
        metrics: [
          { value: "Partner", label: "for traffic, creators, and communities" },
          { value: "Agent", label: "for local support and transactions" },
          { value: "1 Manager", label: "direct help from the start" },
        ] as MetricItem[],
        mediaSlotId: "partnershipHeroVisual" as const,
        railsLabel: "What you get first",
        rails: [
          "Partner routes with promo codes, campaign materials, and tracking support",
          "Agent routes with local payment guidance and player follow-up",
          "Clear onboarding with one manager who helps you act quickly",
        ],
      },
      benefits: {
        eyebrow: "Why us",
        title: "Choose a partnership route with clear support, practical tools, and a team that works around what you bring.",
        body:
          "Whether you bring traffic, community reach, or local operational support, the model stays clear from the start so you can move with confidence.",
        items: [
          {
            title: "One contact from the start",
            body: "You work with one manager who helps confirm the right route, answers key questions, and keeps the next steps moving.",
            metric: "Direct contact",
          },
          {
            title: "Support that fits your model",
            body: "Partners get campaign guidance and tracking, while agents get practical help for deposits, withdrawals, and player follow-up.",
            metric: "Route-fit support",
          },
          {
            title: "Clear responsibilities",
            body: "You know from day one what sits with local support, what sits with audience growth, and how your route is meant to operate.",
            metric: "Clear structure",
          },
          {
            title: "A brand you can present confidently",
            body: "A stronger presentation helps you introduce the opportunity with more credibility before the first conversation even begins.",
            metric: "Trusted presentation",
          },
        ],
        mediaSlotId: "partnershipBenefitsVisual" as const,
      },
      steps: {
        eyebrow: "Start in three steps",
        title: "Tell us what you do, choose the right route, and start working with support behind you.",
        body:
          "The process stays short on purpose so you can explain your strength, confirm the model, and move into action without delay.",
        items: [
          {
            step: "01",
            title: "Tell us what you bring",
            body: "Share whether you drive traffic, run a community, support local payments, or help players in your area.",
          },
          {
            step: "02",
            title: "Choose the route",
            body: "Review the partner and agent paths separately so the deal, tools, and responsibilities stay clear.",
          },
          {
            step: "03",
            title: "Start with support",
            body: "Move into promotion or local operations with follow-up that stays close after the first contact.",
          },
        ],
      },
      paths: {
        eyebrow: "Choose your route",
        title: "Pick the route that matches your strength and start the conversation today.",
        body:
          "Choose the partner route when you bring traffic, communities, or content reach. Choose the agent route when you can support player transactions and local follow-up.",
        cards: [
          {
            asideLabel: "Partner",
            title: "Partner route",
            body: "Built for promoters, creators, and community owners who can bring attention, clicks, and player interest through content and campaigns.",
            bullets: [
              "Promo code flow and campaign materials",
              "Performance visibility with tracking support",
              "Manager follow-up to help you grow stronger campaigns",
            ],
            mediaSlotId: "partnershipPartnerRouteVisual" as const,
            ctas: [
              { label: "Start on Telegram", href: partnershipTelegram, variant: "primary" as const },
              { label: "Send email", href: partnershipEmail, variant: "ghost" as const },
            ],
          },
          {
            asideLabel: "Agent",
            title: "Agent route",
            body: "Built for local operators who can support deposits, withdrawals, and direct player guidance with practical trust on the ground.",
            bullets: [
              "Local transaction support and cashier-style work",
              "Player assistance tied to payment access",
              "Operational guidance that stays close after launch",
            ],
            mediaSlotId: "partnershipAgentRouteVisual" as const,
            ctas: [
              { label: "Start on Telegram", href: partnershipTelegram, variant: "primary" as const },
              { label: "Send email", href: partnershipEmail, variant: "ghost" as const },
            ],
          },
        ] as RouteCard[],
      },
      tools: {
        eyebrow: "Tools and support",
        title: "Get the materials and support that help you launch faster and grow with more confidence.",
        body:
          "The strongest partnership routes do more than make a promise. They give you the materials, manager access, tracking view, and daily support that help the work actually run.",
        items: [
          {
            title: "Campaign materials",
            body: "Keep partner outreach sharper with ready direction for promo codes, launch pushes, and repeat campaigns.",
          },
          {
            title: "Tracking and review",
            body: "Follow what is moving, where the response is strongest, and when to adjust with manager support.",
          },
          {
            title: "Local operating support",
            body: "Keep agent work practical with local payment guidance, player response paths, and cleaner day-to-day follow-up.",
          },
        ],
        stats: [
          { value: "2", label: "clear work routes" },
          { value: "1", label: "manager from the start" },
          { value: "Mobile", label: "ready support flow" },
        ] as MetricItem[],
        mediaSlotId: "partnershipToolsVisual" as const,
      },
      finalCta: {
        eyebrow: "Start the conversation",
        title: "Send the first message, choose the route, and move into a practical next step.",
        body:
          "Whether you promote to an audience or support players locally, you leave this page with a clear contact path and a clearer way to begin.",
        primaryCta: { label: "Talk on Telegram", href: partnershipTelegram, variant: "primary" as const },
        secondaryCta: { label: "Send email", href: partnershipEmail, variant: "secondary" as const },
        mediaSlotId: "partnershipFinalCtaVisual" as const,
        checklist: [
          "Partner route for traffic and communities",
          "Agent route for local transactions and support",
          "Manager follow-up and tools from the start",
        ],
      },
    },
    about: {
      hero: {
        eyebrow: "About the company",
        title: "MELBET Ethiopia is built to deliver sports, casino play, and support with more speed, efficiency, and quality.",
        body:
          "We focus on making the experience easier to use, faster to navigate, and stronger in presentation so players and partners can move with confidence from the first visit.",
        primaryCta: { label: "Explore the experience", href: "/", variant: "primary" as const },
        secondaryCta: { label: "See partnership support", href: "/partnership", variant: "secondary" as const },
        metrics: [
          { value: "Speed", label: "fast access to core actions" },
          { value: "Efficiency", label: "clear paths and lower friction" },
          { value: "Quality", label: "premium presentation and support" },
        ] as MetricItem[],
        mediaSlotId: "aboutHeroVisual" as const,
      },
      story: {
        eyebrow: "What we do",
        title: "We build a cleaner, faster company experience around football, casino access, offers, and support.",
        body:
          "MELBET Ethiopia brings product access, brand presentation, and support paths into one system so visitors spend less time figuring things out and more time acting.",
        points: [
          "Fast entry into football, casino games, and current offers",
          "Efficient page structure that keeps important actions close",
          "Quality visuals, consistent messaging, and a polished mobile experience",
        ],
        mediaSlotId: "aboutStoryVisual" as const,
      },
      offerings: {
        eyebrow: "What we provide",
        title: "Our work is centered on useful access, efficient flow, and service that feels ready from the first visit.",
        body:
          "Across the landing experience, we provide fast sports access, streamlined casino discovery, clear offer visibility, and partnership support that stays practical.",
        cards: [
          {
            title: "Sports and match-day access",
            body: "We provide a direct route into football boards, live movement, and match-day markets with less friction.",
          },
          {
            title: "Casino and reward flow",
            body: "We provide quicker entry into casino games, live tables, slots, and active offers without turning the page into a slow catalog.",
          },
          {
            title: "Support and growth routes",
            body: "We provide partnership paths, manager-guided contact, and practical support for partners and local agents.",
          },
        ],
      },
      trust: {
        eyebrow: "How we work",
        title: "Speed, efficiency, and quality guide how the company presents, supports, and improves the experience.",
        body:
          "Our standard is simple: make the important actions easy to find, keep the journey efficient on mobile and desktop, and maintain a presentation that feels reliable.",
        items: [
          { title: "Speed in access", body: "Core actions stay close to the visitor so football, casino play, offers, and support are never far away." },
          { title: "Efficient structure", body: "Content, navigation, and buttons are organized to reduce friction and keep decisions simple." },
          { title: "Quality presentation", body: "The interface uses polished visuals, consistent copy, and clear hierarchy to strengthen trust." },
          { title: "Practical support", body: "Whether the visitor is a player or a partner, the next step is presented clearly and backed by direct contact paths." },
        ],
        mediaSlotId: "aboutTrustVisual" as const,
      },
      bridge: {
        eyebrow: "Where we help",
        title: "We support both the player experience and the business side of growth.",
        body:
          "The company serves visitors who want fast access to play, and partners who want a clear route into promotion, local support, or guided onboarding.",
        cards: [
          {
            title: "For players",
            body: "Explore the main experience for football, casino games, live tables, and offers built around speed and clarity.",
            cta: { label: "See player experience", href: "/", variant: "primary" as const },
          },
          {
            title: "For partners",
            body: "Explore the partnership route for tools, support, and a more efficient way to start working with MELBET Ethiopia.",
            cta: { label: "See partnership support", href: "/partnership", variant: "secondary" as const },
          },
        ],
      },
      finalCta: {
        eyebrow: "Next step",
        title: "See the experience, review what we provide, and move into the route that fits you.",
        body:
          "If you want the player-facing experience, head to Home. If you want company support, tools, and growth paths, head to Partnership.",
        primaryCta: { label: "Open Home", href: "/", variant: "primary" as const },
        secondaryCta: { label: "Open Partnership", href: "/partnership", variant: "secondary" as const },
        mediaSlotId: "aboutFinalCtaVisual" as const,
      },
    },
    footer: {
      description:
        "Football, casino play, offers, support, and growth routes designed to move visitors into action faster.",
      columns: [
        {
          title: "Home",
          links: [
            { label: "Top", href: "/#top" },
            { label: "Games", href: gamesLink },
            { label: "Sports", href: sportsLink },
            { label: "Offers", href: "/#offers" },
            { label: "Start now", href: gamesLink },
          ] as FooterLink[],
        },
        {
          title: "Partnership",
          links: [
            { label: "Top", href: "/partnership#top" },
            { label: "Benefits", href: "/partnership#benefits" },
            { label: "Steps", href: "/partnership#steps" },
            { label: "Tools", href: "/partnership#tools" },
            { label: "Routes", href: "/partnership#paths" },
          ] as FooterLink[],
        },
      ],
      contactLinks: [
        { label: "Telegram", href: partnershipTelegram },
        { label: "Email", href: partnershipEmail },
      ] as FooterLink[],
      note:
        "Offer availability, partnership terms, and agent responsibilities may vary by route, approval, and current market conditions.",
      legalLine: "© 2026 MELBET Ethiopia. All rights reserved.",
    },
  },
  ar: {
    brand: {
      name: "MELBET Ethiopia",
      shortName: "إثيوبيا",
      strapline: "طاقة المرتفعات للرياضة والكازينو ومسارات الشراكة.",
    },
    seo: {
      homeTitle: "MELBET Ethiopia | رياضة وكازينو وعروض وتجربة هاتفية",
      homeDescription:
        "تابع كرة القدم، واستكشف ألعاب الكازينو المباشرة، وراجع العروض الحالية من خلال تجربة إثيوبيا المصممة للهاتف أولاً.",
      partnershipTitle: "شراكة MELBET Ethiopia | مسارات الشريك والوكيل",
      partnershipDescription:
        "اختر مسار الشريك أو الوكيل في إثيوبيا وابدأ مع مدير واحد، أدوات واضحة، وتتبع وخطوة أولى عملية.",
      aboutTitle: "عن MELBET Ethiopia | القصة والسياق والدعم",
      aboutDescription:
        "تعرّف على طريقة ربط MELBET Ethiopia بين الرياضة والكازينو والدعم ومسارات الشراكة ضمن هوية متكاملة.",
    },
    chrome: {
      nav: [
        { label: "الرئيسية", href: "/" },
        { label: "الشراكة", href: "/partnership" },
      ],
      a11y: {
        homeLinkLabel: "الانتقال إلى الصفحة الرئيسية لإثيوبيا",
        navLabel: "التنقل الرئيسي",
        openMenuLabel: "فتح قائمة التنقل",
        closeMenuLabel: "إغلاق قائمة التنقل",
      },
    },
    home: {
      hero: {
        eyebrow: "لللاعبين في إثيوبيا",
        title: "انتقل من أجواء كرة القدم إلى الطاولات المباشرة عبر مسار سريع وفاخر للهاتف.",
        body:
          "تابع المباريات، وافتح ألعاب الكازينو المفضلة، وابقَ قريباً من العروض من دون أن تفقد الإيقاع بين الرياضة والسلوتس والألعاب المباشرة.",
        primaryCta: { label: "استكشف الألعاب", href: gamesLink, variant: "primary" as const },
        secondaryCta: { label: "شاهد العروض", href: "/#offers", variant: "secondary" as const },
        supportCtas: [
          { label: "تيليجرام", href: partnershipTelegram, variant: "ghost" as const },
          { label: "الشراكة", href: "/partnership", variant: "ghost" as const },
        ] as ContentCta[],
        highlights: [
          "كرة القدم والكازينو والعروض في مسار واحد",
          "تصميم دافئ ومهيأ للهاتف من أول خطوة",
          "مكافآت ودعم يبقيان قريبين من الإجراء التالي",
        ],
        metrics: [
          { value: "Football", label: "تركيز المباريات" },
          { value: "Casino", label: "سلوتس وطاولات مباشرة" },
          { value: "Offers", label: "هدايا ومسار مكافآت" },
        ] as MetricItem[],
        mediaSlotId: "homeHeroStage" as const,
        stageLabel: "مصمم للخطوة التالية",
        stagePoints: [
          "دخول سريع من البطل إلى الألعاب والرياضة والعروض",
          "أسطح داكنة ولمعان ذهبي وعمق أخضر يمنح الصفحة حضوراً محلياً راقياً",
          "مساحات بصرية جاهزة للعرض حتى قبل إضافة الصور النهائية",
        ],
      },
      games: {
        eyebrow: "اكتشاف الكازينو",
        title: "اختر أسلوب اللعب المناسب لك وابقَ داخل مسار واحد سلس.",
        body:
          "انتقل بين غرف الكازينو المميزة والسلوتس والطاولات المباشرة من دون أن تتحول الصفحة إلى فهرس بطيء. الإيقاع هنا مباشر وواضح.",
        cards: [
          {
            badge: "كازينو",
            title: "غرف كازينو مميزة مع تصفح أسرع",
            body: "افتح الفئات المهمة أولاً ثم انتقل إلى الطاولات أو ألعاب الكراش أو الخيارات السريعة من دون التفاف مزعج.",
            tags: ["غرف مميزة", "وصول سريع", "جاهز للهاتف"],
            mediaSlotId: "casinoDiscoveryCard" as const,
            cta: { label: "افتح الكازينو", href: gamesLink, variant: "primary" as const },
          },
          {
            badge: "سلوتس",
            title: "سلوتس للجلسات القصيرة والزيارات المتكررة",
            body: "ادخل إلى اللفات عندما تريد جولة خفيفة، وابقَ مدة أطول حين يتغير المزاج، مع بقاء المكافآت قريبة عندما تكون العروض متاحة.",
            tags: ["لفات سريعة", "جلسات متكررة", "مناسبة للمكافآت"],
            mediaSlotId: "slotsCard" as const,
            cta: { label: "تصفح السلوتس", href: gamesLink, variant: "secondary" as const },
          },
          {
            badge: "مباشر",
            title: "ألعاب مباشرة بإحساس طاولة حي",
            body: "ابقَ قريباً من الروليت والبلاك جاك والصيغ المباشرة عبر واجهة تبدو نشطة حتى قبل اكتمال الصور النهائية.",
            tags: ["طاولات مباشرة", "إيقاع حي", "واجهة قوية"],
            mediaSlotId: "liveGamesCard" as const,
            cta: { label: "شاهد الألعاب المباشرة", href: gamesLink, variant: "secondary" as const },
          },
        ] as MediaCard[],
      },
      sports: {
        eyebrow: "التركيز الرياضي",
        title: "تابع أقوى مسارات يوم المباراة قبل أن تختار الحركة التالية.",
        body:
          "كرة القدم تقود الطاقة، لكن القسم يحتفظ أيضاً بإحساس اللوحة المباشرة والوصول عبر الهاتف والمكافآت المرتبطة بالتجربة الرياضية.",
        cards: [
          {
            accentLabel: "اللوحة الرئيسية",
            title: "كرة القدم",
            body: "ليالي الدوريات واللوحات المباشرة وحركة المباريات تمنح الصفحة أقوى إيقاع.",
            mediaSlotId: "sportsFootballCard" as const,
            cta: { label: "راجع كرة القدم", href: sportsLink, variant: "ghost" as const },
          },
          {
            accentLabel: "قراءة مباشرة",
            title: "تدفق المباراة الحية",
            body: "ابقَ قريباً من التحولات داخل اللعب وتغيرات النتيجة من دون أن تفقد إحساس اللوحة.",
            mediaSlotId: "sportsLiveMatchCard" as const,
            cta: { label: "شاهد اللوحات", href: sportsLink, variant: "ghost" as const },
          },
          {
            accentLabel: "هاتف",
            title: "مسار جاهز للهاتف",
            body: "افتح الرياضة والكازينو من تخطيط مدمج يبقي الإجراء التالي واضحاً على الشاشات الصغيرة.",
            mediaSlotId: "sportsMobileCard" as const,
            cta: { label: "افتح المسار", href: sportsLink, variant: "ghost" as const },
          },
          {
            accentLabel: "طبقة المكافآت",
            title: "عروض تبقى قرب الحدث",
            body: "إضافات يوم المباراة وقيمة الزيارات المتكررة تبقى قريبة عندما تصبح مستعداً للانتقال.",
            mediaSlotId: "sportsRewardsCard" as const,
            cta: { label: "احصل على العرض", href: sportsLink, variant: "ghost" as const },
          },
        ] as SpotlightCard[],
      },
      offers: {
        eyebrow: "العروض والمكافآت",
        title: "راجع مسار المكافأة الحالي، واختر ما يناسبك، ثم واصل الجلسة.",
        body:
          "عروض الترحيب والهدايا ومكافآت العودة تعمل أفضل عندما تبقى واضحة. هنا يبقى القرار بسيطاً وسريعاً.",
        cards: [
          {
            badge: "ترحيب",
            title: "عروض ترحيب ببداية أوضح",
            body: "افتح مسار العرض الحالي وابدأ بخطوة أولى سهلة من دون ضجيج زائد.",
            tags: ["بداية سريعة", "مسار واضح"],
            mediaSlotId: "offersWelcomeCard" as const,
            cta: { label: "شاهد عروض الترحيب", href: gamesLink, variant: "primary" as const },
          },
          {
            badge: "مكافآت",
            title: "هدايا وقيمة للزيارات المتكررة",
            body: "استفد من المكافآت والعروض الإضافية عندما تناسب الجلسة التالية من دون تكرار نفس الرسالة في كل مكان.",
            tags: ["زيارات متكررة", "قيمة الجلسة"],
            mediaSlotId: "rewardsGiftsCard" as const,
            cta: { label: "احصل على المكافآت", href: gamesLink, variant: "secondary" as const },
          },
          {
            badge: "هاتف",
            title: "وصول سهل للمكافآت عبر الهاتف",
            body: "احتفظ بالإجراء المهم قريباً سواء وصلت من كرة القدم أو الكازينو أو من دعوة مباشرة.",
            tags: ["جاهز للهاتف", "متابعة سريعة"],
            mediaSlotId: "offersMobileCard" as const,
            cta: { label: "افتح المسار", href: gamesLink, variant: "secondary" as const },
          },
        ] as MediaCard[],
      },
      finalCta: {
        eyebrow: "الخطوة التالية",
        title: "اختر مسارك، واحتفظ بالإيقاع، وافتح التجربة عندما تكون جاهزاً.",
        body:
          "ادخل مباشرة إلى الألعاب أو عد إلى لوحة الرياضة أو انتقل إلى العروض الحالية من دون أن تفقد الجو العام للصفحة.",
        primaryCta: { label: "ابدأ الآن", href: gamesLink, variant: "primary" as const },
        secondaryCta: { label: "شاهد الرياضة", href: sportsLink, variant: "secondary" as const },
        mediaSlotId: "finalPlayerCtaVisual" as const,
        checklist: [
          "كرة القدم واللوحات المباشرة",
          "السلوتس وطاولات الكازينو المباشرة",
          "العروض والهدايا والوصول المهيأ للهاتف",
        ],
      },
    },
    partnership: {
      hero: {
        eyebrow: "الشراكة في إثيوبيا",
        title: "اختر المسار المناسب لطريقة عملك: شريك ترويجي أو وكيل دعم محلي.",
        body:
          "إذا كان لديك جمهور أو شبكة محلية أو قدرة عملية على دعم اللاعبين، يمكنك البدء بدور واضح ومدير واحد وأدوات تناسب المسار.",
        primaryCta: { label: "تيليجرام", href: partnershipTelegram, variant: "primary" as const },
        secondaryCta: { label: "شاهد المسارين", href: "/partnership#paths", variant: "secondary" as const },
        supportCtas: [
          { label: "البريد الإلكتروني", href: partnershipEmail, variant: "ghost" as const },
        ] as ContentCta[],
        metrics: [
          { value: "Partner", label: "للترافيك وصنّاع المحتوى" },
          { value: "Agent", label: "للدعم المحلي والتعاملات" },
          { value: "Manager", label: "جهة اتصال واحدة" },
        ] as MetricItem[],
        mediaSlotId: "partnershipHeroVisual" as const,
        railsLabel: "ما الذي يبدأ أولاً",
        rails: [
          "أكواد ترويجية ومواد حملات وتتبع لمسار الشريك",
          "دعم محلي وإرشاد لطرق الدفع ومساعدة اللاعبين لمسار الوكيل",
          "بدء واضح مع مدير واحد يبقي الخطوة التالية عملية",
        ],
      },
      benefits: {
        eyebrow: "لماذا تنضم",
        title: "تكون الفرصة أوضح عندما يكون المسار والأدوات والدعم منفصلين من البداية.",
        body:
          "الشريك والوكيل لا يقومان بنفس العمل، لذلك تبقى القيمة هنا محددة بدلاً من دمج كل شيء في وعد واحد غامض.",
        items: [
          {
            title: "مدير واحد من البداية",
            body: "اشرح ما تملكه، وثبّت المسار، واحتفظ بالمتابعة مع جهة واحدة تستطيع تحريك الأمور بسرعة.",
            metric: "تواصل مباشر",
          },
          {
            title: "أدوات تناسب المسار",
            body: "يحصل الشريك على مواد الحملات والتتبع، ويحصل الوكيل على إرشاد عملي للإيداع والسحب ودعم اللاعبين.",
            metric: "أدوات مناسبة",
          },
          {
            title: "مسؤولية محلية واضحة",
            body: "يبقى عمل الوكيل مرتبطاً بالدعم المحلي، بينما يبقى عمل الشريك مرتبطاً بالنمو والوصول إلى الجمهور.",
            metric: "وضوح المسار",
          },
          {
            title: "عرض راقٍ يبني الثقة",
            body: "الواجهة المصقولة تساعد المسار على أن يبدو جدياً قبل إرسال الرسالة الأولى.",
            metric: "طبقة ثقة",
          },
        ],
        mediaSlotId: "partnershipBenefitsVisual" as const,
      },
      steps: {
        eyebrow: "ابدأ في ثلاث خطوات",
        title: "اشرح موقعك، وثبّت الدور، وابدأ بخطوة عملية يمكن استخدامها فعلاً.",
        body:
          "المسار قصير عن قصد: اخبرنا بما تملكه، راجع النموذج المناسب، ثم ابدأ مع متابعة واضحة.",
        items: [
          {
            step: "01",
            title: "أخبرنا بما لديك",
            body: "اشرح ما إذا كنت تدير جمهوراً أو مجتمعاً أو دعماً محلياً للدفع أو متابعة مباشرة مع اللاعبين.",
          },
          {
            step: "02",
            title: "اختر المسار",
            body: "راجع منطق الشريك والوكيل بشكل منفصل حتى تبقى الأدوات والمسؤوليات واضحة.",
          },
          {
            step: "03",
            title: "ابدأ مع الدعم",
            body: "انتقل إلى الترويج أو العمليات المحلية مع متابعة تبقى قريبة بعد أول تواصل.",
          },
        ],
      },
      paths: {
        eyebrow: "اختر مسارك",
        title: "افصل بين تنمية الجمهور والدعم المحلي للاعبين حتى يعمل كل نموذج بوضوح.",
        body:
          "استخدم مسار الشريك إذا كنت تجلب جمهوراً أو زيارات أو محتوى. واستخدم مسار الوكيل إذا كنت تستطيع دعم التعاملات والمتابعة محلياً.",
        cards: [
          {
            asideLabel: "شريك",
            title: "مسار الشريك",
            body: "مناسب للمروجين وصنّاع المحتوى وأصحاب المجتمعات وكل من يستطيع جلب انتباه أو جمهور عبر كود خاص ودعم للحملات.",
            bullets: [
              "مسار كود ترويجي ومواد للحملات",
              "رؤية أوضح للأداء عبر التتبع",
              "متابعة من المدير لتحسين الاتجاه",
            ],
            mediaSlotId: "partnershipPartnerRouteVisual" as const,
            ctas: [
              { label: "تيليجرام", href: partnershipTelegram, variant: "primary" as const },
              { label: "البريد الإلكتروني", href: partnershipEmail, variant: "ghost" as const },
            ],
          },
          {
            asideLabel: "وكيل",
            title: "مسار الوكيل",
            body: "مناسب للمشغلين المحليين القادرين على دعم الإيداع والسحب ومتابعة اللاعبين بثقة عملية على الأرض.",
            bullets: [
              "دعم التعاملات المحلية ودور كاشير واضح",
              "مساعدة اللاعبين المرتبطة بطرق الدفع",
              "إرشاد تشغيلي يبقى قريباً بعد الانطلاق",
            ],
            mediaSlotId: "partnershipAgentRouteVisual" as const,
            ctas: [
              { label: "تيليجرام", href: partnershipTelegram, variant: "primary" as const },
              { label: "البريد الإلكتروني", href: partnershipEmail, variant: "ghost" as const },
            ],
          },
        ] as RouteCard[],
      },
      tools: {
        eyebrow: "الأدوات والدعم",
        title: "استخدم الأنظمة التي تساعدك على الحركة أسرع بعد أول موافقة.",
        body:
          "الصفحة الجيدة للشراكة لا تكتفي بوعد عام. بل توضّح المواد الجاهزة والوصول إلى المدير ولوحة المتابعة ومنطق الدعم.",
        items: [
          {
            title: "مواد الحملات",
            body: "حافظ على الترويج أكثر دقة عبر اتجاهات واضحة للأكواد والإطلاقات والحملات المتكررة.",
          },
          {
            title: "تتبع ومراجعة",
            body: "تابع ما يتحرك، وأين تكون الاستجابة أقوى، ومتى تحتاج إلى تعديل مع دعم المدير.",
          },
          {
            title: "دعم تشغيلي محلي",
            body: "اجعل عمل الوكيل عملياً عبر إرشاد طرق الدفع ومسارات الاستجابة للاعبين والمتابعة اليومية.",
          },
        ],
        stats: [
          { value: "2", label: "مساران واضحان" },
          { value: "1", label: "مدير من البداية" },
          { value: "Mobile", label: "دعم جاهز للهاتف" },
        ] as MetricItem[],
        mediaSlotId: "partnershipToolsVisual" as const,
      },
      finalCta: {
        eyebrow: "جاهز للبدء",
        title: "أرسل الرسالة الأولى، واختر المسار، ثم انتقل إلى الخطوة العملية التالية.",
        body:
          "سواء كنت تروّج لجمهور أو تدعم اللاعبين محلياً، تبقى النهاية هنا مباشرة وواضحة.",
        primaryCta: { label: "تيليجرام", href: partnershipTelegram, variant: "primary" as const },
        secondaryCta: { label: "البريد الإلكتروني", href: partnershipEmail, variant: "secondary" as const },
        mediaSlotId: "partnershipFinalCtaVisual" as const,
        checklist: [
          "مسار شريك للجمهور والزيارات",
          "مسار وكيل للتعاملات والدعم المحلي",
          "متابعة من المدير وأدوات من البداية",
        ],
      },
    },
    about: {
      hero: {
        eyebrow: "عن MELBET Ethiopia",
        title: "نظام سوقي واحد للرياضة والكازينو والدعم ومسارات العمل.",
        body:
          "تحافظ صفحة إثيوبيا على القصة بشكل عملي: وصول للاعبين، ومنطق واضح للشراكة، ومسارات دعم، وهوية بصرية محلية من دون مبالغة.",
        primaryCta: { label: "استكشف الرئيسية", href: "/", variant: "primary" as const },
        secondaryCta: { label: "شاهد الشراكة", href: "/partnership", variant: "secondary" as const },
        metrics: [
          { value: "Home", label: "مسار اللاعبين" },
          { value: "Partnership", label: "المسار التجاري" },
          { value: "About", label: "الثقة والسياق" },
        ] as MetricItem[],
        mediaSlotId: "aboutHeroVisual" as const,
      },
      story: {
        eyebrow: "قصة السوق",
        title: "مصمم ليبدو حيوياً وراقياً ومكتملًا حتى قبل وصول حزمة الصور النهائية.",
        body:
          "يعتمد اتجاه إثيوبيا على عمق داكن، وبنية خضراء، وضوء ذهبي دافئ، وتوتر أحمر مضبوط. هكذا تتشكل هوية قوية للرياضة والكازينو من دون نسخ مباشر أو زينة سياحية.",
        points: [
          "قاعدة داكنة راقية تبقي الصفحة واضحة على الهاتف",
          "استخدام الأخضر والذهبي والأحمر عبر العمق واللمعان والأسطح لا عبر شرائط مسطحة",
          "خطوط تضاريس وإشارات إشعاعية توحي بالمكان من دون مباشرة",
        ],
        mediaSlotId: "aboutStoryVisual" as const,
      },
      offerings: {
        eyebrow: "ما الذي يمكن فعله هنا",
        title: "يصل اللاعبون والشركاء بأهداف مختلفة، لذلك يبقى كل مسار منفصلاً بوضوح.",
        body:
          "تتحدث الرئيسية مع اللاعب الذي يريد الرياضة والكازينو والمكافآت والوصول عبر الهاتف. وتتحدث الشراكة مع من يريد مسار عمل أو دعماً محلياً أو بداية بإشراف مدير.",
        cards: [
          {
            title: "لللاعبين",
            body: "افتح كرة القدم وألعاب الكازينو والعروض ومساراً سريعاً من دون بحث طويل.",
          },
          {
            title: "للشركاء",
            body: "استخدم مواد ترويجية وأكواداً وتتبعاً عندما تجلب جمهوراً أو حركة أو محتوى.",
          },
          {
            title: "للوكلاء",
            body: "ادعم الإيداع والسحب والتواصل مع اللاعبين عبر مسار تشغيلي واضح.",
          },
        ],
      },
      trust: {
        eyebrow: "الثقة والدعم",
        title: "تنمو الثقة عندما تكون الخطوة التالية واضحة وقريبة وسهلة الوصول.",
        body:
          "يعتمد بناء إثيوبيا على مسارات دعوة أوضح، وتسميات مملوكة للمحتوى، ونظام وسائط بديل يحافظ على اكتمال التجربة حتى قبل اكتمال الصور.",
        items: [
          { title: "لا صور مكسورة", body: "كل مساحة بصرية تتحول إلى سطح راقٍ جاهز بدلاً من صندوق صورة مكسور." },
          { title: "نسخ مملوكة للمحتوى", body: "التنقل والدعوات والرسائل الرئيسية تبقى في ملفات المحتوى لا داخل مكونات مبعثرة." },
          { title: "كثافة مناسبة للهاتف", body: "يبقى التخطيط محكماً بما يكفي ليبدو راقياً من دون إبعاد الخطوات المهمة." },
          { title: "وضوح المسارات", body: "مسار اللاعب والشريك والوكيل يقود كل منهم إلى خطوة مختلفة بدلاً من تكرار دعوة واحدة." },
        ],
        mediaSlotId: "aboutTrustVisual" as const,
      },
      bridge: {
        eyebrow: "اختر الطريق التالي",
        title: "انتقل إلى الصفحة التي تناسب سبب زيارتك.",
        body:
          "ينبغي للاعب أن ينتقل إلى الألعاب والرياضة والعروض. وينبغي للشريك أو الوكيل أن ينتقل إلى النموذج المناسب ويرسل أول رسالة وهو يعرف أين يبدأ.",
        cards: [
          {
            title: "مسار اللاعب",
            body: "افتح الصفحة الرئيسية إذا كنت تريد كرة القدم والكازينو والعروض وبداية أسرع.",
            cta: { label: "اذهب إلى الرئيسية", href: "/", variant: "primary" as const },
          },
          {
            title: "مسار الشراكة",
            body: "افتح صفحة الشراكة إذا كنت تريد نموذج الشريك أو الوكيل والأدوات وطريقة التواصل.",
            cta: { label: "اذهب إلى الشراكة", href: "/partnership", variant: "secondary" as const },
          },
        ],
      },
      finalCta: {
        eyebrow: "تابع الآن",
        title: "اختر المسار المناسب ثم اجعل الخطوة التالية بسيطة.",
        body:
          "تغلق هذه الصفحة فجوة الثقة ثم ترسل الزائر إلى المكان الذي يحتاجه فعلاً: اكتشاف اللاعبين أو اختيار مسار الشراكة.",
        primaryCta: { label: "افتح الرئيسية", href: "/", variant: "primary" as const },
        secondaryCta: { label: "افتح الشراكة", href: "/partnership", variant: "secondary" as const },
        mediaSlotId: "aboutFinalCtaVisual" as const,
      },
    },
    footer: {
      description:
        "رياضة واكتشاف كازينو وعروض ومسارات دعم وشراكة مهيأة لإثيوبيا.",
      columns: [
        {
          title: "الرئيسية",
          links: [
            { label: "الأعلى", href: "/#top" },
            { label: "الألعاب", href: gamesLink },
            { label: "الرياضة", href: sportsLink },
            { label: "العروض", href: "/#offers" },
            { label: "ابدأ الآن", href: gamesLink },
          ] as FooterLink[],
        },
        {
          title: "الشراكة",
          links: [
            { label: "الأعلى", href: "/partnership#top" },
            { label: "المزايا", href: "/partnership#benefits" },
            { label: "الخطوات", href: "/partnership#steps" },
            { label: "الأدوات", href: "/partnership#tools" },
            { label: "المسارات", href: "/partnership#paths" },
          ] as FooterLink[],
        },
      ],
      contactLinks: [
        { label: "تيليجرام", href: partnershipTelegram },
        { label: "البريد الإلكتروني", href: partnershipEmail },
      ] as FooterLink[],
      note:
        "تعتمد العروض وشروط الشراكة ومسؤوليات الوكيل على المسار والموافقة والظروف الحالية.",
      legalLine: "© 2026 MELBET Ethiopia. جميع الحقوق محفوظة.",
    },
  },
};

export const getEthiopiaContent = (locale: EthiopiaLocale): EthiopiaContent =>
  locale === "am" ? ethiopiaContentAm : ethiopiaContent[locale];


