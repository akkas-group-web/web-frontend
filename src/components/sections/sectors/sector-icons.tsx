import {
  ClipboardCheck,
  FileCheck2,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

const icons = {
  osgb: ClipboardCheck,
  kvkk: ShieldCheck,
  quality: FileCheck2,
  compliance: HeartPulse,
};

export function getSectorIcon(icon: string) {
  return icons[icon as keyof typeof icons] ?? ClipboardCheck;
}
