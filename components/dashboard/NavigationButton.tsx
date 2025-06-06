import * as React from "react";
import Link from "next/link"; // ¡Importa Link de next/link!

interface NavigationButtonProps {
  icon: string;
  label: string;
  isActive?: boolean;
  // Cambiamos onClick a ser opcional y añadimos href
  onClick?: () => void; // Aún permitimos una función onClick si no hay href
  href?: string; // Nueva prop para la ruta a la que navegar
  className?: string;
}

export function NavigationButton({
  icon,
  label,
  isActive = false,
  onClick,
  href, // Destructura la nueva prop href
  className = "",
}: NavigationButtonProps) {
  // Define las clases comunes del botón
  const buttonClasses = `flex items-center h-[60px] cursor-pointer
                         ${isActive ? "bg-slate-600 bg-opacity-70" : "hover:bg-slate-700 hover:bg-opacity-50"}
                         ${className}`;

  // Si se proporciona una 'href', renderiza un componente Link
  if (href) {
    return (
      <Link href={href} passHref> {/* passHref es importante si NavigationButton renderiza un custom DOM element como button */}
        <button
          onClick={onClick} // La función onClick todavía se puede ejecutar si se proporciona
          className={buttonClasses}
        >
          <img
            src={icon}
            alt=""
            className="w-10 h-10 ml-[29px] mr-4 max-sm:ml-5 max-sm:h-[30px] max-sm:w-[30px]"
          />
          <span className="text-2xl text-white max-sm:text-lg">
            {label}
          </span>
        </button>
      </Link>
    );
  }

  // Si no se proporciona 'href', renderiza solo un botón normal (para acciones, no navegación)
  return (
    <button
      onClick={onClick}
      className={buttonClasses}
    >
      <img
        src={icon}
        alt=""
        className="w-10 h-10 ml-[29px] mr-4 max-sm:ml-5 max-sm:h-[30px] max-sm:w-[30px]"
      />
      <span className="text-2xl text-white max-sm:text-lg">
        {label}
      </span>
    </button>
  );
}