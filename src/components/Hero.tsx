import React from 'react';
import { Calculator } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Empréstimo Consignado Simples, Rápido e Seguro!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Taxas reduzidas para servidores, aposentados e pensionistas do INSS. 
              Simule agora e descubra suas condições especiais.
            </p>
            <button className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg">
              <Calculator className="h-5 w-5 mr-2" />
              Quero Simular Meu Empréstimo
            </button>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
              alt="Pessoa feliz com documentos"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}