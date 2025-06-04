import * as React from "react";

interface NavigationItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
  className?: string;
}

export function NavigationItem({
  icon,
  label,
  isActive = false,
  className = "",
}: NavigationItemProps) {
  const baseClasses =
    "relative h-[76px] w-[321px] max-md:static max-md:mr-2.5 max-md:w-auto max-md:min-w-[150px] max-sm:mb-1.5 max-sm:w-full max-sm:min-w-[auto]";

  return (
    <div className={`${baseClasses} ${className}`}>
      <div
        className={`absolute top-0 left-0 h-full w-[321px] ${isActive ? "bg-slate-600 bg-opacity-70" : ""}`}
      />
      <img src={icon} alt="" className="absolute top-4 w-10 h-10 left-[29px]" />
      <div className="absolute top-4 text-2xl text-white h-[45px] left-[89px] w-[213px] max-md:static max-md:ml-2.5 max-md:text-lg max-sm:text-base">
        {label}
      </div>
    </div>
  );
}
