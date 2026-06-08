import type { Metadata } from "next";
import { Suspense } from "react";
import { PartnershipPageClient } from "@/components/pages/PartnershipPageClient";
import { PartnershipPageView } from "@/components/pages/PartnershipPageView";
import { ethiopiaGlobals } from "@/config/ethiopia-globals";
import { getEthiopiaContent } from "@/content/ethiopia-content";

export const metadata: Metadata = {
  title: "Partnership | Partner and Agent Routes",
  description: getEthiopiaContent("en").seo.partnershipDescription,
};

export default function PartnershipPage() {
  return (
    <Suspense fallback={<PartnershipPageView locale={ethiopiaGlobals.defaultLocale} />}>
      <PartnershipPageClient />
    </Suspense>
  );
}
