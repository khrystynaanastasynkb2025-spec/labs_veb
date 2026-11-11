import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Education from './components/Education';
import Languages from './components/languages';
import Experience from './components/Experience';
import ContactForm from './components/contactForm';
import Footer from './components/Footer';
import Reviews from "./components/Reviews";
import ContactForm2 from "./components/ContactForm2";

function App() {
  const [lang, setLang] = useState('ua');
  const [theme, setTheme] = useState('dark'); // Початковий стан

  // Автоматичне визначення теми за часом при завантаженні
  useEffect(() => {
    const currentHour = new Date().getHours();
    // Денна тема (світла) з 07:00 до 21:00, нічна (темна) — в інший час
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  // Функція ручного перемикання теми кнопкою
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    /* Застосовуємо клас темної теми динамічно до головної обгортки */
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0c0910] text-[#e2d9ec] dark-mode' : 'bg-gray-100 text-gray-900'}`}>
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet" />

      <div className={`max-w-4xl mx-auto border rounded-2xl shadow-2xl overflow-hidden ${theme === 'dark' ? 'bg-[#15101d] border-[#2d203b]' : 'bg-white border-gray-300'}`}>

        {/* Передаємо поточну тему та функцію перемикання в Header */}
        <Header lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} />

        <main className="p-6 sm:p-8 flex flex-col gap-6">
          <Aboutme lang={lang} />

          <div className="flex flex-col md:flex-row gap-6">
            <Education lang={lang} />
            <Languages lang={lang} />
          </div>

          <Experience lang={lang} />
          <ContactForm lang={lang} />
        </main>

        <Reviews />
        <Footer />

        <ContactForm2 lang={lang} />

      </div>
    </div>
  );
}

export default App;
