import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="absolute top-0 left-0 h-[88px] w-[1512px] max-md:p-2.5 max-md:w-full max-md:h-auto max-sm:p-1.5">
      <div className="absolute top-0 left-0 bg-white border border-solid border-slate-600 border-opacity-60 h-[87px] w-[1512px] max-md:w-full max-md:h-auto" />

      <h1 className="absolute top-px text-4xl font-extrabold h-[87px] left-[31px] text-slate-600 w-[255px] max-md:left-2.5 max-md:w-auto max-md:text-2xl max-md:top-[5px] max-sm:text-xl">
        InnoSistemas
      </h1>

      <nav className="absolute h-9 text-3xl left-[289px] text-slate-600 top-[27px] w-[199px]">
        &gt; Mis equipos
      </nav>

      <nav className="absolute h-9 text-3xl left-[495px] text-slate-600 top-[27px] w-[267px]">
        &gt; Modificar equipo
      </nav>

      <div className="absolute text-3xl font-bold text-center text-emerald-800 h-[58px] left-[921px] top-[13px] w-[109px] max-md:left-auto max-md:text-xl max-md:right-[120px] max-md:top-[15px] max-sm:text-base">
        UdeA
      </div>

      <div className="absolute h-[60px] left-[1063px] top-[13px] w-[321px] max-md:left-auto max-md:right-[200px] max-md:top-[15px] max-md:w-[200px] max-sm:w-[150px]">
        <div className="absolute top-0 left-0 rounded-md border-black border-solid border-[0.8px] h-[60px] w-[321px] max-md:w-[200px]" />
        <input
          type="text"
          placeholder="Buscar..."
          className="absolute left-3.5 text-2xl h-[45px] text-black text-opacity-60 top-[7px] w-[101px] max-md:text-lg bg-transparent border-none outline-none"
        />
      </div>

      <div className="absolute h-[60px] left-[1417px] top-[13px] w-[60px] max-md:top-2.5 max-md:right-2.5 max-md:left-auto max-md:h-[50px] max-md:w-[50px] max-sm:w-10 max-sm:h-10">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="user-circle" style="width: 60px; height: 60px; aspect-ratio: 1/1; fill: #81BACF; position: absolute; left: 0px; top: 0px"> <circle cx="30" cy="30" r="30" fill="#81BACF"></circle> </svg>',
            }}
          />
        </div>
        <span className="absolute top-4 left-4 h-7 text-2xl font-light text-white w-[27px] max-md:top-3.5 max-md:left-3.5 max-md:text-lg max-sm:top-3 max-sm:left-3 max-sm:text-sm">
          JP
        </span>
      </div>
    </header>
  );
};
