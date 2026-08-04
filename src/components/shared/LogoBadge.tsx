"use client";

import { motion } from "framer-motion";

export function LogoBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 shadow-sm"
    >
      <span className="flex h-2 w-2 rounded-full bg-teal-500" />
      <span className="text-xs font-semibold text-slate-600">
        1999&apos;dan beri · A&apos;dan Z&apos;ye danışmanlık
      </span>
    </motion.div>
  );
}
