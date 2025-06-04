// components/login/RegistrationPrompt.js
"use client";
import * as React from "react";
import { useRouter } from 'next/router';

export function RegistrationPrompt() {
   const router = useRouter();
  return (
    // Eliminar absolute. mt-8 para margen superior.
    // flex items-center para alinear en la misma línea.
    // justify-center para centrar horizontalmente en móvil.
    // sm:flex-row para asegurar que en pantallas más grandes estén en fila.
    <section className="flex flex-col sm:flex-row items-center justify-center w-full mt-8 sm:mt-12 text-center sm:text-left gap-2 sm:gap-3">
      <p className="text-lg sm:text-xl text-black">
        ¿Aún no tienes cuenta?
      </p>
      <button 
          onClick={() => router.push('/signUp')}
          className="text-lg sm:text-xl font-bold cursor-pointer text-slate-600">        
        Regístrate
      </button>
    </section>
  );
}