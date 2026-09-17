"use client";

import { Reveal } from "@/components/motion/Reveal";
import Link from "next/link";

const reels = [
  { id: "DX9QBufjoTL", title: "Moving to a new place? Don't carry the paperwork stress with you!" },
  { id: "DV2q8QwgfDQ", title: "How Naam Transfer saves you time." },
  { id: "DTPXDgAgT7O", title: "Zero stress property transfers." },
  { id: "DSHGkzojIKx", title: "Simplify your utility transfers today." }
];

import { useEffect, useRef } from "react";

function ReelCard({ reel, index }: { reel: { id: string; title: string }; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Use IntersectionObserver to play video when it enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (video.readyState < 3) {
              video.load();
            }
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the video is visible
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <Reveal
      trigger="scroll"
      delay={0.1 * index}
      y={20}
      className="group relative aspect-[9/16] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-border/50 bg-brand-navy transition-transform hover:-translate-y-1 hover:shadow-xl"
    >
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none"
        onMouseEnter={() => {
          if (videoRef.current) videoRef.current.play().catch(() => {});
        }}
        onMouseLeave={() => {
          if (videoRef.current) videoRef.current.pause();
        }}
        className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
      >
        <source src={`/videos/${reel.id}.mp4`} type="video/mp4" />
      </video>

      <Link 
        href={`https://www.instagram.com/reel/${reel.id}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-all duration-300 group-hover:via-black/50 group-hover:to-black/30" />
        
        {/* Content */}
        <div className="relative mt-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-md mb-3">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Watch on Instagram
          </div>
          <h3 className="text-sm font-semibold text-white/90 line-clamp-2">{reel.title}</h3>
        </div>
      </Link>
    </Reveal>
  );
}

export function InstagramReels() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal trigger="scroll" className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-brand-primary uppercase tracking-wider">
            Watch & Learn
          </h2>
          <p className="mt-2 text-balance text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
            See how it works in action
          </p>
          <p className="mt-4 text-lg text-foreground-dim">
            Check out our latest reels for quick tips, updates, and more about simplifying your property transfers.
          </p>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {reels.map((reel, index) => (
            <ReelCard key={reel.id} reel={reel} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
