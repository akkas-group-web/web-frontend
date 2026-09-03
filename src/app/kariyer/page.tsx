import type { Metadata } from "next";

import { CareerHero } from "@/components/career/CareerHero";
import { CareerBenefits } from "@/components/career/CareerBenefits";
import { CareerApplicationForm } from "@/components/career/CareerApplicationForm";

export const metadata: Metadata = {
  title: "Kariyer | Akkaş Group",
  description:
    "Akkaş Group kariyer fırsatlarını keşfedin ve ekibimize katılmak için iş başvurunuzu iletin.",
};

export default function CareerPage() {
  return (
    <main>
      <CareerHero />
      <CareerBenefits />
      <CareerApplicationForm />
    </main>
  );
}