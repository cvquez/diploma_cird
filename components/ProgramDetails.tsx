import React from 'react';
import { Target, Lightbulb, Users, Award } from 'lucide-react';

export const ProgramDetails: React.FC = () => {
  return (
    <section id="program" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-brand-500 font-semibold tracking-wide uppercase">Sobre el Programa</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            ¿Por qué elegir este Diplomado?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Nuestro enfoque combina teoría rigurosa con práctica intensiva, preparando a los estudiantes para los desafíos reales del mercado tecnológico actual.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {[
              {
                name: 'Aprendizaje Práctico',
                description: 'Desarrolla modelos reales desde la primera semana. No solo teoría, sino código que funciona.',
                icon: Lightbulb,
              },
              {
                name: 'Mentores Expertos',
                description: 'Clases impartidas por profesionales que lideran proyectos de IA en grandes empresas tecnológicas.',
                icon: Users,
              },
              {
                name: 'Certificación Profesional',
                description: 'Obtén un diploma que avala tus conocimientos y enriquece tu perfil profesional ante reclutadores.',
                icon: Award,
              },
              {
                name: 'Enfoque de Negocio',
                description: 'Aprende no solo a programar, sino a identificar dónde la IA aporta valor real a las organizaciones.',
                icon: Target,
              },
            ].map((feature) => (
              <div key={feature.name} className="relative group">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white group-hover:bg-brand-400 transition-colors">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};