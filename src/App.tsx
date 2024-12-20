import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Converter from './components/Converter';

function App() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Converter />
      </main>

      <Footer />
    </div>
  );
}

export default App;