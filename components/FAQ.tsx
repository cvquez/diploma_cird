import React from 'react';
import { FAQS } from '../constants';

export const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-dark-900 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-12">
          Preguntas Frecuentes
        </h2>
        
        <div className="space-y-8">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-dark-800 p-6 rounded-lg border border-gray-700/50">
              <h3 className="text-lg font-medium text-white mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};