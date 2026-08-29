import { Hero } from "@/components/Hero";
import { NoFees } from "@/components/NoFees";
import { About } from "@/components/About";
import { Steps } from "@/components/Steps";
import { Reassurance } from "@/components/Reassurance";
import { Faq } from "@/components/Faq";
import { RequestForm } from "@/components/RequestForm";
import { CONTACT } from "@/lib/site";
import {
  IconMail,
  IconPhone,
  IconShield,
  IconWhatsApp,
} from "@/components/icons";

export default function Home() {
  return (
    <>
      <Hero />
      <NoFees />
      <About />

      <Steps />

      <Reassurance />

      <Faq />

      {/* ---- Contact / QCM ---- */}
      <section id="contact" className="section-anchor relative overflow-hidden bg-navy-950 py-20 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-[#040818]" />
        <div className="hero-grid-veil absolute inset-0 opacity-40" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(46rem 30rem at 50% 0%, rgba(204,170,99,0.09), transparent 62%)",
          }}
        />

        <div className="container-site relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold-400">
              <span className="h-px w-7 bg-gold-400/70" aria-hidden="true" />
              Déposer une demande
              <span className="h-px w-7 bg-gold-400/70" aria-hidden="true" />
            </p>
            <h2 className="mt-3 font-serif text-[clamp(1.6rem,3.2vw,2.2rem)] font-semibold leading-tight text-white">
              QCM — DÉCRIVEZ VOTRE ESCROQUERIE
            </h2>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-white/70">
              Quelques minutes suffisent. Les éléments communiqués seront
              examinés avec la plus grande confidentialité.
            </p>
          </div>

          <div className="mt-12">
            <RequestForm />
          </div>

          <div className="divider-fade mt-16" />

          <div className="mt-8 flex flex-col items-center gap-5">
            <p className="flex items-center gap-2 text-[0.82rem] uppercase tracking-[0.16em] text-gold-400">
              <IconShield size={16} />
              Une question ? Contactez le cabinet directement
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <a
                href={CONTACT.phoneTel}
                className="group flex items-center gap-2.5"
                aria-label={`Appeler le ${CONTACT.phoneDisplay}`}
              >
                <span className="pastille pastille-phone">
                  <IconPhone size={17} />
                </span>
                <span className="text-[0.92rem] font-semibold text-white group-hover:text-gold-300">
                  {CONTACT.phoneDisplay}
                </span>
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5"
                aria-label="Contacter sur WhatsApp"
              >
                <span className="pastille pastille-whatsapp">
                  <IconWhatsApp size={17} />
                </span>
                <span className="text-[0.92rem] font-semibold text-white group-hover:text-gold-300">
                  WhatsApp
                </span>
              </a>
              <a
                href={CONTACT.emailMailto}
                className="group flex items-center gap-2.5"
                aria-label="Écrire un email"
              >
                <span className="pastille pastille-email">
                  <IconMail size={17} />
                </span>
                <span className="text-[0.92rem] font-semibold text-white break-all group-hover:text-gold-300">
                  {CONTACT.email}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}