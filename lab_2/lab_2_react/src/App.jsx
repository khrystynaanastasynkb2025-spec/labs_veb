import React, { useState } from 'react';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Education from './components/Education';
import Languages from './components/Languages';
import Experience from './components/Experience';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState('ua');

  return (
    <div className="min-h-screen bg-[#0c0910] text-[#e2d9ec] p-4 sm:p-8 font-sans">
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet" />

      <div className="max-w-4xl mx-auto bg-[#15101d] border border-[#2d203b] rounded-2xl shadow-2xl shadow-purple-950/30 overflow-hidden">

        <Header lang={lang} setLang={setLang} />

        <main className="p-6 sm:p-8 flex flex-col gap-6">
          <Aboutme lang={lang} />

          {/* Освіта та Мови поруч у другому рядку */}
          <div className="flex flex-col md:flex-row gap-6">
            <Education lang={lang} />
            <Languages lang={lang} />
          </div>

          {/* Навички нижче під Освітою та Мовами */}
          <Experience lang={lang} />

          {/* Форма зворотного зв'язку */}
          <ContactForm lang={lang} />
        </main>

        <Footer />

      </div>
    </div>
  );
}

export default App;