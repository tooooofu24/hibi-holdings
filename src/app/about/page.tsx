import { Box, Container, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageHeader } from "../components/PageHeader";

export const metadata: Metadata = {
  title: "会社情報 | Hibi Holdings",
  description:
    "Hibi Holdings株式会社の会社情報です。代表メッセージ、会社概要、沿革をご紹介いたします。",
};

export default function AboutPage() {
  return (
    <Box>
      <Header isLightMode />

      <Box pt="8">
        <Container
          maxW="4xl"
          py={{ base: "20", md: "36" }}
          px={{ base: "8", md: "12" }}
        >
          <VStack gap="24" align="stretch">
            <PageHeader title="ABOUT" description="会社情報" />

            <VStack gap="20" align="stretch">
              {/* MESSAGE */}
              <Box>
                <Heading 
                  as="h2" 
                  textStyle="xl" 
                  mb="8" 
                  letterSpacing="wider"
                  fontWeight="medium"
                >
                  MESSAGE
                </Heading>
                <Text textStyle="lg" lineHeight="tall" mb="6">
                  私たちは、テクノロジーを「できる」に変える実装力で、お客様の競争力を磨き続けます。短期の成果と長期の基盤づくりを両立させる——それが私たちの仕事です。
                </Text>
                <Text textStyle="md" color="fg.muted">
                  代表取締役　日比 亜希子
                </Text>
              </Box>

              {/* OUTLINE */}
              <Box>
                <Heading 
                  as="h2" 
                  textStyle="xl" 
                  mb="8" 
                  letterSpacing="wider"
                  fontWeight="medium"
                >
                  OUTLINE
                </Heading>
                <VStack gap="3" align="stretch">
                  <HStack
                    justify="space-between"
                    align="flex-start"
                    py="4"
                    borderBottom="1px solid"
                    borderColor="border.muted"
                  >
                    <Text fontWeight="medium" minW="120px" color="fg.muted" textStyle="sm">
                      会社名
                    </Text>
                    <Text flex="1" textAlign="right">
                      Ｈｉｂｉ　Ｈｏｌｄｉｎｇｓ株式会社
                    </Text>
                  </HStack>
                  <HStack
                    justify="space-between"
                    align="flex-start"
                    py="4"
                    borderBottom="1px solid"
                    borderColor="border.muted"
                  >
                    <Text fontWeight="medium" minW="120px" color="fg.muted" textStyle="sm">
                      代表者
                    </Text>
                    <Text flex="1" textAlign="right">
                      代表取締役　日比 亜希子
                    </Text>
                  </HStack>
                  <HStack
                    justify="space-between"
                    align="flex-start"
                    py="4"
                    borderBottom="1px solid"
                    borderColor="border.muted"
                  >
                    <Text fontWeight="medium" minW="120px" color="fg.muted" textStyle="sm">
                      設立
                    </Text>
                    <Text flex="1" textAlign="right">
                      2025年5月
                    </Text>
                  </HStack>
                  <HStack
                    justify="space-between"
                    align="flex-start"
                    py="4"
                    borderBottom="1px solid"
                    borderColor="border.muted"
                  >
                    <Text fontWeight="medium" minW="120px" color="fg.muted" textStyle="sm">
                      資本金
                    </Text>
                    <Text flex="1" textAlign="right">
                      500万円
                    </Text>
                  </HStack>
                  <HStack
                    justify="space-between"
                    align="flex-start"
                    py="4"
                    borderBottom="1px solid"
                    borderColor="border.muted"
                  >
                    <Text fontWeight="medium" minW="120px" color="fg.muted" textStyle="sm">
                      所在地
                    </Text>
                    <Text flex="1" textAlign="right">
                      〒106-0041　東京都港区麻布台3丁目4番4号　コンフォリア麻布台
                    </Text>
                  </HStack>
                  <HStack
                    justify="space-between"
                    align="flex-start"
                    py="4"
                    borderBottom="1px solid"
                    borderColor="border.muted"
                  >
                    <Text fontWeight="medium" minW="120px" color="fg.muted" textStyle="sm">
                      従業員数
                    </Text>
                    <Text flex="1" textAlign="right">
                      5名
                    </Text>
                  </HStack>
                  <HStack
                    justify="space-between"
                    align="flex-start"
                    py="4"
                    borderBottom="1px solid"
                    borderColor="border.muted"
                  >
                    <Text fontWeight="medium" minW="120px" color="fg.muted" textStyle="sm">
                      法人番号
                    </Text>
                    <Text flex="1" textAlign="right">
                      6010401190086
                    </Text>
                  </HStack>
                  <HStack
                    justify="space-between"
                    align="flex-start"
                    py="4"
                    borderBottom="1px solid"
                    borderColor="border.muted"
                  >
                    <Text fontWeight="medium" minW="120px" color="fg.muted" textStyle="sm">
                      事業内容
                    </Text>
                    <Text flex="1" textAlign="right">
                      ITコンサルティング／DX推進支援／人材ソリューション
                    </Text>
                  </HStack>
                </VStack>
              </Box>

              {/* HISTORY */}
              <Box>
                <Heading 
                  as="h2" 
                  textStyle="xl" 
                  mb="8" 
                  letterSpacing="wider"
                  fontWeight="medium"
                >
                  HISTORY
                </Heading>
                <VStack gap="3" align="stretch">
                  <HStack
                    align="flex-start"
                    py="4"
                    borderBottom="1px solid"
                    borderColor="border.muted"
                  >
                    <Text fontWeight="medium" minW="100px" color="fg.muted" textStyle="sm">
                      2025年5月
                    </Text>
                    <Text flex="1">
                      Ｈｉｂｉ　Ｈｏｌｄｉｎｇｓ株式会社設立
                    </Text>
                  </HStack>
                </VStack>
              </Box>
            </VStack>
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}