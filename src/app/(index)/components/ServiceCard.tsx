import { Box, Heading, LinkBox, LinkOverlay } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

interface ServiceCardProps {
  title: string;
  image: string;
}

export function ServiceCard({ title, image }: ServiceCardProps) {
  return (
    <LinkBox
      position="relative"
      aspectRatio="1"
      overflow="hidden"
      cursor="pointer"
      transition="all 0.3s ease"
      _hover={{
        "& .service-overlay": {
          opacity: 1,
        },
      }}
    >
      <Image
        src={image}
        alt={title}
        fill
        style={{
          objectFit: "cover",
          filter: "grayscale(20%)",
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      <Box
        className="service-overlay"
        position="absolute"
        inset="0"
        bg="blackAlpha.700"
        display="flex"
        alignItems="center"
        justifyContent="center"
        opacity="0"
        transition="all 0.3s ease"
      >
        <Heading
          fontSize={{ base: "lg", md: "xl" }}
          color="white"
          textAlign="center"
          fontWeight="bold"
        >
          <LinkOverlay asChild>
            <NextLink href="/services">{title}</NextLink>
          </LinkOverlay>
        </Heading>
      </Box>
    </LinkBox>
  );
}
