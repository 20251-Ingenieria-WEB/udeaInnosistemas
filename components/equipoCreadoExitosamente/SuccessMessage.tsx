import * as React from "react";

export function SuccessMessage() {
  return (
    <main className="absolute h-[391px] left-[673px] top-[295px] w-[495px] max-md:static max-md:p-5 max-md:mx-auto max-md:my-5 max-md:w-full max-md:max-w-[500px] max-sm:p-4">
      <section className="absolute top-0 left-0 h-[391px] w-[495px] max-md:static max-md:w-full max-md:h-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8898a915defb85fd000b83fafd79a396f0194490?placeholderIfAbsent=true"
          alt="Check mark indicating success"
          className="absolute top-0 aspect-[1/1] h-[202px] left-[147px] w-[202px] max-md:block max-md:static max-md:mx-auto max-md:mt-0 max-md:mb-5 max-md:h-[150px] max-md:w-[150px] max-sm:h-[120px] max-sm:w-[120px]"
        />
        <h2 className="absolute left-0 text-6xl font-medium text-center h-[196px] text-slate-400 top-[195px] w-[495px] max-md:static max-md:w-full max-md:h-auto max-md:text-5xl max-sm:text-3xl">
          ¡Equipo creado exitosamente!
        </h2>
      </section>
    </main>
  );
}
