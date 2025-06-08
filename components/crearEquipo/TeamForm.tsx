// components/crearEquipo/TeamForm.tsx
"use client";
import * as React from "react";
import { ErrorMessage } from "./ErrorMessage"; // Asegúrate de que esta ruta sea correcta
// Importa useRouter de next/router para manejar la navegación
import { useRouter } from 'next/router'
// Asegúrate de que estás importando useRouter desde 'next/router' y no desde 'next/navigation'
// Esto es necesario para redirigir al usuario después de crear el equipo
  
export function TeamForm() {
  const [teamName, setTeamName] = React.useState<string>(''); // Estado para el nombre del equipo
  const [leaderId, setLeaderId] = React.useState<string>(''); // Estado para el ID del estudiante líder seleccionado
  const [students, setStudents] = React.useState<{ id: string; nombre: string }[]>([]); // Estado para la lista de estudiantes
  const [error, setError] = React.useState<string | null>(null); // Estado para mostrar errores generales
  const [loading, setLoading] = React.useState<boolean>(false); // Estado para controlar el estado de carga del botón de envío
  const [fetchingStudents, setFetchingStudents] = React.useState<boolean>(true); // Estado para controlar el estado de carga de la lista de estudiantes
  const [studentsError, setStudentsError] = React.useState<string | null>(null); // Estado para errores al obtener estudiantes
  const router = useRouter() // Inicializa useRouter para manejar la navegación
  // useEffect para cargar los estudiantes al montar el componente
  React.useEffect(() => {
    const fetchStudents = async () => {
      setFetchingStudents(true);
      setStudentsError(null);
      try {
        // Asume que tienes un endpoint API para obtener estudiantes
        const response = await fetch('/api/estudiantes');
        const data = await response.json();

        if (!response.ok) {
          setStudentsError(data.error || 'Error al cargar los estudiantes.');
          console.error("Error al cargar estudiantes (API response):", data);
          return;
        }

        // Si la respuesta es exitosa, guarda los estudiantes
        // Asegúrate de que 'data' sea un array de objetos { id, nombre }
        if (Array.isArray(data)) {
          setStudents(data);
          // Opcional: seleccionar el primer estudiante por defecto si la lista no está vacía
          if (data.length > 0) {
            setLeaderId(data[0].id);
          }
        } else {
          setStudentsError("Formato de datos de estudiantes inesperado.");
          console.error("Formato de datos de estudiantes inesperado:", data);
        }

      } catch (err) {
        console.error('Error de conexión o inesperado al obtener estudiantes:', err);
        setStudentsError(`Error de conexión al cargar estudiantes: ${err instanceof Error ? err.message : String(err)}.`);
      } finally {
        setFetchingStudents(false);
      }
    };

    fetchStudents();
  }, []); // El array vacío asegura que se ejecute solo una vez al montar

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario
    setError(null); // Limpia cualquier mensaje de error previo
    setLoading(true); // Activa el estado de carga

    // Validación simple de inputs en el cliente
    if (!teamName.trim()) {
      setError("Por favor ingresa el nombre del equipo.");
      setLoading(false);
      return;
    }

    if (!leaderId) {
      setError("Por favor selecciona un estudiante líder.");
      setLoading(false);
      return;
    }

    try {
      // Envía la petición a tu API Route /api/equipo
      const response = await fetch('/api/equipo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Importante para enviar JSON
        },
        // Incluye el nombre del equipo y el ID del líder
        body: JSON.stringify({ nombre: teamName, equipo_lider_id: leaderId }),
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
      setLeaderId(students.length > 0 ? students[0].id : ''); // Restablece el líder al primero o vacío
      setError(null); // Asegúrate de que no haya errores visibles
      // alert('Equipo creado exitosamente!'); // Considera reemplazar esto con un toast o una redirección más amigable
      // Para evitar 'alert()', podrías usar un estado para mostrar un mensaje de éxito en la UI
      setError('Equipo creado exitosamente!'); // Reutilizamos el estado de error para mensajes de éxito temporalmente
                                                 // En una app real, usarías un estado dedicado o una biblioteca de notificaciones.
      router.push('/equipoCreadoExitosamente'); // Redirige al usuario a la página de éxito
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
          {/* Campo para el nombre del equipo */}
          <label htmlFor="teamNameInput" className="block mt-14 font-bold text-black max-md:mt-10">
            Nombre del equipo
          </label>
          <input
            id="teamNameInput"
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="flex shrink-0 self-stretch mt-3 rounded-md border border-solid border-stone-300 h-[58px] w-full px-4 py-2 text-xl max-md:max-w-full"
            placeholder="Introduce el nombre del equipo"
            disabled={loading} // Deshabilita el input mientras se envía
          />

          {/* Campo para seleccionar el estudiante líder */}
          <label htmlFor="leaderSelect" className="block mt-8 font-bold text-black max-md:mt-6">
            Estudiante Líder
          </label>
          {fetchingStudents ? (
            <p className="text-gray-600 text-lg mt-3">Cargando estudiantes...</p>
          ) : studentsError ? (
            <ErrorMessage
              message={studentsError}
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/efc357ab-d19d-4167-838f-a04ef3d9908f?placeholderIfAbsent=true&apiKey=5c9e6ea2079e4392aa5a607e9bacdc7f"
            />
          ) : (
            <select
              id="leaderSelect"
              value={leaderId}
              onChange={(e) => setLeaderId(e.target.value)}
              className="flex shrink-0 self-stretch mt-3 rounded-md border border-solid border-stone-300 h-[58px] w-full px-4 py-2 text-xl max-md:max-w-full bg-white appearance-none"
              disabled={loading || students.length === 0} // Deshabilita si está cargando el envío o no hay estudiantes
            >
              {/* Opción por defecto o si no hay estudiantes */}
              {students.length === 0 && (
                <option value="">No hay estudiantes disponibles</option>
              )}
              {/* Mapea los estudiantes para crear las opciones del select */}
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.nombre}
                </option>
              ))}
            </select>
          )}

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
            disabled={loading || fetchingStudents} // Deshabilita el botón mientras se está cargando el envío o la lista de estudiantes
          >
            {loading ? 'Creando...' : 'Continuar'}
          </button>
        </form>
      </section>
    </main>
  );
}
