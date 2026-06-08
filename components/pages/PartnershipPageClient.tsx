"use client";

import { useSearchParams } from "next/navigation";
import { PartnershipPageView } from "@/components/pages/PartnershipPageView";
import { resolveLocale } from "@/lib/direction";

export function PartnershipPageClient() {
  const searchParams = useSearchParams();
  const locale = resolveLocale(searchParams.getAll("lang"));

  return <PartnershipPageView locale={locale} />;
}
