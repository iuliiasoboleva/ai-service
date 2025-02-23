"use client";
import React from "react";
import { useRouter } from "next/navigation";

function HeroSection() {
  const router = useRouter();

  const handleTryFreeClick = () => {
    router.push("/login");
  };

  return (
    <section className="pt-40 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-montserrat">
          Анализ резюме на основе ИИ для умного найма
        </h1>
        <p className="text-xl text-gray-600 mb-8 font-roboto max-w-2xl mx-auto">
          Подбирайте подходящих кандидатов с помощью продвинутого
          ИИ-анализа. Получайте мгновенные результаты и рейтинги на основе
          нашей системы оценки.
        </p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-roboto hover:bg-blue-700"
          onClick={handleTryFreeClick}
        >
          Попробовать бесплатно
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
