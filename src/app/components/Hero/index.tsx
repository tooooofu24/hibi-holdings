import { DarkMode } from "@/components/chakra-ui/color-mode";
import { Box } from "@chakra-ui/react";
import { BackgroundVideo } from "./BackgroundVideo";
import { HeroTextDesktop } from "./HeroTextDesktop";
import { HeroTextMobile } from "./HeroTextMobile";

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
        <BackgroundVideo />

        {/* SP用 */}
        <Box display={{ base: "block", md: "none" }}>
          <HeroTextMobile />
        </Box>

        {/* PC用 */}
        <Box display={{ base: "none", md: "block" }}>
          <HeroTextDesktop />
        </Box>
      </Box>
    </DarkMode>
  );
}
