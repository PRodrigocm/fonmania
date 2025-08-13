import { User, UserUpdateData, Pedido } from '../types/user';

export class UserService {
  private static getToken(): string | null {
    return localStorage.getItem('userToken');
  }

  private static getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
  }

  static getUserFromStorage(): User | null {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  }

  static saveUserToStorage(user: User): void {
    localStorage.setItem('userData', JSON.stringify(user));
  }

  static isAuthenticated(): boolean {
    const userData = localStorage.getItem('userData');
    const token = localStorage.getItem('userToken');
    return !!(userData && token);
  }

  static redirectToLogin(): void {
    window.location.href = '/login?redirect=/mi-cuenta';
  }

  static async updateUser(userData: UserUpdateData): Promise<{ success: boolean; message: string; user?: User }> {
    try {
      const response = await fetch('/api/usuario/actualizar', {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      if (response.ok) {
        return {
          success: true,
          message: 'Datos actualizados exitosamente',
          user: userData as User
        };
      } else {
        return {
          success: false,
          message: data.message || 'Error al actualizar datos'
        };
      }
    } catch (error) {
      return {
        success: false,
        message: 'Error al conectar con el servidor'
      };
    }
  }

  static async getPedidos(): Promise<Pedido[]> {
    try {
      const response = await fetch('/api/pedidos', {
        headers: this.getHeaders()
      });

      if (response.ok) {
        return await response.json();
      }
      return [];
    } catch (error) {
      console.error('Error cargando pedidos:', error);
      return [];
    }
  }
}
