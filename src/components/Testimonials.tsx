import React from 'react';
import { Star } from 'lucide-react';

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
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          O que nossos clientes dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}