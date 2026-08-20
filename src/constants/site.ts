import { SERVICES } from "./services";
import type { NavChild, NavItem } from "@/types/navigation";

export interface BrandCompany extends NavChild {
  logo: string;
}

// export const BRAND_COMPANIES: BrandCompany[] = [
//   {
//     label: "Aker Patent",
//     href: "/markalarimiz/aker-patent",
//     logo: "/brands/akerpatent.png",
//   },
//   {
//     label: "Akkaş OSGB",
//     href: "/markalarimiz/akkas-osgb",
//     logo: "/brands/akkasosgb.png",
//   },
//   {
//     label: "Avrupa Yatırım Ajansı",
//     href: "/markalarimiz/avrupa-yatirim-ajansi",
//     logo: "/brands/aya.png",
//   },
//   {
//     label: "Erkan Akkaş Danışmanlık",
//     href: "/markalarimiz/erkan-akkas-danismanlik",
//     logo: "/brands/erkanakkas.png",
//   },
//   {
//     label: "Akkaş KVK",
//     href: "/markalarimiz/akkas-kvk",
//     logo: "/brands/akkaskvk.png",
//   },
//   {
//     label: "Akkaş STST",
//     href: "/markalarimiz/akkas-stst",
//     logo: "/brands/akkassts.jpg",
//   },
//   {
//     label: "Akkaş Akademi",
//     href: "/markalarimiz/akkas-akademi",
//     logo: "/brands/akerakademi.png",
//   },
// ];

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

export const NAV_LINKS: NavItem[] = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Makaleler", href: "/blog" },
  { label: "Hizmetlerimiz", href: "/hizmetlerimiz", children: SERVICES },
  { label: "Haberler", href: "/haberler" },
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
