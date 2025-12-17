import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgramDetails } from './components/ProgramDetails';
import { Syllabus } from './components/Syllabus';
import { BasesConditions } from './components/BasesConditions';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProgramDetails />
        <Syllabus />
        <BasesConditions />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;