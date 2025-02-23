"use client";
import React from "react";

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">
          Как это работает
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2 font-montserrat">
              Загрузите резюме
            </h3>
            <p className="text-gray-600 font-roboto">
              Загрузите резюме кандидатов и описания вакансий
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2 font-montserrat">
              ИИ-анализ
            </h3>
            <p className="text-gray-600 font-roboto">
              Наш ИИ анализирует и сопоставляет квалификации
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2 font-montserrat">
              Получите результаты
            </h3>
            <p className="text-gray-600 font-roboto">
              Получите детальный анализ и рейтинги
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
