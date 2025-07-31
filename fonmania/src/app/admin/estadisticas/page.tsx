'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  DevicePhoneMobileIcon,
  CubeIcon
} from '@heroicons/react/24/outline';

interface Estadisticas {
  ventas: {
    total: number;
    hoy: number;
    semana: number;
    mes: number;
    crecimiento: number;
  };
  productos: {
    totalCelulares: number;
    totalAccesorios: number;
    productosPromocion: number;
  };
  pedidos: {
    total: number;
    pendientes: number;
    completados: number;
    cancelados: number;
  };
  usuarios: {
    total: number;
    nuevos: number;
    activos: number;
  };
  ventasPorMes: Array<{
    mes: string;
    ventas: number;
  }>;
  productosMasVendidos: Array<{
    nombre: string;
    ventas: number;
    tipo: string;
  }>;
}

export default function AdminEstadisticas() {
  const [estadisticas, setEstadisticas] = useState<Estadisticas>({
    ventas: {
      total: 0,
      hoy: 0,
      semana: 0,
      mes: 0,
      crecimiento: 0,
    },
    productos: {
      totalCelulares: 0,
      totalAccesorios: 0,
      productosPromocion: 0,
    },
    pedidos: {
      total: 0,
      pendientes: 0,
      completados: 0,
      cancelados: 0,
    },
    usuarios: {
      total: 0,
      nuevos: 0,
      activos: 0,
    },
    ventasPorMes: [],
    productosMasVendidos: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [periodo, setPeriodo] = useState('mes');

  const fetchEstadisticas = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/admin/estadisticas?periodo=${periodo}`);
      if (response.ok) {
        const data = await response.json();
        setEstadisticas(data);
      }
    } catch (error) {
      console.error('Error fetching estadisticas:', error);
    } finally {
      setIsLoading(false);
    }
  }, [periodo]);

  useEffect(() => {
    fetchEstadisticas();
  }, [fetchEstadisticas]);

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
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Estadísticas</h1>
          <p className="text-gray-600">Análisis detallado del rendimiento del negocio</p>
        </div>
        <select
          value={periodo}
          onChange={(e) => setPeriodo(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        >
          <option value="semana">Última Semana</option>
          <option value="mes">Último Mes</option>
          <option value="trimestre">Último Trimestre</option>
          <option value="año">Último Año</option>
        </select>
      </div>

      {/* Métricas Principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Ventas Totales</p>
              <p className="text-2xl font-bold text-gray-900">${estadisticas.ventas.total.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-green-500 rounded-full">
              <CurrencyDollarIcon className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowTrendingUpIcon className="h-4 w-4 text-green-500" />
            <span className="ml-1 text-sm font-medium text-green-600">
              +{estadisticas.ventas.crecimiento}%
            </span>
            <span className="ml-2 text-sm text-gray-500">vs período anterior</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pedidos</p>
              <p className="text-2xl font-bold text-gray-900">{estadisticas.pedidos.total}</p>
            </div>
            <div className="p-3 bg-blue-500 rounded-full">
              <ShoppingCartIcon className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              {estadisticas.pedidos.pendientes} pendientes
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Productos</p>
              <p className="text-2xl font-bold text-gray-900">
                {estadisticas.productos.totalCelulares + estadisticas.productos.totalAccesorios}
              </p>
            </div>
            <div className="p-3 bg-purple-500 rounded-full">
              <DevicePhoneMobileIcon className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              {estadisticas.productos.productosPromocion} en promoción
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Administradores</p>
              <p className="text-2xl font-bold text-gray-900">{estadisticas.usuarios.total}</p>
            </div>
            <div className="p-3 bg-yellow-500 rounded-full">
              <UserGroupIcon className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              {estadisticas.usuarios.activos} activos
            </p>
          </div>
        </div>
      </div>

      {/* Gráficos y Detalles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ventas por Mes */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Ventas por Mes</h3>
          <div className="space-y-3">
            {estadisticas.ventasPorMes.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{item.mes}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-black h-2 rounded-full" 
                      style={{ width: `${(item.ventas / Math.max(...estadisticas.ventasPorMes.map(v => v.ventas))) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">${item.ventas.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Productos Más Vendidos */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Productos Más Vendidos</h3>
          <div className="space-y-3">
            {estadisticas.productosMasVendidos.map((producto, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${
                    producto.tipo === 'celular' ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    {producto.tipo === 'celular' ? (
                      <DevicePhoneMobileIcon className="h-4 w-4 text-blue-600" />
                    ) : (
                      <CubeIcon className="h-4 w-4 text-green-600" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{producto.nombre}</p>
                    <p className="text-xs text-gray-500">{producto.tipo}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900">{producto.ventas} vendidos</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detalles de Pedidos */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Estado de Pedidos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">{estadisticas.pedidos.completados}</p>
            <p className="text-sm text-gray-600">Completados</p>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <p className="text-2xl font-bold text-yellow-600">{estadisticas.pedidos.pendientes}</p>
            <p className="text-sm text-gray-600">Pendientes</p>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <p className="text-2xl font-bold text-red-600">{estadisticas.pedidos.cancelados}</p>
            <p className="text-sm text-gray-600">Cancelados</p>
          </div>
        </div>
      </div>

      {/* Resumen de Productos */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Resumen de Productos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center p-4 bg-blue-50 rounded-lg">
            <DevicePhoneMobileIcon className="h-8 w-8 text-blue-600 mr-4" />
            <div>
              <p className="text-lg font-semibold text-gray-900">{estadisticas.productos.totalCelulares}</p>
              <p className="text-sm text-gray-600">Celulares en catálogo</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-green-50 rounded-lg">
            <CubeIcon className="h-8 w-8 text-green-600 mr-4" />
            <div>
              <p className="text-lg font-semibold text-gray-900">{estadisticas.productos.totalAccesorios}</p>
              <p className="text-sm text-gray-600">Accesorios en catálogo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 