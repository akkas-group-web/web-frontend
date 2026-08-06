"use client";

import { motion } from "framer-motion";

const ROW_1 = [
  "Solana",
  "Samsung",
  "Discord",
  "Adobe",
  "GoodRx",
  "Okta",
  "Blizzard",
  "Stellar",
  "TRUTH.",
  "Brain.fm",
];
const ROW_2 = [
  "Treecard",
  "PayJunction",
  "Chapter",
  "Berkshire Hathaway",
  "RE/MAX",
  "Facebook",
  "Libra",
  "Gofundme",
  "Sağlık A.Ş.",
  "Lojistik A.Ş.",
];

function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: string[];
  direction: "left" | "right";
  duration: number;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden">
      <motion.div
        className="flex shrink-0 gap-10 pr-10"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="flex h-16 items-center whitespace-nowrap px-6 text-lg font-bold tracking-tight text-white/35 transition-colors hover:text-[#7fc7d4]"
          >
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function ReferencesSection() {
  return (
    <section className="relative overflow-hidden bg-[#242629] py-16">
      {/* Yumuşak dekoratif lekeler - diğer bölümlerle uyumlu */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#1a7d8f]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#7fc7d4]/10 blur-3xl" />

      {/* Kenarlarda yumuşak solma (fade) efekti */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#242629] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#242629] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-8 md:px-12">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block text-center text-xs font-bold uppercase tracking-widest text-[#7fc7d4]"
        >
          Referanslarımız
        </motion.span>
        <h2 className="font-heading mt-2 text-center text-2xl font-bold text-white md:text-3xl">
          Bize güvenen firmalar
        </h2>
      </div>

      <div className="relative mt-10 space-y-4">
        <MarqueeRow items={ROW_1} direction="left" duration={30} />
        <MarqueeRow items={ROW_2} direction="right" duration={34} />
      </div>
    </section>
  );
}
