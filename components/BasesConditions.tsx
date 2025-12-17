import React from 'react';
import { FileDown, Check, Info } from 'lucide-react';

export const BasesConditions: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-dark-900 to-dark-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Document Container */}
        <div className="bg-dark-900 border border-gray-700 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:border-brand-500/30 transition-colors duration-300">
            
            {/* Decoration Icon */}
            <div className="absolute -top-10 -right-10 text-gray-800 opacity-20 group-hover:opacity-30 transition-opacity">
                <FileDown size={200} />
            </div>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 relative z-10">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Guía de Bases y Condiciones (GBC)
                    </h2>
                    <p className="text-brand-400 font-medium uppercase tracking-wider text-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                        Convocatoria 2025: Diplomados TIC
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-sm font-semibold">
                        Becas 100% Cobertura
                    </span>
                </div>
            </div>

            <div className="space-y-6 text-gray-300 relative z-10">
                <p className="leading-relaxed">
                    El Ministerio de Tecnologías de la Información y Comunicación (MITIC) pone a disposición 
                    <strong> 600 becas completas</strong> para la certificación de competencias digitales avanzadas. 
                    El programa cubre la totalidad del costo del diplomado (hasta 3.500.000 Gs por persona).
                </p>

                <div className="bg-dark-800/80 rounded-xl p-6 border border-gray-700 backdrop-blur-sm">
                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <Info size={20} className="text-brand-500" />
                        Requisitos de Elegibilidad
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-brand-900/50 rounded p-0.5">
                                <Check size={14} className="text-brand-400" />
                            </div>
                            <span className="text-sm md:text-base">Ser de nacionalidad paraguaya o residente permanente.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-brand-900/50 rounded p-0.5">
                                <Check size={14} className="text-brand-400" />
                            </div>
                            <span className="text-sm md:text-base">Tener mayoría de edad (18 años cumplidos).</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-brand-900/50 rounded p-0.5">
                                <Check size={14} className="text-brand-400" />
                            </div>
                            <span className="text-sm md:text-base">
                                Ser egresado del <strong>Bachillerato Técnico en Informática (BTI)</strong> o estudiante/egresado universitario de carreras con énfasis en TIC.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-brand-900/50 rounded p-0.5">
                                <Check size={14} className="text-brand-400" />
                            </div>
                            <span className="text-sm md:text-base">No ser funcionario activo del MITIC ni tener deudas pendientes con programas anteriores (BECAL, CONACYT).</span>
                        </li>
                    </ul>
                </div>

                <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <p className="text-xs text-gray-500 italic max-w-md">
                        * Al postularse, el interesado acepta los términos establecidos en la GBC. Documento oficial del Programa de Apoyo a la Agenda Digital.
                    </p>
                    
                    <a 
                        href="public/GBC_Diplomado_TIC_2025.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-white text-dark-900 hover:bg-brand-50 px-6 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-brand-500/10 hover:-translate-y-0.5"
                    >
                        <FileDown size={20} />
                        Descargar GBC (PDF)
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};