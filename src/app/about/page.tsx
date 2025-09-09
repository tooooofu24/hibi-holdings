import { Box, DataList, Image, Text, Timeline, VStack } from "@chakra-ui/react";
import type { Metadata } from "next";
import { PageHeader } from "../components/PageHeader";
import { PageLayout } from "../components/PageLayout";
import { SectionTitle } from "./components/SectionTitle";
import { StructuredData } from "../components/StructuredData";
import { generateBreadcrumbJsonLd } from "../../lib/jsonld";

export const metadata: Metadata = {
  title: "会社情報",
  description:
    "Hibi Holdings株式会社の会社概要、代表メッセージ、沿革をご紹介。テクノロジーと経営実装をつなぎ、事業の次の一手を最短で形にする企業理念をお伝えします。",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "ホーム", url: "/" },
    { name: "会社情報", url: "/about" },
  ]);

  return (
    <PageLayout>
      <StructuredData data={breadcrumbs} />
      <VStack gap="24" align="stretch">
        <PageHeader
          title="会社情報"
          description="Hibi Holdings株式会社について"
        />

        <VStack gap="20" align="stretch">
          {/* MESSAGE */}
          <Box>
            <SectionTitle>代表メッセージ</SectionTitle>
            <Text textStyle="lg" lineHeight="tall" mb="6">
              私たちは、テクノロジーを「できる」に変える実装力で、お客様の競争力を磨き続けます。短期の成果と長期の基盤づくりを両立させる——それが私たちの仕事です。
            </Text>
            <Text textStyle="md" color="fg.muted" mb="8">
              代表取締役　日比 亜希子
            </Text>
          </Box>

          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop&auto=format&fm=webp&q=85"
            alt="代表メッセージ"
            borderRadius="lg"
            aspectRatio="16/9"
            objectFit="cover"
          />

          {/* OUTLINE */}
          <Box>
            <SectionTitle>会社概要</SectionTitle>
            <DataList.Root
              orientation="horizontal"
              size="lg"
              divideY="1px"
              maxW="4xl"
            >
              <DataList.Item pt="4">
                <DataList.ItemLabel>会社名</DataList.ItemLabel>
                <DataList.ItemValue>
                  Ｈｉｂｉ　Ｈｏｌｄｉｎｇｓ株式会社
                </DataList.ItemValue>
              </DataList.Item>
              <DataList.Item pt="4">
                <DataList.ItemLabel>代表者</DataList.ItemLabel>
                <DataList.ItemValue>代表取締役　日比 亜希子</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item pt="4">
                <DataList.ItemLabel>設立</DataList.ItemLabel>
                <DataList.ItemValue>2025年4月</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item pt="4">
                <DataList.ItemLabel>資本金</DataList.ItemLabel>
                <DataList.ItemValue>500万円</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item pt="4">
                <DataList.ItemLabel>所在地</DataList.ItemLabel>
                <DataList.ItemValue>
                  〒106-0041　東京都港区麻布台3丁目4番4号　コンフォリア麻布台
                </DataList.ItemValue>
              </DataList.Item>
              <DataList.Item pt="4">
                <DataList.ItemLabel>従業員数</DataList.ItemLabel>
                <DataList.ItemValue>5名</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item pt="4">
                <DataList.ItemLabel>法人番号</DataList.ItemLabel>
                <DataList.ItemValue>6010401190086</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item pt="4">
                <DataList.ItemLabel>事業内容</DataList.ItemLabel>
                <DataList.ItemValue>
                  ITコンサルティング／DX推進支援／人材ソリューション
                </DataList.ItemValue>
              </DataList.Item>
            </DataList.Root>
          </Box>

          {/* HISTORY */}
          <Box>
            <SectionTitle>沿革</SectionTitle>
            <Timeline.Root variant="subtle" size="md">
              <Timeline.Item>
                <Timeline.Connector>
                  <Timeline.Separator />
                  <Timeline.Indicator />
                </Timeline.Connector>
                <Timeline.Content>
                  <Timeline.Title>
                    Ｈｉｂｉ　Ｈｏｌｄｉｎｇｓ株式会社設立
                  </Timeline.Title>
                  <Timeline.Description>2025年4月</Timeline.Description>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline.Root>
          </Box>
        </VStack>
      </VStack>
    </PageLayout>
  );
}
