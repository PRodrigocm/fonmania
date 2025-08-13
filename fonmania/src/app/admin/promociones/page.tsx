'use client';

import { useState, useEffect } from 'react';
import { 
  PlusIcon, 
  PencilIcon, 
  TrashIcon, 
  MagnifyingGlassIcon,
  TagIcon,
  CalendarIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

interface Promocion {
  id: number;
  nombre: string;
  descripcion: string;
  tipo: 'porcentaje' | 'monto_fijo';
  valor: number;
  fechaInicio: string;
  fechaFin: string;
  activa: boolean;
  productos: string[];
  imagen?: string;
}

export default function AdminPromociones() {
  const [promociones, setPromociones] = useState<Promocion[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingPromocion, setEditingPromocion] = useState<Promocion | null>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    tipo: 'porcentaje',
    valor: '',
    fechaInicio: '',
    fechaFin: '',
    activa: true,
    productos: [] as string[],
    imagen: '',
  });

  useEffect(() => {
    fetchPromociones();
  }, []);

  const fetchPromociones = async () => {
    try {
      const response = await fetch('/api/admin/promociones');
      if (response.ok) {
        const data = await response.json();
        setPromociones(data);
      }
    } catch (error) {
      console.error('Error fetching promociones:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingPromocion 
      ? `/api/admin/promociones/${editingPromocion.id}`
      : '/api/admin/promociones';
    
    try {
      const response = await fetch(url, {
        method: editingPromocion ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowModal(false);
        setEditingPromocion(null);
        resetForm();
        fetchPromociones();
      }
    } catch (error) {
      console.error('Error saving promocion:', error);
    }
  };

  const handleEdit = (promocion: Promocion) => {
    setEditingPromocion(promocion);
    setFormData({
      nombre: promocion.nombre,
      descripcion: promocion.descripcion,
      tipo: promocion.tipo,
      valor: promocion.valor.toString(),
      fechaInicio: promocion.fechaInicio,
      fechaFin: promocion.fechaFin,
      activa: promocion.activa,
      productos: promocion.productos,
      imagen: promocion.imagen || '',
    });
    setShowModal(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta promoción?')) {
      try {
        const response = await fetch(`/api/admin/promociones/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          fetchPromociones();
        }
      } catch (error) {
        console.error('Error deleting promocion:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      nombre: '',
      descripcion: '',
      tipo: 'porcentaje',
      valor: '',
      fechaInicio: '',
      fechaFin: '',
      activa: true,
      productos: [],
      imagen: '',
    });
  };

  const filteredPromociones = promociones.filter(promocion =>
    promocion.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    promocion.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isActive = (fechaInicio: string, fechaFin: string) => {
    const now = new Date();
    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);
    return now >= inicio && now <= fin;
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
          <h1 className="text-2xl font-bold text-gray-900">Gestión de Promociones</h1>
          <p className="text-gray-600">Administra descuentos y ofertas especiales</p>
        </div>
        <button
          onClick={() => {
            setEditingPromocion(null);
            resetForm();
            setShowModal(true);
          }}
          className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Crear Promoción
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar promociones..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
        />
      </div>

      {/* Promociones Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPromociones.map((promocion) => (
          <div key={promocion.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <TagIcon className="h-6 w-6 text-yellow-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">{promocion.nombre}</h3>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  isActive(promocion.fechaInicio, promocion.fechaFin)
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {isActive(promocion.fechaInicio, promocion.fechaFin) ? 'Activa' : 'Inactiva'}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{promocion.descripcion}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm">
                  <CurrencyDollarIcon className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-gray-700">
                    {promocion.tipo === 'porcentaje' ? `${promocion.valor}%` : `$${promocion.valor}`}
                  </span>
                </div>
                
                <div className="flex items-center text-sm">
                  <CalendarIcon className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-gray-700">
                    {new Date(promocion.fechaInicio).toLocaleDateString()} - {new Date(promocion.fechaFin).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(promocion)}
                  className="flex-1 flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <PencilIcon className="h-4 w-4 mr-1" />
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(promocion.id)}
                  className="flex-1 flex items-center justify-center px-3 py-2 border border-red-300 rounded-md text-sm font-medium text-red-700 hover:bg-red-50 transition-colors"
                >
                  <TrashIcon className="h-4 w-4 mr-1" />
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {editingPromocion ? 'Editar Promoción' : 'Crear Promoción'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Tipo de Descuento</label>
                    <select
                      value={formData.tipo}
                      onChange={(e) => setFormData({...formData, tipo: e.target.value as 'porcentaje' | 'monto_fijo'})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
                    >
                      <option value="porcentaje">Porcentaje (%)</option>
                      <option value="monto_fijo">Monto Fijo ($)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      {formData.tipo === 'porcentaje' ? 'Porcentaje de Descuento' : 'Monto de Descuento'}
                    </label>
                    <input
                      type="number"
                      required
                      value={formData.valor}
                      onChange={(e) => setFormData({...formData, valor: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Estado</label>
                    <select
                      value={formData.activa.toString()}
                      onChange={(e) => setFormData({...formData, activa: e.target.value === 'true'})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
                    >
                      <option value="true">Activa</option>
                      <option value="false">Inactiva</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Fecha de Inicio</label>
                    <input
                      type="datetime-local"
                      required
                      value={formData.fechaInicio}
                      onChange={(e) => setFormData({...formData, fechaInicio: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Fecha de Fin</label>
                    <input
                      type="datetime-local"
                      required
                      value={formData.fechaFin}
                      onChange={(e) => setFormData({...formData, fechaFin: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">URL de Imagen (Opcional)</label>
                  <input
                    type="url"
                    value={formData.imagen}
                    onChange={(e) => setFormData({...formData, imagen: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Descripción</label>
                  <textarea
                    required
                    value={formData.descripcion}
                    onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
                    rows={3}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
                  />
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
                    className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    {editingPromocion ? 'Actualizar' : 'Crear'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 