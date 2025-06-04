import React from "react";

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <nav className="absolute -left-px h-[895px] top-[87px] w-[322px] max-md:flex max-md:overflow-x-auto max-md:relative max-md:top-0 max-md:left-0 max-md:flex-row max-md:w-full max-md:h-auto max-sm:flex-col max-sm:h-auto">
      <div className="absolute top-0 left-0 border border-solid bg-slate-600 bg-opacity-80 border-slate-600 border-opacity-20 h-[895px] w-[322px] max-md:w-full max-md:h-20" />

      <button className="absolute top-0 left-px h-[76px] w-[321px] max-md:relative max-md:top-0 max-md:left-0 max-md:flex-1 max-md:w-auto max-md:h-[60px] max-md:min-w-[120px] max-sm:w-full max-sm:h-[50px]">
        <div className="absolute top-0 left-0 h-[76px] w-[321px] max-md:w-full max-md:h-[60px]" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3411d3d76e3b6e4a787ba27b22c12e5d8e9537fa?placeholderIfAbsent=true"
          alt=""
          className="absolute top-4 w-10 h-10 aspect-[1/1] left-[29px] max-md:left-2.5 max-md:h-[30px] max-md:top-[15px] max-md:w-[30px] max-sm:left-2.5 max-sm:top-3 max-sm:h-[25px] max-sm:w-[25px]"
        />
        <span className="absolute top-4 text-2xl text-white h-[45px] left-[89px] w-[213px] max-md:top-5 max-md:w-auto max-md:text-base max-md:left-[50px] max-sm:text-sm max-sm:left-[45px] max-sm:top-[15px]">
          Dashboard
        </span>
      </button>

      <button className="absolute left-px h-[76px] top-[76px] w-[321px] max-md:relative max-md:top-0 max-md:left-0 max-md:flex-1 max-md:w-auto max-md:h-[60px] max-md:min-w-[120px] max-sm:w-full max-sm:h-[50px]">
        <div className="absolute top-0 left-0 h-[76px] w-[321px] max-md:w-full max-md:h-[60px]" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d5003d78af4e51d485b6665874e2ea24bd871ae?placeholderIfAbsent=true"
          alt=""
          className="absolute top-4 w-10 h-10 aspect-[1/1] left-[29px] max-md:left-2.5 max-md:h-[30px] max-md:top-[15px] max-md:w-[30px] max-sm:left-2.5 max-sm:top-3 max-sm:h-[25px] max-sm:w-[25px]"
        />
        <span className="absolute top-4 text-2xl text-white h-[45px] left-[89px] w-[213px] max-md:top-5 max-md:w-auto max-md:text-base max-md:left-[50px] max-sm:text-sm max-sm:left-[45px] max-sm:top-[15px]">
          Crear equipo
        </span>
      </button>

      <button className="absolute left-px h-[66px] top-[152px] w-[321px] max-md:relative max-md:top-0 max-md:left-0 max-md:flex-1 max-md:w-auto max-md:h-[60px] max-md:min-w-[120px] max-sm:w-full max-sm:h-[50px]">
        <div className="absolute top-0 left-0 h-[66px] w-[321px] max-md:w-full max-md:h-[60px]" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1e45798d5f78408434a975f8c7bf8fe47a4769a?placeholderIfAbsent=true"
          alt=""
          className="absolute aspect-[1/1] h-[37px] left-[31px] top-[15px] w-[37px] max-md:left-2.5 max-md:h-[30px] max-md:top-[15px] max-md:w-[30px] max-sm:left-2.5 max-sm:top-3 max-sm:h-[25px] max-sm:w-[25px]"
        />
        <span className="absolute text-2xl text-white h-[39px] left-[87px] top-[13px] w-[223px] max-md:top-5 max-md:w-auto max-md:text-base max-md:left-[50px] max-sm:text-sm max-sm:left-[45px] max-sm:top-[15px]">
          Unirse a equipo
        </span>
      </button>

      <button className="absolute left-px h-[66px] top-[218px] w-[321px] max-md:relative max-md:top-0 max-md:left-0 max-md:flex-1 max-md:w-auto max-md:h-[60px] max-md:min-w-[120px] max-sm:w-full max-sm:h-[50px]">
        <div className="absolute top-0 left-0 bg-slate-600 bg-opacity-70 h-[66px] w-[321px] max-md:w-full max-md:h-[60px]" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b02c5f828baf2809a23f1a823f3babbe6201891?placeholderIfAbsent=true"
          alt=""
          className="absolute top-2.5 aspect-[43.36/43.36] h-[43px] left-[29px] w-[43px] max-md:left-2.5 max-md:h-[30px] max-md:top-[15px] max-md:w-[30px] max-sm:left-2.5 max-sm:top-3 max-sm:h-[25px] max-sm:w-[25px]"
        />
        <span className="absolute text-2xl text-white h-[41px] left-[89px] top-[15px] w-[200px] max-md:top-5 max-md:w-auto max-md:text-base max-md:left-[50px] max-sm:text-sm max-sm:left-[45px] max-sm:top-[15px]">
          Mis equipos
        </span>
      </button>
    </nav>
  );
};
