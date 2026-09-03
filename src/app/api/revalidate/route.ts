import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const CPT_PATH_MAP: Record<string, (slug?: string) => string[]> = {
  news_item: (slug) =>
    slug ? ["/haberler", `/haberler/${slug}`] : ["/haberler"],
  article_item: (slug) =>
    slug ? ["/haberler", `/haberler/${slug}`] : ["/haberler"],
  sector: (slug) =>
    slug ? ["/sektorler", `/sektorler/${slug}`] : ["/sektorler"],
  service_category: (slug) =>
    slug ? [`/hizmetlerimiz/${slug}`] : ["/hizmetlerimiz"],
  service_child: (slug) =>
    slug ? [`/hizmetlerimiz/${slug}`] : ["/hizmetlerimiz"],
  contact_office: () => ["/iletisim"],
  contact_page: () => ["/iletisim"],
  hero_slide: () => ["/"],
  reference: () => ["/", "/referanslar"],
  timeline_item: () => ["/kurumsal"],
  value_item: () => ["/kurumsal"],
  about_page: () => ["/kurumsal"],
  brand: (slug) => (slug ? [`/markalarimiz/${slug}`] : ["/markalarimiz"]),
};

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-revalidate-secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Geçersiz secret" }, { status: 401 });
  }

  let body: { post_type?: string; slug?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Geçersiz JSON" }, { status: 400 });
  }

  const { post_type, slug } = body;

  if (!post_type) {
    return NextResponse.json({ message: "post_type zorunlu" }, { status: 400 });
  }

  const resolvePaths = CPT_PATH_MAP[post_type];
  if (!resolvePaths) {
    return NextResponse.json(
      { message: `Eşleştirme bulunamadı: ${post_type}` },
      { status: 200 },
    );
  }

  const paths = resolvePaths(slug);
  paths.forEach((path) => revalidatePath(path));

  return NextResponse.json({ revalidated: true, paths, now: Date.now() });
}
