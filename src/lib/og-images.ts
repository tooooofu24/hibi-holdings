// Generate enhanced metadata for each page (without images)
export function generatePageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}) {
  const baseUrl = "https://hibi-holdings.vercel.app";

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      locale: "ja_JP",
      url: `${baseUrl}${path}`,
      title,
      description,
      siteName: "Hibi Holdings株式会社",
    },
    twitter: {
      card: "summary" as const,
      title,
      description,
      site: "@HibiHoldings", // 企業Twitterアカウント
      creator: "@HibiHoldings",
    },
    // Facebook・LinkedIn対応
    other: {
      "og:site_name": "Hibi Holdings株式会社",
      "article:author": "Hibi Holdings株式会社",
    },
  };
}
