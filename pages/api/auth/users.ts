// pages/api/auth/users.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabase'; // Asegúrate que esta importación sea correcta
import bcrypt from 'bcryptjs'; // Asegúrate de haber instalado 'bcryptjs' (npm install bcryptjs)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Solo permitimos el método GET para esta API de login
  if (req.method === 'GET') {
    try {
      // Para solicitudes GET, los parámetros se obtienen de req.query
      const { email, contrasena } = req.query;

      // Validación básica de parámetros
      if (!email || !contrasena) {
        return res.status(400).json({ error: "Email y contraseña son requeridos." });
      }

      // Convertir 'email' y 'contrasena' a string explícitamente, ya que req.query puede ser string | string[]
      const userEmail = email as string;
      const userContrasena = contrasena as string;

      // 1. Buscar al usuario por email en la tabla 'usuario' (minúsculas)
      const { data: userData, error: userError } = await supabase
        .from('usuario') // Confirmado: 'usuario' (minúsculas)
        .select('id, nombre, email, contrasena') // Confirmado: 'contrasena' (minúsculas)
        .eq('email', userEmail)
        .single(); // .single() para esperar un solo resultado

      // Manejo de errores de Supabase
      if (userError) {
        if (userError.code === 'PGRST116') { // Código para "No Rows Found"
          return res.status(404).json({ error: "Credenciales inválidas." }); // Mejor no decir si el usuario existe o no
        }
        console.error("Error al buscar usuario en Supabase:", userError);
        throw new Error(userError.message || "Error al consultar usuario.");
      }

      // Si userData es null o undefined, significa que el usuario no fue encontrado
      if (!userData) {
        return res.status(404).json({ error: "Credenciales inválidas." });
      }

      // 2. Comparar la contraseña proporcionada (plana) con el hash almacenado
      const passwordMatch = await bcrypt.compare(userContrasena, userData.contrasena);

      if (!passwordMatch) {
        // Contraseña no coincide
        return res.status(401).json({ error: "Credenciales inválidas." });
      }

      // Si las credenciales son correctas, devuelve la información del usuario (sin el hash de la contraseña)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { contrasena: _, ...userWithoutPassword } = userData; // _, Excluye la contraseña del objeto de respuesta
      return res.status(200).json(userWithoutPassword);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: any) {
      console.error("Error en la API de login:", error);
      return res.status(500).json({
        error: error.message || "Error interno del servidor al intentar iniciar sesión."
      });
    }
  } else {
    // Si el método HTTP no es GET, responde con 405 Method Not Allowed
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}