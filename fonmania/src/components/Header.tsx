"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isCelularesPage = pathname === "/celulares";

  const navItems = [
    { label: "Inicio", href: "/", className: "bg-white text-[#7100E4]" },
    { label: "Celulares", href: "/celulares", className: isCelularesPage ? "bg-white text-black" : "bg-black text-white" },
    { label: "Accesorios", href: "/accesorios", className: "bg-white text-[#7100E4]" },
    { label: "Contacto", href: "/contacto", className: "bg-yellow-400 text-[#7100E4]" },
  ];

  return (
    <header className={`py-6 flex items-center justify-between px-6 w-full fixed top-0 left-0 z-50 h-28 transition-colors duration-300 ${
      isCelularesPage ? 'bg-black' : 'bg-[#7100E4]'
    }`}>
      <div className="flex-shrink-0">
        <Link href="/">
          <Image 
            src="/img/logo.png" 
            alt="fonmania logo" 
            width={170} 
            height={60}
          />
        </Link>
      </div>
      <nav className="flex justify-end w-full">
        <ul className="flex gap-8 text-white font-nunito font-semibold text-lg">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="flex flex-col items-center cursor-pointer transition-all duration-300 ease-in-out mx-3"
            >
              <Link href={item.href}>
                <span className={`px-4 py-2 rounded-lg font-bold transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${item.className} ${pathname === item.href ? 'ring-2 ring-white' : ''}`}>
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
