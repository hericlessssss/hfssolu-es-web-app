import React from 'react';
import { Calculator } from 'lucide-react';
import { Button } from '../../ui/Button';

interface SimulatorFormProps {
  formData: {
    income: string;
    amount: string;
    installments: string;
  };
  onSubmit: (e: React.FormEvent) => void;
  onChange: (field: string, value: string) => void;
}

export function SimulatorForm({ formData, onSubmit, onChange }: SimulatorFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Renda mensal
        </label>
        <input
          type="number"
          className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary"
          value={formData.income}
          onChange={(e) => onChange('income', e.target.value)}
          placeholder="R$ 0,00"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Valor desejado
        </label>
        <input
          type="number"
          className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary"
          value={formData.amount}
          onChange={(e) => onChange('amount', e.target.value)}
          placeholder="R$ 0,00"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Número de parcelas
        </label>
        <select
          className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary"
          value={formData.installments}
          onChange={(e) => onChange('installments', e.target.value)}
        >
          <option value="">Selecione</option>
          {[12, 24, 36, 48, 60, 72, 84].map((months) => (
            <option key={months} value={months}>{months}x</option>
          ))}
        </select>
      </div>
      <Button type="submit" icon={Calculator} className="w-full">
        Calcular Parcelas
      </Button>
    </form>
  );
}