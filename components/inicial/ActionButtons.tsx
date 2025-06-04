
"use client";
import { useRouter } from 'next/router';

export function ActionButtons() {
  const router = useRouter();

  return (
    <section className="relative flex flex-col items-center mt-64 max-md:mt-10">
      <button
        onClick={() => router.push('/login')}
        className="px-16 py-7 max-w-full text-4xl font-light text-black bg-white rounded-md border-solid border-[3px] border-slate-400 w-[394px] max-md:px-5"
      >
        Iniciar sesión
      </button>
      <button
        onClick={() => router.push('/signUp')}
        className="px-16 pt-7 pb-4 mt-7 max-w-full text-4xl font-light text-white whitespace-nowrap rounded-md bg-slate-400 w-[396px] max-md:px-5"
      >
        Registrarse
      </button>
    </section>
  );
}