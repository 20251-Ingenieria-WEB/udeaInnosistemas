"use client";
import * as React from "react";
import { NavigationButton } from "./NavigationButton";

export function DashboardSidebar() {
  return (
    <nav className="absolute -left-px h-[895px] top-[87px] w-[322px] max-md:w-[280px] max-sm:relative max-sm:w-full max-sm:h-auto max-sm:top-[70px]">
      <div className="absolute top-0 left-0 border border-solid bg-slate-600 bg-opacity-80 border-slate-600 border-opacity-20 h-[895px] w-[322px] max-md:w-[280px] max-sm:w-full" />

      <NavigationButton
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3411d3d76e3b6e4a787ba27b22c12e5d8e9537fa?placeholderIfAbsent=true"
        label="Dashboard"
        isActive={true}
        className="left-px"
      />

      <NavigationButton
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2d5003d78af4e51d485b6665874e2ea24bd871ae?placeholderIfAbsent=true"
        label="Crear equipo"
        className="left-px"
      />

      <NavigationButton
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a1e45798d5f78408434a975f8c7bf8fe47a4769a?placeholderIfAbsent=true"
        label="Unirse a equipo"
        className="left-px"
      />

      <NavigationButton
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3b02c5f828baf2809a23f1a823f3babbe6201891?placeholderIfAbsent=true"
        label="Mis equipos"
        className="left-px"
      />
    </nav>
  );
}
