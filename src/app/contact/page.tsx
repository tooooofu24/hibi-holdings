import { VStack } from "@chakra-ui/react";
import type { Metadata } from "next";
import { PageHeader } from "../components/PageHeader";
import { PageLayout } from "../components/PageLayout";
import { ContactForm } from "./components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "Hibi Holdingsへのお問い合わせ・ご相談はこちらから。ITコンサルティング、DX推進支援、システム開発などお気軽にご相談ください。",
  alternates: {
    canonical: "/contact",
  },
};

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
