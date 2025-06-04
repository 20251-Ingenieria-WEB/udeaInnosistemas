import React from "react";

interface EmailFieldProps {
  className?: string;
}

export function EmailField({ className = "" }: EmailFieldProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="self-start font-bold text-black text-3xl mb-2 max-md:ml-0.5">
        Correo electrónico
      </label>
      <div className="flex flex-wrap gap-5 justify-between px-2.5 w-full whitespace-nowrap bg-white rounded-md border border-solid border-stone-300 max-md:mr-0.5 max-md:max-w-full">
        <input
          type="email"
          placeholder="Email"
          className="my-auto text-black text-3xl bg-transparent border-none outline-none flex-1"
        />
        <div className="flex gap-2 text-black text-3xl">
          <div className="shrink-0 w-px border border-solid border-stone-300 h-[58px]" />
          <span className="my-auto basis-auto">@udea.edu.co</span>
        </div>
      </div>
    </div>
  );
}
