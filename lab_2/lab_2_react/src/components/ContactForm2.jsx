import React, { useState, useEffect } from 'react';

function ContactForm2({ lang }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer); // Очищення таймера при розмонтуванні
  }, []);

  if (!isOpen) return null; // Якщо час не минув, форма не відображається як модалка

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
      <div className="bg-[#1c1527] border border-[#33234a] p-6 rounded-xl max-w-md w-full relative shadow-xl text-purple-100">
        <h2 className="text-xl font-bold text-[#d7bde2] mb-4">
          {lang === 'ua' ? 'Зворотний зв\'язок' : 'Feedback'}
        </h2>

        <form action="https://formspree.io/f/xgaalqvz" method="POST" className="flex flex-col gap-4">
          <div>
            <label className="block text-sm mb-1 text-purple-200">Ім'я:</label>
            <input type="text" name="name" required className="w-full p-2.5 bg-[#110c17] border border-[#4a3565] text-white rounded-lg focus:outline-none focus:border-[#bb8fce]" />
          </div>
          <div>
            <label className="block text-sm mb-1 text-purple-200">Email:</label>
            <input type="email" name="email" required className="w-full p-2.5 bg-[#110c17] border border-[#4a3565] text-white rounded-lg focus:outline-none focus:border-[#bb8fce]" />
          </div>
          <div>
            <label className="block text-sm mb-1 text-purple-200">Телефон:</label>
            <input type="tel" name="phone" required className="w-full p-2.5 bg-[#110c17] border border-[#4a3565] text-white rounded-lg focus:outline-none focus:border-[#bb8fce]" />
          </div>
          <div>
            <label className="block text-sm mb-1 text-purple-200">Повідомлення:</label>
            <textarea name="message" required className="w-full p-2.5 bg-[#110c17] border border-[#4a3565] text-white rounded-lg focus:outline-none focus:border-[#bb8fce]" rows="3"></textarea>
          </div>

          <button type="submit" className="w-full py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg transition-all">
            {lang === 'ua' ? 'Надіслати' : 'Submit'}
          </button>
        </form>

        <button
          onClick={() => setIsOpen(false)}
          className="mt-3 w-full py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-lg transition-all text-sm"
        >
          {lang === 'ua' ? 'Закрити' : 'Close'}
        </button>
      </div>
    </div>
  );
}

export default ContactForm2;