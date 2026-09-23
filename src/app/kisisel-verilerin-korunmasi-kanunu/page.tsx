import { notFound } from "next/navigation";

import { UploadedContentDetail } from "@/components/sections/uploaded-content/UploadedContentDetail";
import { getUploadedContentBySlug } from "@/services/uploaded-content.service";

export default async function PersonalDataProtectionLawPage() {
  const content = await getUploadedContentBySlug(
    "kisisel-verilerin-korunmasi-kanunu",
  );

  if (!content) {
    notFound();
  }

  return <UploadedContentDetail content={content} />;
}