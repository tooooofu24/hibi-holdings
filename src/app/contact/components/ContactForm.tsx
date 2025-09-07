"use client";

import {
  Button,
  Checkbox,
  Field,
  Flex,
  Input,
  Link,
  RadioGroup,
  Stack,
  Textarea,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HiArrowRight } from "react-icons/hi2";

export function ContactForm() {
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
        <Field.Label>お名前</Field.Label>
        <Input variant="flushed" placeholder="山田 太郎" flex={flex} />
      </Field.Root>

      <Field.Root orientation={orientation}>
        <Field.Label>会社名</Field.Label>
        <Input variant="flushed" placeholder="株式会社○○" flex={flex} />
      </Field.Root>

      <Field.Root required orientation={orientation}>
        <Field.Label>メールアドレス</Field.Label>
        <Input
          variant="flushed"
          placeholder="example@company.com"
          type="email"
          flex={flex}
        />
      </Field.Root>

      <Field.Root orientation={orientation}>
        <Field.Label>電話番号</Field.Label>
        <Input
          variant="flushed"
          placeholder="03-1234-5678"
          type="tel"
          flex={flex}
        />
      </Field.Root>

      <Flex
        align={{ base: "start", md: "center" }}
        gap={{ base: "4", md: "2" }}
        direction={{ base: "column", md: "row" }}
      >
        <Field.Root flex={{ base: "none", md: 1 }}>
          <Field.Label>ご相談種別</Field.Label>
        </Field.Root>
        <RadioGroup.Root
          name="consultationType"
          flex={{ base: "none", md: 3 }}
          w={{ base: "full", md: "auto" }}
        >
          <Stack gap="3">
            <RadioGroup.Item value="it-consulting">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemControl>
                <RadioGroup.ItemIndicator />
              </RadioGroup.ItemControl>
              <RadioGroup.ItemText>ITコンサルティング</RadioGroup.ItemText>
            </RadioGroup.Item>
            <RadioGroup.Item value="dx-support">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemControl>
                <RadioGroup.ItemIndicator />
              </RadioGroup.ItemControl>
              <RadioGroup.ItemText>DX推進支援</RadioGroup.ItemText>
            </RadioGroup.Item>
            <RadioGroup.Item value="hr-solution">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemControl>
                <RadioGroup.ItemIndicator />
              </RadioGroup.ItemControl>
              <RadioGroup.ItemText>人材ソリューション</RadioGroup.ItemText>
            </RadioGroup.Item>
            <RadioGroup.Item value="other">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemControl>
                <RadioGroup.ItemIndicator />
              </RadioGroup.ItemControl>
              <RadioGroup.ItemText>その他</RadioGroup.ItemText>
            </RadioGroup.Item>
          </Stack>
        </RadioGroup.Root>
      </Flex>

      <Field.Root required orientation={orientation}>
        <Field.Label>ご相談内容</Field.Label>
        <Textarea
          variant="flushed"
          placeholder="ご相談内容をご記入ください（1000字以内）"
          rows={8}
          flex={flex}
          maxLength={1000}
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

      <Button
        size={{ base: "md", md: "lg" }}
        mt={{ base: "12", md: "20" }}
        w={{ base: "full", md: "auto" }}
      >
        送信する
        <HiArrowRight />
      </Button>
    </Stack>
  );
}
