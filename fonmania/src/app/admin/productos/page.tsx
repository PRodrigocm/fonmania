'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  PlusIcon, 
  PencilIcon, 
  TrashIcon, 
  MagnifyingGlassIcon,
  XMarkIcon,
  PhotoIcon,
  StarIcon
} from '@heroicons/react/24/outline';

interface Categoria {
  ID: number;
  nombre: string;
}

interface Producto {
  ID: number;
  nombre: string;
  precio: number;
  imagen: string;
  imagenes?: string[];
  stock: number;
  categoriaID: number;
  categoria: string; // Nombre de la categoría
  marcaID: number;
  marca: string; // Nombre de la marca
  descripcion: string;
  ram?: string;
  almacenamiento?: string;
  dimensiones?: string;
  modelo?: string;
  color?: string;
  sistema_operativo?: string;
}

interface Promocion {
  ID: number;
  nombre: string;
  descuento: number;
  codigo_promocional: string;
  inicio_promocion: string;
  fin_promocion: string;
}

interface Marca {
  ID: number;
  nombre: string;
}

interface ImagenProducto {
  url: string;
  tipo: 'principal' | 'secundaria';
  orden: number;
  previewUrl?: string; // URL temporal para vista previa de archivos locales
  displayName?: string; // Solo nombre del archivo para mostrar en UI
}

export default function AdminProductos() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [marcas, setMarcas] = useState<Marca[]>([]);
  const [promociones, setPromociones] = useState<Promocion[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingProducto, setEditingProducto] = useState<Producto | null>(null);
  const [imagenes, setImagenes] = useState<ImagenProducto[]>([]);
  const [imagenPrincipal, setImagenPrincipal] = useState<number>(0);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [uploadingImages, setUploadingImages] = useState<{[key: number]: boolean}>({});
  
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    stock: '',
    categoriaID: '',
    marcaID: '',
    descripcion: '',
    promocionID: '',
    ram: '',
    almacenamiento: '',
    dimensiones: '',
    modelo: '',
    color: '',
    sistema_operativo: '',
  });

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      const [productosRes, categoriasRes, marcasRes, promocionesRes] = await Promise.all([
        fetch('/api/productos'),
        fetch('/api/categorias'),
        fetch('/api/marcas'),
        fetch('/api/promociones')
      ]);
      
      if (productosRes.ok) {
        const productosData = await productosRes.json();
        console.log('Productos obtenidos de la API:', productosData);
        console.log('Primer producto:', productosData[0]);
        setProductos(productosData);
      }
      if (categoriasRes.ok) setCategorias(await categoriasRes.json());
      if (marcasRes.ok) setMarcas(await marcasRes.json());
      if (promocionesRes.ok) setPromociones(await promocionesRes.json());
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!formData.precio || parseFloat(formData.precio) <= 0) newErrors.precio = 'El precio debe ser mayor a 0';
    if (!formData.stock || parseInt(formData.stock) < 0) newErrors.stock = 'El stock no puede ser negativo';
    if (!formData.categoriaID) newErrors.categoriaID = 'La categoría es requerida';
    if (!formData.marcaID) newErrors.marcaID = 'La marca es requerida';
    if (!formData.descripcion.trim()) newErrors.descripcion = 'La descripción es requerida';
    const imagenesValidas = imagenes.filter(img => img.url && img.url.trim() !== '');
    if (imagenesValidas.length === 0) {
      newErrors.imagenes = 'Debe agregar al menos una imagen válida (subida o con URL).';
    }

    // Verificar si hay subidas en progreso
    const haySubidasEnProgreso = Object.values(uploadingImages).some(uploading => uploading);
    if (haySubidasEnProgreso) {
      newErrors.imagenes = 'Espere a que termine la subida de todas las imágenes.';
    }
    
    // Validaciones específicas por categoría
    const categoria = categorias.find(c => c.ID === parseInt(formData.categoriaID));
    if (categoria?.nombre.toLowerCase().includes('celular') || categoria?.nombre.toLowerCase().includes('smartphone')) {
      if (!formData.ram.trim()) newErrors.ram = 'La RAM es requerida para celulares';
      if (!formData.almacenamiento.trim()) newErrors.almacenamiento = 'El almacenamiento es requerido para celulares';
      if (!formData.sistema_operativo.trim()) newErrors.sistema_operativo = 'El sistema operativo es requerido para celulares';
      if (!formData.modelo.trim()) newErrors.modelo = 'El modelo es requerido para celulares';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Debug: verificar el estado de editingProducto
    console.log('editingProducto:', editingProducto);
    console.log('editingProducto.ID:', editingProducto?.ID);
    
    const url = editingProducto && editingProducto.ID
      ? `/api/productos/${editingProducto.ID}`
      : '/api/productos';
    
    const imagenesValidas = imagenes
      .filter(img => img.url && img.url.trim() !== '')
      .map((img, index) => ({ ...img, tipo: index === imagenPrincipal ? 'principal' : 'secundaria' }));

    const body = {
      ...formData,
      imagenes: imagenesValidas
    };
    
    // Debug: verificar datos que se envían
    console.log('Datos del formulario:', formData);
    console.log('Body completo a enviar:', body);
    console.log('categoriaID:', body.categoriaID, 'marcaID:', body.marcaID, 'stock:', body.stock);
    
    try {
      const response = await fetch(url, {
        method: editingProducto && editingProducto.ID ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setShowModal(false);
        setEditingProducto(null);
        resetForm();
        fetchInitialData();
      }
    } catch (error) {
      console.error('Error saving producto:', error);
    }
  };

  const handleEdit = (producto: Producto) => {
    setEditingProducto(producto);
    setFormData({
      nombre: producto.nombre,
      precio: (producto.precio ?? '').toString(),
      stock: (producto.stock ?? '').toString(),
      categoriaID: (producto.categoriaID ?? '').toString(),
      marcaID: (producto.marcaID ?? '').toString(),
      descripcion: producto.descripcion,
      promocionID: '',
      ram: producto.ram || '',
      almacenamiento: producto.almacenamiento || '',
      dimensiones: producto.dimensiones || '',
      modelo: producto.modelo || '',
      color: producto.color || '',
      sistema_operativo: producto.sistema_operativo || '',
    });
    
    // Cargar imágenes existentes
    if (producto.imagenes && producto.imagenes.length > 0) {
      const imagenesFormateadas = producto.imagenes.map((url, index) => ({
        url,
        tipo: index === 0 ? 'principal' as const : 'secundaria' as const,
        orden: index + 1,
        previewUrl: undefined
      }));
      setImagenes(imagenesFormateadas);
      setImagenPrincipal(0); // La primera imagen es principal
    } else if (producto.imagen) {
      setImagenes([{ 
        url: producto.imagen, 
        tipo: 'principal', 
        orden: 1,
        previewUrl: undefined
      }]);
      setImagenPrincipal(0);
    } else {
      // Si no hay imágenes, limpiar el estado
      setImagenes([]);
      setImagenPrincipal(0);
    }
    
    setShowModal(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      try {
        const response = await fetch(`/api/productos/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          fetchInitialData();
        }
      } catch (error) {
        console.error('Error deleting producto:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      nombre: '',
      precio: '',
      stock: '',
      categoriaID: '',
      marcaID: '',
      descripcion: '',
      promocionID: '',
      ram: '',
      almacenamiento: '',
      dimensiones: '',
      modelo: '',
      color: '',
      sistema_operativo: '',
    });
    setEditingProducto(null);
    setImagenes([]);
    setImagenPrincipal(0);
    setErrors({});
  };

  const addImagen = () => {
    if (imagenes.length < 5) {
      const nuevaImagen: ImagenProducto = {
        url: '',
        tipo: imagenes.length === 0 ? 'principal' : 'secundaria',
        orden: imagenes.length + 1
      };
      setImagenes([...imagenes, nuevaImagen]);
    }
  };

  const removeImagen = (index: number) => {
    const nuevasImagenes = imagenes.filter((_, i) => i !== index);
    const imagenesReordenadas = nuevasImagenes.map((img, i) => ({
      ...img,
      orden: i + 1,
      tipo: i === 0 ? 'principal' as const : 'secundaria' as const
    }));
    setImagenes(imagenesReordenadas);
    
    if (index === imagenPrincipal && nuevasImagenes.length > 0) {
      setImagenPrincipal(0);
    } else if (index < imagenPrincipal) {
      setImagenPrincipal(imagenPrincipal - 1);
    }
  };

  const updateImagenUrl = (index: number, url: string) => {
    // Asegurar URL absoluta para que el input type="url" la acepte
    let finalUrl = url;
    if (url && url.startsWith('/')) {
      if (typeof window !== 'undefined') {
        finalUrl = `${window.location.origin}${url}`;
      }
    }

    const nuevasImagenes = [...imagenes];
    nuevasImagenes[index] = { ...nuevasImagenes[index], url };
    setImagenes(nuevasImagenes);
  };

  const setImagenComoPrincipal = (index: number) => {
    const nuevasImagenes = imagenes.map((img, i) => ({
      ...img,
      tipo: i === index ? 'principal' as const : 'secundaria' as const
    }));
    setImagenes(nuevasImagenes);
    setImagenPrincipal(index);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validar tipo de archivo
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      alert('Tipo de archivo no permitido. Solo se permiten: JPG, PNG, WEBP');
      return;
    }

    // Crear URL temporal para vista previa
    const previewUrl = URL.createObjectURL(file);
    
    // Para la interfaz: solo el nombre del archivo
    const displayName = file.name;
    // Para la base de datos: ruta como /img/nombre_archivo.ext
    const dbPath = `/img/${file.name}`;
    
    // Actualizar con ambos valores
    const nuevasImagenes = [...imagenes];
    nuevasImagenes[index] = { 
      ...nuevasImagenes[index], 
      url: dbPath, // Ruta /img/ para guardar en BD
      displayName: displayName, // Solo nombre para mostrar en UI
      previewUrl: previewUrl
    };
    setImagenes(nuevasImagenes);
  };

  const getEspecificacionesPorCategoria = () => {
    const categoria = categorias.find(c => c.ID === parseInt(formData.categoriaID));
    if (!categoria) return [];

    const especificacionesBase = [
      { name: 'modelo', label: 'Modelo', type: 'text', required: false },
      { name: 'color', label: 'Color', type: 'text', required: false },
      { name: 'dimensiones', label: 'Dimensiones', type: 'text', required: false },
    ];

    if (categoria.nombre.toLowerCase().includes('celular') || categoria.nombre.toLowerCase().includes('smartphone')) {
      return [
        { name: 'modelo', label: 'Modelo *', type: 'text', required: true },
        { name: 'color', label: 'Color', type: 'text', required: false },
        { name: 'ram', label: 'RAM *', type: 'text', required: true },
        { name: 'almacenamiento', label: 'Almacenamiento *', type: 'text', required: true },
        { name: 'sistema_operativo', label: 'Sistema Operativo *', type: 'text', required: true },
        { name: 'dimensiones', label: 'Dimensiones', type: 'text', required: false },
      ];
    }

    return especificacionesBase;
  };

  const filteredProductos = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    producto.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
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
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Productos</h1>
          <p className="text-gray-600">Gestiona el catálogo de productos</p>
        </div>
        <button
          onClick={() => {
            resetForm();
            setShowModal(true);
          }}
          className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Nuevo Producto
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProductos.map((producto, index) => (
          <div key={`producto-${producto.ID}-${index}`} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="aspect-square relative">
              {producto.imagen && !producto.imagen.startsWith('http') && !producto.imagen.startsWith('/') ? (
                // Para rutas locales, mostrar placeholder
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <PhotoIcon className="h-12 w-12 text-gray-400" />
                  <span className="sr-only">Imagen local</span>
                </div>
              ) : (
                // Para URLs válidas, usar Next.js Image
                <Image
                  src={producto.imagen || '/img/cat_1.png'}
                  alt={producto.nombre}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">{producto.nombre}</h3>
              <p className="text-sm text-gray-600 mb-2">{producto.categoria}</p>
              <p className="text-lg font-bold text-gray-900 mb-3">S/ {producto.precio}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(producto)}
                  className="flex-1 flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <PencilIcon className="h-4 w-4 mr-1" />
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(producto.ID)}
                  className="flex items-center justify-center px-3 py-2 border border-red-300 rounded-md text-sm font-medium text-red-700 hover:bg-red-50 transition-colors"
                >
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">
                {editingProducto ? 'Editar Producto' : 'Nuevo Producto'}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Información básica */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre del Producto *
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
                    Precio *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.precio}
                    onChange={(e) => setFormData({...formData, precio: e.target.value})}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900 ${
                      errors.precio ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.precio && <p className="text-red-500 text-sm mt-1">{errors.precio}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stock *
                  </label>
                  <input
                    type="number"
                    value={formData.stock}
                    onChange={(e) => setFormData({...formData, stock: e.target.value})}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900 ${
                      errors.stock ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.stock && <p className="text-red-500 text-sm mt-1">{errors.stock}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Categoría *
                  </label>
                  <select
                    value={formData.categoriaID}
                    onChange={(e) => setFormData({...formData, categoriaID: e.target.value})}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900 ${
                      errors.categoriaID ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Seleccionar categoría</option>
                    {categorias.map((categoria) => (
                      <option key={categoria.ID} value={categoria.ID}>
                        {categoria.nombre}
                      </option>
                    ))}
                  </select>
                  {errors.categoriaID && <p className="text-red-500 text-sm mt-1">{errors.categoriaID}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Marca *
                  </label>
                  <select
                    value={formData.marcaID}
                    onChange={(e) => setFormData({...formData, marcaID: e.target.value})}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900 ${
                      errors.marcaID ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Seleccionar marca</option>
                    {marcas.map((marca) => (
                      <option key={marca.ID} value={marca.ID}>
                        {marca.nombre}
                      </option>
                    ))}
                  </select>
                  {errors.marcaID && <p className="text-red-500 text-sm mt-1">{errors.marcaID}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Promoción
                  </label>
                  <select
                    value={formData.promocionID}
                    onChange={(e) => setFormData({...formData, promocionID: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
                  >
                    <option value="">Sin promoción</option>
                    {promociones.map((promocion) => (
                      <option key={promocion.ID} value={promocion.ID}>
                        {promocion.nombre} ({promocion.descuento}% desc.)
                      </option>
                    ))}
                  </select>
                </div>
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
                />
                {errors.descripcion && <p className="text-red-500 text-sm mt-1">{errors.descripcion}</p>}
              </div>

              {/* Imágenes */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Imágenes del Producto *</h3>
                  <button
                    type="button"
                    onClick={addImagen}
                    disabled={imagenes.length >= 5}
                    className="flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <PhotoIcon className="h-4 w-4 mr-2" />
                    Agregar Imagen ({imagenes.length}/5)
                  </button>
                </div>
                
                {errors.imagenes && <p className="text-red-500 text-sm mb-3">{errors.imagenes}</p>}
                
                <div className="space-y-4">
                  {imagenes.map((imagen, index) => (
                    <div key={`imagen-${index}-${imagen.url}`} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">
                          Imagen {index + 1}
                          {imagenPrincipal === index && (
                            <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                              Principal
                            </span>
                          )}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeImagen(index)}
                          className="p-1 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                        >
                          <XMarkIcon className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <div className="space-y-3">
                        {/* Subir archivo */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Subir desde computadora
                          </label>
                          <div className="relative">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleFileUpload(e, index)}
                              disabled={uploadingImages[index]}
                              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-black file:text-white hover:file:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                            {uploadingImages[index] && (
                              <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center rounded-md">
                                <div className="flex items-center space-x-2">
                                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                                  <span className="text-sm text-gray-600">Subiendo...</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="flex-1 border-t border-gray-300"></div>
                          <span className="px-3 text-sm text-gray-500">o</span>
                          <div className="flex-1 border-t border-gray-300"></div>
                        </div>
                        
                        {/* URL */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            URL de imagen
                          </label>
                          <input
                            type="text"
                            placeholder="Nombre del archivo o URL"
                            value={imagen.displayName || imagen.url}
                            onChange={(e) => updateImagenUrl(index, e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900"
                          />
                        </div>
                                                {/* Vista previa */}
                        {(imagen.url || imagen.previewUrl) && (
                          <div className="mt-3">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Vista previa
                            </label>
                            <div className="relative w-32 h-32 border border-gray-300 rounded-lg overflow-hidden">
                              {imagen.previewUrl ? (
                                // Para archivos locales, usar img normal con URL temporal
                                <img
                                  src={imagen.previewUrl}
                                  alt={`Vista previa ${index + 1}`}
                                  className="w-full h-full object-cover"
                                  onError={() => {
                                    console.log('Error cargando imagen local:', imagen.previewUrl);
                                  }}
                                />
                              ) : imagen.url && !imagen.url.startsWith('http') && !imagen.url.startsWith('/') ? (
                                // Para rutas locales sin previewUrl, mostrar placeholder
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                  <PhotoIcon className="h-8 w-8 text-gray-400" />
                                  <span className="sr-only">Ruta local</span>
                                </div>
                              ) : (
                                // Para URLs web válidas, usar Next.js Image
                                <Image
                                  src={imagen.url}
                                  alt={`Vista previa ${index + 1}`}
                                  fill
                                  className="object-cover"
                                  onError={() => {
                                    console.log('Error cargando imagen:', imagen.url);
                                  }}
                                />
                              )}
                            </div>
                          </div>
                        )}
                        
                        {/* Botón para marcar como principal */}
                        <div className="flex justify-end">
                          <button
                            type="button"
                            onClick={() => setImagenComoPrincipal(index)}
                            disabled={imagenPrincipal === index}
                            className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                              imagenPrincipal === index
                                ? 'bg-yellow-100 text-yellow-800 border border-yellow-300 cursor-not-allowed'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            <StarIcon className="h-4 w-4 mr-1" />
                            {imagenPrincipal === index ? 'Es Principal' : 'Marcar como Principal'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Especificaciones dinámicas según categoría */}
              {formData.categoriaID && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Especificaciones
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {getEspecificacionesPorCategoria().map((spec) => (
                      <div key={spec.name}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {spec.label}
                        </label>
                        <input
                          type={spec.type}
                          value={formData[spec.name as keyof typeof formData]}
                          onChange={(e) => setFormData({...formData, [spec.name]: e.target.value})}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-900 ${
                            errors[spec.name] ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors[spec.name] && <p className="text-red-500 text-sm mt-1">{errors[spec.name]}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-end space-x-3 pt-4 border-t">
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
                  {editingProducto ? 'Actualizar' : 'Crear'} Producto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
