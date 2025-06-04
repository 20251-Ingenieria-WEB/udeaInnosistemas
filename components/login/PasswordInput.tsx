// components/login/PasswordInput.js (Revisa tu versión)
"use client";
import * as React from "react";

export function PasswordInput() {
  return (
    // Contenedor principal para el campo de contraseña.
    // Usamos flex-col para apilar label e input.
    // mb-6 para dar espacio debajo de este componente.
    <div className="flex flex-col w-full mb-6"> {/* <--- Míra este mb-6 */}
      <label className="text-xl sm:text-2xl font-bold text-black mb-2"> {/* <--- Míra este mb-2 */}
        Contraseña
      </label>
      <div className="relative bg-white rounded-md border border-solid border-stone-300 w-full h-12 sm:h-14">
        <input
          type="password"
          placeholder="Contraseña" // Asegúrate que sea el placeholder correcto para la contraseña
          className="px-3 py-2 text-xl sm:text-2xl text-black border-none w-full h-full"
        />
      </div>
    </div>
  );
}