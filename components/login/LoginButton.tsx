// components/login/LoginButton.tsx
"use client";
import * as React from "react";
import { LoginButtonProps } from '@/types/component-props'; // Importa la interfaz

// Aplica la interfaz a las props del componente
export function LoginButton({ type = "button", disabled = false, children, className = "" }: LoginButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md w-full text-xl sm:text-2xl mt-8 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}