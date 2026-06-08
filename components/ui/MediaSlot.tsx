/* eslint-disable @next/next/no-img-element */
"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import type { EthiopiaLocale } from "@/config/ethiopia-globals";
import {
  getMediaSlot,
  type EthiopiaMediaSlotId,
  type MediaFallbackType,
} from "@/content/ethiopia-media-slots";

type MediaSlotProps = {
  slotId: EthiopiaMediaSlotId;
  locale: EthiopiaLocale;
  className?: string;
  priority?: boolean;
  decorative?: boolean;
};

const fallbackClassByType: Record<MediaFallbackType, string> = {
  hero: "media-slot--hero",
  games: "media-slot--games",
  sports: "media-slot--sports",
  offers: "media-slot--offers",
  partnership: "media-slot--partnership",
  about: "media-slot--about",
  cta: "media-slot--cta",
};

export function MediaSlot({
  slotId,
  locale,
  className,
  priority = false,
  decorative = false,
}: MediaSlotProps) {
  const slot = getMediaSlot(slotId, locale);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
  }, [slot.targetPath]);

  useEffect(() => {
    const image = imageRef.current;

    if (!image) {
      return;
    }

    if (image.complete) {
      if (image.naturalWidth > 0) {
        setLoaded(true);
      } else {
        setFailed(true);
      }
    }
  }, [slot.targetPath]);

  const classes = [
    "media-slot",
    fallbackClassByType[slot.fallbackType],
    loaded ? "is-loaded" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      data-fallback-type={slot.fallbackType}
      data-overlay-safe-area={slot.overlaySafeArea}
      data-visual-intent={slot.visualIntent}
      style={
        {
          "--slot-ratio": slot.ratio,
          "--slot-image-scale": String(slot.imageScale ?? 1),
        } as CSSProperties
      }
    >
      <div aria-hidden="true" className="media-slot__fallback">
        <span className="media-slot__grid" />
        <span className="media-slot__ridge media-slot__ridge--one" />
        <span className="media-slot__ridge media-slot__ridge--two" />
        <span className="media-slot__orb" />
        <span className="media-slot__edge" />
      </div>

      {!failed ? (
        <img
          alt={decorative ? "" : slot.alt}
          aria-hidden={decorative ? true : undefined}
          className={`media-slot__image media-slot__image--${slot.fit}`}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          key={slot.targetPath}
          loading={priority ? "eager" : "lazy"}
          onError={() => {
            setLoaded(false);
            setFailed(true);
          }}
          onLoad={() => setLoaded(true)}
          ref={imageRef}
          src={slot.targetPath}
        />
      ) : null}
    </div>
  );
}
