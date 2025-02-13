"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

function Navbar({ userInfo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  // Закрытие меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Функция разлогина
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Логотип */}
          <div
            className="text-2xl font-bold text-blue-600 font-montserrat cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ИИ Рекрутер
          </div>

          {/* Десктопное меню */}
          <div className="hidden md:flex items-center space-x-6">
            <span className="font-roboto text-gray-700">
              <i className="fas fa-user-circle mr-2"></i>
              {userInfo.email}
            </span>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={handleLogout}
            >
              Выход
            </button>
          </div>

          {/* Бургер-меню (мобильное) */}
          <div
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-8 h-6 flex flex-col justify-between relative z-50">
              {/* Верхняя линия */}
              <span
                className={`block w-full h-1 bg-black transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              {/* Средняя линия (скрывается при открытии) */}
              <span
                className={`block w-full h-1 bg-black transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              {/* Нижняя линия */}
              <span
                className={`block w-full h-1 bg-black transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-6 space-y-4"
        >
          <span className="font-roboto text-gray-700">
            <i className="fas fa-user-circle mr-2"></i>
            {userInfo.email}
          </span>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            onClick={handleLogout}
          >
            Выход
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
