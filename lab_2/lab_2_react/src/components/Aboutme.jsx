function Aboutme({ lang }) {
  return (
    <section className="bg-[#1c1527] border border-[#33234a] border-l-4 border-l-[#9b59b6] p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#af7ac5] hover:shadow-lg hover:shadow-purple-900/20">
      <h2 className="text-xl font-bold text-[#d7bde2] mb-3">
        {lang === 'ua' ? 'Про мене' : 'About Me'}
      </h2>
      <p className="leading-relaxed text-[#e2d9ec]">
        {lang === 'ua'
          ? 'Захоплююся програмуванням та дизайном інтерфейсів. Постійно вдосконалюю свої навички, вирішую практичні завдання. Вивчаю Python, C#, HTML та CSS. Зацікавлена у розвитку в сфері Веб-розробки.'
          : 'Passionate about programming and UI design. Constantly improving my skills and solving practical tasks. Learning Python, C#, HTML, and CSS. Interested in web development growth.'
        }
      </p>
    </section>
  );
}

export default Aboutme;