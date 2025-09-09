import { Provider } from "@/components/chakra-ui/provider";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { metadata as siteMetadata } from "@/lib/metadata";
import { organizationJsonLd, localBusinessJsonLd } from "@/lib/jsonld";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="ja" suppressHydrationWarning className={notoSansJP.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body>
        <Provider defaultTheme="light">{children}</Provider>
      </body>
    </html>
  );
}
