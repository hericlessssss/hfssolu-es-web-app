import React from 'react';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Aposentada',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df',
    quote: 'Consegui resolver minhas pendências com facilidade e confiança!'
  },
  {
    name: 'João Santos',
    role: 'Servidor Público',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    quote: 'As taxas foram as melhores que encontrei no mercado.'
  },
  {
    name: 'Ana Oliveira',
    role: 'Pensionista',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    quote: 'Atendimento excepcional e processo muito rápido.'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          O que nossos clientes dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}