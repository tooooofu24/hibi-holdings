import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import type { Metadata } from "next";
import { ContactCard } from "../components/ContactCard";
import { DocumentsCard } from "../components/DocumentsCard";
import { PageHeader } from "../components/PageHeader";
import { PageLayout } from "../components/PageLayout";
import { ServiceSection } from "./components/ServiceSection";

export const metadata: Metadata = {
  title: "事業内容",
  description:
    "ITコンサルティング、DX推進支援、人材ソリューション、受託開発、VIPキャスティングの5事業を展開。経営課題から技術実装まで一気通貫でサポートします。",
  alternates: {
    canonical: "/services",
  },
};

const services: Array<{
  title: string;
  description: string;
  features: string[];
  image: string;
}> = [
  {
    title: "ITコンサルティング",
    description:
      "経営課題から要件に落とし込み、PoC〜本番化まで伴走。クラウド/データ/AIの設計と実装で、投資対効果を最大化します。",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "IT戦略立案",
      "要件定義",
      "プロトタイピング",
      "クラウド設計",
      "PMO",
    ],
  },
  {
    title: "DX推進支援",
    description:
      "現場ヒアリングと業務設計を起点に、ツール導入だけで終わらない「定着」まで支援。小さく早く成果を出す進め方を徹底します。",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "業務可視化",
      "BPR",
      "SaaS選定",
      "RPA/生成AI導入",
      "データ可視化",
    ],
  },
  {
    title: "人材ソリューション",
    description:
      "即戦力のアサインから内製化設計まで。採用と育成を両輪で支え、プロジェクト成功確度を高めます。",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "IT人材アサイン",
      "採用支援",
      "ハイレベル副業/業務委託",
      "教育・内製化",
    ],
  },
  {
    title: "受託開発",
    description:
      "速く、壊れにくく、拡張しやすく。事業の「次の一手」を最短で形にします。",
    image:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Web/モバイル/AI・ML",
      "クラウド設計・セキュリティ",
      "上流〜グロースまで伴走",
    ],
  },
  {
    title: "VIPキャスティング",
    description:
      "最適なインフルエンサーと企業を、確実かつ透明に結ぶプラットフォーム。",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "詳細フィルタで最短発見",
      "案件管理・チャット機能",
      "法令遵守の運用設計",
    ],
  },
];

export default function ServicesPage() {
  return (
    <PageLayout>
      <VStack gap="24" align="stretch">
        <PageHeader
          title="事業内容"
          description="テクノロジーと経営実装をつなぎ、事業の「次の一手」を最短で形にします。"
        />

        <VStack gap={{ base: "8", md: "16" }} align="stretch">
          {services.map((service, index) => (
            <ServiceSection
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              image={service.image}
            />
          ))}
        </VStack>

        <Box pt="16">
          <VStack gap="16" align="stretch" maxW="4xl" mx="auto">
            <Box textAlign="center">
              <Heading as="h2" textStyle="xl" mb="4">
                お気軽にご相談ください
              </Heading>
              <Text textStyle="lg" color="fg.muted" maxW="2xl" mx="auto">
                プロジェクトの課題や要件について、まずはお話を聞かせてください。
                <br />
                最適なソリューションをご提案いたします。
              </Text>
            </Box>

            <VStack gap="6" align="stretch">
              <ContactCard />
              <DocumentsCard />
            </VStack>
          </VStack>
        </Box>
      </VStack>
    </PageLayout>
  );
}
