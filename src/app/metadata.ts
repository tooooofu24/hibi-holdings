import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hibi Holdings - 未来を創るデジタルソリューション",
  description:
    'テクノロジーと経営実装をつなぎ、事業の"次の一手"を最短で形にします。ITコンサルティング、DX推進支援、人材ソリューション、受託開発、VIPキャスティングを提供。',
  keywords: [
    "ITコンサルティング",
    "DX推進支援",
    "デジタルトランスフォーメーション",
    "人材ソリューション",
    "受託開発",
    "VIPキャスティング",
    "システム開発",
    "クラウド",
    "AI",
    "データ分析",
    "東京",
    "Hibi Holdings",
  ],
  authors: [{ name: "Hibi Holdings株式会社" }],
  creator: "Hibi Holdings株式会社",
  publisher: "Hibi Holdings株式会社",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hibi-holdings.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hibi Holdings - 未来を創るデジタルソリューション",
    description:
      'テクノロジーと経営実装をつなぎ、事業の"次の一手"を最短で形にします。ITコンサルティング、DX推進支援、人材ソリューション、受託開発、VIPキャスティングを提供。',
    url: "https://hibi-holdings.com",
    siteName: "Hibi Holdings",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hibi Holdings - 未来を創るデジタルソリューション",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hibi Holdings - 未来を創るデジタルソリューション",
    description:
      'テクノロジーと経営実装をつなぎ、事業の"次の一手"を最短で形にします。',
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};
