import { Text } from "@chakra-ui/react";
import type { ComponentProps } from "react";

interface DecorationTextProps {
  children: React.ReactNode;
  color: ComponentProps<typeof Text>["color"];
}

export function DecorationText({ children, color }: DecorationTextProps) {
  return (
    <Text
      as="span"
      position="relative"
      zIndex={1}
      _after={{
        content: "''",
        width: "full",
        height: "25%",
        position: "absolute",
        bottom: 2,
        left: 0,
        bg: color,
        zIndex: -1,
      }}
    >
      {children}
    </Text>
  );
}
