import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LOGOS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const externalLink = "https://www.cird.org.py/instituto/cursos/diplomado-en-inteligencia-artificial-aplicada-al-desarrollo-de-software/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/95 backdrop-blur-md border-b border-white/10' : 'bg-dark-900/50 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo Principal (Izquierda) */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img 
              src={LOGOS.cird} 
              alt="Instituto CIRD" 
              className="h-16 w-auto object-contain rounded-md bg-white p-1"
            />
          </div>
          
          {/* Desktop Nav (Derecha) */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-brand-500/20 hover:scale-105"
            >
              Inscribirse
            </a>

            {/* Separator */}
            <div className="h-8 w-px bg-gray-700 mx-2"></div>

            {/* Logos Secundarios */}
            <div className="flex items-center gap-4">
              <img 
                src={LOGOS.mitic} 
                alt="MITIC" 
                className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
              <img 
                src={LOGOS.ag} 
                alt="AG Logo" 
                className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-900 border-b border-gray-800">
          <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col items-center">
            <a 
              href={externalLink} 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)} 
              className="block w-full text-center bg-brand-600 text-white px-5 py-3 rounded-lg font-bold"
            >
              Inscribirse Ahora
            </a>
            
            <div className="w-full border-t border-gray-800 my-2"></div>
            
            <div className="flex items-center justify-center gap-6 pt-2">
               <img 
                src={LOGOS.mitic} 
                alt="MITIC" 
                className="h-8 w-auto object-contain"
              />
              <img 
                src={LOGOS.ag} 
                alt="AG Logo" 
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};