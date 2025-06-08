// pages/api/equipo.ts
import { supabase } from '@/lib/supabase'
import type { NextApiRequest, NextApiResponse } from 'next';



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { nombre } = req.body;
  const { equipo_lider_id } = req.body;

  if (typeof nombre !== 'string' || nombre.trim() === '') {
    return res.status(400).json({ error: 'El nombre del equipo es requerido y debe ser una cadena de texto válida.' });
  }

  try {
    // Obtenemos la fecha y hora actual en formato ISO 8601
    // Si tu columna es de tipo DATE (solo fecha), podrías usar .split('T')[0]
    // Si es TIMESTAMP WITH TIME ZONE (fecha y hora), usa el formato completo.
    const now = new Date().toISOString(); 

    // Modificación clave: Incluimos 'fecha_creacion' en el objeto a insertar
    const { data, error } = await supabase
      .from('equipo') // 'equipo' es el nombre de tu tabla en Supabase
      .insert({
        nombre: nombre,
        fecha_creacion: now, // Enviamos la fecha actual
        equipo_lider_id: equipo_lider_id // Asegúrate de que este campo sea correcto según tu esquema
      })
      .select(); // Esto devuelve el registro insertado

    if (error) {
      console.error('Error al insertar en Supabase:', error.message);
      return res.status(500).json({ error: error.message || 'Error interno del servidor al crear el equipo.' });
    }

    return res.status(201).json({ message: 'Equipo creado exitosamente', team: data[0] });

  } catch (err) {
    console.error('Error inesperado en la API de equipo:', err);
    return res.status(500).json({ error: `Error inesperado del servidor: ${err instanceof Error ? err.message : String(err)}` });
  }
}