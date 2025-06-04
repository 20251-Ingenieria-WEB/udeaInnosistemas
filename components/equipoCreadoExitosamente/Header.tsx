import * as React from "react";
import { SearchInput } from "./SearchInput";
import { UserAvatar } from "./UserAvatar";

export function Header() {
  return (
    <header className="absolute top-0 left-0 h-[88px] w-[1512px] max-md:p-2.5 max-md:w-full max-md:h-auto">
      <div className="absolute top-0 left-0 bg-white border border-solid border-slate-600 border-opacity-60 h-[87px] w-[1512px] max-md:size-full" />

      <h1 className="absolute top-px text-4xl font-extrabold h-[87px] left-[31px] text-slate-600 w-[255px] max-md:static max-md:mb-2.5 max-md:w-auto max-md:h-auto max-md:text-3xl max-sm:text-2xl">
        InnoSistemas
      </h1>

      <nav className="absolute h-9 text-3xl left-[289px] text-slate-600 top-[27px] w-[212px] max-md:static max-md:mx-0 max-md:my-1.5 max-md:w-auto max-md:h-auto max-md:text-xl max-sm:text-base">
        &gt; Crear equipo
      </nav>

      <nav className="absolute h-9 text-3xl left-[506px] text-slate-600 top-[27px] w-[270px] max-md:static max-md:mx-0 max-md:my-1.5 max-md:w-auto max-md:h-auto max-md:text-xl max-sm:text-base">
        &gt; Mensaje de éxito
      </nav>

      <div className="absolute text-3xl font-bold text-center text-emerald-800 h-[58px] left-[921px] top-[13px] w-[109px] max-md:static max-md:mx-0 max-md:my-2.5 max-md:w-auto max-md:h-auto max-md:text-2xl max-sm:text-xl">
        UdeA
      </div>

      <SearchInput className="absolute left-[1063px] top-[13px] max-md:static max-md:mx-0 max-md:my-2.5" />

      <UserAvatar
        initials="JP"
        className="absolute left-[1417px] top-[13px] max-md:static max-md:mx-0 max-md:my-2.5"
      />
    </header>
  );
}
