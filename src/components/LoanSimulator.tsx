import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

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

  return (
    <section id="simulator" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Simule seu Empréstimo
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Renda mensal
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.income}
                onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                placeholder="R$ 0,00"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Valor desejado
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                placeholder="R$ 0,00"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Número de parcelas
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.installments}
                onChange={(e) => setFormData({ ...formData, installments: e.target.value })}
              >
                <option value="">Selecione</option>
                {[12, 24, 36, 48, 60, 72, 84].map((months) => (
                  <option key={months} value={months}>{months}x</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Calcular Parcelas
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
