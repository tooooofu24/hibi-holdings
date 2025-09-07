"use client";

import { DarkMode } from "@/components/chakra-ui/color-mode";
import {
  Box,
  Button,
  Container,
  Drawer,
  Flex,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { VscClose } from "react-icons/vsc";
import { HeaderLink } from "./HeaderLink";

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
                    variant="plain"
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
                <HeaderLink href="#services" onClick={handleClose}>
                  事業内容
                </HeaderLink>
                <HeaderLink href="#about" onClick={handleClose}>
                  会社情報
                </HeaderLink>
                <HeaderLink href="/documents" onClick={handleClose}>
                  資料請求
                </HeaderLink>
                <HeaderLink href="/contact" onClick={handleClose}>
                  お問い合わせ
                </HeaderLink>
                <HeaderLink href="/privacy" onClick={handleClose}>
                  プライバシーポリシー
                </HeaderLink>
                <HeaderLink href="/terms" onClick={handleClose}>
                  利用規約
                </HeaderLink>
                <HeaderLink href="/policy-antisocial" onClick={handleClose}>
                  反社会的勢力排除基本方針
                </HeaderLink>
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </DarkMode>
  );
}
