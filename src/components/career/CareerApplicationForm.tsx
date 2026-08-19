import { FileUp, Send } from "lucide-react";

export function CareerApplicationForm() {
  return (
    <section id="basvuru" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#118B99]">
            Başvuru
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#173D43]">
            İş Başvuru Formu
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#667F84]">
            Bilgilerinizi ve özgeçmişinizi bize iletin. İnsan Kaynakları ekibimiz
            başvurunuzu değerlendirsin.
          </p>
        </div>

        <form className="rounded-3xl border border-[#118B99]/10 bg-[#FCFEFE] p-6 sm:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#31565C]">
                Ad Soyad
              </label>

              <input
                type="text"
                placeholder="Adınız ve soyadınız"
                className="h-12 w-full rounded-xl border border-[#118B99]/15 bg-white px-4 text-sm outline-none transition focus:border-[#118B99]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#31565C]">
                E-posta
              </label>

              <input
                type="email"
                placeholder="ornek@eposta.com"
                className="h-12 w-full rounded-xl border border-[#118B99]/15 bg-white px-4 text-sm outline-none transition focus:border-[#118B99]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#31565C]">
                Telefon
              </label>

              <input
                type="tel"
                placeholder="05XX XXX XX XX"
                className="h-12 w-full rounded-xl border border-[#118B99]/15 bg-white px-4 text-sm outline-none transition focus:border-[#118B99]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#31565C]">
                İlgilendiğiniz Alan
              </label>

              <select className="h-12 w-full rounded-xl border border-[#118B99]/15 bg-white px-4 text-sm text-[#526F74] outline-none transition focus:border-[#118B99]">
                <option value="">Alan seçiniz</option>
                <option>Yazılım / Teknoloji</option>
                <option>Pazarlama</option>
                <option>İnsan Kaynakları</option>
                <option>Danışmanlık</option>
                <option>Finans / Muhasebe</option>
                <option>Diğer</option>
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-[#31565C]">
              CV Yükle
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-[#118B99]/30 bg-white p-5 transition hover:bg-[#F3FAFA]">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E4F5F6]">
                <FileUp className="h-5 w-5 text-[#118B99]" />
              </div>

              <div>
                <p className="text-sm font-medium text-[#31565C]">
                  CV dosyanızı seçin
                </p>

                <p className="mt-0.5 text-xs text-[#84989C]">
                  PDF, DOC veya DOCX
                </p>
              </div>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
              />
            </label>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-[#31565C]">
              Kısa Mesaj
            </label>

            <textarea
              rows={5}
              placeholder="Kendinizden ve kariyer hedeflerinizden kısaca bahsedebilirsiniz..."
              className="w-full resize-none rounded-xl border border-[#118B99]/15 bg-white p-4 text-sm outline-none transition focus:border-[#118B99]"
            />
          </div>

          <button
            type="submit"
            className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#118B99] text-sm font-semibold text-white transition hover:bg-[#0D747E]"
          >
            Başvuruyu Gönder
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}