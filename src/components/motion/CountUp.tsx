"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Splits "5,199+" into a numeric target (5199) plus the prefix/suffix to keep ("", "+")
// so the animation counts the digits while preserving formatting like "%" or "+".
function parseValue(value: string) {
  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value };
  const [, prefix, digits, suffix] = match;
  return { prefix, number: Number(digits.replace(/,/g, "")), suffix };
}

export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { prefix, number, suffix } = parseValue(value);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = value;
      return;
    }

    const counter = { n: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        n: number,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => {
          el.textContent = `${prefix}${Math.round(counter.n).toLocaleString("en-IN")}${suffix}`;
        },
      });
    });

    return () => ctx.revert();
  }, [value]);

  return <span ref={ref}>{value}</span>;
}
