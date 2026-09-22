import { notFound } from "next/navigation";

import { UploadedContentDetail } from "@/components/sections/uploaded-content/UploadedContentDetail";
import { getUploadedContentBySlug } from "@/services/uploaded-content.service";

export default async function CookiePolicyPage() {
  const content = await getUploadedContentBySlug(
    "cerezlere-iliskin-aydinlatma-metni",
  );

  if (!content) {
    notFound();
  }

  return <UploadedContentDetail content={content} />;
}