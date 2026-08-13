"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedNumberProps {
  value: string;
  duration?: number;
}

function parseStatValue(raw: string): { number: number; suffix: string } {
  const match = raw.match(/^(\d+(?:[.,]\d+)?)(.*)$/);
  if (!match) return { number: 0, suffix: raw };
  return { number: parseFloat(match[1].replace(",", ".")), suffix: match[2] };
}

export function AnimatedNumber({ value, duration = 1.6 }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const { number, suffix } = parseStatValue(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const isInteger = Number.isInteger(number);
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = number * eased;
      setDisplay(isInteger ? Math.round(current) : Number(current.toFixed(1)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, number, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
