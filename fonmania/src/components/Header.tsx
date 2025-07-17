import Image from "next/image";
import titulo2 from "../../img/titulo_2.png";

export default function Header() {
  return (
    <header className="bg-[#7100E4] py-6 flex items-center justify-between px-6 w-full fixed top-0 left-0 z-50 h-28">
      <div className="flex-shrink-0">
        <Image src={titulo2} alt="fonmania logo" width={170} height={60} />
      </div>
      <nav className="flex justify-end w-full">
        <ul className="flex gap-8 text-white font-nunito font-semibold text-lg">
          {[
            { label: "Contacto", className: "bg-yellow-400 text-[#7100E4]" },
            { label: "Celulares", className: "bg-black text-white" },
            { label: "Accesorios", className: "bg-white text-[#7100E4]" },
          ].map((item, idx) => (
            <li
              key={item.label}
              className="flex flex-col items-center cursor-pointer transition-all duration-300 ease-in-out mx-3"
            >
              <span className={`px-4 py-2 rounded-lg font-bold transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${item.className}`}>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
