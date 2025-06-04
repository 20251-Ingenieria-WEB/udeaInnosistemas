import * as React from "react";

interface SidebarItemProps {
  iconSrc: string;
  label: string;
  isActive?: boolean;
}

function SidebarItem({ iconSrc, label, isActive = false }: SidebarItemProps) {
  const baseClasses = "flex gap-5 items-start px-7 py-5 max-md:px-5";
  const activeClasses = isActive ? "bg-slate-600 bg-opacity-70" : "";

  return (
    <div className={`${baseClasses} ${activeClasses}`}>
      <img
        src={iconSrc}
        className="object-contain shrink-0 w-10 aspect-square"
        alt={`${label} icon`}
      />
      <span className="grow shrink mt-3.5">{label}</span>
    </div>
  );
}

export function Sidebar() {
  return (
    <nav className="flex flex-col pt-4 mx-auto w-full text-2xl text-white border border-solid bg-slate-600 bg-opacity-80 border-slate-600 border-opacity-20 pb-[624px] max-md:pb-24 max-md:mt-10">
      <div className="flex gap-5 self-start ml-7 whitespace-nowrap max-md:ml-2.5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1048eee378d27002e21d9e4c5348b0007de8a5f3?placeholderIfAbsent=true&apiKey=5c9e6ea2079e4392aa5a607e9bacdc7f"
          className="object-contain shrink-0 w-10 aspect-square"
          alt="Dashboard icon"
        />
        <span className="my-auto basis-auto">Dashboard</span>
      </div>

      <SidebarItem
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b25129f316abc8dc84465ad6aeb0add3ea95cdac?placeholderIfAbsent=true&apiKey=5c9e6ea2079e4392aa5a607e9bacdc7f"
        label="Crear equipo"
        isActive={true}
      />

      <div className="flex flex-col items-start pr-16 pl-7 mt-4 w-full max-md:px-5">
        <div className="flex gap-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d222946bbfdf8e9539c72006bc5cd0f843b8feb8?placeholderIfAbsent=true&apiKey=5c9e6ea2079e4392aa5a607e9bacdc7f"
            className="object-contain shrink-0 aspect-square w-[37px]"
            alt="Join team icon"
          />
          <span className="my-auto basis-auto">Unirse a equipo</span>
        </div>
        <div className="flex gap-4 mt-6">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/918640124471292e19b6e4fe02f7775e2e96524e?placeholderIfAbsent=true&apiKey=5c9e6ea2079e4392aa5a607e9bacdc7f"
            className="object-contain shrink-0 aspect-square w-[43px]"
            alt="My teams icon"
          />
          <span className="self-start mt-4 basis-auto">Mis equipos</span>
        </div>
      </div>
    </nav>
  );
}
