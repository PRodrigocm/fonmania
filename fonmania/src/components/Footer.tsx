"use client";

import { FaFacebookF, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isCelularesPage = pathname === "/celulares";

  return (
    <footer className={`text-white py-8 px-6 mt-auto transition-colors duration-300 ${
      isCelularesPage ? 'bg-black' : 'bg-[#7100E4]'
    }`}>
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-stretch gap-12">
        <div className="flex-none flex items-center justify-left">
          <Image 
            src="/img/logo_footer.png" 
            alt="fonmania logo" 
            width={170} 
            height={60}
          />
        </div>
        <div className="flex-1 flex flex-col md:flex-row justify-between gap-12">
          <div className="flex-1">
            <h3 className="font-nunito font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: contacto@fonmania.com</li>
              <li>Teléfono: +1 234 567 890</li>
              <li>Dirección: Calle Falsa 123, Ciudad</li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="font-nunito font-bold text-lg mb-4">Soporte Técnico</h3>
            <ul className="space-y-2 text-sm">
              <li>FAQ</li>
              <li>Garantía</li>
              <li>Reparaciones</li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="font-nunito font-bold text-lg mb-4">Ayuda</h3>
            <ul className="space-y-2 text-sm">
              <li>Política de Devoluciones</li>
              <li>Envíos</li>
              <li>Contacto Soporte</li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="font-nunito font-bold text-lg mb-4">Redes Sociales</h3>
            <div className="flex gap-4 text-xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-yellow-400">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-yellow-400">
                <FaTwitter />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-yellow-400">
                <FaYoutube />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-yellow-400">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
