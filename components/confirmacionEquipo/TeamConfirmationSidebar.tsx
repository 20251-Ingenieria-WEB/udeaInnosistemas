import React from "react";

export const TeamConfirmationSidebar: React.FC = () => {
  return (
    <nav className="flex flex-col pt-4 mx-auto w-full border border-solid bg-slate-600 bg-opacity-80 border-slate-600 border-opacity-20 pb-[624px] max-md:pb-24 max-md:mt-10">
      <div className="flex gap-5 self-start ml-7 max-md:ml-2.5">
        <div className="flex relative flex-col w-10 aspect-square">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1048eee378d27002e21d9e4c5348b0007de8a5f3?placeholderIfAbsent=true&apiKey=5c9e6ea2079e4392aa5a607e9bacdc7f"
            className="object-cover absolute inset-0 size-full"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1048eee378d27002e21d9e4c5348b0007de8a5f3?placeholderIfAbsent=true&apiKey=5c9e6ea2079e4392aa5a607e9bacdc7f"
            className="object-contain w-full aspect-square"
          />
        </div>
        <span className="my-auto text-2xl text-white basis-auto">
          Dashboard
        </span>
      </div>
      <div className="flex gap-5 items-start px-7 py-5 mt-5 text-2xl text-white bg-slate-600 bg-opacity-70 max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b25129f316abc8dc84465ad6aeb0add3ea95cdac?placeholderIfAbsent=true&apiKey=5c9e6ea2079e4392aa5a607e9bacdc7f"
          className="object-contain shrink-0 w-10 aspect-square"
        />
        <span className="grow shrink mt-3.5 w-[195px]">Crear equipo</span>
      </div>
      <div className="flex flex-col items-start pr-16 pl-7 mt-4 w-full text-2xl text-white max-md:px-5">
        <div className="flex gap-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d222946bbfdf8e9539c72006bc5cd0f843b8feb8?placeholderIfAbsent=true&apiKey=5c9e6ea2079e4392aa5a607e9bacdc7f"
            className="object-contain shrink-0 aspect-square w-[37px]"
          />
          <span className="my-auto basis-auto">Unirse a equipo</span>
        </div>
        <div className="flex gap-4 mt-6">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/918640124471292e19b6e4fe02f7775e2e96524e?placeholderIfAbsent=true&apiKey=5c9e6ea2079e4392aa5a607e9bacdc7f"
            className="object-contain shrink-0 aspect-square w-[43px]"
          />
          <span className="self-start mt-4 basis-auto">Mis equipos</span>
        </div>
      </div>
    </nav>
  );
};
