import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Quem pode solicitar o empréstimo consignado?',
    answer: 'Servidores públicos, aposentados e pensionistas do INSS podem solicitar o empréstimo consignado.'
  },
  {
    question: 'Quais são as taxas de juros?',
    answer: 'Nossas taxas são competitivas, começando em 1.3% ao mês, variando de acordo com o seu perfil.'
  },
  {
    question: 'Como funciona o pagamento das parcelas?',
    answer: 'As parcelas são descontadas automaticamente do seu benefício ou folha de pagamento.'
  },
  {
    question: 'É necessário apresentar garantias?',
    answer: 'Não é necessário apresentar garantias, pois o desconto é feito diretamente na folha de pagamento.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Perguntas Frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}