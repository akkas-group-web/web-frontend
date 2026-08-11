"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { AboutHeroContent } from "@/types/about";

interface AboutHeroProps {
  content: AboutHeroContent;
}

export function AboutHero({ content }: AboutHeroProps) {
  return (
    <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-[#0d4d5c]">
      <Image
        src={content.imageSrc}
        alt="Akkaş Group ofis"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d4d5c] via-[#0d4d5c]/70 to-[#0d4d5c]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d4d5c]/60 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pb-16 md:px-12 md:pb-20">
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-1.5 text-xs font-medium text-white/60"
        >
          <Link href="/" className="hover:text-white">
            Anasayfa
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white">Hakkımızda</span>
        </motion.nav>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs font-bold uppercase tracking-widest text-[#7fc7d4]"
        >
          {content.eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading mt-3 max-w-3xl text-4xl font-bold leading-[1.1] text-white md:text-6xl"
        >
          {content.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-5 max-w-xl text-sm leading-relaxed text-white/75 md:text-base"
        >
          {content.description}
        </motion.p>
      </div>
    </section>
  );
}
