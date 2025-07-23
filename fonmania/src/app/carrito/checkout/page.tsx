"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { FaCreditCard, FaMobileAlt, FaTag, FaArrowLeft } from "react-icons/fa";
import { useCart } from "../../components/CartContext";
import { useRouter } from "next/navigation";

const pasos = ["Envío", "Pago", "Confirmar", "Listo"];

export default function Checkout() {
  const { 
    items, 
    getSubtotal, 
    getShippingCost, 
    clearCart 
  } = useCart();
  const router = useRouter();
  
  const [paso, setPaso] = useState(0);
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    postal: "",
  });
  const [pago, setPago] = useState({
    metodo: "tarjeta",
    nombreTarjeta: "",
    numeroTarjeta: "",
    vencimiento: "",
    cvv: "",
    codigoPromo: "",
  });
  const [promoAplicado, setPromoAplicado] = useState(false);
  
  const subtotal = getSubtotal();
  const envio = getShippingCost();
  const impuestos = +(subtotal * 0.08).toFixed(2);
  const total = subtotal + envio + impuestos - (promoAplicado ? 50 : 0);

  // Redirigir si el carrito está vacío
  useEffect(() => {
    if (items.length === 0) {
      router.push("/carrito");
    }
  }, [items, router]);

  // Solución hidratación: número de orden solo en cliente
  const [orderId, setOrderId] = useState<string | null>(null);
  useEffect(() => {
    if (paso === 3 && !orderId) {
      setOrderId(`#FON-${Math.floor(Math.random() * 1000000000)}`);
      // Limpiar carrito después del pago exitoso
      clearCart();
    }
  }, [paso, orderId, clearCart]);

  // Barra de progreso
  const progreso = ((paso + 1) / pasos.length) * 100;

  // Paso 1: Envío
  const PasoEnvio = (
    <form className="flex flex-col gap-4" onSubmit={e => { e.preventDefault(); setPaso(1); }}>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="font-title">Nombre *</label>
          <input className="w-full border rounded p-2 mt-1" required value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} />
        </div>
        <div className="flex-1">
          <label className="font-title">Apellido *</label>
          <input className="w-full border rounded p-2 mt-1" required value={form.apellido} onChange={e => setForm(f => ({ ...f, apellido: e.target.value }))} />
        </div>
      </div>
      <label className="font-title">DNI / Cédula *</label>
      <input className="w-full border rounded p-2 mt-1" required value={form.dni} onChange={e => setForm(f => ({ ...f, dni: e.target.value }))} />
      <label className="font-title">Email *</label>
      <input className="w-full border rounded p-2 mt-1" required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
      <label className="font-title">Teléfono *</label>
      <input className="w-full border rounded p-2 mt-1" required value={form.telefono} onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))} />
      <label className="font-title">Dirección *</label>
      <input className="w-full border rounded p-2 mt-1" required value={form.direccion} onChange={e => setForm(f => ({ ...f, direccion: e.target.value }))} />
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="font-title">Ciudad *</label>
          <input className="w-full border rounded p-2 mt-1" required value={form.ciudad} onChange={e => setForm(f => ({ ...f, ciudad: e.target.value }))} />
        </div>
        <div className="flex-1">
          <label className="font-title">Código Postal *</label>
          <input className="w-full border rounded p-2 mt-1" required value={form.postal} onChange={e => setForm(f => ({ ...f, postal: e.target.value }))} />
        </div>
      </div>
      <div className="flex gap-4 mt-6">
        <button 
          type="button" 
          onClick={() => router.push("/carrito")}
          className="flex-1 py-3 rounded-xl border-2 border-[var(--color-morado)] text-[var(--color-morado)] font-title text-lg font-bold hover:bg-[var(--color-morado)] hover:text-[var(--color-amarillo)] transition flex items-center justify-center gap-2"
        >
          <FaArrowLeft /> Volver al Carrito
        </button>
        <button type="submit" className="flex-1 py-3 rounded-xl bg-[var(--color-morado)] text-[var(--color-amarillo)] font-title text-lg font-bold shadow-lg hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition">
          Continuar al Pago
        </button>
      </div>
    </form>
  );

  // Paso 2: Pago
  const PasoPago = (
    <form className="flex flex-col gap-4" onSubmit={e => { e.preventDefault(); setPaso(2); }}>
      <div className="flex items-center gap-2 mb-2">
        <FaTag className="text-[var(--color-morado)]" />
        <span className="font-title text-lg">Código Promocional</span>
      </div>
      <div className="flex gap-2 mb-4">
        <input className="flex-1 border rounded p-2" placeholder="Ingresa tu código" value={pago.codigoPromo} onChange={e => setPago(f => ({ ...f, codigoPromo: e.target.value }))} />
        <button type="button" className="px-4 py-2 rounded bg-[var(--color-morado)] text-[var(--color-amarillo)] font-title font-bold hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition" onClick={() => setPromoAplicado(true)}>
          Aplicar
        </button>
      </div>
      <div className="flex gap-2 mb-4">
        <button type="button" className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl font-title font-bold text-lg border-2 ${pago.metodo === "tarjeta" ? "bg-[var(--color-morado)] text-white border-[var(--color-morado)]" : "bg-white text-[var(--color-morado)] border-gray-300"}`} onClick={() => setPago(f => ({ ...f, metodo: "tarjeta" }))}>
          <FaCreditCard /> Tarjeta
        </button>
        <button type="button" className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl font-title font-bold text-lg border-2 ${pago.metodo === "movil" ? "bg-[var(--color-morado)] text-white border-[var(--color-morado)]" : "bg-white text-[var(--color-morado)] border-gray-300"}`} onClick={() => setPago(f => ({ ...f, metodo: "movil" }))}>
          <FaMobileAlt /> Móvil
        </button>
      </div>
      {pago.metodo === "tarjeta" ? (
        <>
          <label className="font-title">Nombre en la Tarjeta *</label>
          <input className="w-full border rounded p-2 mt-1" required value={pago.nombreTarjeta} onChange={e => setPago(f => ({ ...f, nombreTarjeta: e.target.value }))} placeholder="Como aparece en la tarjeta" />
          <label className="font-title">Número de Tarjeta *</label>
          <input className="w-full border rounded p-2 mt-1" required value={pago.numeroTarjeta} onChange={e => setPago(f => ({ ...f, numeroTarjeta: e.target.value }))} placeholder="1234 5678 9012 3456" />
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="font-title">Fecha de Vencimiento *</label>
              <input className="w-full border rounded p-2 mt-1" required value={pago.vencimiento} onChange={e => setPago(f => ({ ...f, vencimiento: e.target.value }))} placeholder="MM/YY" />
            </div>
            <div className="flex-1">
              <label className="font-title">CVV *</label>
              <input className="w-full border rounded p-2 mt-1" required value={pago.cvv} onChange={e => setPago(f => ({ ...f, cvv: e.target.value }))} placeholder="123" />
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-8 text-gray-500">
          <div className="mb-4">
            <div className="text-2xl mb-2">📱</div>
            <div className="font-title font-bold text-lg">Pago Móvil</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <div className="font-bold mb-2">Yape / PagoEfectivo</div>
            <div className="text-sm text-gray-600">
              Recibirás un enlace de pago por WhatsApp o SMS
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between mt-6">
        <button type="button" className="font-title text-[var(--color-morado)] font-bold hover:underline" onClick={() => setPaso(0)}>Atrás</button>
        <button type="submit" className="px-6 py-2 rounded-xl bg-[var(--color-morado)] text-[var(--color-amarillo)] font-title text-lg font-bold shadow-lg hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition">Revisar Pedido</button>
      </div>
    </form>
  );

  // Paso 3: Confirmar
  const PasoConfirmar = (
    <div>
      <div className="font-title text-xl text-[var(--color-morado)] font-bold mb-4">Resumen del Pedido</div>
      <div className="mb-4">
        {items.map((producto) => (
          <div key={producto.id} className="flex justify-between mb-2">
            <span>
              {producto.nombre} <span className="text-gray-500">Cantidad: {producto.cantidad}</span>
            </span>
            <span className="font-bold text-[var(--color-morado)]">
              S/ {(producto.precio * producto.cantidad).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t pt-2 mb-2">
        <div className="flex justify-between mb-1"><span>Subtotal:</span><span>S/ {subtotal.toFixed(2)}</span></div>
        <div className="flex justify-between mb-1"><span>Envío:</span><span>{envio === 0 ? "Gratis" : `S/ ${envio.toFixed(2)}`}</span></div>
        <div className="flex justify-between mb-1"><span>Impuestos:</span><span>S/ {impuestos.toFixed(2)}</span></div>
        {promoAplicado && (
          <div className="flex justify-between mb-1 text-green-600">
            <span>Descuento:</span><span>-S/ 50.00</span>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center border-t pt-4 mt-2 mb-4">
        <span className="font-title text-xl font-bold">Total:</span>
        <span className="font-title text-2xl font-bold text-[var(--color-morado)]">S/ {total.toFixed(2)}</span>
      </div>
      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <div className="font-title font-bold mb-1">Información de Envío</div>
        <div>{form.nombre} {form.apellido}</div>
        <div>DNI: {form.dni}</div>
        <div>{form.direccion}</div>
        <div>{form.ciudad}, {form.postal}</div>
        <div>{form.email}</div>
        <div>{form.telefono}</div>
      </div>
      <div className="flex justify-between mt-6">
        <button type="button" className="font-title text-[var(--color-morado)] font-bold hover:underline" onClick={() => setPaso(1)}>Atrás</button>
        <button type="button" className="px-6 py-2 rounded-xl bg-[var(--color-morado)] text-[var(--color-amarillo)] font-title text-lg font-bold shadow-lg hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition" onClick={() => setPaso(3)}>Pagar S/ {total.toFixed(2)}</button>
      </div>
    </div>
  );

  // Paso 4: Listo
  const PasoListo = (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
        <span className="text-4xl text-green-600">✓</span>
      </div>
      <div className="font-title text-2xl text-green-600 font-bold mb-2">¡Pago Exitoso!</div>
      <div className="mb-4 text-center">Tu pedido ha sido procesado correctamente. Recibirás un email de confirmación en breve.</div>
      <div className="bg-gray-50 rounded-xl p-4 mb-4 w-full max-w-md">
        <div className="font-title font-bold mb-1">Detalles del Pedido</div>
        <div>Número de orden: {orderId}</div>
        <div>Total pagado: S/ {total.toFixed(2)}</div>
        <div>Método de pago: {pago.metodo === "tarjeta" ? "Tarjeta" : "Móvil"}</div>
        <div>DNI: {form.dni}</div>
      </div>
      <div className="flex gap-4 text-gray-500 text-sm mb-6">
        <span>🚚 Envío en 24-48h</span>
        <span>🔒 Compra protegida</span>
      </div>
      <button className="w-full py-3 rounded-xl bg-[var(--color-morado)] text-[var(--color-amarillo)] font-title text-lg font-bold shadow-lg hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition" onClick={() => router.push("/")}>
        Continuar Comprando
      </button>
    </div>
  );

  // Si el carrito está vacío, mostrar loading
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--color-blanco)] text-[var(--color-negro)]">
        <Header />
        <main className="w-full max-w-lg mx-auto flex-1 py-8 px-2 sm:px-0">
          <div className="bg-white rounded-2xl shadow-2xl p-6 text-center">
            <div className="text-2xl">Cargando...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-blanco)] text-[var(--color-negro)]">
      <Header />
      <main className="w-full max-w-lg mx-auto flex-1 py-8 px-2 sm:px-0">
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          {/* Barra de pasos */}
          <div className="flex items-center border-b mb-8 relative">
            {pasos.map((p, i) => (
              <div key={p} className={`flex-1 text-center font-title text-lg pb-2 cursor-pointer ${i === paso ? "text-[var(--color-morado)] border-b-4 border-[var(--color-morado)]" : "text-gray-400 border-b-4 border-transparent"}`} onClick={() => i < paso ? setPaso(i) : null}>
                {p}
              </div>
            ))}
            {/* Barrita de progreso */}
            <div className="absolute left-0 bottom-0 h-1 bg-[var(--color-morado)] transition-all duration-500 rounded-full" style={{ width: `${progreso}%` }} />
          </div>
          {/* Contenido del paso */}
          {paso === 0 && PasoEnvio}
          {paso === 1 && PasoPago}
          {paso === 2 && PasoConfirmar}
          {paso === 3 && PasoListo}
        </div>
      </main>
      <Footer />
    </div>
  );
} 