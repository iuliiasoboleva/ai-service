"use client";
import React from "react";

function FeaturesSection() {
  return (
    <section id="features" className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">
          Почему ИИ Рекрутер?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-bolt text-blue-600 text-3xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2 font-montserrat">
              Мгновенный анализ
            </h3>
            <p className="text-gray-600 font-roboto">
              Получите полный анализ резюме за секунды, а не часы
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-chart-line text-blue-600 text-3xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2 font-montserrat">
              Умный рейтинг
            </h3>
            <p className="text-gray-600 font-roboto">
              Объективная система оценки кандидатов
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-check-circle text-blue-600 text-3xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2 font-montserrat">
              Точный подбор
            </h3>
            <p className="text-gray-600 font-roboto">
              Подбирайте кандидатов на позиции с высокой точностью
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
