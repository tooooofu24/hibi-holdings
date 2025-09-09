import { VStack } from "@chakra-ui/react";
import type { Metadata } from "next";
import { PageLayout } from "../components/PageLayout";
import { PageHeader } from "../components/PageHeader";
import { DocumentsForm } from "./components/DocumentsForm";

export const metadata: Metadata = {
  title: "資料請求",
  description:
    "Hibi Holdingsの会社資料・サービス詳細資料をご請求いただけます。ITコンサル・DX推進・システム開発などの詳しい情報をお送りいたします。",
  alternates: {
    canonical: "/documents",
  },
};

export default function DocumentsPage() {
  return (
    <PageLayout>
      <VStack gap={{ base: "16", md: "24" }} align="stretch">
        <PageHeader
          title="資料請求"
          description="会社資料・サービス詳細資料をご請求いただけます。内容を確認後、メールにて資料をお送りさせていただきます。"
        />

        <DocumentsForm />
      </VStack>
    </PageLayout>
  );
}
