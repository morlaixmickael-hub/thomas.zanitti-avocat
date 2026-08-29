import type { ReactNode } from "react";

export function LegalPageShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-mist pb-20 pt-32 lg:pb-24 lg:pt-40">
      <div className="container-site">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold-600">
            <span className="h-px w-7 bg-gold-600/70" aria-hidden="true" />
            Informations légales
          </p>
          <h1 className="mt-3 font-serif text-[clamp(1.7rem,3.4vw,2.4rem)] font-semibold leading-tight text-navy-900">
            {title}
          </h1>
          <p className="mt-3 text-[0.85rem] text-navy-700/75">
            Dernière mise à jour : {updated}
          </p>

          <div className="mt-10 rounded-2xl border border-line bg-white p-8 text-[0.95rem] leading-relaxed text-navy-800 shadow-[0_24px_50px_-40px_rgba(13,22,48,0.4)] sm:p-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-9 first:mt-0">
      <h2 className="font-serif text-lg font-semibold text-navy-900">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}