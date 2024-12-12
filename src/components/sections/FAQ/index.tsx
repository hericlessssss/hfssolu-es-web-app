import React, { useState } from 'react';
import { FAQItem } from './FAQItem';

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
    <section className="py-16 bg-accent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Perguntas Frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}