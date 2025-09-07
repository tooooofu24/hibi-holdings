"use client";

import { Box, Button, Container, Flex, Heading, Icon } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";
import NextLink from "next/link";
import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { HeaderDrawer } from "./HeaderDrawer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

interface HeaderProps {
  isLightMode?: boolean;
}

export function Header({ isLightMode = true }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="sticky"
        role="navigation"
        aria-label="メインナビゲーション"
        bg="transparent"
      >
        <Container
          maxW="7xl"
          pl={{ base: "6", md: "8" }}
          py={{ base: "4", md: "6" }}
          className={isLightMode ? "light" : "dark"}
        >
          <Flex align="center" justify="space-between">
            <NextLink href="/">
              <Heading
                size="3xl"
                letterSpacing="tight"
                role="banner"
                className={montserrat.className}
                color="fg"
                transition="color 0.3s ease"
              >
                Hibi Holdings
              </Heading>
            </NextLink>
            <Button
              colorPalette="gray"
              variant="ghost"
              size="xl"
              aria-label="メニューを開く"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <Icon size="2xl" transition="color 0.3s ease">
                <VscMenu />
              </Icon>
            </Button>
          </Flex>
        </Container>
      </Box>
      <HeaderDrawer open={drawerOpen} setOpen={setDrawerOpen} />
    </>
  );
}
