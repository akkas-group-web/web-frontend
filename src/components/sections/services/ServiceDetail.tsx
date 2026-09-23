import Image from "next/image";
import type { ReactNode } from "react";

import {
  ServiceSection,
  ServiceText,
} from "@/components/sections/services/ServiceContent";

import { ServiceDetailLayout } from "@/components/sections/services/ServiceDetailLayout";

import type { ServiceDetail as ServiceDetailType } from "@/types/service";

interface ServiceDetailProps {
  service: ServiceDetailType;
}

function renderInlineBold(text: string) {
  const parts = text.split(/(<br\s*\/?>|\*\*.*?\*\*)/gi).filter(Boolean);

  return parts.map((part, index) => {
    if (/^<br\s*\/?>$/i.test(part)) {
      return <br key={index} />;
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-[#0d4d5c]">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });
}

function renderLink(text: string) {
  const cleanText = text.trim();

  const markdownLinkRegex = /^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/;

  const markdownMatch = cleanText.match(markdownLinkRegex);

  if (markdownMatch) {
    const [, label, href] = markdownMatch;

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-[#0d4d5c] hover:text-[#1596a8]"
      >
        {label}
      </a>
    );
  }

  if (
    cleanText.startsWith("http://") ||
    cleanText.startsWith("https://") ||
    cleanText.startsWith("www.")
  ) {
    const href = cleanText.startsWith("www.")
      ? `https://${cleanText}`
      : cleanText;

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-[#0d4d5c] hover:text-[#1596a8]"
      >
        {cleanText}
      </a>
    );
  }

  return null;
}

function isTableRow(line: string) {
  const trimmed = line.trim();

  return trimmed.startsWith("|") && trimmed.endsWith("|");
}

function parseTableRow(line: string) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function isTableSeparator(line: string) {
  if (!isTableRow(line)) return false;

  const cells = parseTableRow(line);

  return cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

function hasGroupedTableHeader(headers: string[]) {
  return (
    headers.length === 6 &&
    Boolean(headers[0]) &&
    !headers[1] &&
    !headers[2] &&
    Boolean(headers[3]) &&
    !headers[4] &&
    !headers[5]
  );
}

function renderContent(lines: string[]): ReactNode[] {
  const elements: ReactNode[] = [];

  let index = 0;

  while (index < lines.length) {
    const paragraph = lines[index];

    // Markdown tablo kontrolü
    if (
      isTableRow(paragraph) &&
      index + 1 < lines.length &&
      isTableSeparator(lines[index + 1])
    ) {
      const headers = parseTableRow(paragraph);

      index += 2;

      const rows: string[][] = [];

      while (index < lines.length && isTableRow(lines[index])) {
        rows.push(parseTableRow(lines[index]));
        index += 1;
      }

      const groupedHeader = hasGroupedTableHeader(headers);

      elements.push(
        <div
          key={`table-${index}`}
          className="my-6 w-full overflow-x-auto rounded-xl border border-[#0d4d5c]/10"
        >
          <table className="w-full min-w-[700px] border-collapse text-left text-[13px]">
            <thead className="bg-[#f2f8f9]">
              {groupedHeader ? (
                <>
                  <tr>
                    <th
                      colSpan={3}
                      className="border-b border-r border-[#0d4d5c]/10 px-4 py-3 font-semibold text-[#0d4d5c]"
                    >
                      {renderInlineBold(headers[0])}
                    </th>

                    <th
                      colSpan={3}
                      className="border-b border-[#0d4d5c]/10 px-4 py-3 font-semibold text-[#0d4d5c]"
                    >
                      {renderInlineBold(headers[3])}
                    </th>
                  </tr>

                  {rows[0] && (
                    <tr>
                      {rows[0].map((cell, cellIndex) => (
                        <th
                          key={cellIndex}
                          className="border-b border-r border-[#0d4d5c]/10 px-4 py-3 font-medium text-[#0d4d5c] last:border-r-0"
                        >
                          {renderInlineBold(cell)}
                        </th>
                      ))}
                    </tr>
                  )}
                </>
              ) : (
                <tr>
                  {headers.map((header, headerIndex) => (
                    <th
                      key={headerIndex}
                      className="border-b border-r border-[#0d4d5c]/10 px-4 py-3 font-semibold text-[#0d4d5c] last:border-r-0"
                    >
                      {renderInlineBold(header)}
                    </th>
                  ))}
                </tr>
              )}
            </thead>

            <tbody>
              {(groupedHeader ? rows.slice(1) : rows).map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-b border-[#0d4d5c]/10 last:border-b-0"
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border-r border-[#0d4d5c]/10 px-4 py-3 align-top leading-6 text-[#58696e] last:border-r-0"
                    >
                      {renderInlineBold(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );

      continue;
    }

    const isSubHeading = paragraph.startsWith("### ");
    const isHeading = paragraph.startsWith("## ");

    if (isSubHeading) {
      const title = paragraph.replace("### ", "");
      const link = renderLink(title);

      elements.push(
        <h3 key={index} className="pt-2 text-base font-semibold text-[#0d4d5c]">
          {link ?? title}
        </h3>,
      );

      index += 1;
      continue;
    }

    if (isHeading) {
      elements.push(
        <h2
          key={index}
          className="pt-3 text-base font-semibold text-[#0d4d5c] md:text-lg"
        >
          {paragraph.replace("## ", "")}
        </h2>,
      );

      index += 1;
      continue;
    }

    const link = renderLink(paragraph);

    elements.push(
      <ServiceText key={index}>
        {link ?? renderInlineBold(paragraph)}
      </ServiceText>,
    );

    index += 1;
  }

  return elements;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <ServiceDetailLayout
      title={service.title}
      description={service.description}
      category={service.categoryTitle}
    >
      <ServiceSection>
        <div
          className={
            service.image
              ? "grid items-start gap-8 md:grid-cols-[280px_1fr]"
              : "w-full"
          }
        >
          {service.image && (
            <div className="overflow-hidden rounded-xl border border-[#0d4d5c]/10 bg-white">
              <Image
                src={service.image.url || ""}
                alt={service.image.alt || service.title}
                width={service.image.width ?? 600}
                height={service.image.height ?? 400}
                sizes="(max-width: 767px) 100vw, 280px"
                className="h-auto w-full object-cover"
              />
            </div>
          )}

          <div className="space-y-3">
            {service.contentTitle && (
              <h2 className="text-lg font-bold text-[#0d4d5c] md:text-xl">
                {service.contentTitle}
              </h2>
            )}

            {typeof service.content === "string" ? (
              <div
                className="prose prose-sm max-w-none text-[13.5px] leading-6 text-[#58696e]"
                dangerouslySetInnerHTML={{ __html: service.content }}
              />
            ) : (
              renderContent(service.content)
            )}
          </div>
        </div>
      </ServiceSection>
    </ServiceDetailLayout>
  );
}
