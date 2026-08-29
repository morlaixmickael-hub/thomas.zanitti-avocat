"use client";

import { useMemo, useState } from "react";
import {
  IconArrowRight,
  IconCheck,
  IconLock,
  IconSend,
} from "@/components/icons";

type Wizard = {
  typeEscroquerie: string;
  montant: string;
  devise: string;
  datePremier: string;
  approxPremierOn: boolean;
  approxPremier: string;
  dateDernier: string;
  approxDernierOn: boolean;
  approxDernier: string;
  canal: string;
  acces: string;
  demarche: string;
  justificatifs: string[];
  description: string;
  complement: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  consent: boolean;
};

const INITIAL: Wizard = {
  typeEscroquerie: "",
  montant: "",
  devise: "EUR",
  datePremier: "",
  approxPremierOn: false,
  approxPremier: "",
  dateDernier: "",
  approxDernierOn: false,
  approxDernier: "",
  canal: "",
  acces: "",
  demarche: "",
  justificatifs: [],
  description: "",
  complement: "",
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  consent: false,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FORBIDDEN = [
  "Mot de passe",
  "Clé privée",
  "Seed phrase",
  "Code 2FA",
  "Code bancaire",
  "Phrase de récupération",
];

const stepTitles = [
  "1 sur 5",
  "2 sur 5",
  "3 sur 5",
  "4 sur 5",
  "5 sur 5",
];

const feedback: Record<string, string> = {
  typeEscroquerie: "précisez le type d'escroquerie",
  montant: "indiquez le montant total perdu",
  devise: "précisez la devise",
  datePremier: "indiquez la date ou une période approximative",
  dateDernier: "indiquez la date ou une période approximative",
  canal: "précisez le canal d'envoi des fonds",
  acces: "précisez l'accès à la plateforme",
  demarche: "précisez la démarche effectuée",
  justificatifs: "cochez au moins un justificatif",
  description: "décrivez les faits",
  nom: "indiquez votre nom",
  email: "indiquez un email valide",
  consent: "merci de valider l'utilisation des éléments communiqués",
};

export function RequestForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Wizard>(INITIAL);
  const [errors, setErrors] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const set = <K extends keyof Wizard>(key: K, value: Wizard[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const toggleJustificatif = (value: string) =>
    setData((d) => ({
      ...d,
      justificatifs: d.justificatifs.includes(value)
        ? d.justificatifs.filter((v) => v !== value)
        : [...d.justificatifs, value],
    }));

  const validate = (s: number): string[] => {
    const errs: string[] = [];
    if (s === 0) {
      if (!data.typeEscroquerie) errs.push("typeEscroquerie");
      if (!data.montant) errs.push("montant");
      if (!data.devise) errs.push("devise");
    }
    if (s === 1) {
      if (!data.datePremier && !(data.approxPremierOn && data.approxPremier))
        errs.push("datePremier");
      if (!data.dateDernier && !(data.approxDernierOn && data.approxDernier))
        errs.push("dateDernier");
    }
    if (s === 2) {
      if (!data.canal) errs.push("canal");
      if (!data.acces) errs.push("acces");
      if (!data.demarche) errs.push("demarche");
    }
    if (s === 3) {
      if (data.justificatifs.length === 0) errs.push("justificatifs");
      if (!data.description.trim()) errs.push("description");
    }
    if (s === 4) {
      if (!data.nom.trim()) errs.push("nom");
      if (!EMAIL_RE.test(data.email)) errs.push("email");
      if (!data.consent) errs.push("consent");
    }
    return errs;
  };

  const next = () => {
    const errs = validate(step);
    setErrors(errs);
    if (errs.length === 0) setStep((s) => Math.min(s + 1, 4));
  };

  const buildPayload = () => {
    const label: Record<string, string> = {
      typeEscroquerie: data.typeEscroquerie,
      montant: `${data.montant} ${data.devise}`,
      datePremier:
        data.datePremier ||
        (data.approxPremierOn ? `≈ ${data.approxPremier}` : "—"),
      dateDernier:
        data.dateDernier ||
        (data.approxDernierOn ? `≈ ${data.approxDernier}` : "—"),
      canal: data.canal,
      acces: data.acces,
      demarche: data.demarche,
      justificatifs: data.justificatifs.join(", "),
      description: data.description,
      complement: data.complement || "—",
    };
    return {
      _subject: "Nouvelle demande de récupération de fonds — site",
      "Q1 — Type d'escroquerie": label.typeEscroquerie,
      "Q2 — Montant total perdu": label.montant,
      "Q3 — Date du premier paiement": label.datePremier,
      "Q4 — Date du dernier paiement": label.dateDernier,
      "Q5 — Fonds envoyés via": label.canal,
      "Q6 — Accès à la plateforme": label.acces,
      "Q7 — Plainte ou signalement": label.demarche,
      "Q8 — Justificatifs disponibles": label.justificatifs,
      "Q9 — Description des faits": data.description,
      "Q10 — Informations complémentaires": data.complement || "—",
      "Nom": data.nom,
      "Prénom": data.prenom || "—",
      "Email": data.email,
      "Téléphone": data.telephone || "—",
      _replyto: data.email,
    };
  };

  const submit = async () => {
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(buildPayload()),
      });
      const body = (await res.json()) as { ok?: boolean };
      if (res.ok || body.ok) setStatus("sent");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const errList = useMemo(
    () =>
      errors
        .map((k) => feedback[k])
        .filter((v): v is string => Boolean(v)),
    [errors]
  );

  if (status === "sent") {
    return (
      <div className="mx-auto w-full max-w-2xl rounded-2xl border border-gold-300 bg-white px-8 py-14 text-center shadow-[0_30px_60px_-40px_rgba(13,22,48,0.5)]">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold-100 to-gold-200 text-gold-600">
          <IconCheck size={30} />
        </span>
        <h3 className="mt-6 font-serif text-2xl font-semibold text-navy-900">
          VOTRE DEMANDE A ÉTÉ ENVOYÉE
        </h3>
        <p className="mx-auto mt-4 max-w-md text-[0.95rem] leading-relaxed text-navy-700/85">
          Merci pour votre confiance. Nous allons examiner les éléments
          communiqués et vous recontacter.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* Bandeau sécurité */}
      <div className="mb-8 rounded-2xl border border-gold-400/50 bg-gold-50 px-6 py-5">
        <div className="flex items-start gap-4">
          <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-700">
            <IconLock size={20} />
          </span>
          <div>
            <p className="font-semibold text-navy-900">
              Ne communiquez jamais vos mots de passe, clés privées ou seed
              phrase.
            </p>
            <p className="mt-1 text-[0.9rem] text-navy-800/85">
              <strong>Aucun de ces éléments ne vous sera demandé.</strong>
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {FORBIDDEN.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-gold-300 bg-white px-3 py-1 text-[0.72rem] font-medium text-navy-800"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-white p-6 shadow-[0_30px_60px_-42px_rgba(13,22,48,0.45)] sm:p-9">
        {/* Progression */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-[0.8rem] font-bold uppercase tracking-[0.16em] text-gold-600">
            Étape {stepTitles[step]}
          </p>
          <div className="flex gap-1.5" aria-hidden="true">
            {stepTitles.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-8 rounded-full transition-colors ${
                  i <= step ? "bg-gold-500" : "bg-navy-100"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="divider-fade-dark my-6" />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (step < 4) next();
            else void submit();
          }}
          noValidate
        >
          {step === 0 && (
            <div className="space-y-7">
              <fieldset>
                <legend className="label-q">
                  1. Quel type d&rsquo;escroquerie avez-vous subi ?
                </legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["virement", "Virement bancaire"],
                    ["crypto", "Cryptomonnaie"],
                    ["mixte", "Virement + cryptomonnaie"],
                    ["autre", "Autre"],
                  ].map(([val, lab]) => (
                    <label
                      key={val}
                      className={`radio-card ${
                        data.typeEscroquerie === val ? "active" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="typeEscroquerie"
                        value={val}
                        checked={data.typeEscroquerie === val}
                        onChange={() => set("typeEscroquerie", val)}
                      />
                      <span className="flex items-center gap-3 text-[0.92rem]">
                        <span
                          className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                            data.typeEscroquerie === val
                              ? "border-gold-500 bg-gold-500 text-white"
                              : "border-navy-200"
                          }`}
                        >
                          {data.typeEscroquerie === val && <IconCheck size={12} />}
                        </span>
                        {lab}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-5 sm:grid-cols-[1fr_220px]">
                <div>
                  <label
                    htmlFor="montant"
                    className="label-q"
                  >
                    2. Quel est le montant total perdu ?
                  </label>
                  <input
                    id="montant"
                    type="number"
                    inputMode="decimal"
                    min="0"
                    step="any"
                    placeholder="Montant"
                    value={data.montant}
                    onChange={(e) => set("montant", e.target.value)}
                    className={`field ${
                      errors.includes("montant") ? "field--error" : ""
                    }`}
                  />
                </div>
                <div>
                  <label htmlFor="devise" className="label-q">
                    Devise
                  </label>
                  <select
                    id="devise"
                    value={data.devise}
                    onChange={(e) => set("devise", e.target.value)}
                    className={`field ${
                      errors.includes("devise") ? "field--error" : ""
                    }`}
                  >
                    <option value="">— Sélectionner —</option>
                    {["EUR", "USD", "USDT", "BTC", "ETH", "Autre"].map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-7">
              {[
                {
                  key: "Premier",
                  label: "3. Date du premier paiement (même approximative)",
                  date: data.datePremier,
                  on: data.approxPremierOn,
                  approx: data.approxPremier,
                  dateKey: "datePremier" as const,
                  onKey: "approxPremierOn" as const,
                  approxKey: "approxPremier" as const,
                },
                {
                  key: "Dernier",
                  label: "4. Date du dernier paiement (même approximative)",
                  date: data.dateDernier,
                  on: data.approxDernierOn,
                  approx: data.approxDernier,
                  dateKey: "dateDernier" as const,
                  onKey: "approxDernierOn" as const,
                  approxKey: "approxDernier" as const,
                },
              ].map((q) => (
                <fieldset key={q.key}>
                  <legend className="label-q">{q.label}</legend>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      type="date"
                      value={q.date}
                      disabled={q.on}
                      onChange={(e) => set(q.dateKey, e.target.value)}
                      className={`field ${
                        errors.includes(q.dateKey) ? "field--error" : ""
                      } ${q.on ? "opacity-50" : ""}`}
                    />
                    <div className="flex items-center gap-3">
                      <input
                        id={`approx${q.key}`}
                        type="checkbox"
                        checked={q.on}
                        onChange={(e) => {
                          set(q.onKey, e.target.checked);
                          if (e.target.checked) set(q.dateKey, "");
                        }}
                        className="h-4 w-4 shrink-0 accent-[#bf9850]"
                      />
                      <label
                        htmlFor={`approx${q.key}`}
                        className="text-[0.85rem] text-navy-800"
                      >
                        Période approximative
                      </label>
                    </div>
                    {q.on && (
                      <input
                        type="text"
                        placeholder="Ex : entre avril et juin 2025"
                        value={q.approx}
                        onChange={(e) => set(q.approxKey, e.target.value)}
                        className={`field sm:col-span-2 ${
                          errors.includes(q.dateKey) ? "field--error" : ""
                        }`}
                      />
                    )}
                  </div>
                </fieldset>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-7">
              <fieldset>
                <legend className="label-q">
                  5. Les fonds ont-ils été envoyés via :
                </legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["banque", "Banque"],
                    ["plateforme", "Plateforme crypto"],
                    ["lesdeux", "Les deux"],
                    ["autre", "Autre"],
                  ].map(([val, lab]) => (
                    <label
                      key={val}
                      className={`radio-card ${
                        data.canal === val ? "active" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="canal"
                        value={val}
                        checked={data.canal === val}
                        onChange={() => set("canal", val)}
                      />
                      <span className="flex items-center gap-3 text-[0.92rem]">
                        <span
                          className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                            data.canal === val
                              ? "border-gold-500 bg-gold-500 text-white"
                              : "border-navy-200"
                          }`}
                        >
                          {data.canal === val && <IconCheck size={12} />}
                        </span>
                        {lab}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="label-q">
                  6. Avez-vous encore accès à la plateforme / au compte ?
                </legend>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ["oui", "Oui"],
                    ["non", "Non"],
                    ["partiel", "Partiellement"],
                  ].map(([val, lab]) => (
                    <label
                      key={val}
                      className={`radio-card ${
                        data.acces === val ? "active" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="acces"
                        value={val}
                        checked={data.acces === val}
                        onChange={() => set("acces", val)}
                      />
                      <span className="flex items-center gap-3 text-[0.92rem]">
                        <span
                          className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                            data.acces === val
                              ? "border-gold-500 bg-gold-500 text-white"
                              : "border-navy-200"
                          }`}
                        >
                          {data.acces === val && <IconCheck size={12} />}
                        </span>
                        {lab}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="label-q">
                  7. Avez-vous déposé plainte ou effectué un signalement ?
                </legend>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ["plainte", "Oui — plainte"],
                    ["signalement", "Oui — signalement"],
                    ["non", "Non"],
                  ].map(([val, lab]) => (
                    <label
                      key={val}
                      className={`radio-card ${
                        data.demarche === val ? "active" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="demarche"
                        value={val}
                        checked={data.demarche === val}
                        onChange={() => set("demarche", val)}
                      />
                      <span className="flex items-center gap-3 text-[0.92rem]">
                        <span
                          className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                            data.demarche === val
                              ? "border-gold-500 bg-gold-500 text-white"
                              : "border-navy-200"
                          }`}
                        >
                          {data.demarche === val && <IconCheck size={12} />}
                        </span>
                        {lab}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-7">
              <fieldset>
                <legend className="label-q">
                  8. Disposez-vous de justificatifs ?
                </legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["preuves-paiement", "Preuves de paiement"],
                    ["echanges", "Échanges / conversations"],
                    ["documents", "Documents"],
                    ["aucun", "Aucun"],
                  ].map(([val, lab]) => (
                    <label
                      key={val}
                      className={`radio-card ${
                        data.justificatifs.includes(val) ? "active" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        value={val}
                        checked={data.justificatifs.includes(val)}
                        onChange={() => toggleJustificatif(val)}
                      />
                      <span className="flex items-center gap-3 text-[0.92rem]">
                        <span
                          className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                            data.justificatifs.includes(val)
                              ? "border-gold-500 bg-gold-500 text-white"
                              : "border-navy-200"
                          }`}
                        >
                          {data.justificatifs.includes(val) && (
                            <IconCheck size={12} />
                          )}
                        </span>
                        {lab}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="description" className="label-q">
                  9. Décrivez les faits chronologiquement.
                </label>
                <textarea
                  id="description"
                  rows={6}
                  placeholder="Décrivez le déroulement des faits : premières prises de contact, les paiements effectués, etc."
                  value={data.description}
                  onChange={(e) => set("description", e.target.value)}
                  className={`field resize-y ${
                    errors.includes("description") ? "field--error" : ""
                  }`}
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-7">
              <div>
                <label htmlFor="complement" className="label-q">
                  10. Informations complémentaires.
                </label>
                <textarea
                  id="complement"
                  rows={4}
                  placeholder="Tout élément utile à l'étude de votre demande..."
                  value={data.complement}
                  onChange={(e) => set("complement", e.target.value)}
                  className="field resize-y"
                />
              </div>

              <div className="space-y-4 rounded-xl bg-mist p-5 sm:p-6">
                <p className="text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-navy-800">
                  Vos coordonnées
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nom" className="label-q">
                      Nom *
                    </label>
                    <input
                      id="nom"
                      type="text"
                      value={data.nom}
                      onChange={(e) => set("nom", e.target.value)}
                      className={`field ${
                        errors.includes("nom") ? "field--error" : ""
                      }`}
                    />
                  </div>
                  <div>
                    <label htmlFor="prenom" className="label-q">
                      Prénom
                    </label>
                    <input
                      id="prenom"
                      type="text"
                      value={data.prenom}
                      onChange={(e) => set("prenom", e.target.value)}
                      className="field"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="label-q">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="vous@exemple.fr"
                      value={data.email}
                      onChange={(e) => set("email", e.target.value)}
                      className={`field ${
                        errors.includes("email") ? "field--error" : ""
                      }`}
                    />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="label-q">
                      Téléphone
                    </label>
                    <input
                      id="telephone"
                      type="tel"
                      placeholder="06 00 00 00 00"
                      value={data.telephone}
                      onChange={(e) => set("telephone", e.target.value)}
                      className="field"
                    />
                  </div>
                </div>

                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={data.consent}
                    onChange={(e) => set("consent", e.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 accent-[#bf9850]"
                  />
                  <span
                    className={`text-[0.85rem] leading-relaxed ${
                      errors.includes("consent")
                        ? "text-[#c0392b]"
                        : "text-navy-800"
                    }`}
                  >
                    J&rsquo;accepte que les éléments communiqués soient utilisés
                    dans le cadre de l&rsquo;étude de ma demande et conservés de
                    manière confidentielle.*
                  </span>
                </label>
              </div>
            </div>
          )}

          {errList.length > 0 && (
            <p
              role="alert"
              className="mt-5 rounded-xl border border-[#d9b3ab] bg-[#fdf3f1] px-4 py-3 text-[0.85rem] font-medium text-[#a2372a]"
            >
              Merci de vérifier les informations
              {errList.length > 1 ? " suivantes" : ""} : {errList.join(" — ")}.
            </p>
          )}

          {status === "error" && (
            <p
              role="alert"
              className="mt-5 rounded-xl border border-gold-400 bg-gold-50 px-4 py-3 text-[0.85rem] font-medium text-navy-900"
            >
              L&rsquo;envoi n&rsquo;a pas pu aboutir pour le moment. Si le
              problème persiste, contactez-nous directement par téléphone ou
              email.
            </p>
          )}

          <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              {step > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setErrors([]);
                    setStep((s) => Math.max(s - 1, 0));
                  }}
                  className="btn btn-outline btn-md"
                >
                  Retour
                </button>
              )}
            </div>
            {step < 4 ? (
              <button type="submit" className="btn btn-gold btn-lg px-7 py-3 text-[0.92rem]">
                Continuer
                <IconArrowRight size={18} />
              </button>
            ) : (
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn btn-gold btn-lg px-7 py-3 text-[0.92rem] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? "Envoi en cours..." : "Envoyer ma demande"}
                {status !== "sending" && <IconSend size={18} />}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}