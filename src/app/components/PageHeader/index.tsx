import { Heading, Text, VStack } from "@chakra-ui/react";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <VStack gap="4" align="stretch">
      <Heading as="h1" textStyle={{ base: "2xl", md: "3xl" }}>
        {title}
      </Heading>
      {description && (
        <Text color="fg.muted" textStyle="lg">
          {description}
        </Text>
      )}
    </VStack>
  );
}
