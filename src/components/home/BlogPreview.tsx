import { ViewTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { posts } from "@/lib/blog";
import { Reveal } from "@/components/motion/Reveal";

export function BlogPreview() {
  const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <section className="bg-surface-2 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Guides" title="Latest from the blog" />
          <Link href="/blog" className="text-sm font-semibold text-accent hover:underline">
            View all guides →
          </Link>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {latest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
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
                        sizes="(min-width: 640px) 33vw, 100vw"
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
      </div>
    </section>
  );
}
