"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";

interface AuthGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function AuthGuard({ children, fallback }: AuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const userData = localStorage.getItem("userData");
    
    if (token && userData) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setShowLogin(false);
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-morado)] mx-auto"></div>
          <p className="mt-4 text-gray-600">Verificando autenticación...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    if (showLogin) {
      return <LoginForm onSuccess={handleLoginSuccess} />;
    }

    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div className="min-h-screen bg-[var(--color-blanco)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="text-6xl mb-4">🔒</div>
          <h2 className="font-title text-3xl font-bold text-[var(--color-negro)]">
            Acceso Requerido
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Necesitas iniciar sesión para continuar
          </p>
          <div className="space-y-4">
            <button
              onClick={() => setShowLogin(true)}
              className="w-full py-3 px-4 border border-transparent text-sm font-medium rounded-md text-[var(--color-amarillo)] bg-[var(--color-morado)] hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-morado)] transition duration-200"
            >
              Iniciar Sesión
            </button>
            <button
              onClick={() => router.push("/register")}
              className="w-full py-3 px-4 border border-[var(--color-morado)] text-sm font-medium rounded-md text-[var(--color-morado)] bg-transparent hover:bg-[var(--color-morado)] hover:text-[var(--color-amarillo)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-morado)] transition duration-200"
            >
              Crear Cuenta
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
} 