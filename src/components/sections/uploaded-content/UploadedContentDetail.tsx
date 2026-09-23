import type { UploadedContent } from "@/types/uploaded-content";

interface UploadedContentDetailProps {
  content: UploadedContent;
}

export function UploadedContentDetail({ content }: UploadedContentDetailProps) {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-20 md:pb-20 md:pt-24">
        <h1 className="mb-10 text-3xl font-semibold text-brand-dark md:text-4xl">
          {content.heading}
        </h1>

        <div
          className="
            max-w-none text-[14px] leading-7 text-[#596b70]

            [&_h2]:mb-3 [&_h2]:mt-8
            [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-brand-dark

            [&_h3]:mb-2 [&_h3]:mt-6
            [&_h3]:text-[15px] [&_h3]:font-semibold [&_h3]:text-brand-dark

            [&_p]:mb-4

            [&_strong]:font-semibold [&_strong]:text-brand-dark

            [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6

            [&_a]:break-words [&_a]:font-medium
            [&_a]:text-[#0d6675] [&_a]:underline [&_a]:underline-offset-2
            hover:[&_a]:text-[#1596a8]

            [&_table]:my-6 [&_table]:w-full
            [&_table]:border-collapse
            [&_table]:border [&_table]:border-[#dce7e9]

            [&_thead]:bg-[#f2f7f8]

            [&_th]:border [&_th]:border-[#dce7e9]
            [&_th]:px-4 [&_th]:py-3
            [&_th]:text-left [&_th]:text-xs
            [&_th]:font-semibold [&_th]:text-brand-dark

            [&_td]:border [&_td]:border-[#dce7e9]
            [&_td]:px-4 [&_td]:py-3
            [&_td]:align-top [&_td]:text-[13px]
            [&_td]:leading-5
          "
          dangerouslySetInnerHTML={{ __html: content.content }}
        />
      </section>
    </main>
  );
}
