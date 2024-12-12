import React, { useState } from 'react';
import { Card } from '../../ui/Card';
import { SimulatorForm } from './SimulatorForm';

export function LoanSimulator() {
  const [formData, setFormData] = useState({
    income: '',
    amount: '',
    installments: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation logic would go here
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="simulator" className="py-16 bg-accent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Simule seu Empréstimo
          </h2>
          <SimulatorForm
            formData={formData}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
        </Card>
      </div>
    </section>
  );
}