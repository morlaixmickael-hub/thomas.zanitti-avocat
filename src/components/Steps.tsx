import {
  IconArrowRight,
  IconFile,
  IconGavel,
  IconHandshake,
  IconSearch,
} from "@/components/icons";

const STEPS = [
  {
    num: "01",
    title: "DÉPOSEZ VOTRE DEMANDE",
    text: "Répondez au questionnaire en quelques minutes.",
    Icon: IconFile,
  },
  {
    num: "02",
    title: "ANALYSE DE VOTRE DOSSIER",
    text: "Nous étudions les éléments communiqués afin d'évaluer les possibilités d'intervention.",
    Icon: IconSearch,
  },
  {
    num: "03",
    title: "ACTION JURIDIQUE",
    text: "Les démarches adaptées sont déterminées selon les caractéristiques du dossier.",
    Icon: IconGavel,
  },
  {
    num: "04",
    title: "RÉCUPÉRATION & VERSEMENT",
    text: "Les modalités de rémunération sont appliquées conformément aux conditions convenues.",
    Icon: IconHandshake,
  },
];

export function Steps() {
  return (
    <section id="comment-ca-marche" className="section-anchor bg-mist py-20 lg:py-24">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow eyebrow--center justify-center">Déroulement</p>
          <h2 className="section-title section-title--lg mt-3">
            COMMENT ÇA MARCHE ?
          </h2>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-navy-700/85">
            Un accompagnement structuré, de l&rsquo;étude de votre situation à la
            finalisation du dossier.
          </p>
        </div>

        <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ num, title, text, Icon }, i) => (
            <div key={num} className="relative">
              <div className="step-card h-full p-7">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 text-gold-400 shadow-[0_12px_26px_-14px_rgba(13,22,48,0.6)]">
                    <Icon size={24} strokeWidth={1.5} />
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-serif text-[1.9rem] font-semibold text-navy-200"
                  >
                    {num}
                  </span>
                </div>
                <h3 className="mt-5 text-[0.98rem] font-bold tracking-wide text-navy-900">
                  {title}
                </h3>
                <p className="mt-3 text-[0.88rem] leading-relaxed text-navy-700/85">
                  {text}
                </p>
              </div>

              {i < STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-[1.35rem] top-1/2 z-10 hidden -translate-y-1/2 lg:block"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold-300 bg-white text-gold-600 shadow-sm">
                    <IconArrowRight size={17} />
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}