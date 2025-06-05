// Tu archivo principal (por ejemplo, app/dashboard/page.jsx o pages/dashboard.jsx)
"use client";
import * as React from "react";
import { DashboardHeader } from "../../components/dashboard/DashboardHeader";
import { DashboardSidebar } from "../../components/dashboard/DashboardSidebar";

function DashboardDesktop() {
  return (
    // Elimina el w-[1512px] fijo del main.
    // `min-h-screen` asegura que ocupe al menos toda la altura de la ventana.
    // `w-full` lo hace ocupar el 100% del ancho disponible.
    // `overflow-hidden` es una medida de seguridad para evitar scroll horizontal si algo se desborda mínimamente.
    <main className="relative bg-white min-h-screen w-full overflow-hidden">
      <DashboardHeader />
      <DashboardSidebar />
    </main>
  );
}

export default DashboardDesktop;
