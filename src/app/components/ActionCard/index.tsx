import { DarkMode } from "@/components/chakra-ui/color-mode";
import { Box, Card, IconButton, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";
import NextLink from "next/link";
import { ComponentProps } from "react";
import { HiArrowRight } from "react-icons/hi2";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

interface ActionCardProps {
  href: ComponentProps<typeof NextLink>["href"];
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export function ActionCard({
  href,
  title,
  subtitle,
  backgroundImage,
}: ActionCardProps) {
  return (
    <DarkMode>
      <LinkBox asChild>
        <Card.Root
          backgroundImage={`url(${backgroundImage})`}
          backgroundSize="cover"
          backgroundPosition="center"
          variant="subtle"
          transition="all 0.3s ease"
          _hover={{
            transform: "translateY(-4px)",
          }}
          position="relative"
          h={{ base: "180px", md: "240px" }}
        >
          {/* Dark overlay for text readability */}
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="blackAlpha.600"
            borderRadius="inherit"
          />

          <Card.Body
            py={{ base: "8", md: "12" }}
            px={{ base: "8", md: "12" }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="left"
            position="relative"
            zIndex="1"
          >
            <Card.Title
              mb={{ base: "2", md: "4" }}
              textStyle={{ base: "2xl", md: "3xl" }}
              className={montserrat.className}
              color="white"
            >
              <LinkOverlay asChild>
                <NextLink href={href}>{title}</NextLink>
              </LinkOverlay>
            </Card.Title>
            <Card.Description
              textStyle={{ base: "md", md: "lg" }}
              color="whiteAlpha.900"
            >
              {subtitle}
            </Card.Description>
          </Card.Body>

          <IconButton
            variant="ghost"
            colorPalette="whiteAlpha"
            position="absolute"
            bottom={{ base: "4", md: "8" }}
            right={{ base: "4", md: "8" }}
            size={{ base: "lg", md: "xl" }}
            rounded="full"
            aria-label={`${title}へ移動`}
            zIndex="1"
            color="white"
            bg="whiteAlpha.200"
            _hover={{ bg: "whiteAlpha.300" }}
          >
            <HiArrowRight size="20" />
          </IconButton>
        </Card.Root>
      </LinkBox>
    </DarkMode>
  );
}
