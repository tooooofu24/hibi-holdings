import { Box } from "@chakra-ui/react";

interface BackgroundVideoProps {
  brightness?: number;
  contrast?: number;
}

export function BackgroundVideo({
  brightness = 0.4,
  contrast = 1.1,
}: BackgroundVideoProps) {
  return (
    <Box position="absolute" inset="0" zIndex="0" overflow="hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: `brightness(${brightness}) contrast(${contrast})`,
        }}
      >
        <source
          src="https://thoa3rokzlk4zux6.public.blob.vercel-storage.com/hero-background.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
}
