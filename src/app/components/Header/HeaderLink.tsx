import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import type { ComponentProps } from "react";

interface HeaderLinkProps {
  href: ComponentProps<typeof NextLink>["href"];
  children: React.ReactNode;
  onClick?: () => void;
}

export function HeaderLink({ href, children, onClick }: HeaderLinkProps) {
  return (
    <Link asChild colorPalette="gray" fontSize="lg" onClick={onClick}>
      <NextLink href={href}>{children}</NextLink>
    </Link>
  );
}
