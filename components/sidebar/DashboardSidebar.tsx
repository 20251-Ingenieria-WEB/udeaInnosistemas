// DashboardSidebar.jsx
"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { NavigationButton } from "./NavigationButton";
export function DashboardSidebar() {
  const router = useRouter();
  // 🚩 Función para manejar el cierre de sesión
  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });

      console.log("Sesión cerrada, redirigiendo a login...");
      router.push("/login");
    } catch (error) {
      console.error("Error cerrando sesión:", error);
    }
  };

  return (
    <nav className="w-[322px] bg-slate-600 bg-opacity-80 border-r border-solid border-slate-600 border-opacity-20 flex flex-col pt-[100px] pb-4 fixed top-0 left-0 h-full max-md:w-[280px] max-sm:w-full max-sm:h-auto max-sm:relative max-sm:pt-4">
      <div className="p-4 flex flex-col gap-2">
        <NavigationButton
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3411d3d76e3b6e4a787ba27b22c12e5d8e9537fa?placeholderIfAbsent=true"
          label="Dashboard"
          href="/dashboard"
          isActive={true}
        />

        <NavigationButton
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2d5003d78af4e51d485b6665874e2ea24bd871ae?placeholderIfAbsent=true"
          label="Crear equipo"
          href="/crearEquipo"
        />

        <NavigationButton
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a1e45798d5f78408434a975f8c7bf8fe47a4769a?placeholderIfAbsent=true"
          label="Unirse a equipo"
          href="/modificarEquipo"
        />

        <NavigationButton
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3b02c5f828baf2809a23f1a823f3babbe6201891?placeholderIfAbsent=true"
          label="Mis equipos"
          href="/misEquipos"
        />

        <NavigationButton
          onClick={handleLogout}
          icon="salir.png"
          label="salir"          
        />
        </div>
    </nav>
  );
};