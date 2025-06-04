import React from "react";
import { TeamConfirmationHeader } from "./TeamConfirmationHeader";
import { TeamConfirmationSidebar } from "./TeamConfirmationSidebar";
import { TeamConfirmationForm } from "./TeamConfirmationForm";

const TeamConfirmationPage: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white">
      <TeamConfirmationHeader />

      <div className="w-full max-w-[1384px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <aside className="w-[24%] max-md:ml-0 max-md:w-full">
            <TeamConfirmationSidebar />
          </aside>

          <main className="ml-5 w-[76%] max-md:ml-0 max-md:w-full">
            <TeamConfirmationForm />
          </main>
        </div>
      </div>
    </div>
  );
};

export default TeamConfirmationPage;
