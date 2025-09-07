import { Alert, Box, Heading, Text, VStack } from "@chakra-ui/react";
import type { Metadata } from "next";
import { PageLayout } from "../components/PageLayout";
import { PageHeader } from "../components/PageHeader";

export const metadata: Metadata = {
  title: "反社会的勢力排除に関する基本方針",
  description:
    "Hibi Holdings株式会社の反社会的勢力排除に関する基本方針です。当社の反社会的勢力に対する基本姿勢について記載しています。",
};

export default function PolicyAntisocialPage() {
  return (
    <PageLayout>
      <VStack gap="12" align="stretch">
        <VStack gap="4" align="stretch">
          <PageHeader title="反社会的勢力排除に関する基本方針" />
          <Text color="fg.muted" textStyle="sm">
            最終更新日：2025年9月8日
          </Text>
        </VStack>

        <VStack gap="8" align="stretch">
          <Box>
            <Heading as="h2" textStyle="xl" mb="4">
              1. 基本方針
            </Heading>
            <Text>
              Hibi
              Holdings株式会社（以下「当社」といいます。）は、市民社会の秩序や安全に脅威を与える反社会的勢力・団体とは一切の関係を持たず、不当な要求に対しては毅然とした態度で対応し、反社会的勢力を排除することを基本方針とします。
            </Text>
          </Box>

          <Box>
            <Heading as="h2" textStyle="xl" mb="4">
              2. 対応体制
            </Heading>
            <Text mb="4">
              当社は、反社会的勢力による不当要求に対応するため、以下の体制を整備しています：
            </Text>
            <Box as="ul" pl="6">
              <li>代表取締役を責任者とする対応体制の確立</li>
              <li>警察、弁護士等の外部専門機関との連携体制の構築</li>
              <li>役員・従業員への教育・研修の実施</li>
              <li>取引先等の反社会的勢力該当性の確認</li>
            </Box>
          </Box>

          <Box>
            <Heading as="h2" textStyle="xl" mb="4">
              3. 取引における対応
            </Heading>
            <Text mb="4">
              当社は、取引先が反社会的勢力であることが判明した場合、以下の対応を行います：
            </Text>
            <Box as="ul" pl="6">
              <li>契約の解除または取引の停止</li>
              <li>損害が発生した場合の損害賠償請求</li>
              <li>警察等関係機関への相談・連携</li>
              <li>社内関係部署への情報共有</li>
            </Box>
          </Box>

          <Box>
            <Heading as="h2" textStyle="xl" mb="4">
              4. 不当要求への対応
            </Heading>
            <Text>
              当社は、反社会的勢力からの不当要求に対しては、組織全体として毅然とした態度で対応し、一切の妥協を行いません。また、裏取引や資金提供等を行わず、法的対応も辞さない姿勢で臨みます。
            </Text>
          </Box>

          <Box>
            <Heading as="h2" textStyle="xl" mb="4">
              5. 社内体制の整備
            </Heading>
            <Text mb="6">
              当社は、本方針の実効性を確保するため、社内規程の整備、役員・従業員への研修実施、取引先との契約における反社条項の導入等、必要な措置を講じています。
            </Text>
            <Alert.Root colorPalette="gray" size="lg">
              <Alert.Content>
                <Alert.Title>Hibi Holdings株式会社</Alert.Title>
                <Alert.Description>
                  〒106-0041 東京都港区麻布台3丁目4番4号 コンフォリア麻布台
                  <br />
                  Email: compliance@hibi-holdings.com
                </Alert.Description>
              </Alert.Content>
            </Alert.Root>
          </Box>
        </VStack>
      </VStack>
    </PageLayout>
  );
}
