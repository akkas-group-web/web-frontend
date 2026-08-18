import { GraduationCap, TrendingUp, Users } from "lucide-react";

const benefits = [
  {
    title: "Gelişim ve Büyüme",
    description:
      "Kişisel ve profesyonel gelişiminizi destekleyen bir çalışma ortamı sunuyoruz.",
    icon: TrendingUp,
  },
  {
    title: "Güçlü Ekip Ruhu",
    description:
      "Birbirimize değer verir, bilgi paylaşır ve başarıyı birlikte büyütürüz.",
    icon: Users,
  },
  {
    title: "Eğitim ve Gelişim",
    description:
      "Eğitim programları ve gelişim fırsatlarıyla çalışanlarımızın yanındayız.",
    icon: GraduationCap,
  },
];

export function CareerBenefits() {
  return (
    <section className="bg-[#F7FBFB] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#118B99]">
            Akkaş Group
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#173D43]">
            Neden Biz?
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#118B99]/10 bg-white p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E4F5F6]">
                <Icon className="h-5 w-5 text-[#118B99]" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[#173D43]">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#667F84]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}