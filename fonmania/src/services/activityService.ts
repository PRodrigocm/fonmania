import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface ActivityData {
  tipo: string;
  descripcion: string;
  entidad?: string;
  usuarioID?: number;
  metadata?: any;
}

export interface Activity {
  ID: number;
  tipo: string;
  descripcion: string;
  entidad: string | null;
  usuarioID: number | null;
  fecha: Date;
  metadata: string | null;
  usuario?: {
    nombre: string;
  } | null;
}

export class ActivityService {
  // Registrar una nueva actividad
  static async logActivity(data: ActivityData): Promise<void> {
    try {
      await prisma.actividad.create({
        data: {
          tipo: data.tipo,
          descripcion: data.descripcion,
          entidad: data.entidad || null,
          usuarioID: data.usuarioID || null,
          metadata: data.metadata ? JSON.stringify(data.metadata) : null,
        }
      });
    } catch (error) {
      console.error('Error logging activity:', error);
    }
  }

  // Obtener actividades recientes
  static async getRecentActivities(limit: number = 10): Promise<Activity[]> {
    try {
      const activities = await prisma.actividad.findMany({
        take: limit,
        orderBy: {
          fecha: 'desc'
        },
        include: {
          usuario: {
            select: {
              nombre: true
            }
          }
        }
      });

      return activities;
    } catch (error) {
      console.error('Error fetching activities:', error);
      return [];
    }
  }

  // Métodos específicos para diferentes tipos de actividades
  static async logProductCreated(productName: string, adminId?: number): Promise<void> {
    await this.logActivity({
      tipo: 'producto_creado',
      descripcion: `Nuevo producto agregado: ${productName}`,
      entidad: productName,
      usuarioID: adminId,
    });
  }

  static async logOrderReceived(orderId: number, customerName?: string): Promise<void> {
    await this.logActivity({
      tipo: 'pedido_recibido',
      descripcion: `Nuevo pedido recibido${customerName ? ` de ${customerName}` : ''}`,
      entidad: `Pedido #${orderId}`,
      metadata: { orderId }
    });
  }

  static async logPromotionCreated(promotionName: string, adminId?: number): Promise<void> {
    await this.logActivity({
      tipo: 'promocion_creada',
      descripcion: `Nueva promoción creada: ${promotionName}`,
      entidad: promotionName,
      usuarioID: adminId,
    });
  }

  static async logUserRegistered(userName: string, userId: number): Promise<void> {
    await this.logActivity({
      tipo: 'usuario_registrado',
      descripcion: `Nuevo usuario registrado: ${userName}`,
      entidad: userName,
      usuarioID: userId,
    });
  }

  static async logProductUpdated(productName: string, adminId?: number): Promise<void> {
    await this.logActivity({
      tipo: 'producto_actualizado',
      descripcion: `Producto actualizado: ${productName}`,
      entidad: productName,
      usuarioID: adminId,
    });
  }

  static async logOrderStatusChanged(orderId: number, newStatus: string, adminId?: number): Promise<void> {
    await this.logActivity({
      tipo: 'pedido_actualizado',
      descripcion: `Estado de pedido actualizado a: ${newStatus}`,
      entidad: `Pedido #${orderId}`,
      usuarioID: adminId,
      metadata: { orderId, newStatus }
    });
  }
}
