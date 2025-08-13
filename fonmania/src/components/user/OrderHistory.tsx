import React from 'react';
import { FaShoppingBag, FaCalendar, FaTruck } from 'react-icons/fa';
import { Pedido } from '../../types/user';
import { FormatUtils } from '../../services/formatUtils';

interface OrderHistoryProps {
  pedidos: Pedido[];
}

export const OrderHistory: React.FC<OrderHistoryProps> = ({ pedidos }) => {
  if (pedidos.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-[var(--color-morado)] mb-6">Historial de Pedidos</h2>
        <div className="text-center py-12">
          <FaShoppingBag className="text-6xl text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No tienes pedidos registrados</p>
          <p className="text-gray-400 mt-2">¡Explora nuestros productos y haz tu primer pedido!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-[var(--color-morado)] mb-6">Historial de Pedidos</h2>
      
      <div className="space-y-6">
        {pedidos.map((pedido) => {
          const IconComponent = FormatUtils.getEstadoIcon(pedido.estado);
          const iconProps = FormatUtils.getEstadoIconProps(pedido.estado);
          
          return (
            <div key={pedido.ID} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-morado)]">
                    Pedido #{pedido.ID}
                  </h3>
                  <p className="text-gray-600 flex items-center gap-2 mt-1">
                    <FaCalendar className="text-sm" />
                    {FormatUtils.formatDate(pedido.fecha)}
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-2 md:mt-0">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${FormatUtils.getEstadoColor(pedido.estado)}`}>
                    <IconComponent className={iconProps.className} />
                    {pedido.estado}
                  </div>
                  <p className="text-xl font-bold text-[var(--color-morado)]">
                    {FormatUtils.formatCurrency(pedido.total)}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                {pedido.detalles.map((detalle) => (
                  <div key={detalle.ID} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <img
                      src={detalle.producto.imagen}
                      alt={detalle.producto.nombre}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-[var(--color-negro)]">{detalle.producto.nombre}</h4>
                      <p className="text-sm text-gray-500">{detalle.producto.marca}</p>
                      <p className="text-sm text-gray-600">
                        Cantidad: {detalle.cantidad} × {FormatUtils.formatCurrency(detalle.precio_unitario)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-[var(--color-morado)]">
                        {FormatUtils.formatCurrency(detalle.subtotal)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {pedido.envio && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-[var(--color-morado)] mb-2 flex items-center gap-2">
                    <FaTruck />
                    Información de Envío
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Empresa:</span> 
                      <span>{pedido.envio.empresa}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Código de seguimiento:</span> 
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">{pedido.envio.codigoSeguimiento}</span>
                    </div>
                    <div className="md:col-span-2 flex items-center gap-2">
                      <span className="font-medium">Estado del envío:</span> 
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                        {pedido.envio.estado}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
