"use client";
import * as React from "react";
import { Header } from "../../components/head/Header";
import { DashboardSidebar } from "../../components/sidebar/DashboardSidebar";
import { MyTeamsPage } from "../../components/misEquipos/MyTeamsPage";

function MyTeams() {
  return (
    <div className="bg-white">
      <Header />
      <div className="flex pt-[88px]">
        <DashboardSidebar />
        <div className="flex-1 min-h-screen">
          <MyTeamsPage />
        </div>
      </div>
    </div>
  );
}

export default MyTeams;