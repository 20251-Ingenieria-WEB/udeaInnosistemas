import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { TeamForm } from "./TeamForm";

function ModifyTeamDesktop() {
  return (
    <div className="relative bg-white h-[982px] w-[1512px] max-md:w-full max-md:h-auto max-md:min-h-screen">
      <Header />
      <Sidebar />

      <main className="absolute h-[681px] left-[379px] top-[125px] w-[1005px] max-md:box-border max-md:left-0 max-md:p-5 max-md:w-full max-md:top-[150px] max-sm:p-2.5">
        <h1 className="absolute top-0 left-0 text-6xl font-medium h-[98px] text-slate-400 w-[553px] max-md:w-full max-md:text-4xl max-sm:text-3xl">
          Modificar equipo
        </h1>
        <TeamForm />
      </main>
    </div>
  );
}

export default ModifyTeamDesktop;
