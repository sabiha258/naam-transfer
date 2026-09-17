"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  as: Tag = "div",
  className = "",
  trigger = "scroll",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  trigger?: "scroll" | "mount";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay,
          ease: "power3.out",
          scrollTrigger: trigger === "scroll" ? { trigger: el, start: "top 88%" } : undefined,
        }
      );
    });

    return () => ctx.revert();
  }, [delay, y, trigger]);

  const Component = Tag as React.ElementType;
  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}
