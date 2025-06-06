// TeamForm.jsx
"use client";
import React, { useState } from "react";
import { TeamMemberRow } from "./TeamMemberRow";

interface TeamMember {
  id: string;
  name: string;
  role: string;
}

export const TeamForm = () => {
  const [teamName, setTeamName] = useState("Nombre del equipo");
  const [newMemberName, setNewMemberName] = useState("");
  const [members, setMembers] = useState<TeamMember[]>([
    { id: "1", name: "Juan Pérez", role: "Rol 1" },
    { id: "2", name: "Miembro 2", role: "Rol 2" },
    { id: "3", name: "Miembro 3", role: "Rol 3" },
  ]);

  const handleAddMember = () => {
    if (newMemberName.trim()) {
      const newMember: TeamMember = {
        id: Date.now().toString(),
        name: newMemberName,
        role: "Nuevo Rol",
      };
      setMembers([...members, newMember]);
      setNewMemberName("");
    }
  };

  const handleDeleteMember = (id: string) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  const handleSave = () => {
    console.log("Saving team changes...");
  };

  const handleCancel = () => {
    console.log("Cancelling changes...");
  };

  return (
    <form className="flex flex-col space-y-8 w-full max-w-[1005px] mx-auto p-4 md:p-0">
      <div>
        <label className="block text-xl font-bold text-black mb-2 md:text-3xl max-sm:text-2xl">
          Nombre del equipo
        </label>
        <div className="relative">
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="w-full h-[58px] px-4 text-xl text-black border border-solid border-stone-300 rounded-md outline-none md:text-3xl max-sm:text-2xl"
          />
        </div>
      </div>

      <section>
        <h3 className="block text-xl font-bold text-black mb-4 md:text-3xl max-sm:text-2xl">
          Miembros
        </h3>
        <div className="flex flex-col space-y-3">
          {members.map((member, index) => (
            <TeamMemberRow
              key={member.id}
              name={member.name}
              role={member.role}
              showDelete={index > 0}
              onDelete={() => handleDeleteMember(member.id)}
            />
          ))}
        </div>
      </section>

      <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-grow relative">
          <input
            type="text"
            placeholder="Añadir miembro..."
            value={newMemberName}
            onChange={(e) => setNewMemberName(e.target.value)}
            className="w-full h-[58px] px-4 text-xl text-black text-opacity-30 border border-solid border-stone-300 rounded-md outline-none md:text-3xl max-sm:text-2xl"
          />
        </div>
        <button
          type="button"
          onClick={handleAddMember}
          className="bg-transparent border border-solid border-slate-400 rounded h-[58px] px-6 text-xl font-medium text-black text-opacity-50 md:w-[121px] max-sm:text-xl"
        >
          Añadir
        </button>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 mt-8">
        <button
          type="button"
          onClick={handleSave}
          className="bg-slate-400 bg-opacity-70 rounded-md h-[62px] px-6 text-xl font-medium text-white md:w-[268px] max-sm:text-2xl"
        >
          Guardar cambios
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="bg-transparent border border-solid border-slate-400 rounded-md h-[62px] px-6 text-xl font-medium text-black md:w-[172px] max-sm:text-2xl"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};