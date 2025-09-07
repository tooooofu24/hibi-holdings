import {
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";

interface ServiceSectionProps {
  title: string;
  description: string;
  features: string[];
  image: string;
}

export function ServiceSection({
  title,
  description,
  features,
  image,
}: ServiceSectionProps) {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      align="start"
      gap={{ base: "6", md: "12" }}
      py={{ base: "8", md: "12" }}
    >
      {/* 画像 */}
      <Box
        flex={{ base: "none", md: "0 0 auto" }}
        w={{ base: "full", md: "420px" }}
        order={{ base: 1, md: 1 }}
      >
        <Image
          src={image}
          alt={title}
          w="full"
          h={{ base: "240px", md: "320px" }}
          objectFit="cover"
          borderRadius={{ base: "md", md: "lg" }}
        />
      </Box>

      {/* コンテンツ */}
      <VStack
        flex="1"
        align="start"
        gap={{ base: "4", md: "6" }}
        order={{ base: 2, md: 2 }}
        px={{ base: "0", md: "4" }}
      >
        <Heading
          as="h3"
          textStyle={{ base: "xl", md: "2xl" }}
          letterSpacing="tight"
          lineHeight="shorter"
        >
          {title}
        </Heading>

        <Text
          color="fg.muted"
          lineHeight={{ base: "relaxed", md: "normal" }}
          fontSize={{ base: "sm", md: "md" }}
          letterSpacing="tight"
        >
          {description}
        </Text>

        <Box w="full">
          <Text
            fontSize="xs"
            fontWeight="medium"
            color="fg.subtle"
            mb={{ base: "2", md: "3" }}
            textTransform="uppercase"
            letterSpacing="wider"
          >
            主要サービス
          </Text>
          <HStack wrap="wrap" gap={{ base: "1.5", md: "2" }}>
            {features.map((feature, featureIndex) => (
              <Tag.Root
                key={featureIndex}
                size={{ base: "md", md: "lg" }}
                variant="outline"
              >
                <Tag.Label>{feature}</Tag.Label>
              </Tag.Root>
            ))}
          </HStack>
        </Box>
      </VStack>
    </Stack>
  );
}
