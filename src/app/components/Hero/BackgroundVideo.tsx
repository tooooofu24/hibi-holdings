import { Box } from "@chakra-ui/react";

export function BackgroundVideo() {
  return (
    <Box position="absolute" inset="0" zIndex="0" overflow="hidden">
      {/* フォールバック用の黒背景（LCP改善） */}
      <Box
        position="absolute"
        inset="0"
        bg="black"
        filter={`brightness(0.4) contrast(1.1)`}
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: `brightness(0.4) contrast(1.1)`,
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
