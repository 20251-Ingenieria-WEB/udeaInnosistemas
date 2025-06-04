import * as React from "react";

//interface TeamCardProps {}

export function TeamCard() {
  return (
    <article className="flex flex-wrap gap-10 px-6 py-7 mt-9 w-full rounded-md border border-solid border-slate-600 max-md:px-5 max-md:max-w-full">
      <div className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:">
          <div className="w-[27%] max-md:ml-0 max-md:w-full">
            <div className="px-7 mx-auto text-5xl font-semibold text-white whitespace-nowrap rounded-md border border-solid bg-slate-600 border-zinc-500 h-[121px] w-[121px] max-md:px-5 max-md:mt-2.5 max-md:text-4xl">
              NE
            </div>
          </div>
          <div className="ml-5 w-[73%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start text-xl font-light text-black max-md:mt-2.5">
              <h3 className="text-2xl font-medium">Nombre del equipo</h3>
              <p>2 miembros</p>
              <p className="mt-1.5">Creado por: Juan Pérez</p>
              <p className="self-stretch mt-2.5">
                Última modificación: recientemente
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 my-auto text-xl font-medium text-center text-black whitespace-nowrap">
        <button className="px-6 py-4 rounded border border-solid border-slate-400 max-md:px-5">
          Ver
        </button>
        <button className="px-4 py-4 rounded border border-solid border-slate-400">
          Modificar
        </button>
      </div>
    </article>
  );
}
