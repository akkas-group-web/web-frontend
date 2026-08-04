"use client";

import { motion } from "framer-motion";

export function SealBadge() {
  return (
    <motion.div
      initial={{ rotate: -8, opacity: 0, scale: 0.9 }}
      animate={{ rotate: -8, opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-2 border-bronze text-center"
      aria-hidden="true"
    >
      <div className="absolute inset-1.5 rounded-full border border-bronze/50" />
      <span className="font-mono-tag text-[10px] leading-tight text-bronze px-3">
        AKKAŞ GROUP
        <br />· 1999&apos;DAN BERİ ·
      </span>
    </motion.div>
  );
}
