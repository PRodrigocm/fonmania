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
    rol: {
      ID: number;
      nombre: string;
      descripcion: string;
    };
    permiso: {
      ID: number;
      nombre: string;
      descripcion: string;
    };
  };
  _count?: {
    pedidos: number;
    favoritos: number;
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
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingUsuario, setEditingUsuario] = useState<Usuario | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [usingFallbackData, setUsingFallbackData] = useState(false);
  const [formData, setFormData] = useState({
    correo: '',
    nombre: '',
    direccion: '',
    DNI: '',
    rolpermisoID: '',
  });

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    try {
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
      const response = await fetch('/api/admin/usuarios', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Usuarios data received:', data);
        setUsuarios(data);
      } else {
        console.error('Error status usuarios:', response.status, response.statusText);
        // Si hay error 401, usar datos de fallback para que la página funcione
        if (response.status === 401) {
          console.log('Sin autorización, usando datos de fallback');
          setUsingFallbackData(true);
          setUsuarios([
            {
              ID: 1,
              correo: 'admin@fonmania.com',
              nombre: 'Administrador',
              direccion: 'Oficina Central',
              DNI: 12345678,
              fecha_creacion: '2024-01-01T00:00:00Z',
              rolpermisoID: 1,
              rolPermiso: {
                ID: 1,
                rol: { ID: 1, nombre: 'Administrador', descripcion: 'Acceso completo' },
                permiso: { ID: 1, nombre: 'Admin', descripcion: 'Todos los permisos' }
              }
            },
            {
              ID: 2,
              correo: 'usuario@fonmania.com',
              nombre: 'Usuario Demo',
              direccion: 'Dirección Demo',
              DNI: 87654321,
              fecha_creacion: '2024-02-01T00:00:00Z',
              rolpermisoID: 2,
              rolPermiso: {
                ID: 2,
                rol: { ID: 2, nombre: 'Usuario', descripcion: 'Usuario estándar' },
                permiso: { ID: 2, nombre: 'User', descripcion: 'Permisos básicos' }
              }
            }
          ]);
        } else {
          setUsuarios([]);
        }
      }
    } catch (error) {
      console.error('Error fetching usuarios:', error);
      setUsuarios([]);
    }
  };

  const fetchRoles = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/roles', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Roles data received:', data);
        setRoles(data);
      } else {
        console.error('Error status roles:', response.status, response.statusText);
        // Si hay error 401, usar datos de fallback para que la página funcione
        if (response.status === 401) {
          console.log('Sin autorización para roles, usando datos de fallback');
          setRoles([
            { ID: 1, nombre: 'Administrador', descripcion: 'Acceso completo al sistema' },
            { ID: 2, nombre: 'Usuario', descripcion: 'Usuario estándar del sistema' },
            { ID: 3, nombre: 'Moderador', descripcion: 'Moderador de contenido' }
          ]);
        } else {
          setRoles([]);
        }
      }
    } catch (error) {
      console.error('Error fetching roles:', error);
      setRoles([]);
    }
  };

  const filteredUsuarios = usuarios.filter(usuario =>
    usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    usuario.correo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    usuario.rolPermiso.rol.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (usuario: Usuario) => {
    setEditingUsuario(usuario);
    setFormData({
      correo: usuario.correo,
      nombre: usuario.nombre,
      direccion: usuario.direccion,
      DNI: usuario.DNI.toString(),
      rolpermisoID: usuario.rolpermisoID.toString(),
    });
    setShowModal(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      setUsuarios(usuarios.filter(u => u.ID !== id));
    }
  };

  const resetForm = () => {
    setFormData({
      correo: '',
      nombre: '',
      direccion: '',
      DNI: '',
      rolpermisoID: '',
    });
    setEditingUsuario(null);
    setErrors({});
    setShowPassword(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
        <span className="ml-3 text-gray-600">Cargando usuarios...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Auth Warning Banner */}
      {usingFallbackData && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Mostrando datos de demostración
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  No tienes autorización para acceder a los datos reales. 
                  <a href="/admin/login" className="font-medium underline hover:text-yellow-600 ml-1">
                    Inicia sesión como administrador
                  </a> para ver los datos reales de la base de datos.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestión de Usuarios</h1>
          <p className="text-gray-600">Administra todos los usuarios del sistema</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 flex items-center gap-2"
        >
          <PlusIcon className="h-5 w-5" />
          Nuevo Usuario
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar usuarios..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center">
            <UserIcon className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Usuarios</p>
              <p className="text-2xl font-bold text-gray-900">{usuarios.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center">
            <ShieldCheckIcon className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Administradores</p>
              <p className="text-2xl font-bold text-gray-900">
                {usuarios.filter(u => u.rolPermiso.rol.nombre === 'Administrador').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center">
            <UserIcon className="h-8 w-8 text-yellow-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Usuarios Regulares</p>
              <p className="text-2xl font-bold text-gray-900">
                {usuarios.filter(u => u.rolPermiso.rol.nombre === 'Usuario').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center">
            <EnvelopeIcon className="h-8 w-8 text-purple-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Roles</p>
              <p className="text-2xl font-bold text-gray-900">{roles.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
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
                  Fecha Registro
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsuarios.map((usuario) => (
                <tr key={usuario.ID} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                          <UserIcon className="h-6 w-6 text-gray-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{usuario.nombre}</div>
                        <div className="text-sm text-gray-500">DNI: {usuario.DNI}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{usuario.correo}</div>
                    <div className="text-sm text-gray-500">{usuario.direccion}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      usuario.rolPermiso.rol.nombre === 'Administrador' 
                        ? 'bg-red-100 text-red-800'
                        : usuario.rolPermiso.rol.nombre === 'Moderador'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {usuario.rolPermiso.rol.nombre}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(usuario.fecha_creacion)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEdit(usuario)}
                      className="text-indigo-600 hover:text-indigo-900 mr-3"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(usuario.ID)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredUsuarios.length === 0 && (
        <div className="text-center py-12">
          <UserIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No se encontraron usuarios</h3>
          <p className="mt-1 text-sm text-gray-500">
            {searchTerm ? 'Intenta con otros términos de búsqueda.' : 'Comienza agregando un nuevo usuario.'}
          </p>
        </div>
      )}
    </div>
  );
}
