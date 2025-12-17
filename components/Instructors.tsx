import React from 'react';
import { INSTRUCTORS } from '../constants';
import { Linkedin, Twitter } from 'lucide-react';

export const Instructors: React.FC = () => {
  return (
    <section id="instructors" className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-500 font-semibold tracking-wide uppercase">Docentes</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Aprende de los Expertos
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Nuestros instructores combinan trayectoria académica con experiencia real en la industria tecnológica.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {INSTRUCTORS.map((instructor) => (
            <div key={instructor.id} className="bg-dark-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-brand-500/50 transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src={instructor.imageUrl} 
                  alt={instructor.name} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-90"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{instructor.name}</h3>
                  <p className="text-brand-400 font-medium">{instructor.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {instructor.bio}
                </p>
                <div className="flex space-x-4 border-t border-gray-800 pt-4">
                  <a href="#" className="text-gray-500 hover:text-brand-400 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-brand-400 transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};