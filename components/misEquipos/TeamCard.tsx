// src/components/misEquipos/TeamCard.tsx
"use client";
import * as React from "react";

// Define the interface for the team data
interface TeamData {
  id: number;
  nombre: string;
  memberCount: number;
  createdByName: string;
  createdAt: string; // Formatted date string
}

// Define the props for the TeamCard component
interface TeamCardProps {
  team: TeamData;
  onView: (teamId: number) => void;
  onModify: (teamId: number) => void;
}

export function TeamCard({ team, onView, onModify }: TeamCardProps) {
  // Get the initials for the circle icon
  const initials = team.nombre.substring(0, 2).toUpperCase();

  return (
    <article className="flex flex-wrap gap-10 px-6 py-7 mt-9 w-full rounded-md border border-solid border-slate-600 max-md:px-5 max-md:max-w-full">
      <div className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:">
          <div className="w-[27%] max-md:ml-0 max-md:w-full">
            {/* Display team initials dynamically */}
            <div className="px-7 mx-auto text-5xl font-semibold text-white whitespace-nowrap rounded-md border border-solid bg-slate-600 border-zinc-500 h-[121px] w-[121px] flex items-center justify-center max-md:px-5 max-md:mt-2.5 max-md:text-4xl">
              {initials}
            </div>
          </div>
          <div className="ml-5 w-[73%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start text-xl font-light text-black max-md:mt-2.5">
              {/* Display dynamic team name */}
              <h3 className="text-2xl font-medium">{team.nombre}</h3>
              {/* Display dynamic member count */}
              <p>{team.memberCount} miembros</p>
              {/* Display dynamic creator name */}
              <p className="mt-1.5">Creado por: {team.createdByName}</p>
              {/* Display dynamic creation date */}
              <p className="self-stretch mt-2.5">
                Fecha de creación: {team.createdAt}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 my-auto text-xl font-medium text-center text-black whitespace-nowrap">
        {/* "Ver" button - triggers onView function */}
        <button
          className="px-6 py-4 rounded border border-solid border-slate-400 max-md:px-5"
          onClick={() => onView(team.id)}
        >
          Ver
        </button>
        {/* "Modificar" button - triggers onModify function */}
        <button
          className="px-4 py-4 rounded border border-solid border-slate-400"
          onClick={() => onModify(team.id)}
        >
          Modificar
        </button>
      </div>
    </article>
  );
}