"use client";

import { useRef, useState } from "react";

type Innsikt = {
  id: number;
  tekst: string;
  stemmer: number;
};

const startdata: Innsikt[] = [
  { id: 1, tekst: "Brukerne finner ikke igjen lagrede dokumenter", stemmer: 4 },
  { id: 2, tekst: "Onboarding tar for lang tid for nye ansatte", stemmer: 7 },
  { id: 3, tekst: "Vi mangler en felles oversikt over pågående prosjekter", stemmer: 2 },
];

export default function Home() {
  const [innsikter, setInnsikter] = useState<Innsikt[]>(startdata);
  const [tekst, setTekst] = useState("");
  const nesteId = useRef(startdata.length + 1);

  function leggTil(e: React.FormEvent) {
    e.preventDefault();
    const renset = tekst.trim();
    if (!renset) return;
    setInnsikter((nå) => [...nå, { id: nesteId.current++, tekst: renset, stemmer: 0 }]);
    setTekst("");
  }

  function stem(id: number) {
    setInnsikter((nå) =>
      nå.map((i) => (i.id === id ? { ...i, stemmer: i.stemmer + 1 } : i)),
    );
  }

  function slett(id: number) {
    setInnsikter((nå) => nå.filter((i) => i.id !== id));
  }

  // Sorter etter flest stemmer, uten å mutere original-listen
  const sortert = [...innsikter].sort((a, b) => b.stemmer - a.stemmer);

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col gap-8 px-4 py-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Innsiktstavle
        </h1>
        <p className="text-slate-500">
          Legg inn innsikter fra workshopen, og stem opp de viktigste. Mest
          stemmer havner øverst.
        </p>
      </header>

      <form onSubmit={leggTil} className="flex gap-2">
        <input
          value={tekst}
          onChange={(e) => setTekst(e.target.value)}
          placeholder="Skriv en innsikt …"
          className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-5 py-2.5 font-medium text-white shadow-sm transition hover:bg-indigo-700 active:scale-95"
        >
          Legg til
        </button>
      </form>

      <ul className="flex flex-col gap-3">
        {sortert.length === 0 && (
          <li className="rounded-lg border border-dashed border-slate-300 py-10 text-center text-slate-400">
            Ingen innsikter ennå – legg til den første over.
          </li>
        )}

        {sortert.map((i) => (
          <li
            key={i.id}
            className="group flex items-center gap-4 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm"
          >
            <button
              onClick={() => stem(i.id)}
              className="flex min-w-14 flex-col items-center rounded-md bg-slate-100 px-3 py-1.5 font-semibold text-slate-700 transition hover:bg-indigo-100 hover:text-indigo-700 active:scale-95"
              aria-label="Stem opp"
            >
              <span className="text-lg leading-none">▲</span>
              <span className="text-sm">{i.stemmer}</span>
            </button>

            <span className="flex-1 text-slate-800">{i.tekst}</span>

            <button
              onClick={() => slett(i.id)}
              className="text-slate-300 opacity-0 transition hover:text-red-500 group-hover:opacity-100"
              aria-label="Slett"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-auto text-center text-sm text-slate-400">
        {innsikter.length} innsikter · kjører lokalt · Next.js + Tailwind
      </p>
    </main>
  );
}
