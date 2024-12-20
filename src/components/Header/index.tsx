import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-dark-950 border-b border-dark-800/20">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo />
          
          <div className="flex items-center space-x-4">
            <NavLinks className="hidden md:flex space-x-6" />
            
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-full hover:bg-dark-800/50 transition-colors duration-200"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 text-gray-400 hover:text-primary-400" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}