import Image from "next/image";
import { CONTACT } from "@/lib/site";
import { IconCheck, IconGavel } from "@/components/icons";

const POINTS = [
  "Analyse des éléments communiqués avant toute intervention",
  "Démarches adaptées selon les caractéristiques du dossier",
  "Information claire sur les conditions de rémunération",
];

export function About() {
  return (
    <section id="a-propos" className="section-anchor bg-white py-20 lg:py-24">
      <div className="container-site">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <div
              aria-hidden="true"
              className="absolute -left-6 -top-6 hidden h-full w-full rounded-t-[2.5rem] rounded-br-[2.5rem] border border-gold-300/60 sm:block"
            />
            <div className="relative overflow-hidden rounded-t-[2.5rem] rounded-br-[2.5rem] border border-line bg-mist p-4">
              <div className="relative aspect-[513/409] overflow-hidden rounded-t-[2rem] rounded-br-[2rem]">
                <Image
                  src="/images/thomas-zanitti.png"
                  alt="Thomas Zanitti, avocat au Barreau de Brest"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-900/70 to-transparent"
                />
                <div className="absolute inset-x-4 bottom-4 flex items-center gap-3">
                  <span className="pastille-name">TZ</span>
                  <div className="rounded-full bg-navy-950/60 px-4 py-1.5 backdrop-blur-sm">
                    <p className="text-[0.85rem] font-semibold text-white">
                      Thomas Zanitti
                    </p>
                    <p className="text-[0.62rem] uppercase tracking-[0.16em] text-gold-300">
                      Avocat au Barreau de Brest
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="eyebrow">Le cabinet</p>
            <h2 className="section-title section-title--lg mt-3">
              Un accompagnement juridique dédié
            </h2>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-navy-700/90">
              <strong className="text-navy-900">Thomas Zanitti</strong>, avocat
              au Barreau de Brest, accompagne les victimes d&rsquo;escroquerie
              dans la récupération de leurs fonds, qu&rsquo;ils aient été
              transférés par virement bancaire, en cryptomonnaie ou par les deux
              canaux.
            </p>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-navy-700/90">
              Chaque dossier est examiné individuellement : les éléments
              communiqués sont étudiés afin d&rsquo;évaluer les possibilités
              d&rsquo;intervention, puis les démarches adaptées sont déterminées
              selon les caractéristiques de la situation.
            </p>

            <ul className="mt-7 space-y-3.5">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                    <IconCheck size={13} />
                  </span>
                  <span className="text-[0.93rem] leading-relaxed text-navy-800">
                    {p}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#contact" className="btn btn-navy btn-md">
                Commencer ma demande
              </a>
              <p className="flex items-center gap-2.5 text-[0.85rem] text-navy-700">
                <IconGavel size={18} className="text-gold-600" />
                {CONTACT.localisation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}