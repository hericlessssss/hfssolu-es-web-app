import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function ContactInfo() {
  return (
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
  );
}