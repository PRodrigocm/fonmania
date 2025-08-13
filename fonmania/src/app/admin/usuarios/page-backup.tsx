'use client';

import { useState, useEffect } from 'react';
import { 
  PlusIcon, 
  PencilIcon, 
  TrashIcon, 
  MagnifyingGlassIcon,
  UserIcon,
  EnvelopeIcon,
  IdentificationIcon,
  MapPinIcon,
  ShieldCheckIcon,
  EyeIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { makeAuthenticatedRequest, handleAuthError } from '../../../utils/adminAuth';

interface Usuario {
  ID: number;
  correo: string;
  nombre: string;
  direccion: string;
  DNI: number;
  fecha_creacion: string;
  rolpermisoID: number;
  rolPermiso: {
    ID: number;
    nombre: string;
    descripcion: string;
  };
  _count: {
    pedidos: number;
    favoritos: number;
    resenas: number;
  };
}

interface RolPermiso {
  ID: number;
  nombre: string;
  descripcion: string;
}

export default function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [roles, setRoles] = useState<RolPermiso[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingUsuario, setEditingUsuario] = useState<Usuario | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    correo: '',
    password: '',
    nombre: '',
    direccion: '',
    DNI: '',
    rolpermisoID: '',
  });

  useEffect(() => {
    // Verificar token antes de hacer peticiones
    const token = localStorage.getItem('adminToken');
    if (!token) {
      console.log('No hay token, pero continuando para debug');
      // Temporalmente no redirigir para poder ver la página
      // window.location.href = '/admin/login';
      // return;
    }
    
    setIsCheckingAuth(false);
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      // Agregar datos de prueba mientras solucionamos la autenticación
      const testUsuarios: Usuario[] = [
        {
          ID: 1,
          correo: 'juan@example.com',
          nombre: 'Juan Pérez',
          direccion: 'Calle 123',
          DNI: 12345678,
          fecha_creacion: '2024-01-15T10:00:00Z',
          rolpermisoID: 1,
          rolPermiso: { 
            ID: 1, 
            nombre: 'Administrador',
            descripcion: 'Acceso completo al sistema'
          },
          _count: {
            pedidos: 5,
            favoritos: 3,
            resenas: 2
          }
        },
        {
          ID: 2,
          correo: 'maria@example.com',
          nombre: 'María García',
          direccion: 'Avenida 456',
          DNI: 87654321,
          fecha_creacion: '2024-02-20T14:30:00Z',
          rolpermisoID: 2,
          rolPermiso: { 
            ID: 2, 
            nombre: 'Usuario',
            descripcion: 'Usuario estándar'
          },
          _count: {
            pedidos: 2,
            favoritos: 8,
            resenas: 1
          }
        },
        {
          ID: 3,
          correo: 'carlos@example.com',
          nombre: 'Carlos López',
          direccion: 'Plaza 789',
          DNI: 11223344,
          fecha_creacion: '2024-03-10T09:15:00Z',
          rolpermisoID: 2,
          rolPermiso: { 
            ID: 2, 
            nombre: 'Usuario',
            descripcion: 'Usuario estándar'
          },
          _count: {
            pedidos: 0,
            favoritos: 1,
            resenas: 0
          }
        }
      ];

      const testRoles: RolPermiso[] = [
        { ID: 1, nombre: 'Administrador', descripcion: 'Acceso completo al sistema' },
        { ID: 2, nombre: 'Usuario', descripcion: 'Usuario estándar del sistema' },
        { ID: 3, nombre: 'Moderador', descripcion: 'Moderador de contenido' }
      ];

      // Establecer datos de prueba
      setUsuarios(testUsuarios);
      setRoles(testRoles);

      // Intentar cargar datos reales también
      await Promise.all([
        fetchUsuarios(),
        fetchRoles()
      ]);
    } catch (error) {
      console.error('Error cargando datos iniciales:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUsuarios = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      console.log('Fetching usuarios with token:', token ? 'Present' : 'Missing');
      
      const response = await fetch('/api/admin/usuarios', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      console.log('Response status usuarios:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      
      if (response.ok) {
        const data = await response.json();
        console.log('Usuarios data received:', data);
        setUsuarios(data);
      } else {
        console.error('Error status usuarios:', response.status, response.statusText);
        
        // Intentar leer el error, pero manejar si está vacío
        try {
          const errorData = await response.json();
          console.error('Error response usuarios:', errorData);
        } catch (jsonError) {
          console.error('No se pudo parsear error response usuarios:', jsonError);
          console.error('Response text:', await response.clone().text());
        }
        
        // Si es 401, redirigir al login
        if (response.status === 401) {
          console.log('Token inválido, redirigiendo al login');
          localStorage.removeItem('adminToken');
          window.location.href = '/admin/login';
        }
      }
    } catch (error) {
      console.error('Error fetching usuarios:', error);
    }
  };

  const fetchRoles = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      console.log('Fetching roles with token:', token ? 'Present' : 'Missing');
      
      const response = await fetch('/api/admin/roles', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      console.log('Response status roles:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      
      if (response.ok) {
        const data = await response.json();
        console.log('Roles data received:', data);
        setRoles(data);
      } else {
        console.error('Error status roles:', response.status, response.statusText);
        
        // Intentar leer el error, pero manejar si está vacío
        try {
          const errorData = await response.json();
          console.error('Error response roles:', errorData);
        } catch (jsonError) {
          console.error('No se pudo parsear error response roles:', jsonError);
          console.error('Response text:', await response.clone().text());
        }
        
        // Si es 401, redirigir al login
        if (response.status === 401) {
          console.log('Token inválido, redirigiendo al login');
          localStorage.removeItem('adminToken');
          window.location.href = '/admin/login';
        }
      }
    } catch (error) {
      console.error('Error fetching roles:', error);
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.correo.trim()) newErrors.correo = 'El correo es requerido';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = 'El correo no es válido';
    }
    
    if (!editingUsuario && !formData.password.trim()) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password && formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!formData.direccion.trim()) newErrors.direccion = 'La dirección es requerida';
    if (!formData.DNI.trim()) newErrors.DNI = 'El DNI es requerido';
    else if (!/^\d{8}$/.test(formData.DNI)) {
      newErrors.DNI = 'El DNI debe tener 8 dígitos';
    }
    if (!formData.rolpermisoID) newErrors.rolpermisoID = 'El rol es requerido';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    const url = editingUsuario 
      ? `/api/admin/usuarios/${editingUsuario.ID}`
      : '/api/admin/usuarios';
    
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(url, {
        method: editingUsuario ? 'PUT' : 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setShowModal(false);
        setEditingUsuario(null);
        resetForm();
        fetchUsuarios();
      } else {
        setErrors({ general: data.error || 'Error al guardar usuario' });
      }
    } catch (error) {
      console.error('Error saving usuario:', error);
      setErrors({ general: 'Error de conexión' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (usuario: Usuario) => {
    setEditingUsuario(usuario);
    setFormData({
      correo: usuario.correo,
      password: '',
      nombre: usuario.nombre,
      direccion: usuario.direccion,
      DNI: usuario.DNI.toString(),
      rolpermisoID: usuario.rolpermisoID.toString(),
    });
    setShowModal(true);
  };

  const handleDelete = async (id: number) => {
    const usuario = usuarios.find(u => u.ID === id);
    if (!usuario) return;

    if (confirm(`¿Estás seguro de que quieres eliminar al usuario "${usuario.nombre}"?`)) {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await fetch(`/api/admin/usuarios/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await response.json();

        if (response.ok) {
          fetchUsuarios();
        } else {
          alert(data.error || 'Error al eliminar usuario');
        }
      } catch (error) {
        console.error('Error deleting usuario:', error);
        alert('Error de conexión');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      correo: '',
      password: '',
      nombre: '',
      direccion: '',
      DNI: '',
      rolpermisoID: '',
    });
    setErrors({});
    setShowPassword(false);
  };

  const filteredUsuarios = usuarios.filter(usuario =>
    usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    usuario.correo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    usuario.DNI.toString().includes(searchTerm) ||
    usuario.rolPermiso.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getRoleBadgeColor = (roleName: string) => {
    switch (roleName.toLowerCase()) {
      case 'admin':
      case 'administrador':
        return 'bg-red-100 text-red-800';
      case 'usuario':
      case 'cliente':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (isCheckingAuth || isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
        <span className="ml-3 text-gray-600">
          {isCheckingAuth ? 'Verificando autenticación...' : 'Cargando usuarios...'}
        </span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestión de Usuarios</h1>
          <p className="text-gray-600">Administra todos los usuarios del sistema</p>
        </div>
        <button
          onClick={() => {
            setEditingUsuario(null);
            resetForm();
            setShowModal(true);
          }}
          className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Nuevo Usuario
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar usuarios..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <UserIcon className="h-8 w-8 text-blue-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Total Usuarios</p>
              <p className="text-2xl font-bold text-gray-900">{usuarios.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <ShieldCheckIcon className="h-8 w-8 text-red-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Administradores</p>
              <p className="text-2xl font-bold text-gray-900">
                {usuarios.filter(u => u.rolPermiso.nombre.toLowerCase().includes('admin')).length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <ShieldCheckIcon className="h-8 w-8 text-orange-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Supervisores</p>
              <p className="text-2xl font-bold text-gray-900">
                {usuarios.filter(u => 
                  u.rolPermiso.nombre.toLowerCase().includes('supervisor') || 
                  u.rolPermiso.nombre.toLowerCase().includes('moderador') ||
                  u.rolPermiso.nombre.toLowerCase().includes('gerente')
                ).length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <UserIcon className="h-8 w-8 text-green-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Clientes</p>
              <p className="text-2xl font-bold text-gray-900">
                {usuarios.filter(u => 
                  !u.rolPermiso.nombre.toLowerCase().includes('admin') &&
                  !u.rolPermiso.nombre.toLowerCase().includes('supervisor') &&
                  !u.rolPermiso.nombre.toLowerCase().includes('moderador') &&
                  !u.rolPermiso.nombre.toLowerCase().includes('gerente')
                ).length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <EnvelopeIcon className="h-8 w-8 text-purple-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Nuevos (30d)</p>
              <p className="text-2xl font-bold text-gray-900">
                {usuarios.filter(u => {
                  const created = new Date(u.fecha_creacion);
                  const thirtyDaysAgo = new Date();
                  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
                  return created >= thirtyDaysAgo;
                }).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Usuario
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contacto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rol
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actividad
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha Registro
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsuarios.map((usuario, index) => (
                <tr key={`usuario-${usuario.ID}-${index}`} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                          <UserIcon className="h-6 w-6 text-gray-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{usuario.nombre}</div>
                        <div className="text-sm text-gray-500">ID: {usuario.ID}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{usuario.correo}</div>
                    <div className="text-sm text-gray-500">DNI: {usuario.DNI}</div>
                    <div className="text-sm text-gray-500">{usuario.direccion}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleBadgeColor(usuario.rolPermiso.nombre)}`}>
                      {usuario.rolPermiso.nombre}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>Pedidos: {usuario._count.pedidos}</div>
                    <div>Favoritos: {usuario._count.favoritos}</div>
                    <div>Reseñas: {usuario._count.resenas}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(usuario.fecha_creacion)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleEdit(usuario)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(usuario.ID)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">
                {editingUsuario ? 'Editar Usuario' : 'Nuevo Usuario'}
              </h2>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900 ${
                      errors.nombre ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    value={formData.correo}
                    onChange={(e) => setFormData({...formData, correo: e.target.value})}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900 ${
                      errors.correo ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.correo && <p className="text-red-500 text-sm mt-1">{errors.correo}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {editingUsuario ? 'Nueva Contraseña (opcional)' : 'Contraseña *'}
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className={`w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900 ${
                        errors.password ? 'border-red-500' : 'border-gray-300'
                      }`}
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
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    DNI *
                  </label>
                  <input
                    type="text"
                    value={formData.DNI}
                    onChange={(e) => setFormData({...formData, DNI: e.target.value})}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900 ${
                      errors.DNI ? 'border-red-500' : 'border-gray-300'
                    }`}
                    maxLength={8}
                  />
                  {errors.DNI && <p className="text-red-500 text-sm mt-1">{errors.DNI}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dirección *
                  </label>
                  <input
                    type="text"
                    value={formData.direccion}
                    onChange={(e) => setFormData({...formData, direccion: e.target.value})}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900 ${
                      errors.direccion ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.direccion && <p className="text-red-500 text-sm mt-1">{errors.direccion}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rol *
                  </label>
                  <select
                    value={formData.rolpermisoID}
                    onChange={(e) => setFormData({...formData, rolpermisoID: e.target.value})}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900 ${
                      errors.rolpermisoID ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Seleccionar rol</option>
                    {roles.map((rol) => (
                      <option key={rol.ID} value={rol.ID}>
                        {rol.nombre} - {rol.descripcion}
                      </option>
                    ))}
                  </select>
                  {errors.rolpermisoID && <p className="text-red-500 text-sm mt-1">{errors.rolpermisoID}</p>}
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
                  {isSubmitting ? 'Guardando...' : (editingUsuario ? 'Actualizar' : 'Crear')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
