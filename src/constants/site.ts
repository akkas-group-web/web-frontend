export const SITE_CONFIG = {
  name: "Akkaş Group",
  legalName: "Akkaş Grup Danışmanlık",
  description:
    "1999'dan bugüne Türkiye'nin entegre danışmanlık gruplarından biri: yatırım danışmanlığı, teşvik ve hibeler, KVKK, OSGB, marka-patent ve kalite belgelendirme.",
  url: "https://akkasgroup.com",
  phone: "+90 216 450 60 07",
  email: "info@akkasgroup.com",
  address: "Uzunçayır Cad. Akkaş Plaza No:51, Hasanpaşa, Kadıköy / İstanbul",
  foundedYear: 1999,
} as const;

export const NAV_LINKS = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  { label: "Markalarımız", href: "/markalarimiz" },
  { label: "Sektörler", href: "/sektorler" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
] as const;

export const BREAKPOINTS = {
  mobile: 375,
  tablet: 768,
  desktop: 1280,
} as const;
