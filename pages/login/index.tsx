// pages/login/index.tsx
"use client"; // Marca el componente como un Client Component en Next.js App Router, aunque estás en Pages Router, es una buena práctica si migras.
import * as React from "react";
import { useRouter } from 'next/navigation'; // Importa useRouter de next/navigation

// Importa tus componentes
import { LoginHeader } from "../../components/login/LoginHeader";
import { EmailInput } from "../../components/login/EmailInput";
import { PasswordInput } from "../../components/login/PasswordInput";
import { LoginButton } from "../../components/login/LoginButton";
import { RegistrationPrompt } from "../../components/login/RegistrationPrompt";
import { ApiResponse, AuthErrorResponse  } from '../../types/api';



function LoginFormDesktop() {
  const [email, setEmail] = React.useState<string>('');
  const [contrasena, setContrasena] = React.useState<string>('');
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario (recarga de página)
    setLoading(true); // Activa el estado de carga
    setError(null); // Limpia cualquier error anterior

    try {
      // Construye la URL de la API con los parámetros de email y contraseña codificados
      // El endpoint de la API es /api/auth/users
      const apiUrl = `/api/auth/users?email=${encodeURIComponent(email)}&contrasena=${encodeURIComponent(contrasena)}`;

      
      // Realiza la petición GET a la API
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', // Indica que se espera una respuesta JSON
        },
      });

      // Parsea la respuesta como JSON
      //const data: { error?: string, [key: string]: any } = await response.json();

      const data: ApiResponse = await response.json();
      // Verifica si la respuesta no fue exitosa (códigos de estado 4xx o 5xx)
      if (!response.ok) {
        // Establece el mensaje de error de la API o un mensaje genérico
        //setError(data.error || 'Error al iniciar sesión. Inténtalo de nuevo.');
        //console.error("Error response data:", data); // Log del error para depuración
        setError((data as AuthErrorResponse).error || 'Error al iniciar sesión. Inténtalo de nuevo.');
        console.error("Error response data:", data);
        return; // Detiene la ejecución
      }

    
       // Si la respuesta fue exitosa, 'data' será de tipo AuthSuccessResponse
      console.log('Inicio de sesión exitoso:', data);
      // Puedes acceder a propiedades como (data as AuthSuccessResponse).token
      // o (data as AuthSuccessResponse).id si existen.
      router.push('/dashboard');



    } catch (err) {
      // Captura y maneja errores de red o errores al procesar la respuesta
      console.error('Error al conectar con la API:', err);
      // Establece un mensaje de error de conexión más detallado
      setError(`Error de conexión: ${err instanceof Error ? err.message : String(err)}. Inténtalo de nuevo.`);
    } finally {
      // Desactiva el estado de carga al finalizar la operación (éxito o error)
      setLoading(false);
    }
  };

  return (
    // Contenedor principal: flex en columna por defecto, y en fila en pantallas medianas (md) y superiores.
    // Ocupa al menos la altura completa de la pantalla.
    <main className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Sección del formulario: */}
      {/* Es un flex container en columna, centrado horizontal y verticalmente. */}
      {/* Ocupa anchos específicos en diferentes breakpoints (md, lg, xl). */}
      {/* flex-shrink-0 previene que esta sección se encoja más de lo necesario en flexbox. */}
      <section className="flex flex-col justify-center items-center md:w-1/2 lg:w-2/5 xl:w-1/3 min-h-[50vh] md:min-h-screen flex-shrink-0">
        {/* Nuevo div contenedor para el contenido real del formulario. */}
        {/* Este div controla el ancho máximo del contenido y el padding interno. */}
        {/* w-full asegura que ocupe todo el ancho disponible de su padre. */}
        {/* max-w-sm establece un ancho máximo para el contenido. */}
        {/* px-6 sm:px-10: padding horizontal para diferentes tamaños de pantalla. */}
        {/* py-6 sm:py-10: padding vertical para diferentes tamaños de pantalla. */}
        <div className="w-full max-w-sm px-6 sm:px-10 py-6 sm:py-10">
          <LoginHeader /> {/* Componente de encabezado de login */}

          {/* Formulario de login: Ocupa el ancho completo de su contenedor (el nuevo div). */}
          <form className="w-full mt-8" onSubmit={handleSubmit}>
            {/* Muestra un mensaje de error si existe */}
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            
            {/* Componente para la entrada de Email */}
            <EmailInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
            />
            
            {/* Componente para la entrada de Contraseña */}
            <PasswordInput
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              placeholder="Tu contraseña"
            />
            
            {/* Componente del botón de login */}
            <LoginButton type="submit" disabled={loading}>
              {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </LoginButton>
          </form>

          <RegistrationPrompt /> {/* Componente para el mensaje de registro */}
        </div>
      </section>

      {/* Sección de la imagen de fondo: */}
      {/* Oculta en pantallas pequeñas (hidden) y visible en medianas (md:block) y superiores. */}
      {/* Ocupa los anchos restantes en diferentes breakpoints. */}
      {/* flex-grow permite que esta sección ocupe todo el espacio restante en el flex container. */}
      {/* La imagen se aplica como fondo CSS para un mejor control del ajuste. */}
      <aside
        className="hidden md:block md:w-1/2 lg:w-3/5 xl:w-2/3 min-h-screen flex-grow"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets/TEMP/378b510a6128bc5f2135f1dbebd9569a169685a5?placeholderIfAbsent=true')`,
          backgroundSize: 'cover', // La imagen cubre todo el área, recortando si es necesario
          backgroundPosition: 'center', // Centra la imagen de fondo
          backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
        }}
      >
        {/* No hay etiqueta <img> aquí, ya que la imagen se maneja a través de background-image en el estilo. */}
      </aside>
    </main>
  );
}

export default LoginFormDesktop;