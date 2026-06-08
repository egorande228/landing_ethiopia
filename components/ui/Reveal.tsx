"use client";

import {
  type CSSProperties,
  type RefObject,
  type ReactNode,
  useEffect,
  useRef,
} from "react";
import { prefersReducedMotion } from "@/motion/anime";
import { observeOnce } from "@/motion/observers";
import { revealLeft, revealScale, revealUp } from "@/motion/presets";

type RevealVariant = "up" | "left" | "scale";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section" | "header";
  variant?: RevealVariant;
  delay?: number;
  style?: CSSProperties;
};

const initialStyleByVariant: Record<RevealVariant, { opacity: string; transform: string }> = {
  up: {
    opacity: "0",
    transform: "translateY(20px)",
  },
  left: {
    opacity: "0",
    transform: "translateX(-20px)",
  },
  scale: {
    opacity: "0",
    transform: "scale(0.975)",
  },
};

export function Reveal({
  children,
  className,
  as = "div",
  variant = "up",
  delay = 0,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element || prefersReducedMotion()) {
      return;
    }

    let cleanupAnimation: { pause?: () => void } | null = null;
    const disconnect = observeOnce(element, () => {
      const initialStyles = initialStyleByVariant[variant];
      element.style.opacity = initialStyles.opacity ?? "";
      element.style.transform = initialStyles.transform ?? "";

      if (variant === "left") {
        cleanupAnimation = revealLeft(element, delay);
        return;
      }

      if (variant === "scale") {
        cleanupAnimation = revealScale(element, delay);
        return;
      }

      cleanupAnimation = revealUp(element, delay);
    });

    return () => {
      disconnect();
      cleanupAnimation?.pause?.();
    };
  }, [delay, variant]);

  const classes = ["reveal", className].filter(Boolean).join(" ");

  if (as === "article") {
    return (
      <article className={classes} ref={ref as RefObject<HTMLElement>} style={style}>
        {children}
      </article>
    );
  }

  if (as === "section") {
    return (
      <section className={classes} ref={ref as RefObject<HTMLElement>} style={style}>
        {children}
      </section>
    );
  }

  if (as === "header") {
    return (
      <header className={classes} ref={ref as RefObject<HTMLElement>} style={style}>
        {children}
      </header>
    );
  }

  return (
    <div className={classes} ref={ref as RefObject<HTMLDivElement>} style={style}>
      {children}
    </div>
  );
}
