import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "dark" | "outline" | "light" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

type Common = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  /* Shows an arrow that slides on hover. */
  arrow?: boolean;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
};

type AsButton = Common & Omit<ComponentProps<"button">, keyof Common> & { href?: undefined };
type AsLink = Common & Omit<ComponentProps<"a">, keyof Common> & { href: string };

export function buttonClasses({
  variant = "primary",
  size = "md",
  block,
  className,
}: Pick<Common, "variant" | "size" | "block" | "className">) {
  return cn("btn", `btn-${variant}`, size !== "md" && `btn-${size}`, block && "btn-block", className);
}

export function Button(props: AsButton | AsLink) {
  const { variant, size, block, arrow, icon, className, children, ...rest } = props;
  const classes = buttonClasses({ variant, size, block, className });
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {arrow ? <ArrowRight data-arrow aria-hidden /> : null}
    </>
  );

  if (typeof rest.href === "string") {
    const { href, ...anchor } = rest as Omit<AsLink, keyof Common>;
    const external = /^(https?:|tel:|mailto:)/.test(href);
    if (external) {
      return (
        <a href={href} className={classes} {...anchor}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchor}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...button } = rest as Omit<AsButton, keyof Common>;
  return (
    <button type={type} className={classes} {...button}>
      {content}
    </button>
  );
}
