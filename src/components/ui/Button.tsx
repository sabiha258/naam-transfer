import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-accent text-white hover:brightness-110 shadow-sm shadow-accent/20",
  secondary:
    "bg-transparent border-[1.5px] border-primary text-primary hover:bg-primary hover:text-white",
  ghost: "bg-transparent text-foreground-dim hover:text-foreground",
};

const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold font-sans transition-colors";

export function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: {
  variant?: Variant;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & ComponentProps<"button">) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
