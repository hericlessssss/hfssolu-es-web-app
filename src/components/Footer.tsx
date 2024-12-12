import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">CrediSeguro</h3>
            <p className="text-sm">
              Soluções financeiras seguras e transparentes para você realizar seus objetivos.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>0800 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>contato@crediseguro.com.br</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white">Trabalhe Conosco</a></li>
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
            © {new Date().getFullYear()} CrediSeguro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}