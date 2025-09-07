import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MaterialsForm } from "./components/MaterialsForm";

export const metadata: Metadata = {
  title: "資料請求",
  description:
    "Hibi Holdingsの会社資料をご請求いただけます。サービス詳細資料や会社案内資料をお送りいたします。",
};

export default function MaterialsPage() {
  return (
    <Box>
      <Header isLightMode />

      <Box pt="16">
        <Container
          maxW="5xl"
          py={{ base: "20", md: "36" }}
          px={{ base: "8", md: "12" }}
        >
          <VStack gap={{ base: "20", md: "32" }} align="center">
            <VStack gap="4" textAlign="center">
              <Heading
                textStyle={{ base: "2xl", md: "3xl" }}
                fontWeight="700"
                color="gray.900"
              >
                資料請求
              </Heading>
              <Text
                color="gray.600"
                lineHeight="1.6"
                fontSize={{ base: "sm", md: "md" }}
                px={{ base: "2", md: "0" }}
              >
                会社資料・サービス詳細資料をご請求いただけます。内容を確認後、メールにて資料をお送りさせていただきます。
              </Text>
            </VStack>

            <MaterialsForm />
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
