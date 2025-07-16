import { FaFacebookF, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#7100E4] text-white py-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h3 className="font-nunito font-bold text-lg mb-4">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: contacto@fonmania.com</li>
            <li>Teléfono: +1 234 567 890</li>
            <li>Dirección: Calle Falsa 123, Ciudad</li>
          </ul>
        </div>
        <div>
          <h3 className="font-nunito font-bold text-lg mb-4">Soporte Técnico</h3>
          <ul className="space-y-2 text-sm">
            <li>FAQ</li>
            <li>Garantía</li>
            <li>Reparaciones</li>
          </ul>
        </div>
        <div>
          <h3 className="font-nunito font-bold text-lg mb-4">Ayuda</h3>
          <ul className="space-y-2 text-sm">
            <li>Política de Devoluciones</li>
            <li>Envíos</li>
            <li>Contacto Soporte</li>
          </ul>
        </div>
        <div>
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
    </footer>
  );
}
