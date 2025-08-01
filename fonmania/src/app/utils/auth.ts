import jwt from 'jsonwebtoken';

export interface DecodedToken {
  userId: number;
  email: string;
  nombre: string;
  rol: string;
  iat: number;
  exp: number;
}

export const verifyToken = (token: string): DecodedToken => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'tu-secret-key');
    return decoded as DecodedToken;
  } catch (error) {
    throw new Error('Token inválido');
  }
};

export const getUserIdFromToken = (token: string): number => {
  const decoded = verifyToken(token);
  return decoded.userId;
};

export const isTokenValid = (token: string): boolean => {
  try {
    verifyToken(token);
    return true;
  } catch {
    return false;
  }
}; 