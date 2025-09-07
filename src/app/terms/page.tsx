import { Alert, Box, Heading, Text, VStack } from "@chakra-ui/react";
import type { Metadata } from "next";
import { PageLayout } from "../components/PageLayout";
import { PageHeader } from "../components/PageHeader";

export const metadata: Metadata = {
  title: "利用規約",
  description:
    "Hibi Holdings株式会社の利用規約です。当社サービスをご利用いただく際の条件について記載しています。",
};

export default function TermsPage() {
  return (
    <PageLayout>
      <VStack gap="12" align="stretch">
        <VStack gap="4" align="stretch">
          <PageHeader title="利用規約" />
          <Text color="fg.muted" textStyle="sm">
            最終更新日：2025年9月8日
          </Text>
        </VStack>

        <VStack gap="8" align="stretch">
          <Box>
            <Heading as="h2" textStyle="xl" mb="4">
              1. 適用
            </Heading>
            <Text>
              本利用規約（以下「本規約」といいます。）は、Hibi
              Holdings株式会社（以下「当社」といいます。）が提供するサービス（以下「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
            </Text>
          </Box>

          <Box>
            <Heading as="h2" textStyle="xl" mb="4">
              2. 利用登録
            </Heading>
            <Text mb="4">
              本サービスにおいて、登録希望者が当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。
            </Text>
            <Text>
              当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします：
            </Text>
            <Box as="ul" pl="6" mt="4">
              <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
              <li>本規約に違反したことがある者からの申請である場合</li>
              <li>その他、当社が利用登録を相当でないと判断した場合</li>
            </Box>
          </Box>

          <Box>
            <Heading as="h2" textStyle="xl" mb="4">
              3. 禁止事項
            </Heading>
            <Text mb="4">
              ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません：
            </Text>
            <Box as="ul" pl="6">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>
                当社、本サービスの他のユーザー、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
              </li>
              <li>当社のサービスの運営を妨害するおそれのある行為</li>
              <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
              <li>不正アクセスをし、またはこれを試みる行為</li>
              <li>他のユーザーに成りすます行為</li>
              <li>
                当社が許諾しない本サービス上での宣伝、広告、勧誘、または営業行為
              </li>
            </Box>
          </Box>

          <Box>
            <Heading as="h2" textStyle="xl" mb="4">
              4. 本サービスの提供の停止等
            </Heading>
            <Text>
              当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします：
            </Text>
            <Box as="ul" pl="6" mt="4">
              <li>
                本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
              </li>
              <li>
                地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
              </li>
              <li>コンピュータまたは通信回線等が事故により停止した場合</li>
              <li>その他、当社が本サービスの提供が困難と判断した場合</li>
            </Box>
          </Box>

          <Box>
            <Heading as="h2" textStyle="xl" mb="4">
              5. 保証の否認および免責事項
            </Heading>
            <Text>
              当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。当社は、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。
            </Text>
          </Box>

          <Box>
            <Heading as="h2" textStyle="xl" mb="4">
              6. サービス内容の変更等
            </Heading>
            <Text>
              当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
            </Text>
          </Box>

          <Box>
            <Heading as="h2" textStyle="xl" mb="4">
              7. 利用規約の変更
            </Heading>
            <Text>
              当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
            </Text>
          </Box>

          <Box>
            <Heading as="h2" textStyle="xl" mb="4">
              8. 準拠法・裁判管轄
            </Heading>
            <Text mb="6">
              本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、東京地方裁判所を専属的合意管轄とします。
            </Text>
            <Alert.Root colorPalette="gray" size="lg">
              <Alert.Content>
                <Alert.Title>Hibi Holdings株式会社</Alert.Title>
                <Alert.Description>
                  〒106-0041 東京都港区麻布台3丁目4番4号 コンフォリア麻布台
                  <br />
                  Email: legal@hibi-holdings.com
                </Alert.Description>
              </Alert.Content>
            </Alert.Root>
          </Box>
        </VStack>
      </VStack>
    </PageLayout>
  );
}
