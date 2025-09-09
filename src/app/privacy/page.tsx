import { Alert, Box, Heading, Text, VStack } from "@chakra-ui/react";
import type { Metadata } from "next";
import { PageLayout } from "../components/PageLayout";
import { PageHeader } from "../components/PageHeader";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "Hibi Holdings株式会社の個人情報保護方針。お客様の個人情報の収集・利用・管理について個人情報保護法に基づき適切に取り扱います。",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <PageLayout>
      <VStack gap="12" align="stretch">
        <VStack gap="4" align="stretch">
          <PageHeader title="プライバシーポリシー" />
          <Text color="fg.muted" textStyle="sm">
            最終更新日：2025年9月8日
          </Text>
        </VStack>

        <VStack gap="8" align="stretch">
          <Box>
            <Heading as="h2" textStyle="xl" mb="4">
              1. 個人情報の定義
            </Heading>
            <Text>
              本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法第2条第1項に定義される個人情報を指し、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含む）を指します。
            </Text>
          </Box>

          <Box>
            <Heading as="h2" textStyle="xl" mb="4">
              2. 個人情報の収集
            </Heading>
            <Text mb="4">
              当社は、以下の場合に個人情報を収集することがあります：
            </Text>
            <Box as="ul" pl="6">
              <li>お問い合わせフォームからのご連絡時</li>
              <li>資料請求をいただいた場合</li>
              <li>サービスのお申込み時</li>
              <li>セミナー等のイベント参加時</li>
            </Box>
          </Box>

          <Box>
            <Heading as="h2" textStyle="xl" mb="4">
              3. 個人情報の利用目的
            </Heading>
            <Text mb="4">
              当社は、収集した個人情報を以下の目的で利用いたします：
            </Text>
            <Box as="ul" pl="6">
              <li>お客様からのお問い合わせへの対応</li>
              <li>資料の送付</li>
              <li>サービスの提供および運営</li>
              <li>セミナー等のイベントのご案内</li>
              <li>当社サービスに関する情報提供</li>
            </Box>
          </Box>

          <Box>
            <Heading as="h2" textStyle="xl" mb="4">
              4. 個人情報の第三者提供
            </Heading>
            <Text>
              当社は、法令に定める場合を除き、お客様の同意を得ることなく、収集した個人情報を第三者に提供することはありません。
            </Text>
          </Box>

          <Box>
            <Heading as="h2" textStyle="xl" mb="4">
              5. 個人情報の安全管理
            </Heading>
            <Text>
              当社は、個人情報の漏えい、滅失または毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
            </Text>
          </Box>

          <Box>
            <Heading as="h2" textStyle="xl" mb="4">
              6. お問い合わせ窓口
            </Heading>
            <Text mb="6">
              個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。
            </Text>
            <Alert.Root colorPalette="gray" size="lg">
              <Alert.Content>
                <Alert.Title>Hibi Holdings株式会社</Alert.Title>
                <Alert.Description>
                  〒106-0041 東京都港区麻布台3丁目4番4号 コンフォリア麻布台
                  <br />
                  Email: privacy@hibi-holdings.com
                </Alert.Description>
              </Alert.Content>
            </Alert.Root>
          </Box>
        </VStack>
      </VStack>
    </PageLayout>
  );
}
