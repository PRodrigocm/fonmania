"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaUser, FaShoppingBag } from "react-icons/fa";

// Hooks personalizados
import { useUser } from "../../hooks/useUser";
import { useUserEdit } from "../../hooks/useUserEdit";

// Componentes
import { UserProfile } from "../../components/user/UserProfile";
import { UserStats } from "../../components/user/UserStats";
import { OrderHistory } from "../../components/user/OrderHistory";

export default function MiCuentaPage() {
  const [activeTab, setActiveTab] = useState<'perfil' | 'pedidos'>('perfil');
  
  // Hook personalizado para manejar datos del usuario
  const { user, pedidos, isLoading, updateUser } = useUser();
  
  // Hook personalizado para manejar la edición del usuario
  const userEditProps = useUserEdit(user, updateUser);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--color-blanco)] text-[var(--color-negro)]">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-morado)] mx-auto mb-4"></div>
            <p className="text-gray-600">Cargando información de cuenta...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--color-blanco)] text-[var(--color-negro)]">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600">Redirigiendo al login...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-blanco)] text-[var(--color-negro)]">
      <Header />
      <main className="flex-1 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-title text-4xl font-bold text-[var(--color-morado)] mb-4">
              Mi Cuenta
            </h1>
            <p className="text-gray-600">
              Gestiona tu información personal y revisa tu historial de compras
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab('perfil')}
              className={`px-6 py-3 font-title text-lg font-semibold border-b-2 transition ${
                activeTab === 'perfil'
                  ? 'border-[var(--color-morado)] text-[var(--color-morado)]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <FaUser className="inline mr-2" />
              Perfil
            </button>
            <button
              onClick={() => setActiveTab('pedidos')}
              className={`px-6 py-3 font-title text-lg font-semibold border-b-2 transition ${
                activeTab === 'pedidos'
                  ? 'border-[var(--color-morado)] text-[var(--color-morado)]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <FaShoppingBag className="inline mr-2" />
              Mis Pedidos ({pedidos.length})
            </button>
          </div>

          {/* Contenido de las tabs */}
          {activeTab === 'perfil' && user && (
            <>
              <UserProfile
                user={user}
                isEditing={userEditProps.isEditing}
                editedUser={userEditProps.editedUser}
                isSaving={userEditProps.isSaving}
                saveMessage={userEditProps.saveMessage}
                onEdit={userEditProps.handleEdit}
                onCancel={userEditProps.handleCancel}
                onSave={userEditProps.handleSave}
                onInputChange={userEditProps.handleInputChange}
              />
              <UserStats pedidos={pedidos} />
            </>
          )}

          {activeTab === 'pedidos' && (
            <OrderHistory pedidos={pedidos} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
