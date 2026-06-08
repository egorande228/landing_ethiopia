import type { Metadata } from "next";
import { Suspense } from "react";
import { HomePageClient } from "@/components/pages/HomePageClient";
import { HomePageView } from "@/components/pages/HomePageView";
import { ethiopiaGlobals } from "@/config/ethiopia-globals";
import { getEthiopiaContent } from "@/content/ethiopia-content";

export const metadata: Metadata = {
  title: "Sports, Casino, Offers, and Mobile Play",
  description: getEthiopiaContent("en").seo.homeDescription,
};

export default function HomePage() {
  return (
    <Suspense fallback={<HomePageView locale={ethiopiaGlobals.defaultLocale} />}>
      <HomePageClient />
    </Suspense>
  );
}
