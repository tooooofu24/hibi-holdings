import {
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <Box>
      <Header />
      <Hero />

      {/* Services Section - Grid-based like condense.jp */}
      <Box py={{ base: "20", md: "32" }} bg="gray.50" id="services">
        <Container maxW="7xl" px={{ base: "6", md: "8" }}>
          <VStack gap="20" align="start">
            <VStack gap="6" maxW="3xl" align="start">
              <Text
                fontSize="sm"
                fontWeight="600"
                color="gray.500"
                textTransform="uppercase"
                letterSpacing="wider"
                role="doc-subtitle"
              >
                Services
              </Text>
              <Heading
                as="h2"
                size={{ base: "4xl", md: "6xl" }}
                fontWeight="800"
                color="gray.900"
                lineHeight="1.1"
                letterSpacing="tight"
              >
                私たちのサービス
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.600"
                lineHeight="1.8"
              >
                企画から実装まで、ワンストップでお客様の課題を解決します。
              </Text>
            </VStack>

            <Grid
              templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                xl: "repeat(3, 1fr)",
              }}
              gap="8"
              role="list"
              aria-label="提供サービス一覧"
            >
              {[
                {
                  title: "ITコンサルティング",
                  description:
                    "経営課題から要件に落とし込み、PoC〜本番化まで伴走。クラウド/データ/AIの設計と実装で、投資対効果を最大化します。",
                  image:
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
                  altText:
                    "ITコンサルティングサービス - データ分析とクラウド技術",
                },
                {
                  title: "DX推進支援",
                  description:
                    '現場ヒアリングと業務設計を起点に、ツール導入だけで終わらない"定着"まで支援。小さく早く成果を出す進め方を徹底します。',
                  image:
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
                  altText: "DX推進支援サービス - デジタル化による業務改革",
                },
                {
                  title: "人材ソリューション",
                  description:
                    "即戦力のアサインから内製化設計まで。採用と育成を両輪で支え、プロジェクト成功確度を高めます。",
                  image:
                    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&auto=format",
                  altText:
                    "人材ソリューションサービス - チームワークと人材育成",
                },
                {
                  title: "受託開発",
                  description:
                    '速く、壊れにくく、拡張しやすく。事業の"次の一手"を最短で形にします。',
                  image:
                    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&auto=format",
                  altText:
                    "受託開発サービス - ソフトウェア開発とプログラミング",
                },
                {
                  title: "VIPキャスティング",
                  description:
                    "最適なインフルエンサーと企業を、確実かつ透明に結ぶプラットフォーム。",
                  image:
                    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&auto=format",
                  altText:
                    "VIPキャスティングサービス - インフルエンサーマーケティング",
                },
              ].map((service, index) => (
                <Card.Root
                  key={index}
                  size="lg"
                  variant="outline"
                  overflow="hidden"
                  _hover={{ transform: "translateY(-4px)" }}
                  transition="all 0.3s ease"
                  role="listitem"
                  aria-label={`${service.title}の詳細`}
                >
                  <Image
                    src={service.image}
                    alt={service.altText}
                    width={600}
                    height={240}
                    style={{
                      width: "100%",
                      height: "240px",
                      objectFit: "cover",
                      filter: "grayscale(30%)",
                    }}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Description>{service.description}</Card.Description>
                  </Card.Body>
                </Card.Root>
              ))}
            </Grid>
          </VStack>
        </Container>
      </Box>

      {/* About Section - Clean layout inspired by condense.jp */}
      <Box py={{ base: "20", md: "32" }} bg="white" id="about">
        <Container maxW="7xl" px={{ base: "6", md: "8" }}>
          <VStack gap="20" align="start">
            <VStack gap="6" maxW="3xl" align="start">
              <Text
                fontSize="sm"
                fontWeight="600"
                color="gray.500"
                textTransform="uppercase"
                letterSpacing="wider"
                role="doc-subtitle"
              >
                About
              </Text>
              <Heading
                as="h2"
                size={{ base: "4xl", md: "6xl" }}
                fontWeight="800"
                color="gray.900"
                lineHeight="1.1"
                letterSpacing="tight"
              >
                Hibi Holdings について
              </Heading>
            </VStack>

            <Grid
              templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
              gap="16"
              alignItems="start"
            >
              <VStack gap="10" align="start">
                <Box>
                  <Heading
                    as="h3"
                    size="2xl"
                    color="gray.900"
                    fontWeight="700"
                    mb="6"
                    lineHeight="1.2"
                  >
                    代表メッセージ
                  </Heading>
                  <Text color="gray.600" lineHeight="1.8" fontSize="lg">
                    私たちは、テクノロジーを「できる」に変える実装力で、お客様の競争力を磨き続けます。短期の成果と長期の基盤づくりを両立させる——それが私たちの仕事です。
                  </Text>
                  <Text color="gray.500" fontSize="md" mt="6" fontWeight="500">
                    日比 亜希子 代表取締役
                  </Text>
                </Box>

                <Box>
                  <Heading
                    as="h3"
                    size="2xl"
                    color="gray.900"
                    fontWeight="700"
                    mb="6"
                    lineHeight="1.2"
                  >
                    私たちのアプローチ
                  </Heading>
                  <Text color="gray.600" lineHeight="1.8" fontSize="lg">
                    お客様との信頼関係を何より大切にしています。御社固有の課題をしっかりとヒアリングし、長期的な視点で最適なソリューションをご提案します。
                  </Text>
                </Box>
              </VStack>

              <Box>
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Hibi Holdingsチーム - 協力してプロジェクトに取り組むメンバー"
                  width={800}
                  height={500}
                  style={{
                    borderRadius: "0.75rem",
                    width: "100%",
                    height: "500px",
                    objectFit: "cover",
                    filter: "grayscale(20%)",
                  }}
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </Box>
            </Grid>

            {/* Company Info Table */}
            <Box bg="gray.50" borderRadius="xl" p="10" w="100%">
              <Heading
                as="h3"
                size="2xl"
                color="gray.900"
                fontWeight="700"
                mb="8"
                lineHeight="1.2"
              >
                会社基本情報
              </Heading>
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                gap="6"
              >
                {[
                  {
                    label: "会社名",
                    value: "Ｈｉｂｉ Ｈｏｌｄｉｎｇｓ株式会社",
                  },
                  { label: "代表者", value: "代表取締役 日比 亜希子" },
                  { label: "設立", value: "2025年5月" },
                  { label: "資本金", value: "500万円" },
                  { label: "従業員数", value: "5名" },
                  { label: "法人番号", value: "6010401190086" },
                  {
                    label: "所在地",
                    value:
                      "〒106-0041\n東京都港区麻布台3丁目4番4号\nコンフォリア麻布台",
                  },
                  {
                    label: "事業内容",
                    value:
                      "ITコンサルティング／DX推進支援／人材ソリューション／受託開発／VIPキャスティング",
                  },
                ].map((item, index) => (
                  <Flex key={index} gap="4" align="start">
                    <Text
                      fontSize="sm"
                      fontWeight="600"
                      color="gray.500"
                      minW="20"
                      pt="1"
                    >
                      {item.label}
                    </Text>
                    <Text
                      color="gray.700"
                      lineHeight="1.6"
                      whiteSpace="pre-line"
                    >
                      {item.value}
                    </Text>
                  </Flex>
                ))}
              </Grid>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Footer - Minimal like condense.jp */}
      <Box bg="gray.900" color="white" py="20" role="contentinfo">
        <Container maxW="7xl" px={{ base: "6", md: "8" }}>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
            gap="12"
          >
            <VStack gap="6" align="start">
              <Heading
                as="h4"
                size="xl"
                color="white"
                fontWeight="700"
                letterSpacing="tight"
              >
                Hibi Holdings
              </Heading>
              <Text color="gray.400" lineHeight="1.7" fontSize="sm">
                テクノロジーと経営実装をつなぎ、事業の&ldquo;次の一手&rdquo;を最短で形にします。
              </Text>
            </VStack>

            <VStack gap="4" align="start">
              <Heading as="h4" size="md" color="white" fontWeight="600">
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
                  <Link
                    key={service}
                    href="#services"
                    color="gray.400"
                    _hover={{ color: "white" }}
                    fontSize="sm"
                    transition="color 0.2s"
                    aria-label={`${service}サービスの詳細へ移動`}
                  >
                    {service}
                  </Link>
                ))}
              </VStack>
            </VStack>

            <VStack gap="4" align="start">
              <Heading as="h4" size="md" color="white" fontWeight="600">
                会社情報
              </Heading>
              <VStack gap="2" align="start">
                {[
                  "会社概要",
                  "お問い合わせ",
                  "プライバシーポリシー",
                  "利用規約",
                ].map((item) => (
                  <Link
                    key={item}
                    href="#about"
                    color="gray.400"
                    _hover={{ color: "white" }}
                    fontSize="sm"
                    transition="color 0.2s"
                    aria-label={`${item}ページへ移動`}
                  >
                    {item}
                  </Link>
                ))}
              </VStack>
            </VStack>

            <VStack gap="4" align="start">
              <Heading as="h4" size="md" color="white" fontWeight="600">
                お問い合わせ
              </Heading>
              <VStack gap="2" fontSize="sm" color="gray.400" align="start">
                <Text>東京都港区麻布台3-4-4</Text>
                <Text>コンフォリア麻布台</Text>
                <Link
                  href="mailto:contact@hibi-holdings.com"
                  color="gray.400"
                  _hover={{ color: "white" }}
                  aria-label="メールでお問い合わせ"
                >
                  contact@hibi-holdings.com
                </Link>
              </VStack>
            </VStack>
          </Grid>

          <Box borderTop="1px solid" borderColor="gray.700" mt="16" pt="8">
            <Flex
              justify="space-between"
              align="center"
              direction={{ base: "column", md: "row" }}
              gap="4"
              textAlign={{ base: "center", md: "left" }}
            >
              <Text color="gray.500" fontSize="sm">
                © 2025 Hibi Holdings. All rights reserved.
              </Text>
              <Text color="gray.500" fontSize="sm">
                法人番号: 6010401190086
              </Text>
            </Flex>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
