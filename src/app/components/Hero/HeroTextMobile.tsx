import { Container, Heading, VStack } from "@chakra-ui/react";
import { DecorationText } from "./DecorationText";

export function HeroTextMobile() {
  return (
    <Container
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      w="full"
    >
      <VStack align="center" gap="16">
        <VStack align="center" gap="2">
          <Heading
            textStyle="5xl"
            color="fg"
            textAlign="center"
            lineHeight="1.2"
          >
            <DecorationText color="blue.500">テクノロジー</DecorationText>
            <br />
            ×
            <br />
            <DecorationText color="orange.500">経営実装</DecorationText>
          </Heading>
        </VStack>
        <Heading textStyle="lg" color="fg" textAlign="center">
          事業の次の一手を&quot;最短&quot;で形に
        </Heading>
      </VStack>
    </Container>
  );
}
