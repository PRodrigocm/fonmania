// Utilidad para manejar autenticación de administrador
export const getAdminToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('adminToken');
};

export const removeAdminToken = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('adminToken');
};

export const redirectToLogin = (): void => {
  if (typeof window === 'undefined') return;
  window.location.href = '/admin/login';
};

export const makeAuthenticatedRequest = async (
  url: string, 
  options: RequestInit = {}
): Promise<Response> => {
  const token = getAdminToken();
  
  if (!token) {
    console.error('No hay token de administrador');
    redirectToLogin();
    throw new Error('No authentication token');
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 401) {
    console.error('Token inválido o expirado');
    removeAdminToken();
    redirectToLogin();
    throw new Error('Authentication failed');
  }

  return response;
};

export const handleAuthError = (error: any): void => {
  console.error('Error de autenticación:', error);
  if (error.message === 'Authentication failed' || error.message === 'No authentication token') {
    // Ya se manejó la redirección en makeAuthenticatedRequest
    return;
  }
  // Otros errores
  console.error('Error general:', error);
};
