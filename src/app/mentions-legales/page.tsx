import type { Metadata } from "next";
import { LegalPageShell, LegalSection } from "@/components/LegalPageShell";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales — Thomas Zanitti, Avocat",
  description:
    "Mentions légales du site de Thomas Zanitti, avocat au Barreau de Brest.",
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPageShell title="Mentions légales" updated="2026">
      <LegalSection title="Éditeur du site">
        <p>
          Le présent site est édité par :
        </p>
        <p className="rounded-xl bg-mist p-4">
          Thomas Zanitti, avocat au Barreau de Brest
          <br />
          Barreau : {CONTACT.localisation} —{" "}
          <span className="font-semibold">[N° du Barreau : À COMPLÉTER]</span>
          <br />
          <span className="font-semibold">[Nom et adresse du cabinet : À COMPLÉTER]</span>
          <br />
          Email : {CONTACT.email}
          <br />
          Téléphone : {CONTACT.phoneDisplay}
        </p>
        <p>
          <span className="font-semibold">[N° SIREN : À COMPLÉTER]</span> —
          <span className="font-semibold"> [N° de toque : À COMPLÉTER]</span>
        </p>
      </LegalSection>

      <LegalSection title="Directeur de la publication">
        <p>Thomas Zanitti, avocat au Barreau de Brest.</p>
      </LegalSection>

      <LegalSection title="Hébergement">
        <p>
          Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina,
          CA 91723, États-Unis. Les informations relatives à l&rsquo;hébergement
          sont disponibles à l&rsquo;adresse{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gold-700 underline decoration-gold-300 underline-offset-2 hover:text-gold-800"
          >
            vercel.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Activité et règlementation">
        <p>
          La profession d&rsquo;avocat est réglementée. L&rsquo;inscription au
          barreau de Brest est exigée pour l&rsquo;exercice de la profession.{" "}
          <span className="font-semibold">
            [Informations relatives au CNB / RIN et aux règles professionnelles
            applicables : À COMPLÉTER]
          </span>
        </p>
        <p>
          <span className="font-semibold">
            [Assurance professionnelle : raison sociale et étendue de la
            garantie — À COMPLÉTER]
          </span>
        </p>
        <p>
          <span className="font-semibold">
            [Médiateur de la consommation le cas échéant : À COMPLÉTER]
          </span>
        </p>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          L&rsquo;ensemble des éléments du site (textes, structure, photographies,
          éléments graphiques) est protégé par le droit de la propriété
          intellectuelle. Toute reproduction ou représentation, totale ou
          partielle, sans autorisation préalable est interdite.
        </p>
      </LegalSection>

      <LegalSection title="Responsabilité">
        <p>
          Les informations publiées sur ce site sont fournies à titre
          informatif. Elles ne constituent ni un conseil juridique, ni une
          offre de services, ni une garantie de résultat. Chaque situation
          doit faire l&rsquo;objet d&rsquo;une analyse individuelle. Le site ne
          saurait être tenu responsable d&rsquo;une utilisation qui en serait
          faite hors de ce cadre.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Pour toute question relative aux présentes mentions : {CONTACT.email}
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}