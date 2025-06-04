import React from "react";
import { TeamMemberRow } from "./TeamMemberRow";
import { ErrorMessage } from "./ErrorMessage";

export const TeamConfirmationForm: React.FC = () => {
  return (
    <section className="flex flex-col items-start mt-10 w-full text-3xl text-black max-md:mt-10 max-md:max-w-full">
      <h1 className="text-6xl font-medium text-slate-400 max-md:max-w-full max-md:text-4xl">
        Confirmación de equipo
      </h1>

      <div className="mt-14 max-md:mt-10">
        <label className="font-bold">Nombre del equipo</label>
        <input
          type="text"
          value="Nombre del equipo"
          className="self-stretch px-4 py-3 mt-3 rounded-md border border-solid border-stone-300 max-md:pr-5 max-md:max-w-full w-full"
          readOnly
        />
      </div>

      <div className="mt-9">
        <h2 className="font-bold">Miembros</h2>

        <TeamMemberRow memberName="Juan Pérez" isFirstMember={true} />

        <TeamMemberRow memberName="Miembro 2" showRemoveButton={true} />

        <TeamMemberRow memberName="Miembro 3" showRemoveButton={true} />

        <ErrorMessage message="Por favor asigna roles a cada miembro." />

        <button className="px-14 py-3.5 mt-4 font-medium text-center text-white whitespace-nowrap rounded-md bg-slate-400 bg-opacity-70 max-md:px-5">
          Confirmar
        </button>
      </div>
    </section>
  );
};
