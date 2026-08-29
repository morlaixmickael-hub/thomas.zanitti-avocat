import type { Metadata } from "next";
import { LegalPageShell, LegalSection } from "@/components/LegalPageShell";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions d'intervention — Thomas Zanitti, Avocat",
  description:
    "Conditions générales d'intervention du cabinet Thomas Zanitti, avocat au Barreau de Brest, en matière de récupération de fonds.",
  robots: { index: false, follow: true },
};

export default function ConditionsInterventionPage() {
  return (
    <LegalPageShell title="Conditions d'intervention" updated="2026">
      <LegalSection title="Objet">
        <p>
          Les présentes conditions exposent le cadre général des interventions
          du cabinet Thomas Zanitti en matière de récupération de fonds après
          escroquerie. Elles ne constituent pas un contrat et n&rsquo;emportent
          aucune obligation d&rsquo;intervenir.
        </p>
      </LegalSection>

      <LegalSection title="Étude préalable">
        <p>
          Chaque demande fait l&rsquo;objet d&rsquo;une analyse préalable des
          éléments communiqués, afin d&rsquo;évaluer les possibilités
          d&rsquo;intervention. Aucune intervention n&rsquo;est engagée sans
          examen préalable du dossier, et l&rsquo;absence de suite donnée à une
          demande ne peut être interprétée comme une position sur le fond.
        </p>
      </LegalSection>

      <LegalSection title="Absence de garantie de résultat">
        <p>
          Aucune intervention juridique ne peut garantir un résultat. La
          récupération de fonds dépend d&rsquo;une pluralité de facteurs, dont
          certains échappent à tout contrôle (nature des faits, éléments
          disponibles, juridictions concernées, localisation des fonds).{" "}
          <strong>
            Le cabinet n&rsquo;offre aucune garantie de récupération totale ou
            partielle des fonds.
          </strong>
        </p>
      </LegalSection>

      <LegalSection title="Aucun paiement initial">
        <p>
          Le dépôt d&rsquo;une demande ne nécessite aucun paiement initial. Les
          conditions de rémunération sont déterminées selon les
          caractéristiques et les conditions d&rsquo;intervention applicables au
          dossier, et sont portées à votre connaissance avant le début de toute
          intervention. Elles peuvent prendre la forme d&rsquo;honoraires ou de
          conditions spécifiques, le cas échéant fonction de l&rsquo;issue de
          l&rsquo;affaire — dans le respect des règles professionnelles
          applicables.
        </p>
      </LegalSection>

      <LegalSection title="Éléments à fournir">
        <p>
          Pour l&rsquo;étude du dossier, peuvent être utiles : les preuves de
          paiement, les échanges ou conversations, les documents relatifs à la
          plateforme ou au compte concerné, ainsi que toute pièce permettant de
          documenter la chronologie des faits.
        </p>
        <p>
          <strong>
            À l&rsquo;inverse, ne doivent jamais être transmis : mots de passe,
            clés privées, seed phrase, codes 2FA, codes bancaires ou phrases de
            récupération.
          </strong>
        </p>
      </LegalSection>

      <LegalSection title="Confidentialité">
        <p>
          Les éléments communiqués sont couverts par le secret professionnel et
          traités de manière strictement confidentielle. Ils ne sont utilisés
          que pour l&rsquo;étude et, le cas échéant, le suivi du dossier.
        </p>
      </LegalSection>

      <LegalSection title="Entrée en relation et fin de l'étude">
        <p>
          L&rsquo;étude d&rsquo;un dossier ne crée pas de relation d&rsquo;avocat
          ni d&rsquo;obligation d&rsquo;intervention. Une mission d&rsquo;avocat
          n&rsquo;est constituée qu&rsquo;après acceptation expresse de la mission
          et, le cas échéant, signature de la convention d&rsquo;honoraires.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Pour toute question relative aux conditions d&rsquo;intervention :
          {CONTACT.email} — {CONTACT.phoneDisplay}
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}