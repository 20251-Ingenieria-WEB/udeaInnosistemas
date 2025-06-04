"use client";
import React, { useState } from "react";
import { TeamMemberRow } from "./TeamMemberRow";

interface TeamMember {
  id: string;
  name: string;
  role: string;
}

interface TeamFormProps {}

export const TeamForm: React.FC<TeamFormProps> = () => {
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
    <form className="absolute left-0 h-[545px] top-[136px] w-[1005px] max-md:w-full">
      <div className="absolute top-0 left-0 h-[103px] w-[1005px] max-md:w-full">
        <label className="absolute top-0 left-0 text-3xl font-bold text-black h-[34px] w-[259px] max-sm:text-2xl">
          Nombre del equipo
        </label>
        <div className="absolute left-0 h-[58px] top-[45px] w-[1005px] max-md:w-full">
          <div className="absolute top-0 left-0 rounded-md border border-solid border-stone-300 h-[58px] w-[1005px] max-md:w-full" />
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="absolute top-3 left-4 text-3xl text-black h-[34px] w-[252px] max-sm:text-2xl bg-transparent border-none outline-none"
          />
        </div>
      </div>

      <section className="absolute left-0 h-[214px] top-[139px] w-[620px] max-md:w-full">
        <h3 className="absolute top-0 left-0 text-3xl font-bold text-black h-[34px] w-[137px] max-sm:text-2xl">
          Miembros
        </h3>
        <div className="absolute left-0 h-[169px] top-[45px] w-[620px] max-md:w-full">
          {members.map((member, index) => (
            <div
              key={member.id}
              style={{ top: `${index * 60}px` }}
              className="absolute"
            >
              <TeamMemberRow
                name={member.name}
                role={member.role}
                showDelete={index > 0}
                onDelete={() => handleDeleteMember(member.id)}
              />
            </div>
          ))}
        </div>
      </section>

      <div className="absolute left-0 h-[58px] top-[389px] w-[1005px] max-md:w-full max-md:h-auto">
        <div className="absolute top-0 left-0 h-[58px] w-[872px] max-md:mb-2.5 max-md:w-full">
          <div className="absolute top-0 left-0 rounded-md border border-solid border-stone-300 h-[58px] w-[872px] max-md:w-full" />
          <input
            type="text"
            placeholder="Añadir miembro..."
            value={newMemberName}
            onChange={(e) => setNewMemberName(e.target.value)}
            className="absolute top-3 left-4 text-3xl h-[34px] text-black text-opacity-30 w-[233px] max-sm:text-2xl bg-transparent border-none outline-none"
          />
        </div>
        <button
          type="button"
          onClick={handleAddMember}
          className="absolute top-0 h-[58px] left-[884px] w-[121px] max-md:relative max-md:top-0 max-md:left-0 max-md:w-[100px]"
        >
          <div className="absolute top-0 left-0 rounded border border-solid border-slate-400 h-[58px] w-[121px]" />
          <span className="absolute left-0 top-1.5 text-2xl font-medium text-center h-[46px] text-black text-opacity-50 w-[121px] max-sm:text-xl">
            Añadir
          </span>
        </button>
      </div>

      <button
        type="button"
        onClick={handleSave}
        className="absolute left-0 h-[62px] top-[483px] w-[268px] max-md:inline-block max-md:relative max-md:left-0 max-md:top-5 max-md:w-[48%] max-sm:left-0 max-sm:mb-2.5 max-sm:w-full"
      >
        <div className="absolute top-0 left-0 rounded-md bg-slate-400 bg-opacity-70 h-[62px] w-[268px]" />
        <span className="absolute left-0 top-3.5 text-3xl font-medium text-center text-white h-[34px] w-[266px] max-sm:text-2xl">
          Guardar cambios
        </span>
      </button>

      <button
        type="button"
        onClick={handleCancel}
        className="absolute h-[62px] left-[302px] top-[483px] w-[172px] max-md:inline-block max-md:relative max-md:top-5 max-md:left-[4%] max-md:w-[48%] max-sm:left-0 max-sm:mb-2.5 max-sm:w-full"
      >
        <div className="absolute top-0 left-0 rounded-md border border-solid border-slate-400 h-[62px] w-[172px]" />
        <span className="absolute left-0 top-3.5 text-3xl font-medium text-center text-black h-[34px] w-[171px] max-sm:text-2xl">
          Cancelar
        </span>
      </button>
    </form>
  );
};
