import { useState, useEffect } from 'react';
import { User, Pedido, UserUpdateData } from '../types/user';
import { UserService } from '../services/userService';

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        // Verificar autenticación
        if (!UserService.isAuthenticated()) {
          UserService.redirectToLogin();
          return;
        }

        // Cargar usuario desde localStorage
        const userData = UserService.getUserFromStorage();
        if (userData) {
          setUser(userData);
        }

        // Cargar pedidos
        const pedidosData = await UserService.getPedidos();
        setPedidos(pedidosData);
      } catch (error) {
        console.error('Error cargando datos del usuario:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, []);

  const updateUser = async (userData: UserUpdateData): Promise<{ success: boolean; message: string }> => {
    const result = await UserService.updateUser(userData);
    
    if (result.success && result.user) {
      setUser(result.user);
      UserService.saveUserToStorage(result.user);
    }
    
    return {
      success: result.success,
      message: result.message
    };
  };

  return {
    user,
    pedidos,
    isLoading,
    updateUser
  };
};
