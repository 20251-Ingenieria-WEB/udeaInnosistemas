// components/crearEquipo/TeamForm.tsx
"use client";
import * as React from "react";
import { ErrorMessage } from "./ErrorMessage"; // Asegúrate de que esta ruta sea correcta

export function TeamForm() {
  const [teamName, setTeamName] = React.useState<string>(''); // Estado para el nombre del equipo
  const [error, setError] = React.useState<string | null>(null); // Estado para mostrar errores
  const [loading, setLoading] = React.useState<boolean>(false); // Estado para controlar el estado de carga del botón

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario
    setError(null); // Limpia cualquier mensaje de error previo
    setLoading(true); // Activa el estado de carga

    // Validación simple del input en el cliente
    if (!teamName.trim()) {
      setError("Por favor ingresa el nombre del equipo.");
      setLoading(false);
      return;
    }

    try {
      // Envía la petición a tu nueva API Route
      const response = await fetch('/api/equipo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Importante para enviar JSON
        },
        body: JSON.stringify({ nombre: teamName }), // Convierte el objeto a una cadena JSON
      });

      const data = await response.json(); // Espera una respuesta JSON de la API

      if (!response.ok) {
        // Si la respuesta HTTP no fue 2xx, es un error
        setError(data.error || 'Error al crear el equipo. Inténtalo de nuevo.');
        console.error("Error al crear equipo (API response):", data);
        return;
      }

      // Si todo fue exitoso
      console.log('Equipo creado exitosamente:', data);
      setTeamName(''); // Limpia el campo del formulario
      setError(null); // Asegúrate de que no haya errores visibles
      alert('Equipo creado exitosamente!'); // Puedes reemplazar esto con un toast o una redirección

    } catch (err) {
      // Captura errores de red o problemas al parsear la respuesta
      console.error('Error de conexión o inesperado al crear equipo:', err);
      setError(`Error de conexión: ${err instanceof Error ? err.message : String(err)}. Inténtalo de nuevo.`);
    } finally {
      setLoading(false); // Desactiva el estado de carga, sin importar el resultado
    }
  };

  return (
    <main className="flex flex-col items-start mt-10 w-full text-3xl font-medium max-md:mt-10 max-md:max-w-full">
      

      <section className="w-full">
        {/* Envolvemos los elementos del formulario en la etiqueta <form> */}
        <form onSubmit={handleSubmit} className="w-full">
          <label htmlFor="teamNameInput" className="block mt-14 font-bold text-black max-md:mt-10">
            Nombre del equipo
          </label>
          
          {/* El input real para el nombre del equipo */}
          <input
            id="teamNameInput"
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="flex shrink-0 self-stretch mt-3 rounded-md border border-solid border-stone-300 h-[58px] w-full px-4 py-2 text-xl max-md:max-w-full"
            placeholder="Introduce el nombre del equipo"
            disabled={loading} // Deshabilita el input mientras se envía
          />
          
          {/* Muestra el mensaje de error si el estado 'error' no es nulo */}
          {error && (
            <ErrorMessage
              message={error}
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/efc357ab-d19d-4167-838f-a04ef3d9908f?placeholderIfAbsent=true&apiKey=5c9e6ea2079e4392aa5a607e9bacdc7f"
            />
          )}
          
          <button
            type="submit" // Es importante que el tipo sea 'submit' para que el formulario lo active
            className="px-14 py-3.5 mt-12 text-center text-white whitespace-nowrap rounded-md bg-slate-400 bg-opacity-70 max-md:px-5 max-md:mt-10"
            disabled={loading} // Deshabilita el botón mientras se está cargando
          >
            {loading ? 'Creando...' : 'Continuar'}
          </button>
        </form>
      </section>
    </main>
  );
}