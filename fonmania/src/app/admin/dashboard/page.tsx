'use client';

import React, { useState, useEffect } from 'react';
import { 
  ShoppingBagIcon, 
  DevicePhoneMobileIcon, 
  GiftIcon,
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserIcon,
  CheckCircleIcon,
  PlusCircleIcon
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

interface Activity {
  ID: number;
  tipo: string;
  descripcion: string;
  entidad: string | null;
  usuarioID: number | null;
  fecha: string;
  metadata: string | null;
  usuario?: {
    nombre: string;
  } | null;
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
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activitiesLoading, setActivitiesLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
    fetchRecentActivities();
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

  const fetchRecentActivities = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/activities?limit=8', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setActivities(data.activities);
      }
    } catch (error) {
      console.error('Error fetching activities:', error);
    } finally {
      setActivitiesLoading(false);
    }
  };

  const getActivityIcon = (tipo: string) => {
    switch (tipo) {
      case 'producto_creado':
        return PlusCircleIcon;
      case 'pedido_recibido':
        return ShoppingBagIcon;
      case 'promocion_creada':
        return GiftIcon;
      case 'usuario_registrado':
        return UserIcon;
      case 'producto_actualizado':
        return DevicePhoneMobileIcon;
      case 'pedido_actualizado':
        return CheckCircleIcon;
      default:
        return ClockIcon;
    }
  };

  const getActivityColor = (tipo: string) => {
    switch (tipo) {
      case 'producto_creado':
        return 'bg-green-500';
      case 'pedido_recibido':
        return 'bg-blue-500';
      case 'promocion_creada':
        return 'bg-yellow-500';
      case 'usuario_registrado':
        return 'bg-purple-500';
      case 'producto_actualizado':
        return 'bg-indigo-500';
      case 'pedido_actualizado':
        return 'bg-emerald-500';
      default:
        return 'bg-gray-500';
    }
  };

  const formatTimeAgo = (fecha: string) => {
    const now = new Date();
    const activityDate = new Date(fecha);
    const diffInMinutes = Math.floor((now.getTime() - activityDate.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'hace un momento';
    if (diffInMinutes < 60) return `hace ${diffInMinutes} minuto${diffInMinutes > 1 ? 's' : ''}`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `hace ${diffInHours} hora${diffInHours > 1 ? 's' : ''}`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    return `hace ${diffInDays} día${diffInDays > 1 ? 's' : ''}`;
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
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Actividad Reciente</h2>
          <button 
            onClick={fetchRecentActivities}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            disabled={activitiesLoading}
          >
            {activitiesLoading ? 'Cargando...' : 'Actualizar'}
          </button>
        </div>
        
        {activitiesLoading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        ) : activities.length > 0 ? (
          <div className="space-y-3">
            {activities.map((activity) => {
              const IconComponent = getActivityIcon(activity.tipo);
              const colorClass = getActivityColor(activity.tipo);
              
              return (
                <div key={activity.ID} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className={`p-2 rounded-full ${colorClass} mr-3 flex-shrink-0`}>
                    <IconComponent className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {activity.descripcion}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span>{formatTimeAgo(activity.fecha)}</span>
                      {activity.usuario && (
                        <span className="ml-2">• por {activity.usuario.nombre}</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-8">
            <ClockIcon className="h-12 w-12 text-gray-400 mx-auto mb-3" />
            <p className="text-sm text-gray-500">No hay actividades recientes</p>
          </div>
        )}
      </div>
    </div>
  );
} 