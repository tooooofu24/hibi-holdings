"use client";

import {
  Button,
  Checkbox,
  CheckboxGroup,
  Field,
  Flex,
  Input,
  Link,
  NativeSelect,
  Stack,
  Textarea,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HiArrowRight } from "react-icons/hi2";

export function DocumentsForm() {
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
        <Field.Label>
          会社名
          <Field.RequiredIndicator />
        </Field.Label>
        <Input variant="flushed" placeholder="株式会社○○" flex={flex} />
      </Field.Root>

      <Field.Root required orientation={orientation}>
        <Field.Label>
          ご担当者名
          <Field.RequiredIndicator />
        </Field.Label>
        <Input variant="flushed" placeholder="山田 太郎" flex={flex} />
      </Field.Root>

      <Field.Root required orientation={orientation}>
        <Field.Label>
          メールアドレス
          <Field.RequiredIndicator />
        </Field.Label>
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

      <Flex
        align={{ base: "start", md: "center" }}
        gap={{ base: "4", md: "2" }}
        direction={{ base: "column", md: "row" }}
      >
        <Field.Root flex={{ base: "none", md: 1 }}>
          <Field.Label>興味のあるサービス</Field.Label>
        </Field.Root>
        <CheckboxGroup
          name="materials"
          flex={{ base: "none", md: 3 }}
          w={{ base: "full", md: "auto" }}
        >
          <Stack gap="3">
            <Checkbox.Root value="consulting">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>ITコンサルティング</Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root value="dx">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>DX推進支援</Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root value="hr">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>人材ソリューション</Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root value="development">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>受託開発</Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root value="casting">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>VIPキャスティング</Checkbox.Label>
            </Checkbox.Root>
          </Stack>
        </CheckboxGroup>
      </Flex>

      <Field.Root required orientation={orientation}>
        <Field.Label>
          導入希望時期
          <Field.RequiredIndicator />
        </Field.Label>
        <NativeSelect.Root
          variant="plain"
          flex={flex}
          borderBottom="1px solid"
          borderColor="gray.200"
        >
          <NativeSelect.Field placeholder="選択してください">
            <option value="immediate">即時</option>
            <option value="within-3months">3ヶ月以内</option>
            <option value="within-6months">6ヶ月以内</option>
            <option value="undecided">未定</option>
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </Field.Root>

      <Field.Root required orientation={orientation}>
        <Field.Label>
          想定ご予算
          <Field.RequiredIndicator />
        </Field.Label>
        <NativeSelect.Root
          variant="plain"
          flex={flex}
          borderBottom="1px solid"
          borderColor="gray.200"
        >
          <NativeSelect.Field placeholder="選択してください">
            <option value="under-1m">〜100万円</option>
            <option value="under-3m">〜300万円</option>
            <option value="under-10m">〜1000万円</option>
            <option value="undecided">未定</option>
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </Field.Root>

      <Field.Root orientation={orientation}>
        <Field.Label>備考</Field.Label>
        <Textarea
          variant="flushed"
          placeholder="ご質問やご要望がございましたらお聞かせください"
          rows={6}
          flex={flex}
        />
      </Field.Root>

      <Checkbox.Root mt="12" display="flex" justifyContent="center">
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>
          <Link textDecoration="underline" asChild>
            <NextLink href="/privacy">個人情報の取扱い</NextLink>
          </Link>
          に同意する
        </Checkbox.Label>
      </Checkbox.Root>

      <Button size={{ base: "md", md: "lg" }} mt={{ base: "12", md: "20" }}>
        資料を請求する
        <HiArrowRight />
      </Button>
    </Stack>
  );
}
