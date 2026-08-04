import Link from "next/link";
import { LogoBadge } from "@/components/shared/LogoBadge";

export function HeroSection() {
  return (
    <section className="bg-mesh relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <LogoBadge />

          <h1 className="font-heading mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 md:text-6xl">
            İşinizi büyütürken
            <br />
            <span className="text-gradient-teal">yol arkadaşınız</span> olalım
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600">
            Yatırım danışmanlığından KVKK&apos;ya, teşvik ve hibelerden
            marka-patent vekilliğine kadar 18.000&apos;i aşkın firmaya tek çatı
            altında hizmet veriyoruz.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/iletisim"
              className="rounded-full bg-gradient-to-r from-teal-500 to-teal-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition-transform hover:scale-[1.03]"
            >
              Ücretsiz Ön Görüşme
            </Link>
            <Link
              href="/hizmetlerimiz"
              className="rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-teal-300 hover:text-teal-700"
            >
              Hizmetleri İncele
            </Link>
          </div>
        </div>

        <div className="glass-card mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 rounded-3xl p-8 shadow-xl shadow-teal-900/5 md:grid-cols-4">
          {[
            { value: "25+", label: "Yıl tecrübe" },
            { value: "200+", label: "Uzman danışman" },
            { value: "18.000+", label: "Firma" },
            { value: "7", label: "Grup şirketi" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-semibold text-teal-700">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
