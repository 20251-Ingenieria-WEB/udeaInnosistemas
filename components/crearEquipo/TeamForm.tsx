// components/crearEquipo/TeamForm.tsx
"use client";
import * as React from "react";
import { ErrorMessage } from "./ErrorMessage";
import { useRouter } from 'next/router';

export function TeamForm() {
  const [teamName, setTeamName] = React.useState<string>('');
  const [leaderId, setLeaderId] = React.useState<string>('');
  const [students, setStudents] = React.useState<{ id: string; nombre: string }[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [fetchingStudents, setFetchingStudents] = React.useState<boolean>(true);
  const [studentsError, setStudentsError] = React.useState<string | null>(null);
  const router = useRouter();

  React.useEffect(() => {
    const fetchStudents = async () => {
      setFetchingStudents(true);
      setStudentsError(null);
      try {
        const response = await fetch('/api/estudiantes');
        const data = await response.json();

        if (!response.ok) {
          setStudentsError(data.error || 'Error al cargar los estudiantes.');
          console.error("Error al cargar estudiantes (API response):", data);
          return;
        }

        if (Array.isArray(data)) {
          setStudents(data);
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
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

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
      const response = await fetch('/api/equipo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre: teamName, equipo_lider_id: leaderId }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Error al crear el equipo. Inténtalo de nuevo.');
        console.error("Error al crear equipo (API response):", data);
        return;
      }

      console.log('Equipo creado exitosamente:', data);
      setTeamName('');
      setLeaderId(students.length > 0 ? students[0].id : '');
      setError(null);
      setError('Equipo creado exitosamente!');
      router.push('/equipoCreadoExitosamente');
    } catch (err) {
      console.error('Error de conexión o inesperado al crear equipo:', err);
      setError(`Error de conexión: ${err instanceof Error ? err.message : String(err)}. Inténtalo de nuevo.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    // Ajuste aquí: Añadimos pt-[100px] al main para dejar espacio debajo del header fijo.
    // También ajustamos mt-10 a mt-4 para que el formulario no baje demasiado al ajustar el padding.
    <main className="flex flex-col items-center justify-center pt-[100px] w-full text-3xl font-medium max-md:pt-4">
      <section className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-4xl font-extrabold text-center text-slate-600 mb-8">
          Nuevo Equipo
        </h2>
        <form onSubmit={handleSubmit} className="w-full">
          <label htmlFor="teamNameInput" className="block mt-4 font-bold text-black">
            Nombre del equipo
          </label>
          <input
            id="teamNameInput"
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="flex shrink-0 self-stretch mt-3 rounded-md border border-solid border-stone-300 h-[58px] w-full px-4 py-2 text-xl"
            placeholder="Introduce el nombre del equipo"
            disabled={loading}
          />

          <label htmlFor="leaderSelect" className="block mt-8 font-bold text-black">
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
              className="flex shrink-0 self-stretch mt-3 rounded-md border border-solid border-stone-300 h-[58px] w-full px-4 py-2 text-xl bg-white appearance-none"
              disabled={loading || students.length === 0}
            >
              {students.length === 0 && (
                <option value="">No hay estudiantes disponibles</option>
              )}
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.nombre}
                </option>
              ))}
            </select>
          )}

          {error && (
            <ErrorMessage
              message={error}
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/efc357ab-d19d-4167-838f-a04ef3d9908f?placeholderIfAbsent=true&apiKey=5c9e6ea2079e4392aa5a607e9bacdc7f"
            />
          )}

          <button
            type="submit"
            className="px-14 py-3.5 mt-12 text-center text-white whitespace-nowrap rounded-md bg-slate-400 bg-opacity-70 w-full"
            disabled={loading || fetchingStudents}
          >
            {loading ? 'Creando...' : 'Continuar'}
          </button>
        </form>
      </section>
    </main>
  );
}