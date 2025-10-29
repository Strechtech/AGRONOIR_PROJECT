import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Briefcase, FolderOpen, Drone } from 'lucide-react';


/* ============================================================================
   CONFIGURACIÓN
   ============================================================================ */
const NAV_ITEMS = [
  { path: '/', label: 'Inicio', icon: Home },
  { path: '/services', label: 'Servicios', icon: Briefcase },
  { path: '/projects', label: 'Proyectos', icon: FolderOpen },
];

const LOGO_CONFIG = {
  name: 'Agronore',
  tagline: 'Air',
};

function StyleNav() {
  /* ============================================================================
     ESTADO Y EFECTOS
     ============================================================================ */
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Manejo unificado de efectos con cleanup
  useEffect(() => {
    // Scroll handler
    const handleScroll = () => setScrolled(window.scrollY > 20);
    
    // Resize handler - cierra menu móvil en pantallas grandes
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    // Event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Cierra menu móvil al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Previene scroll cuando menu móvil está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => (document.body.style.overflow = 'unset');
  }, [isOpen]);

  const isActivePath = (path) => location.pathname === path;

  /* ============================================================================
     RENDER
     ============================================================================ */
  return (
    <>
      {/* ========== BARRA DE NAVEGACIÓN ========== */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-[#000000e8] backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            
            {/* ========== LOGO Y MARCA ========== */}
            <Link to="/" className="flex items-center gap-3 group">
              <div
                className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  scrolled
                    ? 'bg-gradient-to-br from-cyan-500 to-teal-600 shadow-md group-hover:shadow-lg'
                    : 'bg-white/10 backdrop-blur-sm'
                } group-hover:scale-105`}
              >
                <Drone className="w-7 h-7 text-white" />
              </div>

              <div className="hidden sm:block">
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-2xl font-bold transition-colors ${
                      scrolled ? 'text-gray-900' : 'text-white'
                    }`}
                  >
                    {LOGO_CONFIG.name}
                  </span>
                  <span
                    className={`text-lg font-light transition-colors ${
                      scrolled ? 'text-emerald-600' : 'text-emerald-100'
                    }`}
                  >
                    {LOGO_CONFIG.tagline}
                  </span>
                </div>
                <div
                  className={`text-xs transition-colors ${
                    scrolled ? 'text-gray-500' : 'text-white/80'
                  }`}
                >
                  Innovación Agrícola
                </div>
              </div>
            </Link>

            {/* ========== NAVEGACIÓN DESKTOP ========== */}
            <ul className="hidden md:flex items-center gap-2">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = isActivePath(item.path);
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`
                        relative flex items-center gap-2 px-6 py-2.5 rounded-lg
                        font-medium transition-all duration-200
                        ${
                          isActive
                            ? scrolled
                              ? 'text-emerald-700 bg-emerald-50'
                              : 'text-white bg-white/15 backdrop-blur-sm'
                            : scrolled
                              ? 'text-gray-700 hover:text-emerald-700 hover:bg-gray-50'
                              : 'text-white/90 hover:text-white hover:bg-white/10'
                        }
                      `}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                      
                      {/* Indicador de página activa */}
                      {isActive && (
                        <span
                          className={`
                            absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full
                            ${scrolled ? 'bg-emerald-600' : 'bg-white'}
                          `}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* ========== BOTÓN MENÚ MÓVIL ========== */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
                md:hidden p-2.5 rounded-lg transition-all duration-200
                ${
                  scrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }
              `}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* ========== MENÚ MÓVIL ========== */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div
            className={`
              px-6 py-6 space-y-2
              ${
                scrolled
                  ? 'bg-white border-t border-gray-100'
                  : 'bg-emerald-700/95 backdrop-blur-md'
              }
            `}
          >
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = isActivePath(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg
                    font-medium transition-all duration-200
                    ${
                      isActive
                        ? scrolled
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-white/15 text-white backdrop-blur-sm'
                        : scrolled
                          ? 'text-gray-700 hover:bg-gray-50'
                          : 'text-white/90 hover:bg-white/10'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ========== OVERLAY MÓVIL ========== */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ========== ESPACIADOR ========== */}
      <div className="h-20" />
    </>
  );
}

export default StyleNav;