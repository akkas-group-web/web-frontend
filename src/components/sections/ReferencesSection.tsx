"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimationControls } from "framer-motion";

import type { ClientReference } from "@/types/reference";

interface ReferencesSectionProps {
  clients: ClientReference[];
}

function MarqueeRow({
  items,
  direction,
  duration,
  isActive,
}: {
  items: ClientReference[];
  direction: "left" | "right";
  duration: number;
  isActive: boolean;
}) {
  const controls = useAnimationControls();
  const doubled = [...items, ...items];

  const startX = direction === "left" ? "0%" : "-50%";
  const endX = direction === "left" ? "-50%" : "0%";

  useEffect(() => {
    if (!isActive) {
      controls.stop();
      controls.set({ x: startX });
      return;
    }

    controls.set({ x: startX });

    controls.start({
      x: endX,
      transition: {
        duration,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls, duration, endX, isActive, startX]);

  const resumeAnimation = () => {
    if (!isActive) return;

    controls.start({
      x: endX,
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
        initial={{ x: startX }}
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
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isActive, setIsActive] = useState(false);

const orderedClients = clients.filter(
  (client) =>
    Number.isFinite(Number(client.displayorder)) &&
    Number(client.displayorder) > 0,
);

const unorderedClients = clients.filter(
  (client) =>
    !Number.isFinite(Number(client.displayorder)) ||
    Number(client.displayorder) <= 0,
);

// Verilen sıra numarasına göre garantiye al.
orderedClients.sort(
  (a, b) => Number(a.displayorder) - Number(b.displayorder),
);

// İlk 10 numaralı referans üst sıranın başlangıcı.
const row1Start = orderedClients.slice(0, 10);

// Sonraki 10 numaralı referans alt sıranın başlangıcı.
const row2Start = orderedClients.slice(10, 20);

// 20'den sonraki numaralılar ve numarasızlar normal akışa devam eder.
const remainingClients = [
  ...orderedClients.slice(20),
  ...unorderedClients,
];

// Kalanları iki satıra normal şekilde dağıt.
const mid = Math.ceil(remainingClients.length / 2);

const row1 = [
  ...row1Start,
  ...remainingClients.slice(0, mid),
];

const row2 = [
  ...row2Start,
  ...remainingClients.slice(mid),
];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#242629] py-16"
    >
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
        <MarqueeRow
          items={row1}
          direction="left"
          duration={1500}
          isActive={isActive}
        />

        <MarqueeRow
          items={row2}
          direction="right"
          duration={1550}
          isActive={isActive}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-20 mt-10 flex justify-center"
      >
        <Link
          href="/referanslar"
          className="group inline-flex items-center gap-2 rounded-full border border-[#7fc7d4] px-6 py-3 text-sm font-semibold text-[#7fc7d4] transition-all duration-300 hover:bg-[#7fc7d4] hover:text-[#242629]"
        >
          Tüm Referansları İncele
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </motion.div>
    </section>
  );
}