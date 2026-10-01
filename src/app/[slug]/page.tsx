import { notFound } from "next/navigation";

import { UploadedContentDetail } from "@/components/sections/uploaded-content/UploadedContentDetail";
import { getUploadedContentBySlug } from "@/services/uploaded-content.service";

interface UploadedContentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function UploadedContentPage({
  params,
}: UploadedContentPageProps) {
  const { slug } = await params;

  const content = await getUploadedContentBySlug(slug);

  if (!content) {
    notFound();
  }

  return <UploadedContentDetail content={content} />;
}