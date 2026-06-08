import type { EthiopiaContent } from "@/content/ethiopia-content";
import {
  gamesLink,
  partnershipEmail,
  partnershipTelegram,
  sportsLink,
} from "@/config/ethiopia-globals";

export const ethiopiaContentAm: EthiopiaContent = {
  brand: {
    name: "MELBET Ethiopia",
    shortName: "ኢትዮጵያ",
    strapline: "በኢትዮጵያ ውስጥ ወደ እግር ኳስ፣ ወደ ካሲኖ ጨዋታ እና ወደ ተለየ ቦነስ የሚወስድዎ ፈጣን መንገድ።",
  },
  seo: {
    homeTitle: "MELBET Ethiopia | እግር ኳስ፣ የካሲኖ ጨዋታዎች፣ ቦነሶች እና የሞባይል ጨዋታ",
    homeDescription:
      "ከMELBET Ethiopia ጋር ወደ እግር ኳስ እንቅስቃሴ ይግቡ፣ የሚወዷቸውን የካሲኖ ጨዋታዎች ይክፈቱ፣ ያሉ ቦነሶችን ይውሰዱ እና በሞባይል ፈጥነው ይጫወቱ።",
    partnershipTitle: "MELBET Ethiopia ሽርክና | የፓርትነር እና የኤጀንት መንገዶች",
    partnershipDescription:
      "ከMELBET Ethiopia ጋር በፓርትነር ወይም በኤጀንት መንገድ ያድጉ፤ በቀጥታ ድጋፍ፣ ተግባራዊ መሳሪያዎች እና በግልጽ መጀመሪያ እርምጃ።",
    aboutTitle: "ስለ MELBET Ethiopia | ኩባንያ፣ አገልግሎቶች እና ድጋፍ",
    aboutDescription:
      "MELBET Ethiopia በስፖርት፣ በካሲኖ ጨዋታ፣ በቦነሶች እና በሽርክና ድጋፍ ምን እንደሚያቀርብ ይወቁ፤ ትኩረቱም ፍጥነት፣ ብቃት እና ጥራት ላይ ነው።",
  },
    chrome: {
      nav: [
        { label: "መነሻ", href: "/" },
        { label: "ሽርክና", href: "/partnership" },
      ],
    a11y: {
      homeLinkLabel: "ወደ MELBET Ethiopia መነሻ ገጽ ይሂዱ",
      navLabel: "ዋና አሰሳ",
      openMenuLabel: "የአሰሳ ዝርዝር ይክፈቱ",
      closeMenuLabel: "የአሰሳ ዝርዝር ይዝጉ",
    },
  },
  home: {
    hero: {
      eyebrow: "በእርስዎ መንገድ ይጫወቱ",
      title: "በትንሽ ጥበቃ እና በበለጠ ጨዋታ ወደ እግር ኳስ፣ ወደ ተወዳጅ ካሲኖ ጨዋታዎች እና ወደ ቀጥታ እንቅስቃሴ ይግቡ።",
      body:
        "ከየጨዋታ ቀን ኦድሶች፣ ስሎቶች፣ ቀጥታ ጠረጴዛዎች እና አዲስ ቦነሶች አንድ ታፕ ብቻ ይርቃሉ። ስሜትዎን የሚስማማውን ይምረጡ፣ በሞባይል ፈጥነው ይንቀሳቀሱ እና ቀጣዩን እድል በቅርብ ያቆዩ።",
      primaryCta: { label: "አሁን ይጫወቱ", href: gamesLink, variant: "primary" },
      secondaryCta: { label: "ቦነሶችን ይመልከቱ", href: "/#offers", variant: "secondary" },
      supportCtas: [
        { label: "ስፖርትን ይክፈቱ", href: sportsLink, variant: "ghost" },
        { label: "Telegram", href: partnershipTelegram, variant: "ghost" },
      ],
      highlights: [
        "እግር ኳስ፣ ስሎቶች እና ቀጥታ ጠረጴዛዎች ያለ ተጨማሪ መመላለስ",
        "ቀጣዩን እርምጃ ግልጽ የሚያደርግ የሞባይል ፍሰት",
        "ከእንቅስቃሴው ጋር ቅርብ የሚቆዩ ቦነሶችና ሽልማቶች",
      ],
      metrics: [
        { value: "እግር ኳስ", label: "የጨዋታ ቀን እንቅስቃሴ" },
        { value: "ካሲኖ", label: "ስሎቶች እና የቀጥታ ጠረጴዛዎች" },
        { value: "ቦነሶች", label: "ለመውሰድ ዝግጁ የሆነ ተጨማሪ እሴት" },
      ],
      mediaSlotId: "homeHeroStage",
      stageLabel: "እርስዎን ለማንቀሳቀስ የተሰራ",
      stagePoints: [
        "ከhero በቀጥታ ወደ ስፖርት፣ ወደ ካሲኖ እና ወደ ቦነሶች",
        "በdesktop እና በmobile ላይ የሚታይ ፕሪሚየም የአካባቢ ስሜት",
        "በፍጥነት እንዲመርጡ እና በፍጥነት እንዲጫወቱ የተዘጋጁ ግልጽ ክፍሎች",
      ],
    },
    games: {
      eyebrow: "የካሲኖ ምርጫዎች",
      title: "መጫወት የሚፈልጉትን ይምረጡ እና በዝግታ ፍለጋ ሳይቆሙ ወደ ጨዋታው ይግቡ።",
      body:
        "ከተመረጡ ምድቦች እስከ ፈጣን የslot ጨዋታዎች እና ቀጥታ ጠረጴዛዎች ድረስ ሁሉም ነገር ትክክለኛውን የጨዋታ ስሜት በፍጥነት እንዲያገኙ ተዘጋጅቷል።",
      cards: [
        {
          badge: "ካሲኖ",
          title: "ዋና ዋና የካሲኖ ምድቦችን በቀድሞ ይክፈቱ",
          body: "ተጫዋቾች በጣም የሚፈልጉትን ምድቦች በቀድሞ ይክፈቱ እና ያለ መጨናነቅ ወደ ጠረጴዛዎች፣ ክራሽ ጨዋታዎች ወይም ፈጣን ምርጫዎች ይሂዱ።",
          tags: ["ዋና ምድቦች", "ፈጣን መዳረሻ", "ዝግጁ ጨዋታ"],
          mediaSlotId: "casinoDiscoveryCard",
          cta: { label: "ካሲኖን ይክፈቱ", href: gamesLink, variant: "primary" },
        },
        {
          badge: "ስሎቶች",
          title: "ፈጣን ጨዋታ ሲፈልጉ ወደ slot ይግቡ",
          body: "ፈጣን ጨዋታ ሲፈልጉ ወደ reels ይግቡ፣ ኃይሉ ሲስማማ ይቆዩ እና ተጨማሪ እሴት ሲኖር በቅርብ ያግኙት።",
          tags: ["ፈጣን ዙሮች", "ቀላል መመለስ", "ተጨማሪ እሴት"],
          mediaSlotId: "slotsCard",
          cta: { label: "slots ይጫወቱ", href: gamesLink, variant: "secondary" },
        },
        {
          badge: "ቀጥታ",
          title: "እውነተኛ የጠረጴዛ ስሜት ሲፈልጉ ወደ live ይግቡ",
          body: "ሩሌት፣ ብላክጃክ እና ሌሎች ቀጥታ አይነቶች ጋር ቅርብ ለመሆን በቀጥታ መድረክ ይግቡ።",
          tags: ["ቀጥታ ጠረጴዛዎች", "እውነተኛ ጊዜ", "ቅርብ እንቅስቃሴ"],
          mediaSlotId: "liveGamesCard",
          cta: { label: "live ጨዋታዎችን ይክፈቱ", href: gamesLink, variant: "secondary" },
        },
      ],
    },
    sports: {
      eyebrow: "የስፖርት ቦርድ",
      title: "በጨዋታው ላይ ከፍ ብለው ይቆዩ፣ የቀጥታ ቦርዱን በፍጥነት ያንብቡ እና ጊዜው ሲደርስ ይንቀሳቀሱ።",
      body:
        "እግር ኳስ ዋና ትኩረት ነው፣ ግን የቀጥታ እንቅስቃሴን፣ የሞባይል መዳረሻን እና የቦነስ እሴትን ትኩረትዎን ሳይበትኑ በቅርብ ያቆያል።",
      cards: [
        {
          accentLabel: "ዋና ቦርድ",
          title: "እግር ኳስ በፊት",
          body: "ተጫዋቾች በቅድሚያ የሚፈልጉትን ሊጎች፣ የቀጥታ ቦርዶች እና የጨዋታ ቀን ገበያዎች ይክፈቱ።",
          mediaSlotId: "sportsFootballCard",
          cta: { label: "እግር ኳስን ይክፈቱ", href: sportsLink, variant: "ghost" },
        },
        {
          accentLabel: "የቀጥታ እይታ",
          title: "የቀጥታ ቦርድ መዳረሻ",
          body: "የጨዋታ ውስጥ ለውጦችን፣ የውጤት እንቅስቃሴን እና ፈጣን የገበያ እንቅስቃሴን ቦታዎን ሳይጠፉ ይከታተሉ።",
          mediaSlotId: "sportsLiveMatchCard",
          cta: { label: "የቀጥታ ቦርዱን ይመልከቱ", href: sportsLink, variant: "ghost" },
        },
        {
          accentLabel: "ሞባይል",
          title: "ለሞባይል የተሰራ",
          body: "በስልክዎ ላይ በፍጥነት ሲንቀሳቀሱ ቦርዱን፣ ኦድሶቹን እና ቀጣዩን ታፕ በቀላሉ ያንብቡ።",
          mediaSlotId: "sportsMobileCard",
          cta: { label: "በሞባይል ይክፈቱ", href: sportsLink, variant: "ghost" },
        },
        {
          accentLabel: "የሽልማት ንብርብር",
          title: "ከጨዋታው አጠገብ ያሉ ቦነሶች",
          body: "ተጨማሪ እሴትን ለመውሰድ ሲፈልጉ ቦነሶች ከእንቅስቃሴው ሳይርቁ በቅርብ ይቆያሉ።",
          mediaSlotId: "sportsRewardsCard",
          cta: { label: "ቦነስ ያግኙ", href: sportsLink, variant: "ghost" },
        },
      ],
    },
    offers: {
      eyebrow: "የቦነስ ማዕከል",
      title: "ቀጣዩን እርምጃዎን የሚስማማውን ቦነስ ይምረጡ እና ተጨማሪ እሴትን ወደ ተጨማሪ ጨዋታ ይቀይሩ።",
      body:
        "የእንኳን ደህና መጡ ቦነሶች፣ ሽልማቶች እና ለስልክ የተስማሙ የbonus መንገዶች ቀላል ሲሆኑ በፍጥነት ይወሰዳሉ እና ወደ ጨዋታው በቀላሉ ይመለሳሉ።",
      cards: [
        {
          badge: "እንኳን ደህና መጡ",
          title: "በእንኳን ደህና መጡ ቦነሶች የበለጠ ጠንክረው ይጀምሩ",
          body: "በመጀመሪያው እርምጃ ተጨማሪ እሴት የሚሰጥዎትን ቦነስ ይውሰዱ እና ያለ ማመንታት ይግቡ።",
          tags: ["ፈጣን ጅምር", "ተጨማሪ እሴት"],
          mediaSlotId: "offersWelcomeCard",
          cta: { label: "የእንኳን ደህና መጡ ቦነስ ያግኙ", href: gamesLink, variant: "primary" },
        },
        {
          badge: "ሽልማቶች",
          title: "ጨዋታዎን የሚያቆዩ ሽልማቶችን ይውሰዱ",
          body: "በሚቀጥለው ጉብኝት የበለጠ ለማግኘት የተደጋጋሚ ጨዋታ ሽልማቶችን፣ ስጦታዎችን እና ተጨማሪ እሴትን ይጠቀሙ።",
          tags: ["በጠንካራ ሁኔታ ይመለሱ", "የsession እሴት"],
          mediaSlotId: "rewardsGiftsCard",
          cta: { label: "ሽልማቶችን ያግኙ", href: gamesLink, variant: "secondary" },
        },
        {
          badge: "ሞባይል",
          title: "ቦነሶችን በስልክዎ ላይ በቀላሉ ይውሰዱ",
          body: "ከእግር ኳስ ወይም ከካሲኖ በመጡ ጊዜ ትክክለኛውን ቦነስ ያለ ተጨማሪ ገጽ ፍለጋ ያግኙ።",
          tags: ["ለስልክ ዝግጁ", "ፈጣን ግባት"],
          mediaSlotId: "offersMobileCard",
          cta: { label: "ቦነሶችን ይክፈቱ", href: gamesLink, variant: "secondary" },
        },
      ],
    },
    finalCta: {
      eyebrow: "ፍጥነቱን ያቆዩ",
      title: "የሚቀጥለውን ክፍል ይምረጡ እና ወደ መጡበት እንቅስቃሴ ቅርብ ይቆዩ።",
      body:
        "በቀጥታ ወደ ካሲኖ ጨዋታዎች ይግቡ፣ ወደ ስፖርት ቦርድ ይመለሱ ወይም አሁን ያሉ ቦነሶችን ያግኙ እና ፍጥነትዎን ያቆዩ።",
      primaryCta: { label: "አሁን ይጀምሩ", href: gamesLink, variant: "primary" },
      secondaryCta: { label: "ስፖርትን ይክፈቱ", href: sportsLink, variant: "secondary" },
      mediaSlotId: "finalPlayerCtaVisual",
      checklist: [
        "እግር ኳስ እና የቀጥታ ቦርዶች ለመክፈት ዝግጁ",
        "ስሎቶች እና የቀጥታ ካሲኖ ጠረጴዛዎች አንድ ታፕ ብቻ ይርቃሉ",
        "ቦነሶች እና ሽልማቶች በቀላሉ ለመውሰድ ዝግጁ",
      ],
    },
  },
  partnership: {
    hero: {
      eyebrow: "ከMELBET Ethiopia ጋር ያድጉ",
      title: "ትራፊክዎን ወይም የአካባቢ ድርሻዎን ከመጀመሪያው ቀን ግልጽ ወደሆነ የሽርክና መንገድ ይቀይሩት።",
      body:
        "ተጫዋቾችን ማምጣት፣ ማህበረሰብ መመራት ወይም የአካባቢ ግብይቶችን መደገፍ ከቻሉ ለእርስዎ የሚስማማውን ሞዴል በመምረጥ ፈጥነው መንቀሳቀስ ይችላሉ።",
      primaryCta: { label: "በTelegram ያናግሩን", href: partnershipTelegram, variant: "primary" },
      secondaryCta: { label: "መንገዶቹን ይመልከቱ", href: "/partnership#paths", variant: "secondary" },
      supportCtas: [
        { label: "Email ይላኩ", href: partnershipEmail, variant: "ghost" },
      ],
      metrics: [
        { value: "ፓርትነር", label: "ለትራፊክ፣ ለፈጠራ ሰሪዎች እና ለማህበረሰቦች" },
        { value: "ኤጀንት", label: "ለአካባቢ ድጋፍ እና ግብይቶች" },
        { value: "1 ማኔጀር", label: "ከመጀመሪያው ቀን ቀጥተኛ ድጋፍ" },
      ],
      mediaSlotId: "partnershipHeroVisual",
      railsLabel: "በመጀመሪያ የሚያገኙት",
      rails: [
        "ለፓርትነሮች የፕሮሞ ኮድ፣ የካምፔይን እቃዎች እና የtracking ድጋፍ",
        "ለኤጀንቶች የአካባቢ ክፍያ መመሪያ እና የተጫዋች ክትትል",
        "በፍጥነት እንዲንቀሳቀሱ የሚረዳ ግልጽ ኦንቦርዲንግ ከአንድ ማኔጀር ጋር",
      ],
    },
    benefits: {
      eyebrow: "ለምን ይሰራል",
      title: "ለምታመጡት ነገር የተሰራ ግልጽ ድጋፍ፣ ተስማሚ መሳሪያዎች እና መንገድ እዚህ ይጀምራሉ።",
      body:
        "ፓርትነሮችና ኤጀንቶች በተለያዩ መንገዶች ይሳካሉ፤ ስለዚህ የሚቀርበው ዋጋ ግልጽ፣ ተግባራዊ እና ከመጀመሪያው ውይይት ቀላል ለመንቀሳቀስ የተዘጋጀ ነው።",
      items: [
        {
          title: "ከመጀመሪያው ቀን አንድ ማኔጀር",
          body: "የምታመጡትን ያካፍሉ፣ መንገዱን ያረጋግጡ እና ሂደቱን በፍጥነት ሊያንቀሳቅስ ከሚችል አንድ ሰው ጋር ፍጥነቱን ያቆዩ።",
          metric: "ቀጥተኛ ግንኙነት",
        },
        {
          title: "ከሚናው ጋር የሚስማሙ መሳሪያዎች",
          body: "ፓርትነሮች የካምፔይን ድጋፍና ትራኪንግ ያገኛሉ። ኤጀንቶች ደግሞ ለተቀማጭ፣ ለገንዘብ አውጪ እና ለተጫዋች ክትትል ተግባራዊ መመሪያ ያገኛሉ።",
          metric: "ለሚና የተስማማ ድጋፍ",
        },
        {
          title: "ግልጽ የአካባቢ ኃላፊነት",
          body: "የኤጀንት ሥራ ከአካባቢ ድጋፍ ጋር ይታሰራል፣ የፓርትነር ሥራ ደግሞ ከተመልካች እድገትና ከፕሮሞ ስፋት ጋር ይታሰራል።",
          metric: "የመንገድ ግልጽነት",
        },
        {
          title: "የበለጠ ጠንካራ የመጀመሪያ ስሜት",
          body: "የተጠናቀቀና እምነት የሚገነባ ገጽ የመጀመሪያው መልዕክት ከመላኩ በፊት መንገዱ ከባድ እና ታማኝ እንዲመስል ያግዛል።",
          metric: "የእምነት ንብርብር",
        },
      ],
      mediaSlotId: "partnershipBenefitsVisual",
    },
    steps: {
      eyebrow: "በሶስት እርምጃዎች ይጀምሩ",
      title: "የምትሰሩትን ይንገሩን፣ ትክክለኛውን መንገድ ይምረጡ እና ከኋላዎ ባለ ድጋፍ ይጀምሩ።",
      body:
        "ሂደቱ ሆን ብሎ አጭር ነው፤ ኃይልዎን ያብራሩ፣ ሞዴሉን ያረጋግጡ እና ያለ መዘግየት ወደ ተግባር ይግቡ።",
      items: [
        {
          step: "01",
          title: "ያላችሁትን ያሳውቁን",
          body: "ትራፊክ እንደምታመጡ፣ ማህበረሰብ እንዳላችሁ፣ የአካባቢ ክፍያዎችን እንደምትደግፉ ወይም ተጫዋቾችን እንደምትረዱ ያብራሩ።",
        },
        {
          step: "02",
          title: "መንገዱን ይምረጡ",
          body: "ስምምነቱ፣ መሳሪያዎቹ እና ኃላፊነቶቹ ግልጽ እንዲቆዩ የፓርትነርና የኤጀንት መንገዶችን በተለይ ይመልከቱ።",
        },
        {
          step: "03",
          title: "ከድጋፍ ጋር ይጀምሩ",
          body: "ከመጀመሪያው ግንኙነት በኋላ ቅርብ የሚቆይ ክትትል ጋር ወደ ማስተዋወቅ ወይም ወደ አካባቢ ስራ ይግቡ።",
        },
      ],
    },
    paths: {
      eyebrow: "መንገድዎን ይምረጡ",
      title: "ኃይልዎን የሚስማማውን መንገድ ይምረጡ እና ዛሬ ውይይቱን ይጀምሩ።",
      body:
        "ትራፊክ፣ ማህበረሰቦች ወይም የይዘት መዳረሻ ሲኖርዎት የፓርትነር መንገዱን ይምረጡ። የተጫዋች ግብይቶችን እና የአካባቢ ክትትልን ማድረግ ከቻሉ የኤጀንት መንገዱን ይምረጡ።",
      cards: [
        {
          asideLabel: "ፓርትነር",
          title: "የፓርትነር መንገድ",
          body: "በይዘት፣ በካምፔይን እና በማህበረሰብ ተጽዕኖ ተጫዋች ፍላጎት ለማምጣት ለሚችሉ ሰዎች የተሰራ።",
          bullets: [
            "የፕሮሞ ኮድ ፍሰት እና የካምፔይን እቃዎች",
            "በትራኪንግ ድጋፍ የሚታይ አፈጻጸም",
            "የካምፔይንዎን አቅጣጫ ለማጠናከር የማኔጀር ክትትል",
          ],
          mediaSlotId: "partnershipPartnerRouteVisual",
          ctas: [
            { label: "በTelegram ይጀምሩ", href: partnershipTelegram, variant: "primary" },
            { label: "Email ይላኩ", href: partnershipEmail, variant: "ghost" },
          ],
        },
        {
          asideLabel: "ኤጀንት",
          title: "የኤጀንት መንገድ",
          body: "በመሬት ላይ የሚታመን ተግባራዊ እምነት ጋር ተቀማጭ፣ ገንዘብ አውጪ እና ቀጥተኛ የተጫዋች መመሪያ ለሚደግፉ የአካባቢ ኦፕሬተሮች የተሰራ።",
          bullets: [
            "የአካባቢ ግብይት ድጋፍ እና የካሽየር ዓይነት ስራ",
            "ከክፍያ መዳረሻ ጋር የተያያዘ የተጫዋች እርዳታ",
            "ከጅማሬ በኋላ ቅርብ የሚቆይ የኦፕሬሽን መመሪያ",
          ],
          mediaSlotId: "partnershipAgentRouteVisual",
          ctas: [
            { label: "በTelegram ይጀምሩ", href: partnershipTelegram, variant: "primary" },
            { label: "Email ይላኩ", href: partnershipEmail, variant: "ghost" },
          ],
        },
      ],
    },
    tools: {
      eyebrow: "መሳሪያዎች እና ድጋፍ",
      title: "በፍጥነት ለመጀመር እና በራስ መተማመን ለመድገፍ የሚያስፈልጉ መሳሪያዎችን እና ድጋፍን ያግኙ።",
      body:
        "ጠንካራ የሽርክና መንገድ በቃል ኪዳን ብቻ አይቆምም። ስራው በእውነት እንዲሄድ የሚረዱ እቃዎችን፣ የማኔጀር መዳረሻን፣ የtracking እይታን እና የቀን ተቀናቃኝ ድጋፍን ይሰጣል።",
      items: [
        {
          title: "የካምፔይን እቃዎች",
          body: "ለፕሮሞ ኮዶች፣ ለማስጀመሪያ ግፊቶች እና ለተደጋጋሚ ካምፔይኖች ዝግጁ አቅጣጫ በመስጠት የፓርትነር ውጭ ግንኙነትን ያበረታቱ።",
        },
        {
          title: "ትራኪንግ እና ግምገማ",
          body: "ምን እንደሚንቀሳቀስ፣ ምላሹ የት እንደሚጠናከር እና መቼ እንደሚሻሻል ከማኔጀር ድጋፍ ጋር ይከታተሉ።",
        },
        {
          title: "የአካባቢ ኦፕሬሽን ድጋፍ",
          body: "የኤጀንት ስራ በአካባቢ የክፍያ መመሪያ፣ በተጫዋች ምላሽ መንገዶች እና በንጹህ የቀን ተከታታይ ሂደት ተግባራዊ እንዲቆይ ያድርጉ።",
        },
      ],
      stats: [
        { value: "2", label: "ግልጽ የሥራ መንገዶች" },
        { value: "1", label: "ከመጀመሪያ ቀን ማኔጀር" },
        { value: "ሞባይል", label: "ዝግጁ የድጋፍ ፍሰት" },
      ],
      mediaSlotId: "partnershipToolsVisual",
    },
    finalCta: {
      eyebrow: "ውይይቱን ይጀምሩ",
      title: "የመጀመሪያውን መልዕክት ይላኩ፣ መንገዱን ይምረጡ እና ወደ ተግባራዊ ቀጣይ እርምጃ ይግቡ።",
      body:
        "ለተመልካች ብቻ ቢያስተዋውቁም ወይም በአካባቢ ተጫዋቾችን ቢደግፉም ይህን ገጽ በግልጽ የመገናኛ መንገድ እና በቀላል መጀመሪያ እርምጃ ትተዋላችሁ።",
      primaryCta: { label: "በTelegram ያናግሩን", href: partnershipTelegram, variant: "primary" },
      secondaryCta: { label: "Email ይላኩ", href: partnershipEmail, variant: "secondary" },
      mediaSlotId: "partnershipFinalCtaVisual",
      checklist: [
        "የፓርትነር መንገድ ለትራፊክ እና ለማህበረሰቦች",
        "የኤጀንት መንገድ ለአካባቢ ግብይቶች እና ድጋፍ",
        "ከመጀመሪያ ቀን ጀምሮ የማኔጀር ክትትል እና መሳሪያዎች",
      ],
    },
  },
  about: {
    hero: {
      eyebrow: "ስለ ኩባንያው",
      title: "MELBET Ethiopia ስፖርትን፣ የካሲኖ ጨዋታን እና ድጋፍን በፍጥነት፣ በብቃት እና በጥራት ለማቅረብ የተገነባ ነው።",
      body:
        "ይህ ልምድ ለተጫዋቾችና ለፓርትነሮች ቀላል አጠቃቀም፣ ፈጣን አሰሳ እና ጠንካራ አቀራረብ እንዲሰጥ ተዘጋጅቷል እንዲሁም ከመጀመሪያው ጉብኝት ጀምሮ በመተማመን እንዲንቀሳቀሱ ያግዛል።",
      primaryCta: { label: "ልምዱን ይመልከቱ", href: "/", variant: "primary" },
      secondaryCta: { label: "የሽርክና ድጋፍን ይመልከቱ", href: "/partnership", variant: "secondary" },
      metrics: [
        { value: "ፍጥነት", label: "ዋና እርምጃዎችን ፈጥኖ መድረስ" },
        { value: "ብቃት", label: "ግልጽ መንገዶች እና ቀላል ጉዞ" },
        { value: "ጥራት", label: "ፕሪሚየም አቀራረብ እና ድጋፍ" },
      ],
      mediaSlotId: "aboutHeroVisual",
    },
    story: {
      eyebrow: "ምን እንሰራለን",
      title: "እግር ኳስ፣ የካሲኖ መዳረሻ፣ ቦነሶች እና ድጋፍን በቀላልና ፈጣን መልኩ ለማቅረብ እንሰራለን።",
      body:
        "MELBET Ethiopia የምርት መዳረሻን፣ የብራንድ አቀራረብን እና የድጋፍ መንገዶችን በአንድ ስርዓት ያገናኛል እንዲሁም ጎብኚዎች ነገሮችን ለመረዳት የሚያጠፉትን ጊዜ ያነሳል።",
      points: [
        "እግር ኳስን፣ የካሲኖ ጨዋታዎችን እና አሁን ያሉ ቦነሶችን በፍጥነት ማግኘት",
        "አስፈላጊ እርምጃዎችን ቅርብ የሚያደርግ ብቃት ያለው የገጽ አቀማመጥ",
        "ጥራት ያለው እይታ፣ የተመጣጠነ ቅጂ እና የተጠናቀቀ የሞባይል ልምድ",
      ],
      mediaSlotId: "aboutStoryVisual",
    },
    offerings: {
      eyebrow: "ምን እንሰጣለን",
      title: "የሥራችን ማዕከል ጠቃሚ መዳረሻ፣ ብቃት ያለው ፍሰት እና ከመጀመሪያው ጉብኝት ጀምሮ ዝግጁ የሚሰማ አገልግሎት ነው።",
      body:
        "በመላው የlanding ልምድ ውስጥ ፈጣን የስፖርት መዳረሻ፣ የተቀላጠፈ የካሲኖ ፍለጋ፣ ግልጽ የቦነስ እይታ እና ተግባራዊ የሚቆይ የሽርክና ድጋፍ እናቀርባለን።",
      cards: [
        {
          title: "ስፖርት እና የጨዋታ ቀን መዳረሻ",
          body: "ወደ እግር ኳስ ቦርዶች፣ ወደ ቀጥታ እንቅስቃሴ እና ወደ የጨዋታ ቀን ገበያዎች ቀጥተኛ እና ቀላል መንገድ እናቀርባለን።",
        },
        {
          title: "የካሲኖ እና የሽልማት ፍሰት",
          body: "የካሲኖ ጨዋታዎችን፣ ቀጥታ ጠረጴዛዎችን፣ slotsን እና አሁን ያሉ ቦነሶችን ያለ ዝግታ ካታሎግ በፍጥነት እንዲያገኙ እናቀርባለን።",
        },
        {
          title: "ድጋፍ እና የእድገት መንገዶች",
          body: "ለፓርትነሮችና ለአካባቢ ኤጀንቶች የሽርክና መንገዶችን፣ በማኔጀር የሚመራ ግንኙነትን እና ተግባራዊ ድጋፍን እናቀርባለን።",
        },
      ],
    },
    trust: {
      eyebrow: "እንዴት እንሰራለን",
      title: "ፍጥነት፣ ብቃት እና ጥራት ኩባንያው ልምዱን እንዴት እንደሚያቀርብ፣ እንደሚደግፍ እና እንደሚያሻሽል ይመራሉ።",
      body:
        "የእኛ መለኪያ ቀላል ነው፤ አስፈላጊ እርምጃዎችን ቀላል ማድረግ፣ ጉዞውን በmobile እና በdesktop ላይ ብቃት ያለው ማድረግ እና የሚታመን አቀራረብን መጠበቅ ነው።",
      items: [
        {
          title: "ፈጣን መዳረሻ",
          body: "ዋና እርምጃዎች ሁልጊዜ ቅርብ ይቆያሉ፣ ስለዚህ እግር ኳስ፣ የካሲኖ ጨዋታ፣ ቦነሶች እና ድጋፍ ሩቅ አይሆኑም።",
        },
        {
          title: "ብቃት ያለው አቀማመጥ",
          body: "ይዘት፣ አሰሳ እና ቁልፎች ግጭትን ለመቀነስ እና ውሳኔዎችን ቀላል ለማድረግ በተደራጀ መልኩ ይሰራሉ።",
        },
        {
          title: "ጥራት ያለው አቀራረብ",
          body: "በይነገጹ ፖሊሽ ያለው እይታ፣ የተመጣጠነ ቅጂ እና ግልጽ የቅደም ተከተል በመጠቀም እምነትን ያጠናክራል።",
        },
        {
          title: "ተግባራዊ ድጋፍ",
          body: "ጎብኚው ተጫዋች ወይም ፓርትነር ቢሆንም ቀጣዩ እርምጃ ግልጽ ተደርጎ ይቀርባል እና በቀጥታ የመገናኛ መንገዶች ይደገፋል።",
        },
      ],
      mediaSlotId: "aboutTrustVisual",
    },
    bridge: {
      eyebrow: "ማንን እንደግፋለን",
      title: "የተጫዋች ልምድንም ሆነ የእድገት የንግድ ጎንን እንደግፋለን።",
      body:
        "ኩባንያው ወደ ጨዋታ ፈጣን መዳረሻ ለሚፈልጉ ጎብኚዎች እና ወደ ማስተዋወቅ፣ ወደ አካባቢ ድጋፍ ወይም ወደ የተመራ ኦንቦርዲንግ ግልጽ መንገድ ለሚፈልጉ ፓርትነሮች ያገለግላል።",
      cards: [
        {
          title: "ለተጫዋቾች",
          body: "በፍጥነት እና በግልጽነት የተዘጋጀውን የእግር ኳስ፣ የካሲኖ ጨዋታዎች፣ የቀጥታ ጠረጴዛዎች እና የቦነስ ልምድ ይመልከቱ።",
          cta: { label: "የተጫዋች ልምዱን ይመልከቱ", href: "/", variant: "primary" },
        },
        {
          title: "ለፓርትነሮች",
          body: "ለመሳሪያዎች፣ ለድጋፍ እና ከMELBET Ethiopia ጋር ስራ ለመጀመር የበለጠ ብቃት ያለው መንገድ የሽርክና ገጹን ይመልከቱ።",
          cta: { label: "የሽርክና ድጋፍን ይመልከቱ", href: "/partnership", variant: "secondary" },
        },
      ],
    },
    finalCta: {
      eyebrow: "ቀጣዩ እርምጃ",
      title: "ልምዱን ይመልከቱ፣ የምንሰጠውን ይገምግሙ እና ለእርስዎ የሚስማማውን መንገድ ይክፈቱ።",
      body:
        "የተጫዋች ልምዱን ከፈለጉ ወደ መነሻ ይሂዱ። የኩባንያ ድጋፍን፣ መሳሪያዎችን እና የእድገት መንገዶችን ከፈለጉ ወደ ሽርክና ይሂዱ።",
      primaryCta: { label: "መነሻን ይክፈቱ", href: "/", variant: "primary" },
      secondaryCta: { label: "ሽርክናን ይክፈቱ", href: "/partnership", variant: "secondary" },
      mediaSlotId: "aboutFinalCtaVisual",
    },
  },
  footer: {
    description: "እግር ኳስ፣ የካሲኖ ጨዋታ፣ ቦነሶች፣ ድጋፍ እና የእድገት መንገዶች ጎብኚዎችን በፍጥነት ወደ እርምጃ ለማንቀሳቀስ የተዘጋጁ።",
    columns: [
      {
        title: "መነሻ",
        links: [
          { label: "ከላይ", href: "/#top" },
          { label: "ጨዋታዎች", href: gamesLink },
          { label: "ስፖርት", href: sportsLink },
          { label: "ቦነሶች", href: "/#offers" },
          { label: "አሁን ይጀምሩ", href: gamesLink },
        ],
      },
      {
        title: "ሽርክና",
        links: [
          { label: "ከላይ", href: "/partnership#top" },
          { label: "ጥቅሞች", href: "/partnership#benefits" },
          { label: "እርምጃዎች", href: "/partnership#steps" },
          { label: "መሳሪያዎች", href: "/partnership#tools" },
          { label: "መንገዶች", href: "/partnership#paths" },
        ],
      },
    ],
    contactLinks: [
      { label: "Telegram", href: partnershipTelegram },
      { label: "Email", href: partnershipEmail },
    ],
    note:
      "የቦነስ መኖር፣ የሽርክና ውሎች እና የኤጀንት ኃላፊነቶች በመንገዱ፣ በማጽደቅ እና በወቅታዊ የገበያ ሁኔታ መሰረት ሊለያዩ ይችላሉ።",
    legalLine: "© 2026 MELBET Ethiopia. መብቶቹ በሙሉ የተጠበቁ ናቸው።",
  },
};

