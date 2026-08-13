"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ReferencesCTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1a7d8f] to-[#0d4d5c] py-20">
      {/* Nefes alan dekoratif lekeler */}
      <motion.div
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.8, 0.5, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-2xl font-bold text-white md:text-3xl"
        >
          Sıradaki başarı hikayesi sizin firmanız olsun
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-sm text-white/70 md:text-base"
        >
          Sektörünüze özel ihtiyaçlarınızı dinleyelim, size en uygun danışmanlık
          çözümünü birlikte planlayalım.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/iletisim"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0d4d5c] transition-all hover:scale-105 hover:bg-[#e6f2f4] hover:shadow-lg hover:shadow-black/10"
          >
            Bize Ulaşın
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
