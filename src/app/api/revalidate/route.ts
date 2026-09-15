import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

type ResolvePaths = (slug?: string, categorySlug?: string) => string[];

const CPT_PATH_MAP: Record<string, ResolvePaths> = {
  news_item: (slug) =>
    slug ? ["/haberler", `/haberler/${slug}`] : ["/haberler"],
  article_item: (slug) => (slug ? ["/blog", `/blog/${slug}`] : ["/blog"]),
  sector: (slug) =>
    slug ? ["/sektorler", `/sektorler/${slug}`] : ["/sektorler"],
  service_category: (slug) =>
    slug ? ["/hizmetlerimiz", `/hizmetlerimiz/${slug}`] : ["/hizmetlerimiz"],
  service_child: (slug, categorySlug) => {
    const paths = ["/hizmetlerimiz"];
    if (categorySlug) {
      paths.push(`/hizmetlerimiz/${categorySlug}`);
      if (slug) {
        paths.push(`/hizmetlerimiz/${categorySlug}/${slug}`);
      }
    } else if (slug) {
      // category_slug gelmediyse (eski/eksik payload), en azından tek seviyeli path'i dene
      paths.push(`/hizmetlerimiz/${slug}`);
    }
    return paths;
  },
  contact_office: () => ["/iletisim"],
  contact_page: () => ["/iletisim"],
  hero_slide: () => ["/"],
  reference: () => ["/", "/referanslar"],
  timeline_item: () => ["/hakkimizda"],
  value_item: () => ["/hakkimizda"],
  about_page: () => ["/hakkimizda"],
  brand: () => ["/"],
};

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-revalidate-secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Geçersiz secret" }, { status: 401 });
  }

  let body: { post_type?: string; slug?: string; category_slug?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Geçersiz JSON" }, { status: 400 });
  }

  const { post_type, slug, category_slug } = body;

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

  const paths = resolvePaths(slug, category_slug);
  paths.forEach((path) => revalidatePath(path));

  return NextResponse.json({ revalidated: true, paths, now: Date.now() });
}
