"use client";
import * as React from "react";
import { CreateTeamHeader } from "./CreateTeamHeader";
import { Sidebar } from "./Sidebar";
import { TeamForm } from "./TeamForm";

function CreateTeam1ErrorMessage1Desktop() {
  return (
    <div className="overflow-hidden bg-white">
      <CreateTeamHeader />

      <div className="w-full max-w-[1384px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[24%] max-md:ml-0 max-md:w-full">
            <Sidebar />
          </div>

          <div className="ml-5 w-[76%] max-md:ml-0 max-md:w-full">
            <TeamForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTeam1ErrorMessage1Desktop;
