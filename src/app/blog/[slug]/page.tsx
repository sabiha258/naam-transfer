import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ViewTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { posts } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.dek };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Link href="/blog" className="text-sm font-semibold text-accent hover:underline">
        ← All guides
      </Link>
      <span className="mt-6 block font-mono text-[11px] uppercase tracking-wide text-foreground-dim">
        {new Date(post.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
      </span>
      <h1 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        {post.title}
      </h1>
      <p className="mt-4 text-[15px] text-foreground-dim">{post.dek}</p>
      {post.image ? (
        <ViewTransition name={`blog-image-${post.slug}`} share="morph">
          <div className="relative mt-8 aspect-[2/1] w-full overflow-hidden rounded-2xl">
            <Image src={post.image} alt="" fill sizes="672px" className="object-cover" priority />
          </div>
        </ViewTransition>
      ) : null}
      <div className="mt-10 flex flex-col gap-8">
        {post.sections.map((section, i) => (
          <Reveal key={section.heading} delay={i * 0.08}>
            <h2 className="font-sans text-xl font-bold text-foreground">{section.heading}</h2>
            <div className="mt-3 flex flex-col gap-3">
              {section.paragraphs.map((paragraph, j) => (
                <p key={j} className="text-[15px] leading-relaxed text-foreground-dim">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 rounded-2xl border border-border bg-surface-2 p-6">
        <h3 className="font-sans text-sm font-bold text-foreground">Ready to start yours?</h3>
        <p className="mt-2 text-[13.5px] text-foreground-dim">
          We handle the documentation, submission, and follow-up end to end.
        </p>
        <Button href="/book-service" className="mt-4">
          Start My Name Transfer
        </Button>
      </Reveal>
    </article>
  );
}
