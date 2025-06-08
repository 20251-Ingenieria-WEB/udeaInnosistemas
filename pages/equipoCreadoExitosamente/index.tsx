"use client";
import * as React from "react";
import { Header } from "../../components/head/Header";
import { DashboardSidebar } from "../../components/sidebar/DashboardSidebar";
import { SuccessMessage } from "../../components/equipoCreadoExitosamente/SuccessMessage";

function CreateTeamSuccessMessageDesktop() {
  return (
    <div className="relative bg-white h-[982px] w-[1512px] max-md:w-full max-md:h-auto max-md:min-h-screen">
      <Header />
      <DashboardSidebar />
      <SuccessMessage />
    </div>
  );
}

export default CreateTeamSuccessMessageDesktop;
