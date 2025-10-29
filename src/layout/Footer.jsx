import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Información de la empresa */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Agronore Air</h3>
            <p className="text-sm mb-4">
              Soluciones innovadoras de monitoreo agrícola con tecnología de drones para optimizar tu producción.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-sm hover:text-green-400 transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#servicios" className="text-sm hover:text-green-400 transition-colors">Servicios</a>
              </li>
              <li>
                <a href="#nosotros" className="text-sm hover:text-green-400 transition-colors">Nosotros</a>
              </li>
              <li>
                <a href="#tecnologia" className="text-sm hover:text-green-400 transition-colors">Tecnología</a>
              </li>
              <li>
                <a href="#blog" className="text-sm hover:text-green-400 transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a href="#monitoreo" className="text-sm hover:text-green-400 transition-colors">Monitoreo de Cultivos</a>
              </li>
              <li>
                <a href="#mapeo" className="text-sm hover:text-green-400 transition-colors">Mapeo Agrícola</a>
              </li>
              <li>
                <a href="#analisis" className="text-sm hover:text-green-400 transition-colors">Análisis de Suelo</a>
              </li>
              <li>
                <a href="#fumigacion" className="text-sm hover:text-green-400 transition-colors">Fumigación con Drones</a>
              </li>
              <li>
                <a href="#consultoria" className="text-sm hover:text-green-400 transition-colors">Consultoría</a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-green-400" />
                <span className="text-sm">Quito, Pichincha, Ecuador</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-green-400" />
                <a href="tel:+593999999999" className="text-sm hover:text-green-400 transition-colors">
                  +593 99 999 9999
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-green-400" />
                <a href="mailto:info@agronoreair.com" className="text-sm hover:text-green-400 transition-colors">
                  info@agronoreair.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <a 
                href="#contacto" 
                className="inline-block bg-green-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-green-700 transition-colors"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Agronore Air. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacidad" className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#terminos" className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;