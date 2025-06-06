import * as React from "react";
import { TeamCard } from "./TeamCard";

//interface MyTeamsPageProps {}

export function MyTeamsPage() {
  return (
    // Removed fixed width and margin-left. Let flexbox handle it.
    <main className="flex-1 p-5 overflow-auto h-screen"> {/* flex-1 will make it grow to fill remaining space */}
      <section className="mt-10 w-full max-md:mt-10 max-md:max-w-full">
        <header className="flex flex-wrap gap-5 justify-between font-medium max-md:max-w-full">
          
        </header>
        <TeamCard />
      </section>
    </main>
  );
}