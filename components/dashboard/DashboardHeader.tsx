import * as React from "react";
import { SearchInput } from "./SearchInput";
import { UserAvatar } from "./UserAvatar";

export function DashboardHeader() {
  return (
    <header className="absolute top-0 left-0 h-[88px] w-[1512px] max-md:w-full max-sm:w-full max-sm:h-[70px]">
      <div className="absolute top-0 left-0 bg-white border border-solid border-slate-600 border-opacity-60 h-[87px] w-[1512px] max-md:w-full max-sm:w-full max-sm:h-[70px]" />

      <h1 className="absolute top-px text-4xl font-extrabold h-[87px] left-[31px] text-slate-600 w-[255px] max-md:text-3xl max-md:w-[200px] max-sm:left-2.5 max-sm:text-xl max-sm:h-[60px] max-sm:top-[5px] max-sm:w-[150px]">
        InnoSistemas
      </h1>

      <nav className="absolute h-9 text-3xl left-[289px] text-slate-600 top-[27px] w-[183px] max-md:text-2xl max-md:left-[250px]">
        &gt; Dashboard
      </nav>

      <div className="absolute text-3xl font-bold text-center text-emerald-800 h-[58px] left-[921px] top-[13px] w-[109px] max-md:text-2xl max-md:left-[70%] max-sm:top-5 max-sm:left-2/4 max-sm:text-lg max-sm:-translate-x-2/4">
        UdeA
      </div>

      <SearchInput className="absolute h-[60px] left-[1063px] top-[13px] w-[321px] max-md:left-[60%] max-md:w-[250px] max-sm:hidden" />

      <UserAvatar
        initials="JP"
        className="absolute h-[60px] left-[1417px] top-[13px] w-[60px] max-md:left-[85%] max-sm:top-2.5 max-sm:right-2.5 max-sm:left-auto max-sm:h-[50px] max-sm:w-[50px]"
      />
    </header>
  );
}
