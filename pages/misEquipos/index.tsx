"use client";
import * as React from "react";
import { Header } from "../../components/head/Header";
import { DashboardSidebar } from "../../components/sidebar/DashboardSidebar";
import { MyTeamsPage } from "../../components/misEquipos/MyTeamsPage";

function MyTeams() {
  return (
    <div className="overflow-hidden bg-white">
      <Header />
      <div className="flex"> {/* Use flexbox for main content and sidebar */}
        <DashboardSidebar />
        <MyTeamsPage /> {/* MyTeamsPage will take the remaining space */}
      </div>
    </div>
  );
}

export default MyTeams;