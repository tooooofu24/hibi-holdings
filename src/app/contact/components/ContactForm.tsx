"use client";

import {
  Button,
  Field,
  Input,
  Stack,
  Textarea,
  useBreakpointValue,
} from "@chakra-ui/react";
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
          placeholder="example@company.com"
          type="email"
          flex={flex}
        />
      </Field.Root>

      <Field.Root required orientation={orientation}>
        <Field.Label>お問い合わせ内容</Field.Label>
        <Textarea
          variant="flushed"
          placeholder="お問い合わせ内容をご記入ください"
          rows={8}
          flex={flex}
        />
      </Field.Root>

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
