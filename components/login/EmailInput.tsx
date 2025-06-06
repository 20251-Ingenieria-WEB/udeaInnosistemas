// components/login/EmailInput.tsx
"use client";
import * as React from "react";
import { InputProps } from '@/types/component-props'; // Importa la interfaz

// Aplica la interfaz directamente a las props del componente
export function EmailInput({ value, onChange, placeholder = "@udea.edu.co", className = "" }: InputProps) {
  return (
    <div className={`flex flex-col w-full mb-6 ${className}`}>
      <label htmlFor="email" className="text-xl sm:text-2xl font-bold text-black mb-2">
        Correo electrónico
      </label>
      <div className="relative bg-white rounded-md border border-solid border-stone-300 w-full h-12 sm:h-14">
        <input
          type="email"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="px-3 py-2 text-xl sm:text-2xl text-black border-none w-full h-full focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );
}