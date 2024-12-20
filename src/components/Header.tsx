import React from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-dark-950 border-b border-dark-800/20">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 
                        bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Unit Converter Pro
          </h1>
          
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Home
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                About
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Contact
              </a>
            </nav>
            
            <button className="md:hidden p-2 rounded-full hover:bg-dark-800/50 transition-colors duration-200">
              <Menu className="w-5 h-5 text-gray-400 hover:text-primary-400" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}