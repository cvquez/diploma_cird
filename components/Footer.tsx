import React from 'react';
import { LOGOS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          
          {/* Sección de logos de financiamiento */}
          <div className="flex flex-col items-center gap-4 mb-4">
            <p className="text-gray-400 text-sm font-medium">
              Becas otorgadas con el financiamiento de:
            </p>
            <div className="flex items-center gap-6">
              <img 
                src={LOGOS.mitic} 
                alt="MITIC" 
                className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
              <img 
                src={LOGOS.ag} 
                alt="AG Logo" 
                className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6 w-full">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Instituto CIRD. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};