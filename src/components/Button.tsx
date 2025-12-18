import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

export default function Button({
  href,
  children,
  variant = "primary",
  newTab,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  newTab?: boolean;
}) {
  const rel = newTab ? "noreferrer noopener" : undefined;
  const target = newTab ? "_blank" : undefined;

  return (
    <a className={`btn btn--${variant}`} href={href} rel={rel} target={target}>
      {children}
    </a>
  );
}
