import React from 'react';
import { ContactInfo } from './ContactInfo';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">HFS Soluções</h3>
            <p className="text-sm">
              Soluções financeiras seguras e transparentes para você realizar seus objetivos.
            </p>
          </div>
          <ContactInfo />
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Certificações</h3>
            <div className="flex space-x-4">
              <div className="bg-white p-2 rounded">
                <img
                  src="https://images.unsplash.com/photo-1560472355-536de3962603"
                  alt="Certificação"
                  className="h-8"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} HFS Soluções. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}