"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaIdCard, FaShoppingBag, FaCalendar, FaDollarSign, FaTruck, FaCheckCircle, FaClock, FaTimes } from "react-icons/fa";

interface User {
  nombre: string;
  email: string;
  dni: string;
  direccion: string;
}

interface Pedido {
  ID: number;
  fecha: string;
  estado: string;
  total: number;
  detalles: PedidoDetalle[];
  envio?: {
    empresa: string;
    codigoSeguimiento: string;
    estado: string;
  };
}

interface PedidoDetalle {
  ID: number;
  producto: {
    nombre: string;
    imagen: string;
    marca: string;
  };
  cantidad: number;
  precio_unitario: number;
  subtotal: number;
}

export default function MiCuentaPage() {
  const [user, setUser] = useState<User | null>(null);
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'perfil' | 'pedidos'>('perfil');

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = localStorage.getItem('userData');
        const token = localStorage.getItem('userToken');
        
        if (!userData || !token) {
          window.location.href = '/login?redirect=/mi-cuenta';
          return;
        }

        setUser(JSON.parse(userData));

        // Cargar historial de pedidos
        const response = await fetch('/api/pedidos', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setPedidos(data);
        }
      } catch (error) {
        console.error('Error cargando datos del usuario:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, []);

  const getEstadoColor = (estado: string) => {
    switch (estado.toLowerCase()) {
      case 'completado':
        return 'text-green-600 bg-green-100';
      case 'en proceso':
        return 'text-blue-600 bg-blue-100';
      case 'pendiente':
        return 'text-yellow-600 bg-yellow-100';
      case 'cancelado':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getEstadoIcon = (estado: string) => {
    switch (estado.toLowerCase()) {
      case 'completado':
        return <FaCheckCircle className="text-green-600" />;
      case 'en proceso':
        return <FaClock className="text-blue-600" />;
      case 'pendiente':
        return <FaClock className="text-yellow-600" />;
      case 'cancelado':
        return <FaTimes className="text-red-600" />;
      default:
        return <FaClock className="text-gray-600" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--color-blanco)] text-[var(--color-negro)]">
        <Header />
        <main className="flex-1 py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center items-center py-12">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-morado)] mx-auto mb-4"></div>
                <p className="text-gray-600">Cargando información de cuenta...</p>
              </div>
            </div>
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
        <main className="flex-1 py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-4">🔒</div>
            <h1 className="text-2xl font-bold text-gray-700 mb-4">Acceso Requerido</h1>
            <p className="text-gray-500 mb-6">Necesitas iniciar sesión para ver tu cuenta</p>
            <Link 
              href="/login?redirect=/mi-cuenta"
              className="px-6 py-3 bg-[var(--color-morado)] text-[var(--color-amarillo)] rounded-lg hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition font-title font-bold"
            >
              Iniciar Sesión
            </Link>
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
          {activeTab === 'perfil' && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-[var(--color-morado)] mb-6">Información Personal</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaUser className="text-[var(--color-morado)] text-xl" />
                    <div>
                      <p className="text-sm text-gray-500">Nombre Completo</p>
                      <p className="font-semibold text-lg">{user.nombre}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-[var(--color-morado)] text-xl" />
                    <div>
                      <p className="text-sm text-gray-500">Correo Electrónico</p>
                      <p className="font-semibold text-lg">{user.email}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaIdCard className="text-[var(--color-morado)] text-xl" />
                    <div>
                      <p className="text-sm text-gray-500">DNI</p>
                      <p className="font-semibold text-lg">{user.dni}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-[var(--color-morado)] text-xl" />
                    <div>
                      <p className="text-sm text-gray-500">Dirección</p>
                      <p className="font-semibold text-lg">{user.direccion}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold text-[var(--color-morado)] mb-4">Estadísticas</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">{pedidos.length}</div>
                    <div className="text-sm text-blue-600">Pedidos Totales</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {pedidos.filter(p => p.estado.toLowerCase() === 'completado').length}
                    </div>
                    <div className="text-sm text-green-600">Pedidos Completados</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      S/ {pedidos.reduce((total, p) => total + p.total, 0).toFixed(2)}
                    </div>
                    <div className="text-sm text-purple-600">Total Gastado</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pedidos' && (
            <div className="space-y-6">
              {pedidos.length === 0 ? (
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <div className="text-6xl mb-4">📦</div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">No tienes pedidos aún</h3>
                  <p className="text-gray-500 mb-6">
                    Cuando hagas tu primera compra, aparecerá aquí tu historial de pedidos
                  </p>
                  <Link 
                    href="/"
                    className="px-6 py-3 bg-[var(--color-morado)] text-[var(--color-amarillo)] rounded-lg hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition font-title font-bold"
                  >
                    Comenzar a Comprar
                  </Link>
                </div>
              ) : (
                pedidos.map((pedido) => (
                  <div key={pedido.ID} className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-[var(--color-morado)]">
                          Pedido #{pedido.ID}
                        </h3>
                        <p className="text-gray-600 flex items-center gap-2 mt-1">
                          <FaCalendar className="text-sm" />
                          {formatDate(pedido.fecha)}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 mt-2 md:mt-0">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2 ${getEstadoColor(pedido.estado)}`}>
                          {getEstadoIcon(pedido.estado)}
                          {pedido.estado}
                        </span>
                        <span className="text-lg font-bold text-[var(--color-morado)] flex items-center gap-2">
                          <FaDollarSign />
                          S/ {pedido.total.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Detalles del pedido */}
                    <div className="space-y-3">
                      {pedido.detalles.map((detalle) => (
                        <div key={detalle.ID} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                          <img 
                            src={detalle.producto.imagen || "/img/cat_1.png"} 
                            alt={detalle.producto.nombre}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold">{detalle.producto.nombre}</h4>
                            <p className="text-sm text-gray-600">{detalle.producto.marca}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600">Cantidad: {detalle.cantidad}</p>
                            <p className="font-semibold">S/ {detalle.subtotal.toFixed(2)}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Información de envío */}
                    {pedido.envio && (
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                          <FaTruck />
                          Información de Envío
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Empresa</p>
                            <p className="font-semibold">{pedido.envio.empresa}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Código de Seguimiento</p>
                            <p className="font-semibold">{pedido.envio.codigoSeguimiento}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Estado</p>
                            <p className="font-semibold">{pedido.envio.estado}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
} 