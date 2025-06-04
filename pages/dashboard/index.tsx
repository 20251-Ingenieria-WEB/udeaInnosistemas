"use client";
import * as React from "react";
import { DashboardHeader } from "../../components/dashboard/DashboardHeader";
import { DashboardSidebar } from "../../components/dashboard/DashboardSidebar";

function DashboardDesktop() {
  return (
    <main className="relative bg-white h-[982px] w-[1512px] max-md:w-full max-md:max-w-screen-lg max-sm:w-full">
      <DashboardHeader />
      <DashboardSidebar />
    </main>
  );
}

export default DashboardDesktop;
