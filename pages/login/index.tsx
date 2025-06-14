//login/index.tsx
"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { LoginHeader } from "../../components/login/LoginHeader";
import { EmailInput } from "../../components/login/EmailInput";
import { PasswordInput } from "../../components/login/PasswordInput";
import { LoginButton } from "../../components/login/LoginButton";
import { RegistrationPrompt } from "../../components/login/RegistrationPrompt";

// Definimos el tipo de respuesta para la mutación GraphQL
interface AuthSuccessGraphQLResponse {
  data: {
    login: { // El nombre del campo de la mutación en el esquema GraphQL
      nombre: string;
      email: string;
      id?: string;
    };
  };
}

interface AuthErrorGraphQLResponse {
  errors: Array<{
    message: string;
    extensions?: any;
    path?: string[];
  }>;
}

type GraphQLResponse = AuthSuccessGraphQLResponse | AuthErrorGraphQLResponse;

function LoginFormDesktop() {
  const [email, setEmail] = React.useState<string>("");
  const [contrasena, setContrasena] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    // Definición de la mutación GraphQL
    const LOGIN_MUTATION = `
      mutation Login($email: String!, $contrasena: String!) {
        login(email: $email, contrasena: $contrasena) {
          id
          nombre
          email
        }
      }
    `;

    try {
      const response = await fetch("/api/graphql", { // Asume que tu endpoint GraphQL está en /api/graphql
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: LOGIN_MUTATION,
          variables: { email, contrasena },
        }),
      });

      const data: GraphQLResponse = await response.json();

      // Manejo de errores de red o HTTP (por ejemplo, si el servidor GraphQL no responde)
      if (!response.ok) {
        setError("Error de conexión con el servidor.");
        return;
      }

      // Manejo de errores de GraphQL (si la mutación falla lógicamente)
      if ('errors' in data && data.errors && data.errors.length > 0) {
        setError(data.errors[0].message || "Error al iniciar sesión.");
        return;
      }

      // Si todo sale bien, la respuesta debe contener 'data' y 'login'
      if ('data' in data && data.data && data.data.login) {
        console.log("Autenticación exitosa:", data.data.login);
        router.push("/dashboard");
      } else {
        // En caso de una estructura de respuesta inesperada
        setError("Respuesta inesperada del servidor.");
      }

    } catch (err) {
      console.error("Error en la solicitud GraphQL:", err);
      setError("Error de conexión.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-white">
      <section className="flex flex-col justify-center items-center md:w-1/2 lg:w-2/5 xl:w-1/3 min-h-[50vh] md:min-h-screen flex-shrink-0">
        <div className="w-full max-w-sm px-6 sm:px-10 py-6 sm:py-10">
          <LoginHeader />
          <form className="w-full mt-8" onSubmit={handleSubmit}>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
            <PasswordInput value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
            <LoginButton type="submit" disabled={loading}>
              {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </LoginButton>
          </form>
          <RegistrationPrompt />
        </div>
      </section>
      <aside
        className="hidden md:block md:w-1/2 lg:w-3/5 xl:w-2/3 min-h-screen flex-grow"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets/TEMP/378b510a6128bc5f2135f1dbebd9569a169685a5?placeholderIfAbsent=true')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
      </aside>
    </main>
  );
}

export default LoginFormDesktop;