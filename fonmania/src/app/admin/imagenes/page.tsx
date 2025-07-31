'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  PlusIcon, 
  TrashIcon, 
  MagnifyingGlassIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

interface Imagen {
  id: number;
  nombre: string;
  url: string;
  tipo: 'celular' | 'accesorio' | 'banner';
  productoId?: number;
  orden: number;
  activa: boolean;
  fechaCreacion: string;
}

export default function AdminImagenes() {
  const [imagenes, setImagenes] = useState<Imagen[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTipo, setSelectedTipo] = useState<string>('todos');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadData, setUploadData] = useState({
    nombre: '',
    url: '',
    tipo: 'celular',
    productoId: '',
    orden: '1',
  });

  useEffect(() => {
    fetchImagenes();
  }, []);

  const fetchImagenes = async () => {
    try {
      const response = await fetch('/api/admin/imagenes');
      if (response.ok) {
        const data = await response.json();
        setImagenes(data);
      }
    } catch (error) {
      console.error('Error fetching imagenes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/imagenes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(uploadData),
      });

      if (response.ok) {
        setShowUploadModal(false);
        setUploadData({
          nombre: '',
          url: '',
          tipo: 'celular',
          productoId: '',
          orden: '1',
        });
        fetchImagenes();
      }
    } catch (error) {
      console.error('Error uploading imagen:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta imagen?')) {
      try {
        const response = await fetch(`/api/admin/imagenes/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          fetchImagenes();
        }
      } catch (error) {
        console.error('Error deleting imagen:', error);
      }
    }
  };

  const filteredImagenes = imagenes.filter(imagen => {
    const matchesSearch = imagen.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTipo = selectedTipo === 'todos' || imagen.tipo === selectedTipo;
    return matchesSearch && matchesTipo;
  });

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
          <h1 className="text-2xl font-bold text-gray-900">Gestión de Imágenes</h1>
          <p className="text-gray-600">Administra las imágenes de productos y banners</p>
        </div>
        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Subir Imagen
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar imágenes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
          />
        </div>
        <select
          value={selectedTipo}
          onChange={(e) => setSelectedTipo(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        >
          <option value="todos">Todos los tipos</option>
          <option value="celular">Celulares</option>
          <option value="accesorio">Accesorios</option>
          <option value="banner">Banners</option>
        </select>
      </div>

      {/* Imágenes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImagenes.map((imagen) => (
          <div key={imagen.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="aspect-w-1 aspect-h-1 bg-gray-200">
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={imagen.url || '/img/cat_1.png'}
                    alt={imagen.nombre}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-900 truncate">{imagen.nombre}</h3>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  imagen.activa ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {imagen.activa ? 'Activa' : 'Inactiva'}
                </span>
              </div>
              
              <div className="space-y-1 mb-3">
                <p className="text-xs text-gray-500">Tipo: {imagen.tipo}</p>
                <p className="text-xs text-gray-500">Orden: {imagen.orden}</p>
                <p className="text-xs text-gray-500">
                  {new Date(imagen.fechaCreacion).toLocaleDateString()}
                </p>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => window.open(imagen.url, '_blank')}
                  className="flex-1 flex items-center justify-center px-2 py-1 border border-gray-300 rounded text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <EyeIcon className="h-3 w-3 mr-1" />
                  Ver
                </button>
                <button
                  onClick={() => handleDelete(imagen.id)}
                  className="flex-1 flex items-center justify-center px-2 py-1 border border-red-300 rounded text-xs font-medium text-red-700 hover:bg-red-50 transition-colors"
                >
                  <TrashIcon className="h-3 w-3 mr-1" />
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Subir Nueva Imagen</h2>
              
              <form onSubmit={handleUpload} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    type="text"
                    required
                    value={uploadData.nombre}
                    onChange={(e) => setUploadData({...uploadData, nombre: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">URL de la Imagen</label>
                  <input
                    type="url"
                    required
                    value={uploadData.url}
                    onChange={(e) => setUploadData({...uploadData, url: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Tipo</label>
                  <select
                    value={uploadData.tipo}
                    onChange={(e) => setUploadData({...uploadData, tipo: e.target.value as 'celular' | 'accesorio' | 'banner'})}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  >
                    <option value="celular">Celular</option>
                    <option value="accesorio">Accesorio</option>
                    <option value="banner">Banner</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">ID del Producto (Opcional)</label>
                  <input
                    type="number"
                    value={uploadData.productoId}
                    onChange={(e) => setUploadData({...uploadData, productoId: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Orden</label>
                  <input
                    type="number"
                    required
                    value={uploadData.orden}
                    onChange={(e) => setUploadData({...uploadData, orden: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowUploadModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Subir Imagen
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