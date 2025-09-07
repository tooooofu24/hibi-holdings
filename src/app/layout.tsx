import { Provider } from "@/components/chakra-ui/provider";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { metadata as siteMetadata } from "@/lib/metadata";
import { organizationJsonLd } from "@/lib/jsonld";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="ja" suppressHydrationWarning className={notoSansJP.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body>
        <Provider defaultTheme="light">{children}</Provider>
      </body>
    </html>
  );
}
