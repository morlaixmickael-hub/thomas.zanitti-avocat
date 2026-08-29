import type { Metadata } from "next";
import { LegalPageShell, LegalSection } from "@/components/LegalPageShell";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Confidentialité — Thomas Zanitti, Avocat",
  description:
    "Politique de confidentialité et de protection des données du site de Thomas Zanitti, avocat au Barreau de Brest.",
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <LegalPageShell
      title="Confidentialité & protection des données"
      updated="2026"
    >
      <LegalSection title="Engagement de confidentialité">
        <p>
          Les informations transmises dans le cadre d&rsquo;une demande sont
          traitées de manière confidentielle, dans le respect du secret
          professionnel auquel est tenu l&rsquo;avocat. Elles sont utilisées
          exclusivement pour l&rsquo;étude de la situation et la détermination
          des possibilités d&rsquo;intervention.
        </p>
      </LegalSection>

      <LegalSection title="Données collectées">
        <p>
          Dans le cadre du formulaire de demande, les données suivantes peuvent
          être collectées : identité (nom, prénom), coordonnées (email,
          téléphone) et éléments relatifs à la situation décrite (type
          d&rsquo;escroquerie, montants, dates, justificatifs, description des
          faits).
        </p>
        <p>
          <span className="font-semibold">
            Aucun mot de passe, clé privée, seed phrase, code 2FA, code
            bancaire ou phrase de récupération ne doit être transmis — et aucun
            de ces éléments ne vous sera jamais demandé.
          </span>
        </p>
      </LegalSection>

      <LegalSection title="Finalités">
        <p>
          Les données sont utilisées pour : l&rsquo;étude de votre demande,
          la détermination des possibilités d&rsquo;intervention, la gestion de
          la relation et les échanges nécessaires au suivi du dossier.
        </p>
      </LegalSection>

      <LegalSection title="Base légale et durée de conservation">
        <p>
          Le traitement repose sur la mise en œuvre de mesures précontractuelles
          à votre demande (préparation d&rsquo;une intervention) et sur les
          obligations légales applicables à la profession d&rsquo;avocat,
          notamment en matière de conservation des dossiers.{" "}
          <span className="font-semibold">
            [Durées de conservation applicables : À COMPLÉTER]
          </span>
        </p>
      </LegalSection>

      <LegalSection title="Destinataires">
        <p>
          Les données sont destinées au cabinet Thomas Zanitti et ne sont pas
          transmises à des tiers, sauf obligation légale ou prestation
          strictement nécessaire au fonctionnement du site (hébergement, service
          de messagerie électronique).
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          Conformément au Règlement général sur la protection des données
          (RGPD), vous disposez d&rsquo;un droit d&rsquo;accès, de rectification,
          d&rsquo;effacement et à la limitation du traitement de vos données. Vous
          pouvez exercer ces droits en écrivant à : {CONTACT.email}
        </p>
        <p>
          Vous disposez également du droit d&rsquo;introduire une réclamation
          auprès de la CNIL :{" "}
          <span className="font-semibold">
            [Coordonnées de la CNIL : À COMPLÉTER]
          </span>
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>
          Ce site ne dépose pas de cookies publicitaires à des fins de suivi.
          Seuls des éléments strictement nécessaires au fonctionnement
          technique du site peuvent être utilisés.
        </p>
      </LegalSection>

      <LegalSection title="Sécurité des échanges">
        <p>
          La transmission de données via internet ne peut jamais garantir une
          sécurité absolue. Pour toute information ou échange sensible, il est
          recommandé d&rsquo;utiliser les canaux de contact directs du cabinet.
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}