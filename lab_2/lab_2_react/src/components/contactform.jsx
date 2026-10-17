function ContactForm({ lang }) {
  return (
    <section className="bg-[#1c1527] border border-[#33234a] border-l-4 border-l-[#9b59b6] p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#af7ac5]">
      <h2 className="text-xl font-bold text-[#d7bde2] mb-3">
        {lang === 'ua' ? 'Контактна форма' : 'Contact Form'}
      </h2>
      <label htmlFor="user-input" className="block text-sm mb-2 text-purple-200">
        {lang === 'ua' ? 'Введіть текст:' : 'Enter text:'}
      </label>
      <input
        type="text"
        id="user-input"
        placeholder={lang === 'ua' ? 'Перевірка фокусу Tailwind...' : 'Tailwind focus check...'}
        className="w-full p-2.5 bg-[#110c17] border border-[#4a3565] text-white rounded-lg focus:outline-none focus:border-[#bb8fce] focus:ring-2 focus:ring-[#bb8fce]/40 transition-all"
      />
    </section>
  );
}

export default ContactForm;