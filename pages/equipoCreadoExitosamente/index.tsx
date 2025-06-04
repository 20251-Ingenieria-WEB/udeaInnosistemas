"use client";
import * as React from "react";
import { Header } from "../../components/equipoCreadoExitosamente/Header";
import { Sidebar } from "../../components/equipoCreadoExitosamente/Sidebar";
import { SuccessMessage } from "../../components/equipoCreadoExitosamente/SuccessMessage";

function CreateTeamSuccessMessageDesktop() {
  return (
    <div className="relative bg-white h-[982px] w-[1512px] max-md:w-full max-md:h-auto max-md:min-h-screen">
      <Header />
      <Sidebar />
      <SuccessMessage />
    </div>
  );
}

export default CreateTeamSuccessMessageDesktop;
