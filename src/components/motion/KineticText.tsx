"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Splits a headline into words and staggers them in on mount — the "kinetic typography"
// treatment (word-by-word reveal) rather than a single block fade.
export function KineticText({
  text,
  className = "",
  delay = 0,
  as: Tag = "h1",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const words = el.querySelectorAll("[data-word]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0, y: "0.6em", rotateX: -25 },
        {
          opacity: 1,
          y: "0em",
          rotateX: 0,
          duration: 0.75,
          delay,
          stagger: 0.06,
          ease: "power3.out",
        }
      );
    });

    return () => ctx.revert();
  }, [delay]);

  const Component = Tag as React.ElementType;
  const words = text.split(" ");

  return (
    <Component ref={ref} className={`flex flex-wrap ${className}`} style={{ perspective: "600px" }}>
      {words.map((word, i) => (
        <span key={i} className="mr-[0.28em] overflow-hidden pb-1 leading-[1.15]">
          <span data-word className="inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
}
