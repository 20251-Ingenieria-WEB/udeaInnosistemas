"use client";
import React from "react";
import { FormField } from "./FormField";
import { EmailField } from "./EmailField";
import { SubmitButton } from "./SubmitButton";
import { useRouter } from 'next/router';

export function SignUpForm() {
  const router = useRouter();
  return (
    <form className="flex flex-col px-6 mt-11 w-full text-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <FormField label="Nombre" placeholder="Nombre" />

      <EmailField className="mt-11 max-md:mt-10" />

      <FormField
        label="Contraseña"
        placeholder="Contraseña"
        type="password"
        className="mt-11 max-md:mt-10"
      />

      <FormField
        label="Confirmar contraseña"
        placeholder="Confirmar contraseña"
        type="password"
        className="mt-10"
      />

      <SubmitButton className="mt-16 max-md:mt-10">Registrarse</SubmitButton>

      <div className="flex gap-1.5 self-center mt-2 max-w-full w-[425px] text-3xl">
        <p className="grow text-black">¿Ya tienes cuenta? </p>
        <button
          type="button"
          onClick={() => router.push('/login')}
          className="grow shrink font-bold text-slate-600 w-[137px] hover:text-slate-700 transition-colors"
        >
          Inicia sesión
        </button>
      </div>
    </form>
  );
}
