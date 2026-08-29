import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import {
  IconCheck,
  IconMail,
  IconPhone,
  IconShield,
  IconWhatsApp,
} from "@/components/icons";

const TRUST_ITEMS = [
  "Aucun paiement initial",
  "Rémunération selon les conditions du dossier",
  "Accompagnement personnalisé",
  "Confidentialité",
];

function ContactPastilles() {
  return (
    <div className="flex items-center gap-5">
      <a
        href={CONTACT.phoneTel}
        aria-label={`Appeler le ${CONTACT.phoneDisplay}`}
        className="group flex items-center gap-2.5"
      >
        <span className="pastille pastille-phone">
          <IconPhone size={19} />
        </span>
        <span className="leading-tight">
          <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white/60">
            Appeler
          </span>
          <span className="block text-[0.85rem] font-semibold text-white">
            {CONTACT.phoneDisplay}
          </span>
        </span>
      </a>

      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter sur WhatsApp"
        className="group flex items-center gap-2.5"
      >
        <span className="pastille pastille-whatsapp">
          <IconWhatsApp size={19} />
        </span>
        <span className="leading-tight">
          <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white/60">
            WhatsApp
          </span>
          <span className="block text-[0.85rem] font-semibold text-white">Message</span>
        </span>
      </a>

      <a
        href={CONTACT.emailMailto}
        aria-label="Écrire un email"
        className="group flex items-center gap-2.5"
      >
        <span className="pastille pastille-email">
          <IconMail size={19} />
        </span>
        <span className="leading-tight">
          <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white/60">
            Email
          </span>
          <span className="block text-[0.85rem] font-semibold text-white">
            Écrire un message
          </span>
        </span>
      </a>
    </div>
  );
}

function TrustRow() {
  return (
    <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
      {TRUST_ITEMS.map((item, i) => (
        <div key={item} className="flex items-center gap-3">
          {i > 0 && (
            <span
              aria-hidden="true"
              className="mr-7 hidden h-4 w-px bg-white/20 sm:block"
            />
          )}
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold-500/50 text-gold-400">
            <IconCheck size={12} />
          </span>
          <span className="text-[0.8rem] leading-snug text-white/85">{item}</span>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-[#040818]" />
      <div className="hero-grid-veil absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(52rem 34rem at 78% 34%, rgba(204,170,99,0.10), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(7,14,32,0.6), transparent 26%)",
        }}
      />

      <div className="container-site relative">
        <div className="grid items-center gap-14 pt-32 pb-14 lg:grid-cols-12 lg:gap-8 lg:pt-40 lg:pb-20">
          {/* ---- Text ---- */}
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-300">
              <IconShield size={14} />
              Récupération de fonds après escroquerie
            </p>

            <h1 className="mt-6 font-serif text-[clamp(2.05rem,4.6vw,3.35rem)] font-semibold leading-[1.08] tracking-tight text-white">
              Victime d&rsquo;une escroquerie ?
              <span className="mt-2 block">
                Nous agissons pour{" "}
                <span className="text-gold-400">récupérer vos fonds</span>.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-white/70">
              Par virement bancaire, cryptomonnaie ou les deux.
            </p>

            <div className="mt-8">
              <TrustRow />
            </div>
          </div>

          {/* ---- Photo ---- */}
          <div className="relative lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[520px]">
              {/* décor : étagère silhouettée */}
              <div
                aria-hidden="true"
                className="absolute -left-10 -top-10 hidden h-40 w-24 lg:block"
              >
                <div className="absolute inset-x-0 top-0 h-[70%] rounded-xl border border-white/[0.07] bg-white/[0.02]" />
                <div className="absolute right-0 bottom-0 h-[55%] w-[78%] rounded-lg border border-white/[0.07] bg-white/[0.02]" />
                <div className="absolute left-0 bottom-0 h-[40%] w-[55%] rounded-lg border border-white/[0.07] bg-white/[0.02]" />
              </div>

              {/* lampe : lueur chaude */}
              <div
                aria-hidden="true"
                className="absolute -right-8 -top-14 hidden h-56 w-56 lg:block"
              >
                <div
                  className="absolute inset-0 rounded-full opacity-70"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(232,196,120,0.28), rgba(232,196,120,0.05) 45%, transparent 70%)",
                  }}
                />
              </div>

              {/* la photo fondue */}
              <div className="relative aspect-[513/409] w-full">
                <Image
                  src="/images/thomas-zanitti.png"
                  alt="Thomas Zanitti, avocat au Barreau de Brest"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="photo-blend object-cover"
                />
                <div
                  aria-hidden="true"
                  className="photo-tone pointer-events-none absolute inset-0"
                />
                {/* reflet chaud (lumière de bureau) */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(46% 32% at 70% 12%, rgba(232,196,120,0.14), transparent 70%)",
                  }}
                />
              </div>

              {/* bureau : plan + liseré */}
              <div aria-hidden="true" className="relative -mt-3 h-[4.5rem]">
                <div className="absolute inset-x-0 top-0 h-[3.5rem] rounded-t-[2.2rem] bg-navy-800" />
                <div className="absolute inset-x-[6%] top-[0.4rem] h-1 rounded-full bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-10 bg-navy-950" />
              </div>
            </div>
          </div>
        </div>

        {/* ---- Barre basse : CTA + contacts discrets ---- */}
        <div className="relative border-t border-white/10 pb-14 pt-7 lg:pb-16">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <a href="#contact" className="btn btn-on-navy btn-xl">
                Faire une demande
              </a>
              <Link
                href="#comment-ca-marche"
                className="btn btn-on-navy-ghost btn-md"
              >
                Comment ça marche
              </Link>
            </div>
            <ContactPastilles />
          </div>
        </div>
      </div>
    </section>
  );
}