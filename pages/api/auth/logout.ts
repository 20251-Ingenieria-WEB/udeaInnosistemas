import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Método ${req.method} no permitido` });
  }

  // 📌 Eliminar el token de las cookies
  res.setHeader("Set-Cookie", serialize("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0, // Expira de inmediato
  }));

  return res.status(200).json({ message: "Sesión cerrada correctamente." });
}

// 🚩 Nota: El siguiente código debe usarse en un componente React, no en un archivo de API route.
// Si deseas redirigir desde el lado del cliente, mueve handleLogout a un componente React.
// Ejemplo de uso correcto en un componente React:




