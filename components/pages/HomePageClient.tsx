"use client";

import { useSearchParams } from "next/navigation";
import { HomePageView } from "@/components/pages/HomePageView";
import { resolveLocale } from "@/lib/direction";

export function HomePageClient() {
  const searchParams = useSearchParams();
  const locale = resolveLocale(searchParams.getAll("lang"));

  return <HomePageView locale={locale} />;
}
