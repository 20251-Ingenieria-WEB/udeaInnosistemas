import * as React from "react";

interface NavigationButtonProps {
  icon: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export function NavigationButton({
  icon,
  label,
  isActive = false,
  onClick,
  className = "",
}: NavigationButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex relative items-center cursor-pointer w-[321px] max-md:w-[279px] max-sm:relative max-sm:top-auto max-sm:w-full max-sm:h-[60px] ${className}`}
    >
      <div
        className={`absolute top-0 left-0 h-full w-[321px] max-md:w-[279px] max-sm:w-full max-sm:h-[60px] ${
          isActive ? "bg-slate-600 bg-opacity-70" : ""
        }`}
      />
      <img
        src={icon}
        alt=""
        className="absolute top-2/4 w-10 h-10 -translate-y-2/4 left-[29px] max-sm:left-5 max-sm:h-[30px] max-sm:w-[30px]"
      />
      <span className="absolute top-2/4 text-2xl text-white -translate-y-2/4 left-[89px] max-sm:text-lg max-sm:left-[60px]">
        {label}
      </span>
    </button>
  );
}
