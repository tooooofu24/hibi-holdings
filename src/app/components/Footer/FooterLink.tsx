import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import type { ComponentProps } from "react";

interface FooterLinkProps {
  href: ComponentProps<typeof NextLink>["href"];
  children: React.ReactNode;
  ariaLabel?: string;
}

export function FooterLink({ href, children, ariaLabel }: FooterLinkProps) {
  return (
    <Link
      color="fg.muted"
      _hover={{ color: "fg" }}
      textStyle="sm"
      transition="color 0.2s"
      aria-label={ariaLabel}
      asChild
    >
      <NextLink href={href}>{children}</NextLink>
    </Link>
  );
}
