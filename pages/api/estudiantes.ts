// pages/api/estudiantes.ts
// Este archivo crea el endpoint de la API para obtener la lista de estudiantes.

import { supabase } from '@/lib/supabase';
import type { NextApiRequest, NextApiResponse } from 'next';




// Define el tipo de dato que esperamos devolver
interface StudentData {
  id: string; // El ID del estudiante, que es el id de la tabla Estudiante
  nombre: string; // El nombre del usuario asociado al estudiante
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StudentData[] | { error: string }>
) {
  // Solo permitimos peticiones GET para obtener la lista de estudiantes
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    // Realiza la consulta a la tabla 'Estudiante'
    // y haz un join con la tabla 'Usuario' para obtener el nombre
    // 'id' del estudiante es el id de la tabla Estudiante
    // 'usuario(nombre)' significa que queremos el campo 'nombre' de la tabla 'Usuario'
    const { data, error } = await supabase
      .from('estudiante')
      .select('id, usuario(nombre)');

    if (error) {
      console.error("Error fetching students from Supabase:", error);
      return res.status(500).json({ error: error.message });
    }

    // Mapea los datos para que coincidan con la interfaz StudentData esperada por el frontend
    const students: StudentData[] = data.map((item: any) => ({
      id: item.id.toString(), // Asegúrate de que el ID sea un string si es lo que espera React
      nombre: item.usuario.nombre,
    }));

    return res.status(200).json(students);

  } catch (err) {
    console.error('Unexpected error in /api/estudiantes:', err);
    return res.status(500).json({ error: 'Error interno del servidor al obtener estudiantes.' });
  }
}
