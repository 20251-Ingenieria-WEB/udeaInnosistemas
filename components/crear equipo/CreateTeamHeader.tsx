import * as React from "react";

export function CreateTeamHeader() {
  return (
    <header className="flex flex-wrap gap-5 justify-between px-8 py-3.5 w-full bg-white border border-solid border-slate-600 border-opacity-60 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-3 my-auto text-slate-600 max-md:max-w-full">
        <h1 className="grow text-4xl font-extrabold">InnoSistemas</h1>
        <nav className="text-3xl basis-auto">&gt; Crear equipo</nav>
      </div>
      <div className="flex flex-wrap gap-10 text-2xl whitespace-nowrap max-md:max-w-full">
        <div className="my-auto text-3xl font-bold text-center text-emerald-800">
          UdeA
        </div>
        <div className="px-3.5 py-6 text-black rounded-md border border-black border-solid max-md:pr-5">
          Buscar...
        </div>
        <div className="px-4 font-light text-white rounded-full bg-slate-400 h-[60px] w-[60px]">
          JP
        </div>
      </div>
    </header>
  );
}
