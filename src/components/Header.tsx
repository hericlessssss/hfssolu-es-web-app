import React, { useState } from 'react';
import { Calculator, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Menu de navegação para telas pequenas, alinhado à esquerda */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Logo no centro para telas pequenas e à esquerda para telas grandes */}
          <div className="flex justify-center items-center w-full sm:w-auto">
            <img
              src="https://i.imgur.com/OwLoybs.jpeg"
              alt="Logo"
              className="h-12 sm:h-10" // Logo ajustável em telas menores
            />
            <span className="ml-2 text-xl font-bold text-foreground hidden sm:block">
              Soluções Financeiras
            </span>
          </div>

          {/* Menu de navegação para telas médias e maiores */}
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

          {/* Botão "Simule agora" visível apenas em telas grandes */}
          <div className="flex items-center space-x-4 hidden md:flex">
            <button className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              <Calculator className="h-4 w-4 mr-2" />
              Simule agora
            </button>
          </div>
        </div>
      </div>

      {/* Menu lateral para telas pequenas */}
      {isMenuOpen && (
        <div className="md:hidden bg-background absolute top-16 left-0 right-0 p-4 space-y-4 shadow-lg">
          <a href="#simulator" className="block text-muted-foreground hover:text-foreground transition-colors">
            Simulação
          </a>
          <a href="#benefits" className="block text-muted-foreground hover:text-foreground transition-colors">
            Benefícios
          </a>
          <a href="#testimonials" className="block text-muted-foreground hover:text-foreground transition-colors">
            Depoimentos
          </a>
          <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">
            Contato
          </a>
          {/* Botão "Simule agora" dentro do menu lateral */}
          <button className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            <Calculator className="h-4 w-4 mr-2" />
            Simule agora
          </button>
        </div>
      )}
    </header>
  );
}
