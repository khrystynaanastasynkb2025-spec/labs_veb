import myPhoto from '../assets/cvphoto.jpg';

function Header() {
  return (
    <header className="bg-gradient-to-r from-[#1b0c30] via-[#32103c] to-[#4a154b] p-8 border-b-2 border-[#8e44ad]">
      {/* Головний контейнер (фото + текст) */}
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-6">

        {/* Квадратне фото зліва */}
        <img
          src={myPhoto}
          alt="Христина Анастасин"
          className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-xl border-2 border-[#bb8fce] shadow-lg shrink-0"
        />

        {/* Текстова частина, вирівняна по центру */}
        <div className="text-center sm:text-left w-full">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-white" style={{ fontFamily: '"Caveat", cursive' }}>
            Моє резюме
          </h1>
          <p className="text-xl font-bold text-[#d7bde2]">Христина Анастасин</p>
          <p className="text-purple-200/80 mt-1">Студент, Веб-розробник</p>
        </div>

      </div>
    </header>
  );
}

export default Header;