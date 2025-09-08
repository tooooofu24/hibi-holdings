import { DarkMode } from "@/components/chakra-ui/color-mode";
import { Card, IconButton, LinkBox, LinkOverlay } from "@chakra-ui/react";
import NextLink from "next/link";
import { ComponentProps } from "react";
import { HiArrowRight } from "react-icons/hi2";

interface ActionCardProps {
  href: ComponentProps<typeof NextLink>["href"];
  title: string;
  subtitle: string;
}

export function ActionCard({ href, title, subtitle }: ActionCardProps) {
  return (
    <DarkMode>
      <LinkBox asChild>
        <Card.Root
          bg="bg.info"
          transition="all 0.3s ease"
          _hover={{
            transform: "translateY(-4px)",
          }}
          position="relative"
        >
          <Card.Body py="12" px="12">
            <Card.Title mb="4" textStyle="3xl">
              <LinkOverlay asChild>
                <NextLink href={href}>{title}</NextLink>
              </LinkOverlay>
            </Card.Title>
            <Card.Description textStyle="lg">{subtitle}</Card.Description>
          </Card.Body>

          <IconButton
            colorPalette="gray"
            position="absolute"
            bottom="8"
            right="8"
            size="xl"
            rounded="full"
            aria-label={`${title}へ移動`}
          >
            <HiArrowRight size="20" />
          </IconButton>
        </Card.Root>
      </LinkBox>
    </DarkMode>
  );
}
