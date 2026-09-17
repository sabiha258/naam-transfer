"use client";

import { useState, useRef, useEffect } from "react";
import { CountUp } from "@/components/motion/CountUp";

interface VideoTestimonial {
  id: string;
  title: string;
  author: string;
  location: string;
  service: string;
  tag: string;
}

const testimonials: VideoTestimonial[] = [
  {
    id: "DX9QBufjoTL",
    title: "Paperwork done without visiting any government office!",
    author: "Rajesh & Family",
    location: "Ahmedabad",
    service: "Electricity & AMC Transfer",
    tag: "Customer Story",
  },
  {
    id: "DV2q8QwgfDQ",
    title: "How Naam Transfer saved us 15+ hours of running around.",
    author: "Priya S.",
    location: "Surat",
    service: "DGVCL & SMC Transfer",
    tag: "Verified Review",
  },
  /* Hidden temporarily:
  {
    id: "DTPXDgAgT7O",
    title: "Zero stress, completely digital name change process.",
    author: "Amit & Kinjal M.",
    location: "Vadodara",
    service: "Piped Gas Transfer",
    tag: "Homeowner",
  },
  {
    id: "DSHGkzojIKx",
    title: "Got our electricity and gas bills updated in 10 days.",
    author: "Neha & Ronak K.",
    location: "Rajkot",
    service: "Utility Name Transfer",
    tag: "Review",
  },
  */
];

export function HeroVideoMontage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const active = testimonials[activeIdx];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, [activeIdx]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand-primary/20 via-brand-orange/15 to-transparent blur-2xl -z-10" />

      {/* Main Grid: Featured 9:16 Video + Montage Selector */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 items-center">
        
        {/* Active 9:16 Video Player Container */}
        <div className="sm:col-span-8 relative">
          <div
            onClick={togglePlay}
            className="group relative aspect-[9/16] w-full max-w-[320px] mx-auto overflow-hidden rounded-3xl border-2 border-white/80 bg-brand-navy shadow-[0_20px_50px_-15px_rgba(17,43,88,0.35)] cursor-pointer ring-1 ring-border/50"
          >
            <video
              ref={videoRef}
              playsInline
              loop
              muted={isMuted}
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            >
              <source src={`/videos/${active.id}.mp4`} type="video/mp4" />
            </video>

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

            {/* Top Bar: Live Tag & Audio Controls */}
            <div className="absolute top-3 inset-x-3 flex items-center justify-between z-20">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md border border-white/20">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                {active.tag}
              </span>

              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 transition hover:bg-black/80"
              >
                {isMuted ? (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Play / Pause Center Overlay indicator (shows on pause or hover) */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px] z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-brand-primary shadow-xl transition-transform transform hover:scale-110">
                  <svg className="h-7 w-7 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}

            {/* Bottom Caption Info */}
            <div className="absolute bottom-3 inset-x-3 z-20 text-white">
              <p className="text-[13px] font-bold leading-snug line-clamp-2 drop-shadow-sm">
                “{active.title}”
              </p>
              <div className="mt-1.5 flex items-center justify-between text-[11px] text-white/90">
                <span className="font-semibold text-brand-orange drop-shadow-sm">{active.author}</span>
                <span className="opacity-80">{active.location}</span>
              </div>
              <p className="text-[10px] text-white/70 mt-0.5">{active.service}</p>
            </div>
          </div>
        </div>

        {/* Montage Selector Column */}
        <div className="sm:col-span-4 flex sm:flex-col gap-2.5 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">
          <div className="hidden sm:block text-[11px] font-mono font-bold uppercase tracking-wider text-brand-primary mb-1">
            Real Stories
          </div>
          {testimonials.map((t, idx) => {
            const isCurrent = idx === activeIdx;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`relative flex items-center gap-3 rounded-xl p-2 text-left transition-all shrink-0 w-44 sm:w-full border ${
                  isCurrent
                    ? "bg-surface border-brand-primary shadow-md shadow-brand-primary/10 ring-1 ring-brand-primary"
                    : "bg-surface/70 border-border hover:bg-surface hover:border-border/80"
                }`}
              >
                {/* Mini Thumbnail Preview */}
                <div className="relative aspect-[9/16] h-14 w-8 shrink-0 overflow-hidden rounded-md bg-brand-navy border border-border">
                  <video
                    playsInline
                    muted
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                  >
                    <source src={`/videos/${t.id}.mp4#t=1`} type="video/mp4" />
                  </video>
                  {isCurrent ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-brand-primary/40">
                      <span className="h-2.5 w-2.5 rounded-full bg-white animate-ping" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <svg className="h-3.5 w-3.5 text-white/90" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Text summary */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-xs text-foreground truncate">{t.author}</span>
                  </div>
                  <span className="block text-[10.5px] text-foreground-dim truncate">{t.location}</span>
                  <span className={`block text-[10px] font-semibold mt-0.5 truncate ${isCurrent ? "text-brand-orange" : "text-foreground-dim/70"}`}>
                    {isCurrent ? "▶ Now Playing" : "Click to view"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Floating Trust Badge */}
      <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 flex items-center gap-3 rounded-2xl border border-border bg-surface/95 px-4 py-3 shadow-xl backdrop-blur-md z-30">
        <div className="font-sans text-xl sm:text-2xl font-extrabold tabular-nums text-brand-primary">
          <CountUp value="5,187+" />
        </div>
        <div className="max-w-[7rem] text-[11px] font-medium leading-tight text-foreground-dim">
          transfers completed for Gujarat homeowners
        </div>
      </div>
    </div>
  );
}
