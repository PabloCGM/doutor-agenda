import { VariantProps } from "class-variance-authority";
import Link from "next/link";

import { Button, buttonVariants } from "./button";

interface ButtonLinkProps
  extends React.ComponentProps<typeof Link>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link href={href} {...props}>
        {children}
      </Link>
    </Button>
  );
}
