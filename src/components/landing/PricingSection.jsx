"use client";
import React from "react";

const pricingPlans = [
  {
    id: "basic",
    name: "Базовый",
    price: "2500₽",
    period: "/месяц",
    features: [
      "10 проектов в месяц",
      "Базовый анализ резюме",
      "Экспорт в Excel",
      "Поддержка по email",
    ],
  },
  {
    id: "business",
    name: "Бизнес",
    price: "5000₽",
    period: "/месяц",
    features: [
      "30 проектов в месяц",
      "Расширенный анализ резюме",
      "Экспорт в Excel",
      "Приоритетная поддержка",
      "Пакетная обработка резюме",
    ],
  },
];

function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">
          Тарифы
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold text-center mb-4 font-montserrat">
                {plan.name}
              </h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold font-montserrat">
                  {plan.price}
                </span>
                <span className="text-gray-600 font-roboto">
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center font-roboto">
                    <i className="fas fa-check text-green-500 mr-2"></i> {feature}
                  </li>
                ))}
              </ul>
              <a href="#" target="_self" className="mt-auto">
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-roboto">
                  Выбрать план
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
