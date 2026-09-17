import type { Metadata } from "next";
import { ViewTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Guides on electricity, gas, and municipal name transfer in Gujarat.",
};

export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <SectionHeading eyebrow="Guides" title="All guides" />
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.06}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_1px_2px_rgba(17,43,88,0.05)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-16px_rgba(17,43,88,0.3)]"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-2 border-b border-border/50">
                {post.image ? (
                  <ViewTransition name={`blog-image-${post.slug}`} share="morph">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      priority={post.slug === sorted.find((p) => p.image)?.slug}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </ViewTransition>
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-surface-2 font-sans text-sm font-bold text-foreground-dim/40">
                    Naam Transfer
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="font-mono text-[11px] uppercase tracking-wide text-foreground-dim">
                  {new Date(post.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
                </span>
                <h3 className="font-sans text-[15px] font-bold text-foreground">{post.title}</h3>
                <p className="text-[13px] text-foreground-dim">{post.dek}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
