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
      // El botón en sí debe ser un contenedor flex para sus propios elementos internos
      // Eliminamos 'relative' aquí ya que no es necesario para el botón en sí mismo
      // y 'w-[321px]' y 'left-px' (si se pasara) deberían ser manejados por el padre
      className={`flex items-center h-[60px] cursor-pointer
                  ${isActive ? "bg-slate-600 bg-opacity-70" : "hover:bg-slate-700 hover:bg-opacity-50"} 
                  ${className}`}
    >
      {/* Ya no necesitamos un div de fondo absoluto dentro del botón si el botón tiene su propio fondo */}
      {/* Si NavigationButton necesita un fondo que ocupe todo su espacio, lo aplicamos directamente al <button> */}
      {/* Si el "left-px" se necesita para alinear el botón completo DENTRO del sidebar, ese className debería estar en el <NavigationButton> en DashboardSidebar */}

      <img
        src={icon}
        alt=""
        // Posicionamos el icono usando flexbox, no absolute
        className="w-10 h-10 ml-[29px] mr-4 max-sm:ml-5 max-sm:h-[30px] max-sm:w-[30px]" // Añadimos margen izquierdo y derecho
      />
      <span
        // Posicionamos el texto usando flexbox, no absolute
        className="text-2xl text-white max-sm:text-lg"
      >
        {label}
      </span>
    </button>
  );
}