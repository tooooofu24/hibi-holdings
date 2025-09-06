export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hibi Holdings株式会社",
  url: "https://hibi-holdings.com",
  logo: "https://hibi-holdings.com/logo.png",
  description:
    'テクノロジーと経営実装をつなぎ、事業の"次の一手"を最短で形にします。',
  address: {
    "@type": "PostalAddress",
    streetAddress: "麻布台3丁目4番4号 コンフォリア麻布台",
    addressLocality: "港区",
    addressRegion: "東京都",
    postalCode: "106-0041",
    addressCountry: "JP",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "",
    contactType: "customer service",
    email: "contact@hibi-holdings.com",
  },
  foundingDate: "2025-05",
  founder: {
    "@type": "Person",
    name: "日比 亜希子",
  },
  employee: "5",
  services: [
    "ITコンサルティング",
    "DX推進支援",
    "人材ソリューション",
    "受託開発",
    "VIPキャスティング",
  ],
};
