import React from 'react';
import { Pedido } from '../../types/user';
import { FormatUtils } from '../../services/formatUtils';

interface UserStatsProps {
  pedidos: Pedido[];
}

export const UserStats: React.FC<UserStatsProps> = ({ pedidos }) => {
  const totalPedidos = pedidos.length;
  const pedidosCompletados = pedidos.filter(p => p.estado.toLowerCase() === 'completado').length;
  const totalGastado = pedidos.reduce((sum, p) => sum + p.total, 0);

  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <h3 className="text-xl font-bold text-[var(--color-morado)] mb-4">Estadísticas</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">{totalPedidos}</div>
          <div className="text-sm text-blue-600">Pedidos Totales</div>
        </div>
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-600">{pedidosCompletados}</div>
          <div className="text-sm text-green-600">Pedidos Completados</div>
        </div>
        <div className="bg-purple-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-purple-600">
            {FormatUtils.formatCurrency(totalGastado)}
          </div>
          <div className="text-sm text-purple-600">Total Gastado</div>
        </div>
      </div>
    </div>
  );
};
