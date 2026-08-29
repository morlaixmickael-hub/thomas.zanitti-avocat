import Link from "next/link";
import { CONTACT } from "@/lib/site";
import {
  IconMail,
  IconMapPin,
  IconPhone,
  IconWhatsApp,
} from "@/components/icons";

const NAV = [
  { label: "Accueil", href: "/#accueil" },
  { label: "À propos", href: "/#a-propos" },
  { label: "Comment ça marche", href: "/#comment-ca-marche" },
  { label: "Questions fréquentes", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const INFOS = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/confidentialite" },
  { label: "Protection des données", href: "/confidentialite" },
  { label: "Conditions d'intervention", href: "/conditions-intervention" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/80">
      <div className="h-[3px] w-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 opacity-90" />
      <div className="container-site py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.25fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="pastille-name">TZ</span>
              <div className="leading-tight">
                <p className="font-serif text-lg font-semibold text-white">
                  Thomas Zanitti
                </p>
                <p className="text-[0.64rem] uppercase tracking-[0.18em] text-gold-400">
                  Avocat au Barreau de Brest
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-[0.88rem] leading-relaxed text-white/70">
              Récupération de fonds après escroquerie.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={CONTACT.phoneTel}
                aria-label={`Appeler le ${CONTACT.phoneDisplay}`}
                className="pastille pastille-phone"
              >
                <IconPhone size={17} />
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contacter sur WhatsApp"
                className="pastille pastille-whatsapp"
              >
                <IconWhatsApp size={17} />
              </a>
              <a
                href={CONTACT.emailMailto}
                aria-label="Écrire un email"
                className="pastille pastille-email"
              >
                <IconMail size={17} />
              </a>
            </div>
          </div>

          <nav aria-label="Navigation du pied de page">
            <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[0.9rem] text-white/70 transition hover:text-gold-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Informations légales">
            <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white">
              Informations
            </h3>
            <ul className="mt-5 space-y-3">
              {INFOS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[0.9rem] text-white/70 transition hover:text-gold-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-3.5 text-[0.9rem] text-white/70">
              <li>
                <a
                  href={CONTACT.phoneTel}
                  className="flex items-center gap-3 transition hover:text-gold-300"
                >
                  <IconPhone size={16} className="shrink-0 text-gold-400" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:text-gold-300"
                >
                  <IconWhatsApp size={16} className="shrink-0 text-gold-400" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailMailto}
                  className="flex items-start gap-3 transition hover:text-gold-300"
                >
                  <IconMail size={16} className="mt-0.5 shrink-0 text-gold-400" />
                  <span className="break-all">{CONTACT.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconMapPin size={16} className="shrink-0 text-gold-400" />
                {CONTACT.localisation}
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-fade mt-14" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-[0.78rem] text-white/50 sm:flex-row">
          <p>
            © {year} Thomas Zanitti — Avocat au Barreau de Brest. Tous droits
            réservés.
          </p>
          <p className="max-w-md text-center sm:text-right">
            Ne communiquez jamais vos mots de passe, clés privées ou seed
            phrase.
          </p>
        </div>
      </div>
    </footer>
  );
}