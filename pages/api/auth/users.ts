//auth/users.ts
import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabase";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie"; // Librería para manejar cookies

const SECRET_KEY = process.env.JWT_SECRET || "clave_super_segura";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Método ${req.method} no permitido` });
  }

  try {
    const { email, contrasena } = req.body;

    if (!email || !contrasena) {
      return res.status(400).json({ error: "Email y contraseña son requeridos." });
    }

    // Buscar usuario en Supabase
    const { data: userData, error: userError } = await supabase
      .from("usuario")
      .select("id, nombre, email, contrasena")
      .eq("email", email)
      .single();

    if (userError || !userData) {
      return res.status(404).json({ error: "Credenciales inválidas." });
    }

    // Verificar la contraseña con bcrypt
    const passwordMatch = await bcrypt.compare(contrasena, userData.contrasena);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Credenciales inválidas." });
    }

    // Generar el token JWT
    const token = jwt.sign(
      { id: userData.id, email: userData.email, nombre: userData.nombre },
      SECRET_KEY,
      { expiresIn: "2h" }
    );

    // Guardar el token en cookies
    res.setHeader("Set-Cookie", serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    }));
    console.log("✅ Token guardado en cookies:", token); // 🔍 Verifica si aparece en la terminal después 
    // Excluir la contraseña antes de responder
    const { contrasena: _, ...userWithoutPassword } = userData;

    return res.status(200).json({ user: userWithoutPassword });

  } catch (error) {
    console.error("Error en la API de autenticación:", error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
}