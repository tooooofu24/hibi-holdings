import { Container, Heading, VStack } from "@chakra-ui/react";
import { DecorationText } from "./DecorationText";

export function HeroTextDesktop() {
  return (
    <Container position="absolute" bottom="20" right="12">
      <VStack align="end" gap="4">
        <Heading as="h1" textStyle={{ base: "5xl", lg: "6xl" }} color="fg">
          <DecorationText color="blue.500">テクノロジー</DecorationText>
          {" × "}
          <DecorationText color="orange.500">経営実装</DecorationText>
        </Heading>
        <Heading textStyle={{ base: "5xl", lg: "6xl" }} color="fg">
          事業の&quot;次の一手&quot;を最短で
        </Heading>
      </VStack>
    </Container>
  );
}
