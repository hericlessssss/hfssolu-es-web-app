import React from 'react';
import { Calculator } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Logo maior */}
            <img
              src="https://i.imgur.com/OwLoybs.jpeg"
              alt="Logo"
              className="h-12" // Logo maior
            />
            <span className="ml-2 text-xl font-bold text-foreground">Soluções Financeiras</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#simulator" className="text-muted-foreground hover:text-foreground transition-colors">
              Simulação
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
              Benefícios
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Depoimentos
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              <Calculator className="h-4 w-4 mr-2" />
              Simule agora
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
