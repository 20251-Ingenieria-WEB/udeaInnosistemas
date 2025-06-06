// NavigationButton.jsx
"use client";
import * as React from "react";
import Link from "next/link"; 

interface NavigationButtonProps {
  icon: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void; 
  href?: string; 
  className?: string;
}

export function NavigationButton({
  icon,
  label,
  isActive = false,
  onClick,
  href, 
  className = "",
}: NavigationButtonProps) {
  const buttonClasses = `flex items-center h-[60px] cursor-pointer w-full px-4
                         ${isActive ? "bg-slate-600 bg-opacity-70" : "hover:bg-slate-700 hover:bg-opacity-50"}
                         ${className}`;

  if (href) {
    return (
      <Link href={href} passHref>
        <button
          onClick={onClick} 
          className={buttonClasses}
        >
          <img
            src={icon}
            alt=""
            className="w-10 h-10 mr-4 max-sm:h-[30px] max-sm:w-[30px]"
          />
          <span className="text-2xl text-white max-sm:text-lg">
            {label}
          </span>
        </button>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
    >
      <img
        src={icon}
        alt=""
        className="w-10 h-10 mr-4 max-sm:h-[30px] max-sm:w-[30px]"
      />
      <span className="text-2xl text-white max-sm:text-lg">
        {label}
      </span>
    </button>
  );
}