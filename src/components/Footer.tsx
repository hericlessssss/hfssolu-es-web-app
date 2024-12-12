import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Seção 1: Descrição */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-4">HFS</h3>
            <p className="text-sm text-gray-400">
              Soluções financeiras seguras e transparentes para você realizar seus objetivos com facilidade e confiança.
            </p>
          </div>

          {/* Seção 2: Contato */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Phone className="h-5 w-5 mr-3 text-white" />
                <span>0800 123 4567</span>
              </li>
              <li className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5 mr-3 text-white" />
                <span>contato@hfssolucoes.com.br</span>
              </li>
              <li className="flex items-center text-gray-400 hover:text-white transition-colors">
                <MapPin className="h-5 w-5 mr-3 text-white" />
                <span>Brasília, DF</span>
              </li>
            </ul>
          </div>

          {/* Seção 3: Links Úteis */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          {/* Seção 4: Redes Sociais */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/hfs.solucoesfinanceiras/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} HFS Soluções Financeiras. Todos os direitos reservados. Criado por Labora.
          </p>
        </div>
      </div>
    </footer>
  );
}
