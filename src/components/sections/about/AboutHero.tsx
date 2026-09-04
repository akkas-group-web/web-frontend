"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import type { AboutHeroContent } from "@/types/about";

interface AboutHeroProps {
  content: AboutHeroContent;
}

export function AboutHero({ content }: AboutHeroProps) {
  return (
    <section className="bg-[#f4f6f8] pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-8 md:px-12">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl"
          >
            {content.image?.url ? (
  <Image
    src={content.image.url}
    alt={content.image.alt || "Hakkımızda görseli"}
    width={900}
    height={620}
    priority
    sizes="(min-width: 768px) 50vw, 100vw"
    className="h-[320px] w-full object-cover md:h-[460px]"
  />
) : null}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h1 className="font-heading text-4xl font-bold leading-tight text-[#0d4d5c] md:text-5xl">
              <span className="mr-2 inline-block rounded-md bg-[#0d4d5c] px-3 py-1 text-white">
                {content.titleHighlight}
              </span>
              {content.titleRest}
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#333333]/70 md:text-lg">
              {content.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}