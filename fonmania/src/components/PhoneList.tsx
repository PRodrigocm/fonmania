type Phone = {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  specs: {
    storage: string;
    ram: string;
    camera: string;
    battery?: string;
    screen?: string;
  };
  featured?: boolean;
  discount?: number;
};

interface PhoneListProps {
  phones: Phone[];
}

export default function PhoneList({ phones }: PhoneListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {phones.map((phone) => (
        <div
          key={phone.id}
          className={`border rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition-shadow ${
            phone.featured ? "border-yellow-400" : "border-gray-300"
          }`}
        >
          <div className="w-40 h-40 bg-[#7100E4] rounded-md mb-4 flex items-center justify-center text-white text-center text-lg font-bold">
            {phone.name}
          </div>
          <h3 className="text-xl font-nunito font-bold mb-2">{phone.name}</h3>
          <p className="text-lg mb-1 font-semibold text-[#7100E4]">${phone.price}</p>
          {phone.originalPrice && (
            <p className="text-sm mb-2 line-through text-gray-500">${phone.originalPrice}</p>
          )}
          {phone.discount && (
            <p className="text-sm mb-2 text-yellow-500 font-semibold">
              {phone.discount}% OFF
            </p>
          )}
          <div className="text-sm mb-4 text-center">
            <p>Storage: {phone.specs.storage}</p>
            <p>RAM: {phone.specs.ram}</p>
            <p>Camera: {phone.specs.camera}</p>
          </div>
          <button
            className="bg-[#FDBD24] text-black font-raleway font-semibold px-6 py-2 rounded hover:bg-yellow-400 transition-colors"
            type="button"
          >
            Comprar
          </button>
        </div>
      ))}
    </div>
  );
}
