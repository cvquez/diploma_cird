import React from 'react';
import { Check, Star } from 'lucide-react';
import { PRICING_TIERS } from '../constants';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 pointer-events-none opacity-20">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-500 font-semibold tracking-wide uppercase">Inversión</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Elige tu plan de estudio
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Opciones flexibles diseñadas para estudiantes, profesionales y empresas.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
          {PRICING_TIERS.map((tier, index) => (
            <div 
              key={tier.name}
              className={`relative flex flex-col rounded-2xl p-8 shadow-xl ${
                tier.isRecommended 
                  ? 'bg-dark-800 border-2 border-brand-500 transform lg:-translate-y-4' 
                  : 'bg-dark-900 border border-gray-800'
              }`}
            >
              {tier.isRecommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-flex items-center gap-1 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    <Star size={12} fill="currentColor" /> Recomendado
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-300">{tier.name}</h3>
                <div className="mt-4 flex items-baseline text-white">
                  <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
                  {tier.price !== 'Consultar' && <span className="ml-1 text-xl font-medium text-gray-500">/total</span>}
                </div>
              </div>

              <div className="flex-1">
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-brand-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-400">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="#"
                  className={`block w-full text-center px-6 py-3 border border-transparent rounded-lg text-base font-medium transition-all ${
                    tier.isRecommended
                      ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-500/30'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {tier.price === 'Consultar' ? 'Contactar Ventas' : 'Inscribirse Ahora'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};