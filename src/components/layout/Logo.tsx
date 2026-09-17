import Link from "next/link";
import Image from "next/image";

const ASPECT = 1569 / 749;

export function Logo({
  inverted = false,
  height = 40,
  showTagline = true,
  taglineSize = "text-[11px]",
}: {
  inverted?: boolean;
  height?: number;
  showTagline?: boolean;
  taglineSize?: string;
}) {
  return (
    <Link href="/" className="inline-flex flex-col items-center justify-center text-center shrink-0 group">
      <Image
        src={inverted ? "/brand/logo-white.png" : "/brand/logo.png"}
        alt="Naam Transfer"
        width={Math.round(height * ASPECT)}
        height={height}
        priority
        className="h-auto w-auto"
        style={{ height, width: "auto" }}
      />
      {showTagline && (
        <span className={`mt-0.5 font-bold tracking-wide text-brand-orange ${taglineSize}`}>
          easy ho gaya
        </span>
      )}
    </Link>
  );
}
