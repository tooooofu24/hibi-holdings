import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ContactForm } from "./components/ContactForm";

export default function ContactPage() {
  return (
    <Box>
      <Header isLightMode />

      <Box pt="16">
        <Container maxW="5xl" py="36">
          <VStack gap="32" align="center">
            <VStack gap="4" textAlign="center">
              <Heading textStyle="3xl" fontWeight="700" color="gray.900">
                お問い合わせ
              </Heading>
              <Text color="gray.600" lineHeight="1.6">
                メールでのお問合せ・ご相談は下記のフォームにご記入下さい。内容を確認後、メールにてお返事させて頂きます。
              </Text>
            </VStack>

            <ContactForm />
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
