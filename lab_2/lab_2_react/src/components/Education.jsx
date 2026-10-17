function Education({ lang }) {
  return (
    <section className="flex-1 bg-[#1c1527] border border-[#33234a] border-l-4 border-l-[#9b59b6] p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#af7ac5] hover:shadow-lg hover:shadow-purple-900/20">
      <h2 className="text-xl font-bold text-[#d7bde2] mb-3">
        {lang === 'ua' ? 'Освіта' : 'Education'}
      </h2>
      <ul className="list-disc list-inside space-y-2 text-[#e2d9ec]">
        <li>{lang === 'ua' ? 'Університет: НУ "Львівська політехніка"' : 'University: Lviv Polytechnic National University'}</li>
        <li>{lang === 'ua' ? 'Спеціальність: "Кібербезпека"' : 'Major: "Cybersecurity"'}</li>
      </ul>
    </section>
  );
}

export default Education;