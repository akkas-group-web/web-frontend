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
            className="flex h-16 items-center whitespace-nowrap px-6 text-lg font-bold tracking-tight text-[#333333]/40 transition-colors hover:text-[#0d4d5c]"
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
    <section className="bg-[#f5f2ec] py-16">
      <div className="mx-auto max-w-7xl px-8 md:px-12">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block text-center text-xs font-bold uppercase tracking-widest text-[#1a7d8f]"
        >
          Referanslarımız
        </motion.span>
        <h2 className="font-heading mt-2 text-center text-2xl font-bold text-[#0d4d5c] md:text-3xl">
          Bize güvenen firmalar
        </h2>
      </div>

      <div className="mt-10 space-y-4">
        <MarqueeRow items={ROW_1} direction="left" duration={30} />
        <MarqueeRow items={ROW_2} direction="right" duration={34} />
      </div>
    </section>
  );
}
