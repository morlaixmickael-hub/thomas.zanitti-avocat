"use client";

import { useState } from "react";
import { IconChevron } from "@/components/icons";

const FAQS = [
  {
    q: "Comment déposer une demande ?",
    a: "Répondez au questionnaire en ligne : il permet de décrire votre situation (type d'escroquerie, montants, dates, faits). Les éléments communiqués sont ensuite étudiés afin d'évaluer les possibilités d'intervention.",
  },
  {
    q: "Quels éléments fournir ?",
    a: "Plus la situation est documentée, plus l'analyse peut être précise : preuves de paiement, échanges ou conversations, documents relatifs à la plateforme ou au compte concerné. Aucun de ces éléments n'est exigé a priori pour déposer une demande.",
  },
  {
    q: "Puis-je déposer une demande si je n'ai plus accès à la plateforme ?",
    a: "Oui. L'absence d'accès à la plateforme ou au compte ne bloque pas le dépôt d'une demande. Indiquez simplement les éléments dont vous disposez encore : relevés, captures d'écran, emails, références de transactions.",
  },
  {
    q: "Puis-je transmettre une demande concernant une escroquerie en cryptomonnaie ?",
    a: "Oui, les demandes concernant des fonds transférés en cryptomonnaie peuvent être étudiées, y compris lorsqu'ils ont été convertis ou transférés. Chaque dossier fait l'objet d'une analyse selon ses propres caractéristiques.",
  },
  {
    q: "Y a-t-il un paiement initial ?",
    a: "Le dépôt d'une demande ne nécessite aucun paiement initial. Les conditions de rémunération sont déterminées selon les caractéristiques et les conditions d'intervention applicables au dossier.",
  },
  {
    q: "Comment sont déterminées les conditions de rémunération ?",
    a: "Les conditions de rémunération sont définies au cas par cas, selon les caractéristiques du dossier et les conditions d'intervention applicables. Elles vous sont explicitées avant toute intervention. Elles ne sont jamais liées à une garantie de résultat.",
  },
  {
    q: "Quels documents peuvent être utiles ?",
    a: "Peuvent être utiles : les preuves de paiement (virements, transactions crypto), les échanges avec le prétendu interlocuteur, les documents de la plateforme, la chronologie des faits et, le cas échéant, les références de la plainte ou du signalement effectué.",
  },
  {
    q: "Que ne dois-je jamais transmettre ?",
    a: "Ne transmettez jamais vos mots de passe, clés privées, seed phrase, codes 2FA, codes bancaires ou phrases de récupération. Aucun de ces éléments ne vous sera demandé dans le cadre d'une demande.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-anchor bg-mist py-20 lg:py-24">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow eyebrow--center justify-center">Information</p>
          <h2 className="section-title section-title--lg mt-3">
            QUESTIONS FRÉQUENTES
          </h2>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-navy-700/85">
            Les réponses ci-dessous sont d&rsquo;ordre général : chaque dossier
            est étudié individuellement.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3.5">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className={`faq-item ${open ? "open" : ""}`}>
                <button
                  type="button"
                  className="faq-btn flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span className="text-[0.95rem] font-semibold text-navy-900 sm:text-[1rem]">
                    {item.q}
                  </span>
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 ${
                      open
                        ? "rotate-180 border-gold-500 bg-gold-500 text-white"
                        : "border-navy-200 text-navy-600"
                    }`}
                  >
                    <IconChevron size={16} />
                  </span>
                </button>
                {open && (
                  <div
                    id={`faq-panel-${i}`}
                    className="px-5 pb-5 sm:px-6 sm:pb-6"
                  >
                    <div className="divider-fade-dark mb-4" />
                    <p className="text-[0.92rem] leading-relaxed text-navy-700/90">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}