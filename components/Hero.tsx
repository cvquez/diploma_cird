import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const externalLink = "https://www.cird.org.py/instituto/cursos/diplomado-en-inteligencia-artificial-aplicada-al-desarrollo-de-software/";

  return (
    <div id="hero" className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-900/30 border border-brand-500/30 text-brand-300 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-pulse"></span>
          Convocatoria Abierta 2026 • Inicia ABRIL 2026
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 max-w-5xl">
          Diplomado en Inteligencia Artificial <br className="hidden md:block" />
          <span className="gradient-text">Aplicada al Desarrollo de Software</span>
        </h1>
        
        <p className="mt-4 max-w-2xl text-xl text-gray-400 mb-10 leading-relaxed">
          Un programa intensivo del Instituto CIRD para dominar la IA Generativa, automatización y desarrollo de software moderno. Becas del 100% disponibles.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 md:text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(14,165,233,0.3)]"
          >
            Postular a Beca
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </a>
          <a href="#syllabus" className="inline-flex items-center justify-center px-8 py-4 border border-gray-700 text-base font-medium rounded-lg text-gray-300 bg-white/5 hover:bg-white/10 md:text-lg backdrop-blur-sm transition-all">
            Ver Plan de Estudios
            <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
          </a>
        </div>

        {/* Stats Strip */}
        <div className="mt-20 grid grid-cols-3 gap-8 md:grid-cols-3 border-t border-white/10 pt-10 w-full max-w-5xl">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white">5</span>
            <span className="text-sm text-gray-500 uppercase tracking-wider">Módulos</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white">96h</span>
            <span className="text-sm text-gray-500 uppercase tracking-wider">Carga Horaria</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white">100%</span>
            <span className="text-sm text-gray-500 uppercase tracking-wider">Online</span>
          </div>
        </div>
      </div>
    </div>
  );
};