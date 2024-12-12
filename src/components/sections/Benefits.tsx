import React from 'react';
import { Percent, Clock, CreditCard, Headphones } from 'lucide-react';
import { Card } from '../ui/Card';

const benefits = [
  {
    icon: Percent,
    title: 'Taxas Atrativas',
    description: 'A partir de 1.3% ao mês'
  },
  {
    icon: Clock,
    title: 'Sem Burocracia',
    description: 'Processo 100% online'
  },
  {
    icon: CreditCard,
    title: 'Parcelas que Cabem no Bolso',
    description: 'Deduzidas diretamente da folha'
  },
  {
    icon: Headphones,
    title: 'Atendimento Especializado',
    description: 'Suporte dedicado para você'
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Por que escolher nosso consignado?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6">
              <benefit.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}