"use client";

import { DarkMode } from "@/components/chakra-ui/color-mode";
import {
  Box,
  Button,
  Container,
  Drawer,
  Flex,
  Icon,
  Separator,
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
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <VStack gap="8" align="center">
                <HeaderLink href="/services" onClick={handleClose}>
                  事業内容
                </HeaderLink>
                <HeaderLink href="/about" onClick={handleClose}>
                  会社情報
                </HeaderLink>
                <HeaderLink href="/documents" onClick={handleClose}>
                  資料請求
                </HeaderLink>
                <HeaderLink href="/contact" onClick={handleClose}>
                  お問い合わせ
                </HeaderLink>
                <Separator borderColor="border.inverted" w="full" size="xs" />
                <HeaderLink href="/terms" onClick={handleClose}>
                  利用規約
                </HeaderLink>
                <HeaderLink href="/privacy" onClick={handleClose}>
                  プライバシーポリシー
                </HeaderLink>
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </DarkMode>
  );
}
