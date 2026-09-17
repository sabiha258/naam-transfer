import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-md flex-col items-center gap-4 px-6 py-24 text-center">
      <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">404</span>
      <h1 className="text-2xl font-extrabold text-foreground">This page didn&apos;t transfer.</h1>
      <p className="text-[14px] text-foreground-dim">
        The page you&apos;re looking for doesn&apos;t exist — but your name transfer still can.
      </p>
      <Button href="/">Back to home</Button>
    </section>
  );
}
