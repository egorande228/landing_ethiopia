import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MELBET Ethiopia",
    template: "%s | MELBET Ethiopia",
  },
  description:
    "Standalone Ethiopia landing system with Home, Partnership, and About routes.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
