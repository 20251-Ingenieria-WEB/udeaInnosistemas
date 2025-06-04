import * as React from "react";

//interface SidebarProps {}

export function Sidebar() {
  return (
    <aside className="w-[23%] max-md:ml-0 max-md:w-full">
      <nav className="flex flex-col items-start pt-4 pr-16 pl-7 mx-auto w-full text-2xl text-white border border-solid bg-slate-600 bg-opacity-80 border-slate-600 border-opacity-20 pb-[624px] max-md:px-5 max-md:pb-24 max-md:mt-10">
        <div className="flex gap-5 whitespace-nowrap">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1048eee378d27002e21d9e4c5348b0007de8a5f3?placeholderIfAbsent=true&apiKey=5c9e6ea2079e4392aa5a607e9bacdc7f"
            className="object-contain shrink-0 w-10 aspect-square"
            alt="Dashboard icon"
          />
          <span className="my-auto basis-auto">Dashboard</span>
        </div>
        <div className="flex gap-5 mt-9">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b25129f316abc8dc84465ad6aeb0add3ea95cdac?placeholderIfAbsent=true&apiKey=5c9e6ea2079e4392aa5a607e9bacdc7f"
            className="object-contain shrink-0 w-10 aspect-square"
            alt="Create team icon"
          />
          <span className="self-start mt-3.5 basis-auto">Crear equipo</span>
        </div>
        <div className="flex gap-5 mt-9">
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
      </nav>
    </aside>
  );
}
