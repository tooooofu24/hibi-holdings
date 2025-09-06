"use client";

import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-noto-sans-jp)" },
        body: { value: "var(--font-noto-sans-jp)" },
      },
    },
  },
});
