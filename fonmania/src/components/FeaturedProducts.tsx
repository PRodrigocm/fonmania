import PhoneCard from "./PhoneCard";

type Phone = {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
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

type FeaturedProductsProps = {
  phones: Phone[];
};

export default function FeaturedProducts({ phones }: FeaturedProductsProps) {
  const featuredPhones = phones.filter((phone) => phone.featured);

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-raleway font-semibold mb-6 text-center text-[#7100E4]">
        Productos Destacados
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {featuredPhones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </section>
  );
}
