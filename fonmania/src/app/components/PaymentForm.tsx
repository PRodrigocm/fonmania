import { FormEvent } from "react";

interface PaymentFormProps {
  tarjeta: string;
  dni: string;
  onChange: (field: string, value: string) => void;
  onSubmit: (e: FormEvent) => void;
  onCancel: () => void;
  pagado: boolean;
}

export default function PaymentForm({ tarjeta, dni, onChange, onSubmit, onCancel, pagado }: PaymentFormProps) {
  return (
    <form
      className="bg-white rounded-lg shadow-lg p-8 flex flex-col gap-4 min-w-[320px]"
      onSubmit={onSubmit}
    >
      <h2 className="font-title text-2xl text-[var(--color-morado)] mb-2">Pago con Yape/PagoEfectivo</h2>
      <label className="font-title">Número de tarjeta
        <input
          type="text"
          required
          maxLength={16}
          minLength={13}
          pattern="[0-9]+"
          className="block w-full border rounded p-2 mt-1"
          value={tarjeta}
          onChange={e => onChange("tarjeta", e.target.value)}
        />
      </label>
      <label className="font-title">DNI
        <input
          type="text"
          required
          maxLength={8}
          minLength={8}
          pattern="[0-9]+"
          className="block w-full border rounded p-2 mt-1"
          value={dni}
          onChange={e => onChange("dni", e.target.value)}
        />
      </label>
      <button
        type="submit"
        className="mt-4 px-6 py-2 rounded bg-[var(--color-morado)] text-[var(--color-amarillo)] font-title text-lg hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition"
      >
        Pagar
      </button>
      <button
        type="button"
        className="mt-2 px-4 py-1 rounded bg-gray-200 text-gray-700 font-title hover:bg-gray-300"
        onClick={onCancel}
      >
        Cancelar
      </button>
      {pagado && <p className="text-green-600 font-bold mt-2">¡Pago realizado con éxito!</p>}
    </form>
  );
} 