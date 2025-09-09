// Organization structured data
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ｈｉｂｉ Ｈｏｌｄｉｎｇｓ株式会社",
  alternateName: "Hibi Holdings",
  legalName: "Ｈｉｂｉ Ｈｏｌｄｉｎｇｓ株式会社",
  url: "https://hibi-holdings.vercel.app",
  logo: "https://hibi-holdings.vercel.app/logo.png",
  email: "contact@hibi-holdings.com",
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@hibi-holdings.com",
    contactType: "customer service",
    areaServed: "JP",
    availableLanguage: "Japanese",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "麻布台3丁目4番4号 コンフォリア麻布台",
    addressLocality: "港区",
    addressRegion: "東京都",
    postalCode: "106-0041",
    addressCountry: "JP",
  },
  founder: {
    "@type": "Person",
    name: "日比 亜希子",
    jobTitle: "代表取締役",
  },
  foundingDate: "2025-04",
  numberOfEmployees: 5,
  leiCode: "6010401190086",
  description:
    "テクノロジーと経営実装をつなぎ、事業の次の一手を最短で形にします。ITコンサルティング、DX推進支援、人材ソリューション、受託開発、VIPキャスティングを提供。",
  knowsAbout: [
    "ITコンサルティング",
    "DXコンサルティング",
    "システム開発",
    "人材ソリューション",
    "インフルエンサーマーケティング",
    "AI・機械学習",
    "クラウド設計",
  ],
  sameAs: [],
};

// LocalBusiness structured data
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ｈｉｂｉ Ｈｏｌｄｉｎｇｓ株式会社",
  alternateName: "Hibi Holdings",
  legalName: "Ｈｉｂｉ Ｈｏｌｄｉｎｇｓ株式会社",
  url: "https://hibi-holdings.vercel.app",
  logo: "https://hibi-holdings.vercel.app/logo.png",
  email: "contact@hibi-holdings.com",
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@hibi-holdings.com",
    contactType: "customer service",
    areaServed: "JP",
    availableLanguage: "Japanese",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "麻布台3丁目4番4号 コンフォリア麻布台",
    addressLocality: "港区",
    addressRegion: "東京都",
    postalCode: "106-0041",
    addressCountry: "JP",
  },
  founder: {
    "@type": "Person",
    name: "日比 亜希子",
    jobTitle: "代表取締役",
  },
  foundingDate: "2025-04",
  numberOfEmployees: 5,
  leiCode: "6010401190086",
  description:
    "テクノロジーと経営実装をつなぎ、事業の次の一手を最短で形にします。ITコンサルティング、DX推進支援、人材ソリューション、受託開発、VIPキャスティングを提供。",
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "Japan",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.6654,
    longitude: 139.7492,
  },
  openingHours: "Mo-Fr 09:00-18:00",
  currenciesAccepted: "JPY",
  sameAs: [],
};

// Service structured data for IT Consulting
export const itConsultingServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ITコンサルティング",
  description:
    "経営課題から要件に落とし込み、PoC〜本番化まで伴走。クラウド/データ/AIの設計と実装で、投資対効果を最大化します。",
  provider: {
    "@type": "Organization",
    name: "Ｈｉｂｉ Ｈｏｌｄｉｎｇｓ株式会社",
  },
  serviceType: "ITコンサルティング",
  areaServed: "JP",
  category: "Business Consulting",
};

// Service structured data for DX Support
export const dxSupportServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "DX推進支援",
  description:
    '現場ヒアリングと業務設計を起点に、ツール導入だけで終わらない"定着"まで支援。小さく早く成果を出す進め方を徹底します。',
  provider: {
    "@type": "Organization",
    name: "Ｈｉｂｉ Ｈｏｌｄｉｎｇｓ株式会社",
  },
  serviceType: "DX推進支援",
  areaServed: "JP",
  category: "Digital Transformation",
};

// Service structured data for HR Solutions
export const hrSolutionsServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "人材ソリューション",
  description:
    "即戦力のアサインから内製化設計まで。採用と育成を両輪で支え、プロジェクト成功確度を高めます。",
  provider: {
    "@type": "Organization",
    name: "Ｈｉｂｉ Ｈｏｌｄｉｎｇｓ株式会社",
  },
  serviceType: "人材ソリューション",
  areaServed: "JP",
  category: "Human Resources",
};

// Service structured data for Custom Development
export const customDevelopmentServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "受託開発（システム開発）",
  description:
    "速く・堅牢に・拡張可能に。PoCから本番運用まで一気通貫でサポート。Web・モバイル・AI開発から、クラウド設計・セキュリティまで少数精鋭で対応。",
  provider: {
    "@type": "Organization",
    name: "Ｈｉｂｉ Ｈｏｌｄｉｎｇｓ株式会社",
  },
  serviceType: "受託開発",
  areaServed: "JP",
  category: "Software Development",
  offers: {
    "@type": "Offer",
    description: "カスタムソフトウェア開発サービス",
  },
};

// Service structured data for VIP Casting
export const vipCastingServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "VIPキャスティング",
  description:
    "企業とインフルエンサーを最短距離で結ぶマッチングプラットフォーム。詳細検索・案件管理・効果把握がワンストップ。法令遵守の透明な運用設計。",
  provider: {
    "@type": "Organization",
    name: "Ｈｉｂｉ Ｈｏｌｄｉｎｇｓ株式会社",
  },
  serviceType: "VIPキャスティング",
  areaServed: "JP",
  category: "Marketing Services",
};

// BreadcrumbList generator function
export const generateBreadcrumbJsonLd = (
  items: Array<{ name: string; url: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `https://hibi-holdings.vercel.app${item.url}`,
  })),
});
