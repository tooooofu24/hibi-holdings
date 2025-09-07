import { Heading } from "@chakra-ui/react";

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <Heading
      as="h2"
      textStyle="xl"
      mb="8"
      letterSpacing="wider"
      fontWeight="medium"
    >
      {children}
    </Heading>
  );
}