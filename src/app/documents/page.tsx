import { Box, Container, VStack } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageHeader } from "../components/PageHeader";
import { DocumentsForm } from "./components/DocumentsForm";

export const metadata: Metadata = {
  title: "資料請求",
  description:
    "Hibi Holdingsの会社資料をご請求いただけます。サービス詳細資料や会社案内資料をお送りいたします。",
};

export default function DocumentsPage() {
  return (
    <Box>
      <Header isLightMode />

      <Box pt="16">
        <Container
          maxW="5xl"
          py={{ base: "20", md: "36" }}
          px={{ base: "8", md: "12" }}
        >
          <VStack gap={{ base: "16", md: "24" }} align="stretch">
            <PageHeader
              title="資料請求"
              description="会社資料・サービス詳細資料をご請求いただけます。内容を確認後、メールにて資料をお送りさせていただきます。"
            />

            <DocumentsForm />
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
