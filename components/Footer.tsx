import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Instituto CIRD. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};