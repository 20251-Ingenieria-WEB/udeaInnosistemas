// components/login/LoginHeader.js
"use client";
import * as React from "react";

export function LoginHeader() {
  return (
    // El header contendrá los títulos, y ellos se apilarán naturalmente.
    // Usar flexbox en el header si quieres un control más preciso del centrado o espacio.
    <header className="flex flex-col items-center text-center mb-8 sm:mb-12">
      {/* Eliminar absolute y anchos/alturas fijos. */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-600 mb-2 sm:mb-4">
        InnoSistemas
      </h1>
      {/* Eliminar absolute y anchos/alturas fijos. */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-400">
        Inicia sesión
      </h2>
    </header>
  );
}