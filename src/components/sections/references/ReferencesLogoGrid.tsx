"use client";

import Link from "next/link";

import { ClientLogoCard } from "@/components/shared/ClientLogoCard";
import type { ClientReference } from "@/types/reference";

interface ReferencesLogoGridProps {
  clients: ClientReference[];
  currentPage: number;
  totalPages: number;
  totalItems?: number;
  pageSize?: number;
}

export function ReferencesLogoGrid({
  clients,
  currentPage,
  totalPages,
  totalItems = 0,
  pageSize = 60,
}: ReferencesLogoGridProps) {
  const startItem =
    totalItems > 0 ? (currentPage - 1) * pageSize + 1 : 0;

  const endItem =
    totalItems > 0
      ? Math.min(currentPage * pageSize, totalItems)
      : 0;

  const visiblePages = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  ).filter((page) => {
    if (totalPages <= 5) {
      return true;
    }

    if (currentPage <= 3) {
      return page <= 5;
    }

    if (currentPage >= totalPages - 2) {
      return page >= totalPages - 4;
    }

    return Math.abs(page - currentPage) <= 2;
  });

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {clients.map((client) => (
            <ClientLogoCard key={client.id} client={client} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 border-t border-[#0d4d5c]/10 pt-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="text-center text-sm font-medium text-[#0d4d5c]/65 lg:text-left">
                {totalItems > 0 ? (
                  <>
                    <span className="font-semibold text-[#0d4d5c]">
                      {startItem}–{endItem}
                    </span>
                    {" / "}
                    {totalItems} referans
                  </>
                ) : (
                  <>
                    Sayfa {currentPage} / {totalPages}
                  </>
                )}
              </div>

              <nav
                aria-label="Referans sayfalama"
                className="flex flex-wrap items-center justify-center gap-2"
              >
                {currentPage > 1 ? (
                  <Link
                    href={`/referanslar?page=${currentPage - 1}`}
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-[#0d4d5c]/15 bg-white px-5 text-sm font-semibold text-[#0d4d5c] transition hover:border-[#1a7d8f] hover:text-[#1a7d8f]"
                  >
                    ‹&nbsp;&nbsp;Önceki
                  </Link>
                ) : (
                  <span className="inline-flex h-11 cursor-not-allowed items-center justify-center rounded-xl border border-[#0d4d5c]/10 px-5 text-sm font-semibold text-[#0d4d5c]/25">
                    ‹&nbsp;&nbsp;Önceki
                  </span>
                )}

                {visiblePages.map((page) => (
                  <Link
                    key={page}
                    href={`/referanslar?page=${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                    className={`inline-flex h-11 min-w-11 items-center justify-center rounded-xl border px-3 text-sm font-semibold transition ${
                      currentPage === page
                        ? "border-[#1a7d8f] bg-[#1a7d8f] text-white"
                        : "border-[#0d4d5c]/15 bg-white text-[#0d4d5c] hover:border-[#1a7d8f] hover:text-[#1a7d8f]"
                    }`}
                  >
                    {page}
                  </Link>
                ))}

                {currentPage < totalPages ? (
                  <Link
                    href={`/referanslar?page=${currentPage + 1}`}
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-[#0d4d5c]/15 bg-white px-5 text-sm font-semibold text-[#0d4d5c] transition hover:border-[#1a7d8f] hover:text-[#1a7d8f]"
                  >
                    Sonraki&nbsp;&nbsp;›
                  </Link>
                ) : (
                  <span className="inline-flex h-11 cursor-not-allowed items-center justify-center rounded-xl border border-[#0d4d5c]/10 px-5 text-sm font-semibold text-[#0d4d5c]/25">
                    Sonraki&nbsp;&nbsp;›
                  </span>
                )}
              </nav>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}