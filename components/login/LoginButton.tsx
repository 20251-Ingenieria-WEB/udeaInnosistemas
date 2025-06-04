// components/login/LoginButton.js
"use client";
import * as React from "react";

export function LoginButton() {
  return (
    // Eliminar el div contenedor absoluto.
    // El botón debe ocupar el ancho completo y tener margen superior.
    <button className="w-full h-16 sm:h-20 text-3xl sm:text-4xl text-center text-white rounded-md cursor-pointer bg-slate-400 border-none mt-8">
      Iniciar sesión
    </button>
  );
}