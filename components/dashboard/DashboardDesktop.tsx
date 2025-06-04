"use client";
import * as React from "react";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardSidebar } from "./DashboardSidebar";

function DashboardDesktop() {
  return (
    <main className="relative bg-white h-[982px] w-[1512px] max-md:w-full max-md:max-w-screen-lg max-sm:w-full">
      <DashboardHeader />
      <DashboardSidebar />
    </main>
  );
}

export default DashboardDesktop;
