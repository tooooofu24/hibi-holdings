import { VStack } from "@chakra-ui/react";
import { PageHeader } from "../components/PageHeader";
import { PageLayout } from "../components/PageLayout";
import { ContactForm } from "./components/ContactForm";

export default function ContactPage() {
  return (
    <PageLayout>
      <VStack gap={{ base: "16", md: "24" }} align="stretch">
        <PageHeader
          title="お問い合わせ"
          description="お問合せ・ご相談は下記のフォームにご記入下さい。内容を確認後、メールにてお返事させて頂きます。"
        />

        <ContactForm />
      </VStack>
    </PageLayout>
  );
}
