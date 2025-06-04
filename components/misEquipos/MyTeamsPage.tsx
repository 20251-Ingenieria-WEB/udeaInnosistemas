import * as React from "react";
import { TeamCard } from "./TeamCard";

//interface MyTeamsPageProps {}

export function MyTeamsPage() {
  return (
    <main className="ml-5 w-[77%] max-md:ml-0 max-md:w-full">
      <section className="mt-10 w-full max-md:mt-10 max-md:max-w-full">
        <header className="flex flex-wrap gap-5 justify-between font-medium max-md:max-w-full">
          <h2 className="text-6xl text-slate-400 max-md:text-4xl">
            Mis equipos
          </h2>
          <button className="px-2.5 py-3 my-auto text-xl text-black rounded border border-solid border-slate-400">
            + Crear nuevo
          </button>
        </header>
        <TeamCard />
      </section>
    </main>
  );
}
