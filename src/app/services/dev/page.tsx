import {
  Box,
  Button,
  Card,
  Grid,
  Heading,
  HStack,
  List,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  HiArrowRight,
  HiCog,
  HiGlobeAlt,
  HiShieldCheck,
  HiWrenchScrewdriver,
} from "react-icons/hi2";
import { PageLayout } from "../../components/PageLayout";
import { PageHeader } from "../../components/PageHeader";
import { StructuredData } from "../../components/StructuredData";
import {
  customDevelopmentServiceJsonLd,
  generateBreadcrumbJsonLd,
} from "../../../lib/jsonld";

export const metadata: Metadata = {
  title: "受託開発（システム開発）",
  description:
    "速く・堅牢に・拡張可能に。PoCから本番運用まで一気通貫でサポート。Web・モバイル・AI開発から、クラウド設計・セキュリティまで少数精鋭で対応。",
  alternates: {
    canonical: "/services/dev",
  },
};

const differentiators = [
  {
    icon: HiWrenchScrewdriver,
    title: "少数精鋭×実装力",
    description: "難度の高い要件でも品質と速度を両立。",
  },
  {
    icon: HiShieldCheck,
    title: "設計からセキュリティまで",
    description: "クラウド/ゼロトラスト/監視を含む全体設計。",
  },
  {
    icon: HiCog,
    title: "手戻り最小の進め方",
    description: "要件定義と短サイクル検証で無駄を削減。",
  },
  {
    icon: HiGlobeAlt,
    title: "グロース伴走",
    description: "リリース後の集客・分析・改善まで支援。",
  },
];

const serviceAreas = [
  "Webシステム",
  "モバイルアプリ",
  "AI・機械学習",
  "業務システム",
  "クラウドインフラ",
  "UI/UXデザイン",
];

const developmentSteps = [
  "ヒアリング",
  "企画",
  "要件定義",
  "設計",
  "開発",
  "テスト",
  "リリース",
  "保守・グロース",
];

const technologies = [
  "TypeScript/Go/Python",
  "Next.js",
  "React Native",
  "AWS/GCP/Azure",
  "IaC（Infrastructure as Code）",
  "E2E/負荷テスト",
];

const faqData = [
  {
    question: "開発期間の目安はどれくらいですか？",
    answer:
      "要件や規模により異なりますが、MVP版で2-3ヶ月、本格版で4-6ヶ月が目安です。PoCやプロトタイプであれば数週間での対応も可能です。",
  },
  {
    question: "要件が固まっていなくても相談できますか？",
    answer:
      "はい、むしろ要件整理から一緒に行うことで、より価値のあるシステムを構築できます。ヒアリングと企画段階から参画いたします。",
  },
  {
    question: "リリース後の保守体制はありますか？",
    answer:
      "運用保守からグロース支援まで対応しています。監視、バックアップ、セキュリティアップデート、機能追加など、継続的なサポートを提供します。",
  },
  {
    question: "秘密保持契約は締結できますか？",
    answer:
      "もちろん可能です。プロジェクト開始前にNDAを締結し、機密情報の適切な管理を徹底いたします。",
  },
];

export default function DevPage() {
  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "ホーム", url: "/" },
    { name: "事業内容", url: "/services" },
    { name: "受託開発", url: "/services/dev" },
  ]);

  return (
    <PageLayout>
      <StructuredData data={customDevelopmentServiceJsonLd} />
      <StructuredData data={breadcrumbs} />
      <VStack gap="24" align="stretch">
        {/* ヒーロー */}
        <Box>
          <PageHeader
            title="受託開発（システム開発）"
            description="速く・堅牢に・拡張可能に。価値あるプロダクトを最短で。"
          />
          <Text textStyle="lg" color="fg.muted" mt="6" maxW="4xl">
            経営と技術をつなぐ設計力で、PoCから本番運用まで一気通貫。短サイクルで検証し、手戻りを最小化します。
          </Text>
          <HStack gap="4" mt="8">
            <Button size="lg" asChild>
              <Link href="/contact">
                相談する
                <HiArrowRight />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/documents">
                資料請求
                <HiArrowRight />
              </Link>
            </Button>
          </HStack>
        </Box>

        {/* 差別化ポイント */}
        <Box>
          <Heading as="h2" textStyle="xl" mb="8" textAlign="center">
            差別化ポイント
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="6">
            {differentiators.map((item, index) => (
              <Card.Root key={index} variant="outline">
                <Card.Body>
                  <HStack align="start" gap="4">
                    <Box color="colorPalette.solid" mt="1">
                      <item.icon size="24" />
                    </Box>
                    <VStack align="start" gap="2" flex="1">
                      <Heading as="h3" textStyle="md">
                        {item.title}
                      </Heading>
                      <Text color="fg.muted">{item.description}</Text>
                    </VStack>
                  </HStack>
                </Card.Body>
              </Card.Root>
            ))}
          </Grid>
        </Box>

        {/* 対応領域 */}
        <Box>
          <Heading as="h2" textStyle="xl" mb="8" textAlign="center">
            対応領域
          </Heading>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            gap="4"
          >
            {serviceAreas.map((area, index) => (
              <Card.Root key={index} variant="subtle">
                <Card.Body textAlign="center">
                  <Text fontWeight="medium">{area}</Text>
                </Card.Body>
              </Card.Root>
            ))}
          </Grid>
        </Box>

        {/* 進め方 */}
        <Box>
          <Heading as="h2" textStyle="xl" mb="8" textAlign="center">
            開発の進め方
          </Heading>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            gap="6"
          >
            {developmentSteps.map((step, index) => (
              <VStack key={index} align="center" gap="3">
                <Box
                  w="12"
                  h="12"
                  bg="colorPalette.solid"
                  color="white"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontWeight="bold"
                >
                  {index + 1}
                </Box>
                <Text textAlign="center" fontWeight="medium">
                  {step}
                </Text>
              </VStack>
            ))}
          </Grid>
        </Box>

        {/* 技術と品質 */}
        <Box>
          <Heading as="h2" textStyle="xl" mb="8" textAlign="center">
            技術と品質
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="8">
            <Box>
              <Heading as="h3" textStyle="lg" mb="4">
                主要技術スタック
              </Heading>
              <List.Root variant="plain">
                {technologies.map((tech, index) => (
                  <List.Item key={index}>• {tech}</List.Item>
                ))}
              </List.Root>
            </Box>
            <Box>
              <Heading as="h3" textStyle="lg" mb="4">
                セキュリティ対応
              </Heading>
              <List.Root variant="plain">
                <List.Item>• CSP（Content Security Policy）</List.Item>
                <List.Item>• 依存脆弱性監査</List.Item>
                <List.Item>• 権限分離設計</List.Item>
                <List.Item>• 秘密管理（ENV/KMS）</List.Item>
              </List.Root>
            </Box>
          </Grid>
        </Box>

        {/* よくある質問 */}
        <Box>
          <Heading as="h2" textStyle="xl" mb="8" textAlign="center">
            よくある質問
          </Heading>
          <VStack gap="6" align="stretch">
            {faqData.map((faq, index) => (
              <Card.Root key={index} variant="outline">
                <Card.Body>
                  <VStack align="start" gap="3">
                    <Heading as="h3" textStyle="md" color="colorPalette.solid">
                      Q. {faq.question}
                    </Heading>
                    <Text color="fg.muted" lineHeight="tall">
                      A. {faq.answer}
                    </Text>
                  </VStack>
                </Card.Body>
              </Card.Root>
            ))}
          </VStack>
        </Box>

        {/* CTA */}
        <Box textAlign="center" pt="12">
          <VStack gap="6">
            <Heading as="h2" textStyle="xl">
              まずはお気軽にご相談ください
            </Heading>
            <Text textStyle="lg" color="fg.muted" maxW="2xl">
              プロジェクトの要件や課題について詳しくお聞かせください。
              最適な開発アプローチをご提案いたします。
            </Text>
            <Button size="lg" asChild>
              <Link href="/contact">
                無料相談を申し込む
                <HiArrowRight />
              </Link>
            </Button>
          </VStack>
        </Box>
      </VStack>
    </PageLayout>
  );
}
