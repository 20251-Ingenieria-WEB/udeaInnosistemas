"use client";
import * as React from "react";
import { ErrorMessage } from "./ErrorMessage";

export function TeamForm() {
  return (
    <main className="flex flex-col items-start mt-10 w-full text-3xl font-medium max-md:mt-10 max-md:max-w-full">
      <h1 className="text-6xl text-slate-400 max-md:max-w-full max-md:text-4xl">
        Crear equipo
      </h1>

      <section className="w-full">
        <label className="block mt-14 font-bold text-black max-md:mt-10">
          Nombre del equipo
        </label>
        <div className="flex shrink-0 self-stretch mt-3 rounded-md border border-solid border-stone-300 h-[58px] max-md:max-w-full" />
        <ErrorMessage
          message="Por favor ingresa el nombre del equipo."
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/efc357ab-d19d-4167-838f-a04ef3d9908f?placeholderIfAbsent=true&apiKey=5c9e6ea2079e4392aa5a607e9bacdc7f"
        />
      </section>

      <section className="w-full">
        <label className="block font-bold text-black">
          Seleccionar miembros
        </label>
        <div className="flex shrink-0 self-stretch mt-3 rounded-md border border-solid border-stone-300 h-[58px] max-md:max-w-full" />
        <div className="flex gap-1.5 mt-4 text-xl text-red-600">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad0a7768-f013-4a7b-9b51-557de0351825?placeholderIfAbsent=true&apiKey=5c9e6ea2079e4392aa5a607e9bacdc7f"
            className="object-contain shrink-0 self-start bg-red-600 rounded-sm aspect-square h-[25px] w-[25px]"
            alt="Error icon"
          />
          <p className="flex-auto max-md:max-w-full">
            Por favor selecciona al menos un (1) miembro.
          </p>
        </div>
      </section>

      <button className="px-14 py-3.5 mt-12 text-center text-white whitespace-nowrap rounded-md bg-slate-400 bg-opacity-70 max-md:px-5 max-md:mt-10">
        Continuar
      </button>
    </main>
  );
}
