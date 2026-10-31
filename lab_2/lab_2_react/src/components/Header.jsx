import React from 'react';
import myPhoto from '../assets/cvphoto.jpg';

// Додаємо theme та toggleTheme у параметри компонента
function Header({ lang, setLang, theme, toggleTheme }) {
  return (
    <header className="bg-gradient-to-r from-[#1b0c30] via-[#32103c] to-[#4a154b] p-8 border-b-2 border-[#8e44ad] relative">

      <button
        onClick={toggleTheme}
        className="absolute top-4 left-4 p-2 rounded-lg bg-purple-900/40 hover:bg-purple-900/70 text-purple-200 transition-all z-10 text-sm"
      >
        {theme === 'dark' ? '☀️ Світла тема' : '🌙 Темна тема'}
      </button>

      <button
        onClick={() => setLang(lang === 'ua' ? 'en' : 'ua')}
        className="absolute top-4 right-4 bg-[#2d203b] hover:bg-[#4a3565] text-[#d7bde2] font-bold px-3 py-1 rounded-lg border border-[#bb8fce] transition-all cursor-pointer z-10"
      >
        {lang === 'ua' ? 'EN 🇬🇧' : 'UA 🇺🇦'}
      </button>

      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-6 mt-6 sm:mt-0">
        <img
          src={myPhoto}
          alt="Христина Анастасин"
          className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-xl border-2 border-[#bb8fce] shadow-lg shrink-0"
        />
        <div className="text-center sm:text-left w-full">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-white" style={{ fontFamily: '"Caveat", cursive' }}>
            {lang === 'ua' ? 'Моє резюме' : 'My Resume'}
          </h1>
          <p className="text-xl font-bold text-[#d7bde2]">
            {lang === 'ua' ? 'Христина Анастасин' : 'Khrystyna Anastasyn'}
          </p>
          <p className="text-purple-200/80 mt-1">
            {lang === 'ua' ? 'Студент, Веб-розробник' : 'Student, Web Developer'}
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;