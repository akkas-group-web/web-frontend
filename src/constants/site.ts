export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface BrandCompany extends NavChild {
  logo: string;
}

export const BRAND_COMPANIES: BrandCompany[] = [
  {
    label: "Aker Patent",
    href: "/markalarimiz/aker-patent",
    logo: "/brands/akerpatent.png",
  },
  {
    label: "Akkaş OSGB",
    href: "/markalarimiz/akkas-osgb",
    logo: "/brands/akkasosgb.png",
  },
  {
    label: "Avrupa Yatırım Ajansı",
    href: "/markalarimiz/avrupa-yatirim-ajansi",
    logo: "/brands/aya.png",
  },
  {
    label: "Erkan Akkaş Danışmanlık",
    href: "/markalarimiz/erkan-akkas-danismanlik",
    logo: "/brands/erkanakkas.png",
  },
  {
    label: "Akkaş KVK",
    href: "/markalarimiz/akkas-kvk",
    logo: "/brands/akkaskvk.png",
  },
  {
    label: "Akkaş STST",
    href: "/markalarimiz/akkas-stst",
    logo: "/brands/akkassts.jpg",
  },
  {
    label: "Akkaş Akademi",
    href: "/markalarimiz/akkas-akademi",
    logo: "/brands/akerakademi.png",
  },
];

export const SECTORS: NavChild[] = [
  { label: "Üretim & Sanayi", href: "/sektorler/uretim-sanayi" },
  { label: "Gıda", href: "/sektorler/gida" },
  { label: "Tekstil", href: "/sektorler/tekstil" },
  { label: "Otomotiv", href: "/sektorler/otomotiv" },
  { label: "Kimya", href: "/sektorler/kimya" },
  { label: "İnşaat", href: "/sektorler/insaat" },
  { label: "Lojistik", href: "/sektorler/lojistik" },
  { label: "Enerji", href: "/sektorler/enerji" },
  { label: "Sağlık", href: "/sektorler/saglik" },
  { label: "Bilişim & Teknoloji", href: "/sektorler/bilisim-teknoloji" },
  { label: "Turizm", href: "/sektorler/turizm" },
  { label: "Tarım", href: "/sektorler/tarim" },
];

export const SERVICES: NavChild[] = [
  {
    label: "Kalite Belgelendirme",
    href: "/hizmetlerimiz/kalite-belgelendirme",
  },
  { label: "Eğitimler", href: "/hizmetlerimiz/egitimler" },
  {
    label: "Yatırım Danışmanlığı",
    href: "/hizmetlerimiz/yatirim-danismanligi",
  },
  {
    label: "Fikri ve Sınai Mülkiyet Hakları",
    href: "/hizmetlerimiz/fikri-sinai-mulkiyet",
  },
  {
    label: "Ortak Sağlık ve Güvenlik Birimi Hizmetlerimiz",
    href: "/hizmetlerimiz/osgb",
  },
  { label: "Devlet Destekleri", href: "/hizmetlerimiz/devlet-destekleri" },
  {
    label: "Sigorta Teşvik Danışmanlığı",
    href: "/hizmetlerimiz/sigorta-tesvik-danismanligi",
  },
  {
    label: "Kişisel Verileri Koruma Danışmanlığı",
    href: "/hizmetlerimiz/kvkk-danismanligi",
  },
  { label: "Akkaş Karbon", href: "/hizmetlerimiz/akkas-karbon" },
  { label: "ProKVK", href: "/hizmetlerimiz/prokvk" },
  { label: "Diğer Hizmetlerimiz", href: "/hizmetlerimiz/diger" },
];

export const NAV_LINKS: NavItem[] = [
  { label: "Hakkımızda", href: "/about" },
  { label: "Markalarımız", href: "/markalarimiz", children: BRAND_COMPANIES },
  { label: "Referanslar", href: "/references" },
  { label: "Blog", href: "/blog" },
  { label: "Hizmetlerimiz", href: "/hizmetlerimiz", children: SERVICES },{ label: "Haberler", href: "/haberler" },
  { label: "İletişim", href: "/iletisim" },
];

export const STATS = [
  { value: "25+", label: "Yıllık Tecrübe", sub: "1999'dan beri" },
  { value: "200+", label: "Uzman Danışman Kadrosu" },
  { value: "18.000+", label: "Hizmet Verilen Firma" },
  { value: "7", label: "Grup Şirketi" },
];

export const SITE_CONFIG = {
  name: "Akkaş Group",
  url: "https://akkasgroup.com",
  description:
    "A'dan Z'ye danışmanlık: yatırım, teşvik, KVKK ve kalite belgelendirme hizmetleri.",
  phone: "+90 216 450 60 07 (Pbx)",
  email: "info@akkasgroup.com",
  address: "Uzunçayır Cad. Akkaş Plaza No:51 Hasanpaşa-Kadıköy-İSTANBUL",
};
export interface SocialLink {
  label: string;
  href: string;
  icon: "facebook" | "instagram" | "linkedin" | "twitter" | "youtube";
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://facebook.com/akkasgroup",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/akkasgroup",
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/akkasgroup",
    icon: "linkedin",
  },
  { label: "Twitter", href: "https://twitter.com/akkasgroup", icon: "twitter" },
];
