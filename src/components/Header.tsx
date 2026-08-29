"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/site";
import { IconClose, IconMenu } from "@/components/icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled || open ? "shadow-[0_10px_30px_-18px_rgba(13,22,48,0.35)]" : ""
      }`}
    >
      <div className="h-[3px] w-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 opacity-90" />
      <div className="container-site flex items-center justify-between gap-6 py-3.5">
        <Link
          href="/#accueil"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="pastille-name">TZ</span>
          <span className="leading-tight">
            <span className="block font-serif text-[1.02rem] font-semibold tracking-wide text-navy-900">
              Thomas Zanitti
            </span>
            <span className="block text-[0.62rem] font-semibold tracking-[0.18em] text-gold-600 uppercase">
              Avocat au Barreau de Brest
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="btn btn-gold btn-sm hidden uppercase tracking-[0.1em] md:inline-flex"
          >
            Faire une demande
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy-800 transition hover:border-gold-400 hover:text-gold-600 lg:hidden"
          >
            {open ? <IconClose size={22} /> : <IconMenu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-mobile" className="lg:hidden">
          <div className="divider-fade-dark" />
          <nav
            aria-label="Navigation mobile"
            className="container-site flex flex-col gap-1 overflow-y-auto py-4"
            style={{ maxHeight: "calc(100vh - 6.5rem)" }}
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-[0.95rem] font-semibold text-navy-800 transition hover:bg-mist"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn btn-gold btn-md mt-3 w-full"
            >
              Faire une demande
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}