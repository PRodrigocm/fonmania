'use client';

import React, { useState, useEffect } from 'react';
import { 
  ShoppingBagIcon, 
  DevicePhoneMobileIcon, 
  GiftIcon,
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

interface DashboardStats {
  totalCelulares: number;
  totalAccesorios: number;
  totalPromociones: number;
  ventasHoy: number;
  ventasMes: number;
  pedidosPendientes: number;
  usuariosRegistrados: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalCelulares: 0,
    totalAccesorios: 0,
    totalPromociones: 0,
    ventasHoy: 0,
    ventasMes: 0,
    pedidosPendientes: 0,
    usuariosRegistrados: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const response = await fetch('/api/admin/dashboard/stats');
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const statCards = [
    {
      name: 'Total Celulares',
      value: stats.totalCelulares,
      icon: DevicePhoneMobileIcon,
      color: 'bg-blue-500',
      change: '+12%',
      changeType: 'positive',
    },
    {
      name: 'Total Accesorios',
      value: stats.totalAccesorios,
      icon: GiftIcon,
      color: 'bg-green-500',
      change: '+8%',
      changeType: 'positive',
    },
    {
      name: 'Promociones Activas',
      value: stats.totalPromociones,
      icon: GiftIcon,
      color: 'bg-yellow-500',
      change: '+5%',
      changeType: 'positive',
    },
    {
      name: 'Ventas Hoy',
      value: `$${stats.ventasHoy.toLocaleString()}`,
      icon: CurrencyDollarIcon,
      color: 'bg-purple-500',
      change: '+15%',
      changeType: 'positive',
    },
    {
      name: 'Ventas del Mes',
      value: `$${stats.ventasMes.toLocaleString()}`,
      icon: ClockIcon,
      color: 'bg-indigo-500',
      change: '+22%',
      changeType: 'positive',
    },
    {
      name: 'Pedidos Pendientes',
      value: stats.pedidosPendientes,
      icon: ShoppingBagIcon,
      color: 'bg-red-500',
      change: '-3%',
      changeType: 'negative',
    },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Resumen general de Fonmania</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <ArrowTrendingUpIcon className={`h-4 w-4 ${
                stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'
              }`} />
              <span className={`ml-1 text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="ml-2 text-sm text-gray-500">vs mes anterior</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <DevicePhoneMobileIcon className="h-6 w-6 text-gray-600 mr-3" />
            <span className="text-sm font-medium text-gray-700">Agregar Celular</span>
          </button>
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <GiftIcon className="h-6 w-6 text-gray-600 mr-3" />
            <span className="text-sm font-medium text-gray-700">Agregar Accesorio</span>
          </button>
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <GiftIcon className="h-6 w-6 text-gray-600 mr-3" />
            <span className="text-sm font-medium text-gray-700">Crear Promoción</span>
          </button>
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <ShoppingBagIcon className="h-6 w-6 text-gray-600 mr-3" />
            <span className="text-sm font-medium text-gray-700">Ver Pedidos</span>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Actividad Reciente</h2>
        <div className="space-y-4">
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Nuevo celular agregado</p>
              <p className="text-xs text-gray-500">iPhone 15 Pro Max - hace 2 horas</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Promoción creada</p>
              <p className="text-xs text-gray-500">Descuento 20% en accesorios - hace 4 horas</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Nuevo pedido recibido</p>
              <p className="text-xs text-gray-500">Pedido #1234 - hace 6 horas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 