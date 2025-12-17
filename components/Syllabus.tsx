import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { COURSE_MODULES } from '../constants';

export const Syllabus: React.FC = () => {
  const [openModule, setOpenModule] = useState<number | null>(1);

  const toggleModule = (id: number) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <section id="syllabus" className="py-20 bg-dark-900 relative scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-500 font-semibold tracking-wide uppercase">Plan de Estudios</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Estructura Académica
          </p>
          <p className="mt-4 text-xl text-gray-400">
            Un recorrido completo desde los fundamentos hasta las últimas tendencias en IA Generativa.
          </p>
        </div>

        <div className="space-y-4">
          {COURSE_MODULES.map((module) => (
            <div 
              key={module.id} 
              className={`border rounded-lg transition-all duration-300 ${openModule === module.id ? 'border-brand-500/50 bg-brand-900/10' : 'border-gray-800 bg-dark-800 hover:border-gray-600'}`}
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
                onClick={() => toggleModule(module.id)}
              >
                <div className="flex items-center gap-4">
                  <div className={`flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full ${openModule === module.id ? 'bg-brand-500 text-white' : 'bg-gray-700 text-gray-400'}`}>
                    <span className="font-bold">{module.id}</span>
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium ${openModule === module.id ? 'text-white' : 'text-gray-300'}`}>
                      {module.title}
                    </h3>
                    <span className="text-sm text-gray-500">Duración: {module.duration}</span>
                  </div>
                </div>
                {openModule === module.id ? (
                  <ChevronUp className="h-5 w-5 text-brand-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openModule === module.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pl-20">
                  <ul className="space-y-3">
                    {module.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start text-gray-400">
                        <BookOpen className="h-5 w-5 text-brand-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};