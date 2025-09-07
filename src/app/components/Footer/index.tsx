import { DarkMode } from "@/components/chakra-ui/color-mode";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FooterLink } from "./FooterLink";

export function Footer() {
  return (
    <DarkMode>
      <Box bg="bg.muted" py="20" role="contentinfo">
        <Container maxW="7xl" px={{ base: "6", md: "8" }}>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
            gap="12"
          >
            <VStack gap="6" align="start">
              <Heading
                as="h4"
                textStyle="xl"
                color="fg"
                fontWeight="700"
                letterSpacing="tight"
              >
                Hibi Holdings
              </Heading>
              <Text color="fg.muted" lineHeight="1.7" textStyle="sm">
                テクノロジーと経営実装をつなぎ
                <br />
                事業の&ldquo;次の一手&rdquo;を最短で形にします
              </Text>
            </VStack>

            <VStack gap="4" align="start">
              <Heading as="h4" textStyle="md" color="fg" fontWeight="600">
                サービス
              </Heading>
              <VStack gap="2" align="start">
                {[
                  "ITコンサルティング",
                  "DX推進支援",
                  "人材ソリューション",
                  "受託開発",
                  "VIPキャスティング",
                ].map((service) => (
                  <FooterLink
                    key={service}
                    href="#services"
                    ariaLabel={`${service}サービスの詳細へ移動`}
                  >
                    {service}
                  </FooterLink>
                ))}
              </VStack>
            </VStack>

            <VStack gap="4" align="start">
              <Heading as="h4" textStyle="md" color="fg" fontWeight="600">
                会社情報
              </Heading>
              <VStack gap="2" align="start">
                {[
                  "会社概要",
                  "お問い合わせ",
                  "プライバシーポリシー",
                  "利用規約",
                ].map((item) => (
                  <FooterLink
                    key={item}
                    href="#about"
                    ariaLabel={`${item}ページへ移動`}
                  >
                    {item}
                  </FooterLink>
                ))}
              </VStack>
            </VStack>

            <VStack gap="4" align="start">
              <Heading as="h4" textStyle="md" color="fg" fontWeight="600">
                お問い合わせ
              </Heading>
              <VStack gap="2" textStyle="sm" color="fg.muted" align="start">
                <Text>東京都港区麻布台3-4-4</Text>
                <Text>コンフォリア麻布台</Text>
                <FooterLink
                  href="mailto:contact@hibi-holdings.com"
                  ariaLabel="メールでお問い合わせ"
                >
                  contact@hibi-holdings.com
                </FooterLink>
              </VStack>
            </VStack>
          </Grid>

          <Box borderTop="1px solid" borderColor="border.muted" mt="16" pt="8">
            <Flex
              justify="space-between"
              align="center"
              direction={{ base: "column", md: "row" }}
              gap="4"
              textAlign={{ base: "center", md: "left" }}
            >
              <Text color="fg.subtle" textStyle="sm">
                © 2025 Hibi Holdings. All rights reserved.
              </Text>
              <Text color="fg.subtle" textStyle="sm">
                法人番号: 6010401190086
              </Text>
            </Flex>
          </Box>
        </Container>
      </Box>
    </DarkMode>
  );
}
