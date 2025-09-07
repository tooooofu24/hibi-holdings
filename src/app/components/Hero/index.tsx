import { DarkMode } from "@/components/chakra-ui/color-mode";
import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import { BackgroundVideo } from "./BackgroundVideo";
import { DecorationText } from "./DecorationText";

export function Hero() {
  return (
    <DarkMode>
      <Box
        position="relative"
        height="100vh"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        layerStyle="fill.solid"
      >
        {/* Background Video */}
        <BackgroundVideo />

        <Container position="absolute" bottom="20" right="12">
          <VStack align="end">
            <Heading textStyle="6xl" color="fg">
              <DecorationText color="blue.500">テクノロジー</DecorationText>
              {" × "}
              <DecorationText color="orange.500">経営実装</DecorationText>
            </Heading>
            <Heading textStyle="6xl" color="fg">
              事業の次の一手を最短で形に
            </Heading>
          </VStack>
        </Container>
      </Box>
    </DarkMode>
  );
}
