import {
  IconClock,
  IconLock,
  IconScale,
  IconShield,
} from "@/components/icons";

const PILLARS = [
  {
    title: "EXPERTISE JURIDIQUE",
    text: "Une analyse juridique adaptée à chaque situation d'escroquerie.",
    Icon: IconScale,
  },
  {
    title: "CONFIDENTIALITÉ",
    text: "Les éléments communiqués sont traités avec la plus grande discrétion.",
    Icon: IconLock,
  },
  {
    title: "RÉACTIVITÉ",
    text: "Une prise en charge rapide dès la réception des éléments.",
    Icon: IconClock,
  },
  {
    title: "ENGAGEMENT",
    text: "Un accompagnement diligent jusqu'au terme du dossier.",
    Icon: IconShield,
  },
];

export function Reassurance() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-site">
        <div className="mx-auto text-center">
          <p className="font-serif text-[0.95rem] italic text-navy-700/80">
            « Chaque dossier est étudié individuellement, sans garantie de
            résultat, et selon les conditions d&rsquo;intervention applicables
            à votre situation. »
          </p>
        </div>

        <div className="mt-10 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ title, text, Icon }, i) => (
            <div key={title} className="relative px-4 text-center sm:px-6">
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-line lg:block"
                />
              )}
              <span className="inline-flex h-13 w-13 items-center justify-center rounded-full border border-gold-300 bg-gold-50 text-gold-600">
                <Icon size={23} strokeWidth={1.5} />
              </span>
              <h3 className="mt-4 text-[0.82rem] font-bold tracking-[0.14em] text-navy-900">
                {title}
              </h3>
              <p className="mx-auto mt-2 max-w-[15rem] text-[0.84rem] leading-relaxed text-navy-700/80">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}