import React from 'react';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaIdCard } from 'react-icons/fa';
import { User } from '../../types/user';

interface UserProfileProps {
  user: User;
  isEditing: boolean;
  editedUser: User | null;
  isSaving: boolean;
  saveMessage: string;
  onEdit: () => void;
  onCancel: () => void;
  onSave: () => void;
  onInputChange: (field: keyof User, value: string) => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  user,
  isEditing,
  editedUser,
  isSaving,
  saveMessage,
  onEdit,
  onCancel,
  onSave,
  onInputChange
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-[var(--color-morado)] mb-6">Información Personal</h2>
      
      {saveMessage && (
        <div className={`mb-4 p-3 rounded-lg ${saveMessage.includes('exitosamente') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {saveMessage}
        </div>
      )}

      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
            <input
              type="text"
              value={editedUser?.nombre || ''}
              onChange={(e) => onInputChange('nombre', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-morado)] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
            <input
              type="email"
              value={editedUser?.email || ''}
              onChange={(e) => onInputChange('email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-morado)] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">DNI</label>
            <input
              type="text"
              value={editedUser?.dni || ''}
              onChange={(e) => onInputChange('dni', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-morado)] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Dirección</label>
            <input
              type="text"
              value={editedUser?.direccion || ''}
              onChange={(e) => onInputChange('direccion', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-morado)] focus:border-transparent"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={onSave}
              disabled={isSaving}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 transition"
            >
              {isSaving ? 'Guardando...' : 'Guardar Cambios'}
            </button>
            <button
              onClick={onCancel}
              disabled={isSaving}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 transition"
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaUser className="text-[var(--color-morado)] text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Nombre Completo</p>
                  <p className="font-semibold text-lg">{user.nombre}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[var(--color-morado)] text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Correo Electrónico</p>
                  <p className="font-semibold text-lg">{user.email}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaIdCard className="text-[var(--color-morado)] text-xl" />
                <div>
                  <p className="text-sm text-gray-500">DNI</p>
                  <p className="font-semibold text-lg">{user.dni}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[var(--color-morado)] text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Dirección</p>
                  <p className="font-semibold text-lg">{user.direccion}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={onEdit}
              className="px-4 py-2 bg-[var(--color-morado)] text-white rounded-lg hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition"
            >
              Editar Datos
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
