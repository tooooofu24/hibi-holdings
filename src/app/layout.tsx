import { Provider } from "@/components/chakra-ui/provider";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hibi Holdings - デジタルソリューションで未来を創る",
  description:
    "テクノロジーと戦略コンサルティングで企業の成長と変革を支援します。ITコンサルティング、DX推進、人材ソリューションを提供するHibi Holdings。",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="ja" suppressHydrationWarning className={notoSansJP.variable}>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Provider defaultTheme="light">{children}</Provider>
      </body>
    </html>
  );
}
