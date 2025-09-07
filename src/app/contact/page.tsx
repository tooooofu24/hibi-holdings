import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
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
          <VStack gap={{ base: "20", md: "32" }} align="center">
            <VStack gap="4" textAlign="center">
              <Heading
                textStyle={{ base: "2xl", md: "3xl" }}
                fontWeight="700"
                color="gray.900"
              >
                お問い合わせ
              </Heading>
              <Text
                color="gray.600"
                lineHeight="1.6"
                fontSize={{ base: "sm", md: "md" }}
                px={{ base: "2", md: "0" }}
              >
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
