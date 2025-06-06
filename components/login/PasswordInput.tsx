// components/login/PasswordInput.tsx
"use client";
import * as React from "react";
import { InputProps } from '@/types/component-props'; // Importa la interfaz

// Aplica la interfaz directamente a las props del componente
export function PasswordInput({ value, onChange, placeholder = "Contraseña", className = "" }: InputProps) {
  return (
    <div className={`flex flex-col w-full mb-6 ${className}`}>
      <label htmlFor="password" className="text-xl sm:text-2xl font-bold text-black mb-2">
        Contraseña
      </label>
      <div className="relative bg-white rounded-md border border-solid border-stone-300 w-full h-12 sm:h-14">
        <input
          type="password"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="px-3 py-2 text-xl sm:text-2xl text-black border-none w-full h-full focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );
}