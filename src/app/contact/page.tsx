import { Box, Container, VStack } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageHeader } from "../components/PageHeader";
import { ContactForm } from "./components/ContactForm";

export default function ContactPage() {
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
              title="お問い合わせ"
              description="お問合せ・ご相談は下記のフォームにご記入下さい。内容を確認後、メールにてお返事させて頂きます。"
            />

            <ContactForm />
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
