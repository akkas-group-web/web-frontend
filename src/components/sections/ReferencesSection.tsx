"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";

import type { ClientReference } from "@/types/reference";

interface ReferencesSectionProps {
  clients: ClientReference[];
}

function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: ClientReference[];
  direction: "left" | "right";
  duration: number;
}) {
  const controls = useAnimationControls();
  const doubled = [...items, ...items];

  useEffect(() => {
    controls.start({
      x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        duration,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls, direction, duration]);

  const resumeAnimation = () => {
    controls.start({
      x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        duration,
        repeat: Infinity,
        ease: "linear",
      },
    });
  };

  return (
    <div className="relative flex overflow-hidden">
      <motion.div
        className="flex shrink-0 gap-8 pr-8"
        animate={controls}
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        onHoverStart={() => controls.stop()}
        onHoverEnd={resumeAnimation}
      >
        {doubled.map((client, i) => (
          <div
            key={`${client.id}-${i}`}
            className="flex h-20 w-44 shrink-0 items-center justify-center rounded-xl bg-white/95 px-2 transition-all duration-300 hover:scale-105"
          >
            {client.logo?.url ? (
              <Image
                src={client.logo.url}
                alt={client.logo.alt || client.name || "Referans logosu"}
                width={160}
                height={60}
                className="max-h-14 max-w-[150px] object-contain"
              />
            ) : (
              <span className="text-sm font-bold tracking-tight text-[#0d4d5c]">
                {client.name}
              </span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function ReferencesSection({ clients }: ReferencesSectionProps) {
  const mid = Math.ceil(clients.length / 2);
  const row1 = clients.slice(0, mid);
  const row2 = clients.slice(mid);

  return (
    <section className="relative overflow-hidden bg-[#242629] py-16">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#1a7d8f]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#7fc7d4]/10 blur-3xl" />

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
        <MarqueeRow items={row1} direction="left" duration={350} />
        <MarqueeRow items={row2} direction="right" duration={360} />
      </div>
    </section>
  );
}
