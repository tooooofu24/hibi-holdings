"use client";

import { DarkMode } from "@/components/chakra-ui/color-mode";
import {
  Box,
  Button,
  Container,
  Drawer,
  Flex,
  Icon,
  Link,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { VscClose } from "react-icons/vsc";

interface HeaderDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function HeaderDrawer({ open, setOpen }: HeaderDrawerProps) {
  const handleClose = () => setOpen(false);

  return (
    <DarkMode>
      <Drawer.Root
        open={open}
        onOpenChange={(details) => setOpen(details.open)}
        size="full"
        placement="top"
        initialFocusEl={() => null}
      >
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content
            backgroundColor="rgba(0, 0, 0, 0.4)"
            backdropFilter="blur(15px)"
          >
            <Box position="fixed" top="0" left="0" w="full">
              <Container maxW="7xl" py={{ base: "4", md: "6" }}>
                <Flex justify="end">
                  <Button
                    colorPalette="gray"
                    variant="ghost"
                    size="xl"
                    aria-label="メニューを閉じる"
                    onClick={handleClose}
                  >
                    <Icon size="2xl">
                      <VscClose />
                    </Icon>
                  </Button>
                </Flex>
              </Container>
            </Box>
            <Drawer.Body
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <VStack align="center" gap="8">
                <Link
                  asChild
                  onClick={handleClose}
                  colorPalette="gray"
                  fontSize="lg"
                  _hover={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  <NextLink href="#services">事業内容</NextLink>
                </Link>
                <Link
                  asChild
                  colorPalette="gray"
                  onClick={handleClose}
                  fontSize="lg"
                  _hover={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  <NextLink href="#about">会社情報</NextLink>
                </Link>
                <Link
                  asChild
                  colorPalette="gray"
                  onClick={handleClose}
                  fontSize="lg"
                  _hover={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  <NextLink href="#contact">お問い合わせ</NextLink>
                </Link>
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </DarkMode>
  );
}
