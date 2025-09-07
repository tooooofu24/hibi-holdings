"use client";

import {
  Button,
  Checkbox,
  CheckboxGroup,
  Field,
  Flex,
  Input,
  Stack,
  Textarea,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HiArrowRight } from "react-icons/hi2";

export function MaterialsForm() {
  const orientation = useBreakpointValue({
    base: undefined,
    md: "horizontal" as const,
  });
  const flex = useBreakpointValue({ base: undefined, md: "1" });

  return (
    <Stack
      gap={{ base: "6", md: "8" }}
      w="full"
      css={{ "--field-label-width": "25%" }}
    >
      <Field.Root required orientation={orientation}>
        <Field.Label>会社名</Field.Label>
        <Input variant="flushed" placeholder="株式会社○○" flex={flex} />
      </Field.Root>

      <Field.Root required orientation={orientation}>
        <Field.Label>お名前</Field.Label>
        <Input variant="flushed" placeholder="山田 太郎" flex={flex} />
      </Field.Root>

      <Field.Root required orientation={orientation}>
        <Field.Label>メールアドレス</Field.Label>
        <Input
          variant="flushed"
          type="email"
          placeholder="example@company.com"
          flex={flex}
        />
      </Field.Root>

      <Field.Root orientation={orientation}>
        <Field.Label>電話番号</Field.Label>
        <Input
          variant="flushed"
          type="tel"
          placeholder="03-1234-5678"
          flex={flex}
        />
      </Field.Root>

      <Field.Root orientation={orientation}>
        <Field.Label>部署・役職</Field.Label>
        <Input variant="flushed" placeholder="営業部 課長" flex={flex} />
      </Field.Root>

      <Flex
        align={{ base: "start", md: "center" }}
        gap={{ base: "4", md: "2" }}
        direction={{ base: "column", md: "row" }}
      >
        <Field.Root flex={{ base: "none", md: 1 }}>
          <Field.Label>ご希望の資料</Field.Label>
        </Field.Root>
        <CheckboxGroup
          name="materials"
          flex={{ base: "none", md: 3 }}
          w={{ base: "full", md: "auto" }}
        >
          <Stack gap="3">
            <Checkbox.Root value="company">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>会社案内資料</Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root value="consulting">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>ITコンサルティングサービス資料</Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root value="dx">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>DX推進支援サービス資料</Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root value="hr">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>人材ソリューションサービス資料</Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root value="development">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>受託開発サービス資料</Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root value="casting">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>VIPキャスティングサービス資料</Checkbox.Label>
            </Checkbox.Root>
          </Stack>
        </CheckboxGroup>
      </Flex>

      <Field.Root orientation={orientation}>
        <Field.Label>お問い合わせ内容</Field.Label>
        <Textarea
          variant="flushed"
          placeholder="ご質問やご要望がございましたらお聞かせください"
          rows={6}
          flex={flex}
        />
      </Field.Root>

      <Button size={{ base: "md", md: "lg" }} mt={{ base: "12", md: "20" }}>
        資料を請求する
        <HiArrowRight />
      </Button>
    </Stack>
  );
}
