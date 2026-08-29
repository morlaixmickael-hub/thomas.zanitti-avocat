import { IconCheck, IconLock } from "@/components/icons";

export function NoFees() {
  return (
    <section className="relative z-10 -mt-10 pb-4 lg:-mt-14">
      <div className="container-site">
        <div className="card mx-auto max-w-3xl px-8 py-9 shadow-[0_30px_60px_-38px_rgba(13,22,48,0.45)] lg:px-12 lg:py-10">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 text-gold-700">
              <IconLock size={26} strokeWidth={1.5} />
            </span>
            <div>
              <h2 className="font-serif text-lg font-semibold tracking-wide text-navy-900 lg:text-xl">
                AUCUN FRAIS POUR DÉPOSER UNE DEMANDE
              </h2>
              <p className="mt-2 text-[0.94rem] leading-relaxed text-navy-700/90">
                Le dépôt d&rsquo;une demande ne nécessite aucun paiement initial.
                Les conditions de rémunération sont déterminées selon les
                caractéristiques et les conditions d&rsquo;intervention applicables
                au dossier.
              </p>
              <p className="mt-3 flex items-start gap-2 text-[0.82rem] leading-relaxed text-navy-700/75">
                <IconCheck size={15} className="mt-0.5 shrink-0 text-gold-600" />
                Chaque dossier est étudié individuellement : des éléments
                fournis et des conditions d&rsquo;intervention propres à votre
                situation dépendent la suite donnée à la demande.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}