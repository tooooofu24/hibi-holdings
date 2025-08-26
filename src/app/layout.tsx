import { Provider } from "@/components/chakra-ui/provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hibi Holdings - デジタルソリューションで未来を創る",
  description:
    "テクノロジーと戦略コンサルティングで企業の成長と変革を支援します。ITコンサルティング、DX推進、人材ソリューションを提供するHibi Holdings。",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          fontFamily:
            "'M PLUS 1p', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <Provider defaultTheme="light">{children}</Provider>
      </body>
    </html>
  );
}
