import { FaCheckCircle, FaClock, FaTimes } from "react-icons/fa";

export class FormatUtils {
  static formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  static getEstadoIcon(estado: string) {
    switch (estado.toLowerCase()) {
      case 'completado':
        return FaCheckCircle;
      case 'en proceso':
        return FaClock;
      case 'pendiente':
        return FaClock;
      case 'cancelado':
        return FaTimes;
      default:
        return FaClock;
    }
  }

  static getEstadoIconProps(estado: string): { component: any; className: string } {
    switch (estado.toLowerCase()) {
      case 'completado':
        return { component: FaCheckCircle, className: "text-green-600" };
      case 'en proceso':
        return { component: FaClock, className: "text-blue-600" };
      case 'pendiente':
        return { component: FaClock, className: "text-yellow-600" };
      case 'cancelado':
        return { component: FaTimes, className: "text-red-600" };
      default:
        return { component: FaClock, className: "text-gray-600" };
    }
  }

  static getEstadoColor(estado: string): string {
    switch (estado.toLowerCase()) {
      case 'completado':
        return 'text-green-600 bg-green-100';
      case 'en proceso':
        return 'text-blue-600 bg-blue-100';
      case 'pendiente':
        return 'text-yellow-600 bg-yellow-100';
      case 'cancelado':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  }

  static formatCurrency(amount: number): string {
    return `$${amount.toFixed(2)}`;
  }
}
