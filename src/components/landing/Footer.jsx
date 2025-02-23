"use client";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold mb-4 md:mb-0 font-montserrat">
          ИИ Рекрутер
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
          <a href="#" className="hover:text-blue-400 font-roboto">
            Политика конфиденциальности
          </a>
          <a href="#" className="hover:text-blue-400 font-roboto">
            Условия использования
          </a>
          <a href="#" className="hover:text-blue-400 font-roboto">
            Контакты
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
