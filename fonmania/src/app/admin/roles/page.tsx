'use client';

import { useState, useEffect } from 'react';
import { 
  PlusIcon, 
  TrashIcon, 
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

interface Rol {
  ID: number;
  nombre: string;
  _count: {
    rolPermisos: number;
  };
}

export default function AdminRoles() {
  const [roles, setRoles] = useState<Rol[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUsingFallbackData, setIsUsingFallbackData] = useState(false);
  
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: ''
  });

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      console.log('Frontend Roles - Token en localStorage:', token ? 'presente' : 'ausente');
      console.log('Frontend Roles - Token preview:', token ? token.substring(0, 20) + '...' : 'null');
      
      const response = await fetch('/api/admin/roles', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      console.log('Frontend Roles - Response status:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        setRoles(data);
        setIsUsingFallbackData(false);
      } else if (response.status === 401) {
        // Token inválido o no autorizado, usar datos de fallback
        console.warn('No autorizado para obtener roles reales, usando datos de demostración');
        setIsUsingFallbackData(true);
        setRoles([
          {
            ID: 1,
            nombre: 'Administrador',
            _count: { rolPermisos: 15 }
          },
          {
            ID: 2,
            nombre: 'Moderador',
            _count: { rolPermisos: 8 }
          },
          {
            ID: 3,
            nombre: 'Usuario',
            _count: { rolPermisos: 3 }
          },
          {
            ID: 4,
            nombre: 'Vendedor',
            _count: { rolPermisos: 6 }
          }
        ]);
      } else {
        console.error('Error fetching roles:', response.status);
        setIsUsingFallbackData(true);
        setRoles([]);
      }
    } catch (error) {
      console.error('Error fetching roles:', error);
      setIsUsingFallbackData(true);
      setRoles([]);
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre del rol es requerido';
    } else if (formData.nombre.trim().length < 3) {
      newErrors.nombre = 'El nombre debe tener al menos 3 caracteres';
    }
    
    if (!formData.descripcion.trim()) {
      newErrors.descripcion = 'La descripción es requerida';
    } else if (formData.descripcion.trim().length < 10) {
      newErrors.descripcion = 'La descripción debe tener al menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/roles', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setShowModal(false);
        resetForm();
        fetchRoles();
      } else {
        setErrors({ general: data.error || 'Error al crear rol' });
      }
    } catch (error) {
      console.error('Error saving role:', error);
      setErrors({ general: 'Error de conexión' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: number) => {
    const rol = roles.find(r => r.ID === id);
    if (!rol) return;

    if (confirm(`¿Estás seguro de que quieres eliminar el rol "${rol.nombre}"?`)) {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await fetch(`/api/admin/roles/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await response.json();

        if (response.ok) {
          fetchRoles();
        } else {
          alert(data.error || 'Error al eliminar rol');
        }
      } catch (error) {
        console.error('Error deleting role:', error);
        alert('Error de conexión');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      nombre: '',
      descripcion: ''
    });
    setErrors({});
  };

  const filteredRoles = roles.filter(rol =>
    rol.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRoleBadgeColor = (roleName: string) => {
    switch (roleName.toLowerCase()) {
      case 'admin':
      case 'administrador':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'supervisor':
      case 'moderador':
      case 'gerente':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'usuario':
      case 'cliente':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

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
          <h1 className="text-2xl font-bold text-gray-900">Gestión de Roles</h1>
          <p className="text-gray-600">Administra los roles y permisos del sistema</p>
        </div>
        <button
          onClick={() => {
            resetForm();
            setShowModal(true);
          }}
          className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Nuevo Rol
        </button>
      </div>

      {/* Fallback Data Warning */}
      {isUsingFallbackData && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center">
            <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-yellow-800">
                Datos de Demostración
              </h3>
              <p className="text-sm text-yellow-700 mt-1">
                No se pudo conectar a la base de datos real. Se están mostrando datos de ejemplo.
                Para ver los datos reales, inicia sesión como administrador.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar roles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <ShieldCheckIcon className="h-8 w-8 text-blue-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Total Roles</p>
              <p className="text-2xl font-bold text-gray-900">{roles.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <UserGroupIcon className="h-8 w-8 text-green-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Roles Activos</p>
              <p className="text-2xl font-bold text-gray-900">
                {roles.filter(r => r._count.rolPermisos > 0).length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <ExclamationTriangleIcon className="h-8 w-8 text-yellow-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Sin Usuarios</p>
              <p className="text-2xl font-bold text-gray-900">
                {roles.filter(r => r._count.rolPermisos === 0).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Roles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRoles.map((rol, index) => (
          <div key={`rol-${rol.ID}-${index}`} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <ShieldCheckIcon className="h-6 w-6 text-gray-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-gray-900">{rol.nombre}</h3>
                  <p className="text-sm text-gray-500">ID: {rol.ID}</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(rol.ID)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                title="Eliminar rol"
              >
                <TrashIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Estado:</span>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getRoleBadgeColor(rol.nombre)}`}>
                  {rol.nombre}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Usuarios asignados:</span>
                <span className="text-sm font-medium text-gray-900">
                  {rol._count.rolPermisos}
                </span>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Creado: Sistema</span>
                  <span>Modificado: --</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredRoles.length === 0 && (
        <div className="text-center py-12">
          <ShieldCheckIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No hay roles</h3>
          <p className="mt-1 text-sm text-gray-500">
            {searchTerm ? 'No se encontraron roles con ese término de búsqueda.' : 'Comienza creando un nuevo rol.'}
          </p>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">Nuevo Rol</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {errors.general && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-700 text-sm">{errors.general}</p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre del Rol *
                </label>
                <input
                  type="text"
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900 ${
                    errors.nombre ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Ej: Supervisor, Moderador, etc."
                />
                {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Descripción *
                </label>
                <textarea
                  value={formData.descripcion}
                  onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
                  rows={3}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900 ${
                    errors.descripcion ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Describe las responsabilidades y permisos de este rol..."
                />
                {errors.descripcion && <p className="text-red-500 text-sm mt-1">{errors.descripcion}</p>}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ExclamationTriangleIcon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      Una vez creado el rol, podrás asignar permisos específicos y usuarios desde la gestión de usuarios.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Creando...' : 'Crear Rol'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
