// Este es el handler para la API de inicio de sesión
// Asumo que este archivo está separado del handler POST de registro.
// Si ambos están en el mismo archivo (ej. pages/api/auth/user.js),
// entonces necesitarás una estructura if (req.method === 'POST') { ... } else if (req.method === 'GET') { ... }
import { supabase } from '@/lib/supabase';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  // Manejador para el inicio de sesión (GET)
  if (req.method === 'GET') {
    try {
      // Para solicitudes GET, los parámetros se obtienen de req.query
      const { email, contrasena } = req.query;

      // Validación básica
      if (!email || !contrasena) {
        return res.status(400).json({ error: "Email y contraseña son requeridos" });
      }

      // 1. Buscar al usuario por email
      const { data: userData, error: userError } = await supabase
        .from('usuario')
        .select('id, nombre, email, contrasena') // Asegúrate de seleccionar la columna de contraseña hasheada
        .eq('email', email)
        .single(); // .single() espera un solo resultado

      if (userError && userError.code === 'PGRST116') { // Código para "No Rows Found"
        return res.status(404).json({ error: "Usuario no encontrado o credenciales inválidas" });
      }
      if (userError) throw userError;

      if (!userData) { // Si no se encuentra el usuario
        return res.status(404).json({ error: "Usuario no encontrado o credenciales inválidas" });
      }

      // 2. Comparar la contraseña proporcionada con la contraseña hasheada almacenada
      const passwordMatch = await bcrypt.compare(contrasena, userData.contrasena);

      if (!passwordMatch) {
        return res.status(401).json({ error: "Credenciales inválidas" });
      }

      // Si las credenciales son correctas, puedes devolver información del usuario (sin la contraseña hasheada)
      const { contrasena: _, ...userWithoutPassword } = userData; // Excluir la contraseña del objeto de respuesta

      return res.status(200).json(userWithoutPassword); // 200 OK para éxito

    } catch (error) {
      console.error("Error en la API de login (GET):", error);
      return res.status(500).json({
        error: error.message || "Error al intentar iniciar sesión"
      });
    }
  }

  // Manejador para el registro (POST)
  else if (req.method === 'POST') {
    try {
      const { nombre, email, contrasena } = req.body;

      // Validación básica
      if (!nombre || !email || !contrasena) {
        return res.status(400).json({ error: "Todos los campos son requeridos" });
      }

      // Hash de contraseña
      const hashedPassword = await bcrypt.hash(contrasena, 10);

      // Insertar en Supabase
      const { data, error } = await supabase
        .from('usuario')
        .insert([{ nombre, email, contrasena: hashedPassword }])
        .select();

      if (error) throw error;

      return res.status(201).json(data[0]);

    } catch (error) {
      // Manejar el error de email duplicado de Supabase (código 23505 para violación de unicidad)
      if (error.code === '23505') {
        return res.status(409).json({ error: "El email ya está registrado." });
      }
      return res.status(500).json({
        error: error.message || "Error al registrar usuario"
      });
    }
  }

  // Método no permitido para cualquier otra solicitud
  return res.status(405).json({ error: "Método no permitido" });
}