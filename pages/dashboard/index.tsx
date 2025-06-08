"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Header } from "../../components/head/Header";
import { DashboardSidebar } from "../../components/sidebar/DashboardSidebar";

function DashboardDesktop() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/verifyToken", {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();

        if (!response.ok) {
          console.log("❌ No autenticado, redirigiendo a login...");
          router.push("/login");
          return;
        }

        console.log("✅ Usuario autenticado:", data);
        setUser(data.user);
      } catch (error) {
        console.error("Error verificando autenticación:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) return <p>Cargando...</p>;


  return (
    <main className="relative bg-white min-h-screen w-full overflow-hidden">
      <Header />
      <DashboardSidebar />
      
    </main>
    
    
  );
}

export default DashboardDesktop;