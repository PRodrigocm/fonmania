'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  PlusIcon, 
  PencilIcon, 
  TrashIcon, 
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

interface Celular {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  marca?: string;
  color?: string;
  modelo?: string;
  pantalla?: string;
  bateria?: string;
  almacenamiento?: string;
  ram?: string;
  camara?: string;
  puertoCarga?: string;
  precioPromocion?: number;
  precioDescuento?: number;
  textoPromocion?: string;
}

export default function AdminCelulares() {
  const [celulares, setCelulares] = useState<Celular[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingCelular, setEditingCelular] = useState<Celular | null>(null);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    imagen: '',
    marca: '',
    color: '',
    modelo: '',
    pantalla: '',
    bateria: '',
    almacenamiento: '',
    ram: '',
    camara: '',
    puertoCarga: '',
    precioPromocion: '',
    precioDescuento: '',
    textoPromocion: '',
  });

  useEffect(() => {
    fetchCelulares();
  }, []);

  const fetchCelulares = async () => {
    try {
      const response = await fetch('/api/celulares');
      if (response.ok) {
        const data = await response.json();
        setCelulares(data);
      }
    } catch (error) {
      console.error('Error fetching celulares:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) {
      return;
    }
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    setUploading(true);
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setFormData(prev => ({ ...prev, imagen: data.url }));
      } else {
        alert('Error al subir la imagen: ' + data.message);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Ocurrió un error al subir la imagen.');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingCelular 
      ? `/api/celulares/${editingCelular.id}`
      : '/api/celulares';
    
    try {
      const response = await fetch(url, {
        method: editingCelular ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowModal(false);
        setEditingCelular(null);
        resetForm();
        fetchCelulares();
      }
    } catch (error) {
      console.error('Error saving celular:', error);
    }
  };

  const handleEdit = (celular: Celular) => {
    setEditingCelular(celular);
    setFormData({
      nombre: celular.nombre,
      precio: celular.precio.toString(),
      imagen: celular.imagen,
      marca: celular.marca || '',
      color: celular.color || '',
      modelo: celular.modelo || '',
      pantalla: celular.pantalla || '',
      bateria: celular.bateria || '',
      almacenamiento: celular.almacenamiento || '',
      ram: celular.ram || '',
      camara: celular.camara || '',
      puertoCarga: celular.puertoCarga || '',
      precioPromocion: celular.precioPromocion?.toString() || '',
      precioDescuento: celular.precioDescuento?.toString() || '',
      textoPromocion: celular.textoPromocion || '',
    });
    setShowModal(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm('¿Estás seguro de que quieres eliminar este celular?')) {
      try {
        const response = await fetch(`/api/celulares/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          fetchCelulares();
        }
      } catch (error) {
        console.error('Error deleting celular:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      nombre: '',
      precio: '',
      imagen: '',
      marca: '',
      color: '',
      modelo: '',
      pantalla: '',
      bateria: '',
      almacenamiento: '',
      ram: '',
      camara: '',
      puertoCarga: '',
      precioPromocion: '',
      precioDescuento: '',
      textoPromocion: '',
    });
  };

  const filteredCelulares = celulares.filter(celular =>
    celular.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    celular.marca?.toLowerCase().includes(searchTerm.toLowerCase())
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
          <h1 className="text-2xl font-bold text-gray-900">Gestión de Celulares</h1>
          <p className="text-gray-600">Administra el catálogo de celulares</p>
        </div>
        <button
          onClick={() => {
            setEditingCelular(null);
            resetForm();
            setShowModal(true);
          }}
          className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Agregar Celular
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar celulares..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        />
      </div>

      {/* Celulares Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCelulares.map((celular) => (
          <div key={celular.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={celular.imagen || '/img/cat_1.png'}
                    alt={celular.nombre}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{celular.nombre}</h3>
              <p className="text-gray-600 text-sm mb-2">{celular.marca}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-black">${celular.precio.toLocaleString()}</span>
                {celular.precioPromocion && (
                  <span className="text-sm text-green-600 font-medium">
                    ${celular.precioPromocion.toLocaleString()}
                  </span>
                )}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(celular)}
                  className="flex-1 flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <PencilIcon className="h-4 w-4 mr-1" />
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(celular.id)}
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
                {editingCelular ? 'Editar Celular' : 'Agregar Celular'}
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
                    <label className="block text-sm font-medium text-gray-700">Marca</label>
                    <input
                      type="text"
                      value={formData.marca}
                      onChange={(e) => setFormData({...formData, marca: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Modelo</label>
                    <input
                      type="text"
                      value={formData.modelo}
                      onChange={(e) => setFormData({...formData, modelo: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Color</label>
                    <input
                      type="text"
                      value={formData.color}
                      onChange={(e) => setFormData({...formData, color: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Pantalla</label>
                    <input
                      type="text"
                      value={formData.pantalla}
                      onChange={(e) => setFormData({...formData, pantalla: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Batería</label>
                    <input
                      type="text"
                      value={formData.bateria}
                      onChange={(e) => setFormData({...formData, bateria: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Almacenamiento</label>
                    <input
                      type="text"
                      value={formData.almacenamiento}
                      onChange={(e) => setFormData({...formData, almacenamiento: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">RAM</label>
                    <input
                      type="text"
                      value={formData.ram}
                      onChange={(e) => setFormData({...formData, ram: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Cámara</label>
                    <input
                      type="text"
                      value={formData.camara}
                      onChange={(e) => setFormData({...formData, camara: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Puerto de Carga</label>
                    <input
                      type="text"
                      value={formData.puertoCarga}
                      onChange={(e) => setFormData({...formData, puertoCarga: e.target.value})}
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
                  <label className="block text-sm font-medium text-gray-700">Imagen del Producto</label>
                  <div className="mt-1 flex items-center space-x-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                    />
                    {uploading && <p className="text-sm text-gray-500">Subiendo...</p>}
                  </div>
                  {formData.imagen && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-500">Vista previa:</p>
                      <Image
                        src={formData.imagen}
                        alt="Vista previa"
                        width={100}
                        height={100}
                        className="mt-2 rounded-md object-cover border"
                      />
                    </div>
                  )}
                  {!formData.imagen && !editingCelular && (
                     <p className="text-xs text-red-600 mt-1">Se requiere una imagen.</p>
                  )}
                   <input type="hidden" value={formData.imagen} required />
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
                    {editingCelular ? 'Actualizar' : 'Crear'}
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