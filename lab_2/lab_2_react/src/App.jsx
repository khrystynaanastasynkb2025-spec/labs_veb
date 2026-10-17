import React from 'react';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Education from './components/Education';
import Experience from './components/Experience';
import ContactForm from './components/ContactForm'; // Імпортуємо форму
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0c0910] text-[#e2d9ec] p-4 sm:p-8 font-sans">
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet" />

      <div className="max-w-4xl mx-auto bg-[#15101d] border border-[#2d203b] rounded-2xl shadow-2xl shadow-purple-950/30 overflow-hidden">

        <Header />

        <main className="p-6 sm:p-8 flex flex-col gap-6">
          <Aboutme />

          {/* Блоки Освіта та Досвід стоять ПОРУЧ */}
          <div className="flex flex-col md:flex-row gap-6">
            <Education />
            <Experience />
          </div>

          {/* Контактна форма йде знизу на повну ширину */}
          <ContactForm />
        </main>

        <Footer />

      </div>
    </div>
  );
}

export default App;