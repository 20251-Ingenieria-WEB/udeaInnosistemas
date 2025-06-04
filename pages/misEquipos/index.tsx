"use client";
import * as React from "react";
import { Header } from "../../components/misEquipos/Header";
import { Sidebar } from "../../components/misEquipos/Sidebar";
import { MyTeamsPage } from "../../components/misEquipos/MyTeamsPage";

function MyTeams3Desktop() {
  return (
    <div className="overflow-hidden bg-white">
      <Header />
      <div className="w-full max-w-[1433px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:">
          <Sidebar />
          <MyTeamsPage />
        </div>
      </div>
    </div>
  );
}

export default MyTeams3Desktop;
