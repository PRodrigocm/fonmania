import Image from "next/image";
import titulo2 from "../../img/titulo_2.png";

export default function Header() {
  return (
    <header className="bg-[#7100E4] py-4 flex items-center justify-between px-6 w-full fixed top-0 left-0 z-50">
      <div className="flex-shrink-0">
        <Image src={titulo2} alt="fonmania logo" width={150} height={50} />
      </div>
      <nav>
        <ul className="flex gap-8 text-white font-nunito font-semibold text-lg">
          <li className="cursor-pointer hover:underline">Celulares</li>
          <li className="cursor-pointer hover:underline">Accesorios</li>
          <li className="cursor-pointer hover:underline">Tienda</li>
          <li className="cursor-pointer hover:underline">Carrito</li>
          <li className="cursor-pointer hover:underline">Promociones</li>
        </ul>
      </nav>
    </header>
  );
}
