import { DarkMode } from "@/components/chakra-ui/color-mode";
import { Card, IconButton, LinkBox, LinkOverlay } from "@chakra-ui/react";
import NextLink from "next/link";
import { ComponentProps } from "react";
import { HiArrowRight } from "react-icons/hi2";

interface ActionCardProps {
  href: ComponentProps<typeof NextLink>["href"];
  title: string;
  subtitle: string;
  bg: ComponentProps<typeof Card.Root>["bg"];
}

export function ActionCard({ href, title, subtitle, bg }: ActionCardProps) {
  return (
    <DarkMode>
      <LinkBox asChild>
        <Card.Root
          bg={bg}
          transition="all 0.3s ease"
          _hover={{
            transform: "translateY(-4px)",
          }}
          position="relative"
          h={{ base: "180px", md: "240px" }}
        >
          <Card.Body
            py={{ base: "8", md: "12" }}
            px={{ base: "8", md: "12" }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="left"
          >
            <Card.Title
              mb={{ base: "2", md: "4" }}
              textStyle={{ base: "2xl", md: "3xl" }}
            >
              <LinkOverlay asChild>
                <NextLink href={href}>{title}</NextLink>
              </LinkOverlay>
            </Card.Title>
            <Card.Description textStyle={{ base: "md", md: "lg" }}>
              {subtitle}
            </Card.Description>
          </Card.Body>

          <IconButton
            colorPalette="gray"
            position="absolute"
            bottom={{ base: "4", md: "8" }}
            right={{ base: "4", md: "8" }}
            size={{ base: "lg", md: "xl" }}
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
