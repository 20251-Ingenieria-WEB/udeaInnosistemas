// ModifyTeamDesktop.jsx
import React from "react";
import { Header } from "../../components/head/Header";
import { DashboardSidebar } from "../../components/sidebar/DashboardSidebar";
import { TeamForm } from "../../components/modificarEquipo/TeamForm";

function ModifyTeamDesktop() {
  return (
    <div className="flex flex-col min-h-screen bg-white md:flex-row">
      <DashboardSidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="flex-grow p-5 md:ml-[322px] mt-[88px] max-md:p-2.5">          
          <TeamForm />          
        </main>
      </div>
    </div>
  );
}

export default ModifyTeamDesktop;