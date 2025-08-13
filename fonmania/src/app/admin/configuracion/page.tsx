'use client';

import { useState, useEffect } from 'react';
import {
  CogIcon,
  UserIcon,
  ShieldCheckIcon,
  BellIcon,
  ServerIcon,
  GlobeAltIcon,
  KeyIcon,
  EyeIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline';

interface Configuracion {
  nombreSitio: string;
  descripcion: string;
  emailContacto: string;
  telefono: string;
  direccion: string;
  redesSociales: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  configuracionEmail: {
    servidor: string;
    puerto: string;
    usuario: string;
    contrasena: string;
  };
}

export default function AdminConfiguracion() {
  const [configuracion, setConfiguracion] = useState<Configuracion>({
    nombreSitio: 'Fonmania',
    descripcion: 'Tu tienda de confianza para celulares y accesorios',
    emailContacto: '',
    telefono: '',
    direccion: '',
    redesSociales: {
      facebook: '',
      instagram: '',
      twitter: '',
    },
    configuracionEmail: {
      servidor: '',
      puerto: '',
      usuario: '',
      contrasena: '',
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    fetchConfiguracion();
  }, []);

  const fetchConfiguracion = async () => {
    try {
      const response = await fetch('/api/admin/configuracion');
      if (response.ok) {
        const data = await response.json();
        setConfiguracion(data);
      }
    } catch (error) {
      console.error('Error fetching configuracion:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMensaje('');

    try {
      const response = await fetch('/api/admin/configuracion', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(configuracion),
      });

      if (response.ok) {
        setMensaje('Configuración actualizada correctamente');
        setTimeout(() => setMensaje(''), 3000);
      } else {
        setMensaje('Error al actualizar la configuración');
      }
    } catch (err) {
      console.error('Error guardando configuración:', err);
      setIsLoading(false);
    }
  };

  const handleChange = (seccion: string, campo: string, valor: string) => {
    if (seccion === 'redesSociales') {
      setConfiguracion(prev => ({
        ...prev,
        redesSociales: {
          ...prev.redesSociales,
          [campo]: valor
        }
      }));
    } else if (seccion === 'configuracionEmail') {
      setConfiguracion(prev => ({
        ...prev,
        configuracionEmail: {
          ...prev.configuracionEmail,
          [campo]: valor
        }
      }));
    } else {
      // Para campos generales (nombreSitio, descripcion, emailContacto, telefono, direccion)
      setConfiguracion(prev => ({
        ...prev,
        [campo]: valor
      }));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-gray-900">Configuración del Sistema</h1>
        <p className="text-gray-600">Administra la configuración general de Fonmania</p>
      </div>

      {mensaje && (
        <div className={`p-4 rounded-md ${
          mensaje.includes('Error') 
            ? 'bg-red-50 border border-red-200 text-red-700' 
            : 'bg-green-50 border border-green-200 text-green-700'
        }`}>
          {mensaje}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Información General */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-6">
            <GlobeAltIcon className="h-6 w-6 text-gray-600 mr-3" />
            <h2 className="text-lg font-semibold text-gray-900">Información General</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre del Sitio</label>
              <input
                type="text"
                value={configuracion.nombreSitio}
                onChange={(e) => handleChange('general', 'nombreSitio', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email de Contacto</label>
              <input
                type="email"
                value={configuracion.emailContacto}
                onChange={(e) => handleChange('general', 'emailContacto', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Teléfono</label>
              <input
                type="text"
                value={configuracion.telefono}
                onChange={(e) => handleChange('general', 'telefono', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Dirección</label>
              <input
                type="text"
                value={configuracion.direccion}
                onChange={(e) => handleChange('general', 'direccion', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Descripción</label>
              <textarea
                value={configuracion.descripcion}
                onChange={(e) => handleChange('general', 'descripcion', e.target.value)}
                rows={3}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
              />
            </div>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-6">
            <BellIcon className="h-6 w-6 text-gray-600 mr-3" />
            <h2 className="text-lg font-semibold text-gray-900">Redes Sociales</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Facebook</label>
              <input
                type="url"
                value={configuracion.redesSociales.facebook}
                onChange={(e) => handleChange('redesSociales', 'facebook', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
                placeholder="https://facebook.com/fonmania"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Instagram</label>
              <input
                type="url"
                value={configuracion.redesSociales.instagram}
                onChange={(e) => handleChange('redesSociales', 'instagram', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
                placeholder="https://instagram.com/fonmania"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Twitter</label>
              <input
                type="url"
                value={configuracion.redesSociales.twitter}
                onChange={(e) => handleChange('redesSociales', 'twitter', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
                placeholder="https://twitter.com/fonmania"
              />
            </div>
          </div>
        </div>

        {/* Configuración de Email */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-6">
            <ServerIcon className="h-6 w-6 text-gray-600 mr-3" />
            <h2 className="text-lg font-semibold text-gray-900">Configuración de Email</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Servidor SMTP</label>
              <input
                type="text"
                value={configuracion.configuracionEmail.servidor}
                onChange={(e) => handleChange('configuracionEmail', 'servidor', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
                placeholder="smtp.gmail.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Puerto</label>
              <input
                type="text"
                value={configuracion.configuracionEmail.puerto}
                onChange={(e) => handleChange('configuracionEmail', 'puerto', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
                placeholder="587"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Usuario</label>
              <input
                type="email"
                value={configuracion.configuracionEmail.usuario}
                onChange={(e) => handleChange('configuracionEmail', 'usuario', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
                placeholder="admin@fonmania.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Contraseña</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={configuracion.configuracionEmail.contrasena}
                  onChange={(e) => handleChange('configuracionEmail', 'contrasena', e.target.value)}
                  className="mt-1 block w-full pr-10 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Acciones del Sistema */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-6">
            <ShieldCheckIcon className="h-6 w-6 text-gray-600 mr-3" />
            <h2 className="text-lg font-semibold text-gray-900">Acciones del Sistema</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <button
               type="button"
               className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
             >
               <ServerIcon className="h-5 w-5 mr-2" />
               Respaldar Base de Datos
             </button>

            <button
              type="button"
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <KeyIcon className="h-5 w-5 mr-2" />
              Regenerar API Keys
            </button>

            <button
              type="button"
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <CogIcon className="h-5 w-5 mr-2" />
              Limpiar Cache
            </button>

            <button
              type="button"
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <UserIcon className="h-5 w-5 mr-2" />
              Gestionar Usuarios
            </button>
          </div>
        </div>

        {/* Botón de Guardar */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Guardando...' : 'Guardar Configuración'}
          </button>
        </div>
      </form>
    </div>
  );
} 