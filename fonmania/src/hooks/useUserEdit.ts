import { useState } from 'react';
import { User, UserUpdateData } from '../types/user';

export const useUserEdit = (user: User | null, onUpdate: (data: UserUpdateData) => Promise<{ success: boolean; message: string }>) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<User | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleEdit = () => {
    if (user) {
      setEditedUser({ ...user });
      setIsEditing(true);
      setSaveMessage('');
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedUser(null);
    setSaveMessage('');
  };

  const handleInputChange = (field: keyof User, value: string) => {
    if (editedUser) {
      setEditedUser({ ...editedUser, [field]: value });
    }
  };

  const handleSave = async () => {
    if (!editedUser || !user) return;

    setIsSaving(true);
    setSaveMessage('');

    try {
      const result = await onUpdate({
        nombre: editedUser.nombre,
        email: editedUser.email,
        direccion: editedUser.direccion,
        dni: editedUser.dni
      });

      if (result.success) {
        setIsEditing(false);
        setSaveMessage(result.message);
        
        // Limpiar mensaje después de 3 segundos
        setTimeout(() => setSaveMessage(''), 3000);
      } else {
        setSaveMessage(result.message);
      }
    } catch (error) {
      setSaveMessage('Error inesperado al guardar');
    } finally {
      setIsSaving(false);
    }
  };

  return {
    isEditing,
    editedUser,
    isSaving,
    saveMessage,
    handleEdit,
    handleCancel,
    handleInputChange,
    handleSave
  };
};
