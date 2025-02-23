"use client";
import React from "react";
import { useRouter } from "next/navigation";

function CTASection() {
  const router = useRouter();

  const handleTryFreeClick = () => {
    router.push("/login");
  };

  return (
    <section className="bg-blue-600 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 font-montserrat">
          Готовы улучшить процесс найма?
        </h2>
        <p className="text-xl mb-8 font-roboto">
          Присоединяйтесь к тысячам компаний, принимающих лучшие решения
          по найму с ИИ Рекрутером.
        </p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-roboto hover:bg-gray-100"
          onClick={handleTryFreeClick}
        >
          Попробовать бесплатно
        </button>
      </div>
    </section>
  );
}

export default CTASection;
