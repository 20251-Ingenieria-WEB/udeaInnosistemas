"use client";
import * as React from "react";
import { NavigationButton } from "./NavigationButton";

export function DashboardSidebar() {
  return (
    <nav className="absolute -left-px h-[895px] top-[87px] w-[322px] max-md:w-[280px] max-sm:relative max-sm:w-full max-sm:h-auto max-sm:top-[70px]">
      {/* Este div sigue siendo el fondo absoluto */}
      <div className="absolute top-0 left-0 border border-solid bg-slate-600 bg-opacity-80 border-slate-600 border-opacity-20 h-[895px] w-[322px] max-md:w-[280px] max-sm:w-full" />

      {/* Este es el nuevo contenedor para los botones de navegación */}
      {/* Debe estar posicionado de forma que no se superponga con el fondo absoluto */}
      {/* y debe ser un contenedor flex para aplicar el espaciado. */}
      <div className="relative z-10 p-4 flex flex-col gap-2"> {/* Agregamos padding al contenedor y un z-index */}
        <NavigationButton
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3411d3d76e3b6e4a787ba27b22c12e5d8e9537fa?placeholderIfAbsent=true"
          label="Dashboard"
          isActive={true}
          // Quita el 'left-px' aquí si quieres que los botones se centren horizontalmente en su nuevo contenedor flex
          // Si NavigationButton tiene estilos internos de posicionamiento absoluto/relativo,
          // esos deberán ser revisados dentro del componente NavigationButton también.
          // Por ahora, lo mantenemos como estaba en tu código original para no cambiar su layout interno.
          className="" // Removed left-px. If styling requires, it should be internal to NavigationButton or set on a wrapper.
        />

        <NavigationButton
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2d5003d78af4e51d485b6665874e2ea24bd871ae?placeholderIfAbsent=true"
          label="Crear equipo"
          className="" // Removed left-px
        />

        <NavigationButton
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a1e45798d5f78408434a975f8c7bf8fe47a4769a?placeholderIfAbsent=true"
          label="Unirse a equipo"
          className="" // Removed left-px
        />

        <NavigationButton
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3b02c5f828baf2809a23f1a823f3babbe6201891?placeholderIfAbsent=true"
          label="Mis equipos"
          className="" // Removed left-px
        />
      </div>
    </nav>
  );
}