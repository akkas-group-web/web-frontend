"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import type { AboutStoryContent } from "@/types/about";

interface AboutStorySectionProps {
  content: AboutStoryContent;
}

export function AboutStorySection({ content }: AboutStorySectionProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 md:grid-cols-2 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-xl shadow-[#0d4d5c]/10">
            <Image
              src={content.imageSrc}
              alt="Akkaş Group kurucusu"
              width={640}
              height={760}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-8 -right-6 max-w-xs rounded-2xl bg-[#0d4d5c] p-6 text-white shadow-2xl md:-right-10"
          >
            <Quote className="h-5 w-5 text-[#7fc7d4]" />
            <p className="mt-3 text-sm font-medium leading-relaxed">
              &ldquo;{content.highlightQuote}&rdquo;
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#7fc7d4]">
              {content.highlightAuthor}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#1a7d8f]">
            {content.eyebrow}
          </span>
          <h2 className="font-heading mt-3 text-3xl font-bold text-[#0d4d5c] md:text-4xl">
            {content.title}
          </h2>
          <div className="mt-6 space-y-4">
            {content.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-sm leading-relaxed text-[#333333]/70 md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
