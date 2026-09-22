import type { UploadedContent } from "@/types/uploaded-content";

interface UploadedContentDetailProps {
  content: UploadedContent;
}

export function UploadedContentDetail({
  content,
}: UploadedContentDetailProps) {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h1 className="mb-10 text-3xl font-semibold text-brand-dark md:text-4xl">
          {content.heading}
        </h1>

        <div
          className="
            max-w-none text-[13.5px] leading-6 text-[#58696e]
            [&_h2]:pt-3 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-[#0d4d5c] md:[&_h2]:text-lg
            [&_h3]:pt-2 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-[#0d4d5c]
            [&_p]:mb-3
            [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6
            [&_a]:break-words [&_a]:font-medium [&_a]:text-[#0d4d5c] [&_a]:underline
            hover:[&_a]:text-[#1596a8]
          "
          dangerouslySetInnerHTML={{ __html: content.content }}
        />
      </section>
    </main>
  );
}