import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  console.log("Middleware interceptando:", req.nextUrl.pathname);

  const token = req.cookies.get("token")?.value;
  console.log("Token recibido:", token);

   // 📌 Excluir `favicon.ico`
    if (req.nextUrl.pathname === "/favicon.ico") {
      return NextResponse.next();
    }


  // 📌 Rutas públicas que NO necesitan autenticación
  const rutasPublicas = ["/login", "/signup", "/api/auth/users"];

  // 📌 Si la ruta no es pública, verificar autenticación
  if (!rutasPublicas.includes(req.nextUrl.pathname)) {
    if (!token) {
      console.log("❌ No hay token, redirigiendo a login...");
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

// 📌 Protege todas las rutas excepto las públicas
//export const config = {
  //matcher: ["/:path*"], // Aplica a TODAS las rutas
//};
// Si quieres proteger solo el dashboard, descomenta la siguiente línea y comenta la anterior
export const config = {
  matcher: ["/dashboard/:path*", "/crearEquipo/:path*", "/modificarEquipo/:path*", "/misEquipos/:path*","/equipoCreadoExitosamente/:path*","/confirmacionEquipo/:path*"],
};