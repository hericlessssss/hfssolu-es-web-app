import React from 'react';
import { Calculator } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <div className="bg-accent pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Empréstimo Consignado Simples, Rápido e Seguro!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Taxas reduzidas para servidores, aposentados e pensionistas do INSS. 
              Simule agora e descubra suas condições especiais.
            </p>
            <Button icon={Calculator}>
              Quero Simular Meu Empréstimo
            </Button>
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