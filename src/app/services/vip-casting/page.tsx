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
  HiChartBar,
  HiChatBubbleLeft,
  HiMagnifyingGlass,
  HiShieldCheck,
} from "react-icons/hi2";
import { PageLayout } from "../../components/PageLayout";
import { PageHeader } from "../../components/PageHeader";

export const metadata: Metadata = {
  title: "VIPキャスティング | Hibi Holdings",
  description:
    "Hibi HoldingsのVIPキャスティングサービス。企業とインフルエンサーを最短距離で結ぶ、透明なマッチングプラットフォーム。案件管理も効果把握も、これ一つ。",
};

const valueProps = [
  {
    icon: HiMagnifyingGlass,
    title: "最適発見",
    description:
      "詳細フィルタで候補を高速抽出（ジャンル・地域・フォロワー等）。",
  },
  {
    icon: HiChatBubbleLeft,
    title: "運用一元化",
    description: "募集〜交渉〜投稿確認まで、案件管理とチャットで完結。",
  },
  {
    icon: HiChartBar,
    title: "可視化",
    description: "到達/応募/進行状況をダッシュボードで把握。",
  },
  {
    icon: HiShieldCheck,
    title: "コンプライアンス",
    description: "広告表示・タグ付け・記録を標準化。",
  },
];

const companyFeatures = [
  "案件作成",
  "スカウト",
  "応募管理",
  "チャット",
  "ファイル共有",
  "ダッシュボード",
];

const creatorFeatures = [
  "プロフィール管理",
  "案件応募",
  "メッセージ機能",
  "投稿実績管理",
  "収益管理",
  "レポート機能",
];

const processSteps = [
  "アカウント登録",
  "案件掲載/検索",
  "マッチング・交渉",
  "契約・実施",
  "効果確認",
];

const faqData = [
  {
    question: "成果は保証されますか？",
    answer:
      "インフルエンサーマーケティングの性質上、成果の保証は困難ですが、過去の実績データに基づいた効果予測や、最適なクリエイター選定支援を通じて成功確度を高めます。",
  },
  {
    question: "最低利用期間はありますか？",
    answer:
      "基本的に最低利用期間の設定はございません。案件単位でのご利用が可能です。継続的にご利用いただく場合は、より優遇された条件をご提案いたします。",
  },
  {
    question: "契約の流れを教えてください",
    answer:
      "まずは資料請求または個別相談から始まります。要件をお伺いした後、利用規約への同意、アカウント作成、案件掲載という流れになります。",
  },
  {
    question: "法令遵守はどのように担保していますか？",
    answer:
      "ステルスマーケティング規制に対応し、#PR等の広告明示、依頼主名・提供条件の表示を徹底。プラットフォーム上で自動チェック機能も提供しています。",
  },
];

export default function VipCastingPage() {
  return (
    <PageLayout>
      <VStack gap="24" align="stretch">
        {/* ヒーロー */}
        <Box>
          <PageHeader
            title="VIPキャスティング"
            description="企業とインフルエンサーを「最短距離」で結ぶ、透明なマッチング。"
          />
          <Text textStyle="lg" color="fg.muted" mt="6" maxW="4xl">
            詳細フィルタと使いやすい案件管理で、PRの質とスピードを引き上げます。法令遵守の運用で安心して施策を進められます。
          </Text>
          <HStack gap="4" mt="8">
            <Button size="lg" asChild>
              <Link href="/documents">
                資料請求
                <HiArrowRight />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                お問い合わせ
                <HiArrowRight />
              </Link>
            </Button>
          </HStack>
        </Box>

        {/* 提供価値 */}
        <Box>
          <Heading as="h2" textStyle="xl" mb="8" textAlign="center">
            提供価値
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="6">
            {valueProps.map((item, index) => (
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

        {/* 主な機能 */}
        <Box>
          <Heading as="h2" textStyle="xl" mb="8" textAlign="center">
            主な機能
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="8">
            <Card.Root variant="subtle">
              <Card.Header>
                <Card.Title>企業向け機能</Card.Title>
              </Card.Header>
              <Card.Body>
                <Grid templateColumns="repeat(2, 1fr)" gap="3">
                  {companyFeatures.map((feature, index) => (
                    <Text key={index} textStyle="sm">
                      • {feature}
                    </Text>
                  ))}
                </Grid>
              </Card.Body>
            </Card.Root>

            <Card.Root variant="subtle">
              <Card.Header>
                <Card.Title>クリエイター向け機能</Card.Title>
              </Card.Header>
              <Card.Body>
                <Grid templateColumns="repeat(2, 1fr)" gap="3">
                  {creatorFeatures.map((feature, index) => (
                    <Text key={index} textStyle="sm">
                      • {feature}
                    </Text>
                  ))}
                </Grid>
              </Card.Body>
            </Card.Root>
          </Grid>
        </Box>

        {/* 料金の考え方 */}
        <Box>
          <Heading as="h2" textStyle="xl" mb="8" textAlign="center">
            料金の考え方
          </Heading>
          <Card.Root variant="outline" maxW="4xl" mx="auto">
            <Card.Body textAlign="center">
              <VStack gap="4">
                <Heading as="h3" textStyle="lg">
                  アカウント作成：無料
                </Heading>
                <Text color="fg.muted" lineHeight="tall">
                  案件実施時に所定手数料をいただきます。
                  <br />
                  詳細な料金体系については、お問い合わせ時にご案内いたします。
                </Text>
                <Button variant="outline" asChild>
                  <Link href="/contact">料金について相談する</Link>
                </Button>
              </VStack>
            </Card.Body>
          </Card.Root>
        </Box>

        {/* 利用の流れ */}
        <Box>
          <Heading as="h2" textStyle="xl" mb="8" textAlign="center">
            利用の流れ
          </Heading>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }}
            gap="6"
            maxW="6xl"
            mx="auto"
          >
            {processSteps.map((step, index) => (
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
                  fontSize="lg"
                >
                  {index + 1}
                </Box>
                <Text textAlign="center" fontWeight="medium" fontSize="sm">
                  {step}
                </Text>
              </VStack>
            ))}
          </Grid>
        </Box>

        {/* コンプライアンス対応 */}
        <Box>
          <Heading as="h2" textStyle="xl" mb="8" textAlign="center">
            法令遵守への取り組み
          </Heading>
          <Card.Root variant="outline" maxW="4xl" mx="auto">
            <Card.Body>
              <VStack align="start" gap="4">
                <Heading as="h3" textStyle="lg" color="colorPalette.solid">
                  ステルスマーケティング規制への対応
                </Heading>
                <List.Root variant="plain">
                  <List.Item>• #PR等の広告明示の自動チェック機能</List.Item>
                  <List.Item>• 依頼主名・提供条件の表示方針を明文化</List.Item>
                  <List.Item>• 投稿内容の記録・証跡管理</List.Item>
                  <List.Item>• 表示ルール違反時の迅速な対応体制</List.Item>
                </List.Root>
              </VStack>
            </Card.Body>
          </Card.Root>
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
              VIPキャスティングを始めませんか？
            </Heading>
            <Text textStyle="lg" color="fg.muted" maxW="2xl">
              まずは資料をご覧いただき、貴社のマーケティング課題についてお聞かせください。
              最適なご提案をいたします。
            </Text>
            <Button size="lg" asChild>
              <Link href="/documents">
                資料請求
                <HiArrowRight />
              </Link>
            </Button>
          </VStack>
        </Box>
      </VStack>
    </PageLayout>
  );
}
