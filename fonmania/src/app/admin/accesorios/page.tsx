'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  PlusIcon, 
  PencilIcon, 
  TrashIcon, 
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

interface Accesorio {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  descripcion?: string;
  compatibilidad?: string;
  dimensiones?: string;
  peso?: string;
  colores?: string;
  precioPromocion?: number;
  precioDescuento?: number;
  textoPromocion?: string;
}

export default function AdminAccesorios() {
  const [accesorios, setAccesorios] = useState<Accesorio[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingAccesorio, setEditingAccesorio] = useState<Accesorio | null>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    imagen: '',
    descripcion: '',
    compatibilidad: '',
    dimensiones: '',
    peso: '',
    colores: '',
    precioPromocion: '',
    precioDescuento: '',
    textoPromocion: '',
  });

  useEffect(() => {
    fetchAccesorios();
  }, []);

  const fetchAccesorios = async () => {
    try {
      const response = await fetch('/api/accesorios');
      if (response.ok) {
        const data = await response.json();
        setAccesorios(data);
      }
    } catch (error) {
      console.error('Error fetching accesorios:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingAccesorio 
      ? `/api/accesorios/${editingAccesorio.id}`
      : '/api/accesorios';
    
    try {
      const response = await fetch(url, {
        method: editingAccesorio ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowModal(false);
        setEditingAccesorio(null);
        resetForm();
        fetchAccesorios();
      }
    } catch (error) {
      console.error('Error saving accesorio:', error);
    }
  };

  const handleEdit = (accesorio: Accesorio) => {
    setEditingAccesorio(accesorio);
    setFormData({
      nombre: accesorio.nombre,
      precio: accesorio.precio.toString(),
      imagen: accesorio.imagen,
      descripcion: accesorio.descripcion || '',
      compatibilidad: accesorio.compatibilidad || '',
      dimensiones: accesorio.dimensiones || '',
      peso: accesorio.peso || '',
      colores: accesorio.colores || '',
      precioPromocion: accesorio.precioPromocion?.toString() || '',
      precioDescuento: accesorio.precioDescuento?.toString() || '',
      textoPromocion: accesorio.textoPromocion || '',
    });
    setShowModal(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm('¿Estás seguro de que quieres eliminar este accesorio?')) {
      try {
        const response = await fetch(`/api/accesorios/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          fetchAccesorios();
        }
      } catch (error) {
        console.error('Error deleting accesorio:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      nombre: '',
      precio: '',
      imagen: '',
      descripcion: '',
      compatibilidad: '',
      dimensiones: '',
      peso: '',
      colores: '',
      precioPromocion: '',
      precioDescuento: '',
      textoPromocion: '',
    });
  };

  const filteredAccesorios = accesorios.filter(accesorio =>
    accesorio.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    accesorio.descripcion?.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <h1 className="text-2xl font-bold text-gray-900">Gestión de Accesorios</h1>
          <p className="text-gray-600">Administra el catálogo de accesorios</p>
        </div>
        <button
          onClick={() => {
            setEditingAccesorio(null);
            resetForm();
            setShowModal(true);
          }}
          className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Agregar Accesorio
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar accesorios..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        />
      </div>

      {/* Accesorios Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAccesorios.map((accesorio) => (
          <div key={accesorio.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={accesorio.imagen || '/img/cat_3.png'}
                    alt={accesorio.nombre}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{accesorio.nombre}</h3>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">{accesorio.descripcion}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-black">${accesorio.precio.toLocaleString()}</span>
                {accesorio.precioPromocion && (
                  <span className="text-sm text-green-600 font-medium">
                    ${accesorio.precioPromocion.toLocaleString()}
                  </span>
                )}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(accesorio)}
                  className="flex-1 flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <PencilIcon className="h-4 w-4 mr-1" />
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(accesorio.id)}
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
                {editingAccesorio ? 'Editar Accesorio' : 'Agregar Accesorio'}
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
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Precio</label>
                    <input
                      type="number"
                      required
                      value={formData.precio}
                      onChange={(e) => setFormData({...formData, precio: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Compatibilidad</label>
                    <input
                      type="text"
                      value={formData.compatibilidad}
                      onChange={(e) => setFormData({...formData, compatibilidad: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Dimensiones</label>
                    <input
                      type="text"
                      value={formData.dimensiones}
                      onChange={(e) => setFormData({...formData, dimensiones: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Peso</label>
                    <input
                      type="text"
                      value={formData.peso}
                      onChange={(e) => setFormData({...formData, peso: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Colores</label>
                    <input
                      type="text"
                      value={formData.colores}
                      onChange={(e) => setFormData({...formData, colores: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Precio Promoción</label>
                    <input
                      type="number"
                      value={formData.precioPromocion}
                      onChange={(e) => setFormData({...formData, precioPromocion: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Precio Descuento</label>
                    <input
                      type="number"
                      value={formData.precioDescuento}
                      onChange={(e) => setFormData({...formData, precioDescuento: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">URL de Imagen</label>
                  <input
                    type="url"
                    required
                    value={formData.imagen}
                    onChange={(e) => setFormData({...formData, imagen: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Descripción</label>
                  <textarea
                    value={formData.descripcion}
                    onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
                    rows={3}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Texto Promoción</label>
                  <textarea
                    value={formData.textoPromocion}
                    onChange={(e) => setFormData({...formData, textoPromocion: e.target.value})}
                    rows={3}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
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
                    {editingAccesorio ? 'Actualizar' : 'Crear'}
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