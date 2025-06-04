import * as React from "react";
import { NavigationItem } from "./NavigationItem";

export function Sidebar() {
  return (
    <nav className="absolute -left-px h-[895px] top-[87px] w-[322px] max-md:flex max-md:overflow-x-auto max-md:static max-md:flex-row max-md:w-full max-md:h-auto max-sm:flex-col max-sm:h-auto">
      <div className="absolute top-0 left-0 border border-solid bg-slate-600 bg-opacity-80 border-slate-600 border-opacity-20 h-[895px] w-[322px] max-md:size-full" />

      <NavigationItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3411d3d76e3b6e4a787ba27b22c12e5d8e9537fa?placeholderIfAbsent=true"
        label="Inicio / Dashboard"
        className="top-0 left-px"
      />

      <NavigationItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2d5003d78af4e51d485b6665874e2ea24bd871ae?placeholderIfAbsent=true"
        label="Crear equipo"
        isActive={true}
        className="left-px top-[76px]"
      />

      <div className="absolute left-px h-[66px] top-[152px] w-[321px] max-md:static max-md:mr-2.5 max-md:w-auto max-md:min-w-[150px] max-sm:mb-1.5 max-sm:w-full max-sm:min-w-[auto]">
        <div className="absolute top-0 left-0 h-full w-[321px]" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1e45798d5f78408434a975f8c7bf8fe47a4769a?placeholderIfAbsent=true"
          alt=""
          className="absolute h-[37px] left-[31px] top-[15px] w-[37px]"
        />
        <div className="absolute text-2xl text-white h-[39px] left-[87px] top-[13px] w-[223px] max-md:static max-md:ml-2.5 max-md:text-lg max-sm:text-base">
          Unirse a equipo
        </div>
      </div>

      <div className="absolute left-px h-[66px] top-[218px] w-[321px] max-md:static max-md:mr-2.5 max-md:w-auto max-md:min-w-[150px] max-sm:mb-1.5 max-sm:w-full max-sm:min-w-[auto]">
        <div className="absolute top-0 left-0 h-full w-[321px]" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b02c5f828baf2809a23f1a823f3babbe6201891?placeholderIfAbsent=true"
          alt=""
          className="absolute top-2.5 h-[43px] left-[29px] w-[43px]"
        />
        <div className="absolute text-2xl text-white h-[41px] left-[89px] top-[15px] w-[200px] max-md:static max-md:ml-2.5 max-md:text-lg max-sm:text-base">
          Mis equipos
        </div>
      </div>
    </nav>
  );
}
