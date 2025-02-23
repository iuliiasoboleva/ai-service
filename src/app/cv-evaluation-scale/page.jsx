"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function CVEvaluationScale() {
    const [userInfo] = useState({
        email: "user@company.com",
        companyName: "Company Inc",
        subscription: "Pro Plan",
        nextBilling: "2025-02-01",
        projectLimit: 30,
        projectsUsed: 12,
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar userInfo={userInfo} />
            <main className="max-w-7xl mx-auto py-6 px-4 pt-20">
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h1 className="text-3xl font-bold mb-8 font-montserrat">
                        Шкала оценки резюме
                    </h1>
                    <div className="space-y-8">
                        <p className="text-gray-600 font-roboto">
                            Эта шкала предназначена для оценки резюме кандидатов по ключевым
                            критериям соответствия требованиям вакансии. Каждый пункт
                            описывает важный аспект, который необходимо учитывать при отборе
                            кандидатов.
                        </p>

                        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                            <p className="text-gray-700 font-roboto mb-4 text-sm sm:text-base">
                                Оценка производится по шкале от 0% до 100%, где:
                            </p>
                            <div className="space-y-3">
                                {[
                                    { range: "0-20%", color: "text-red-600", label: "Недостаточное соответствие", text: "Отсутствие необходимых навыков, опыта и квалификаций." },
                                    { range: "21-40%", color: "text-orange-600", label: "Низкое соответствие", text: "Базовые навыки и квалификации, но недостаток опыта." },
                                    { range: "41-70%", color: "text-yellow-600", label: "Умеренное соответствие", text: "Большинство требований выполнено, но есть пробелы." },
                                    { range: "70-74%", color: "text-yellow-500", label: "Хорошее соответствие", text: "Требования в основном выполнены, но есть недочеты." },
                                    { range: "75-79%", color: "text-lime-500", label: "Сильное соответствие", text: "Может внести вклад немедленно." },
                                    { range: "80-84%", color: "text-green-500", label: "Очень сильное соответствие", text: "Дополнительные компетенции." },
                                    { range: "85-89%", color: "text-green-600", label: "Отличное соответствие", text: "Практически идеальный кандидат." },
                                    { range: "90-94%", color: "text-blue-600", label: "Исключительное соответствие", text: "Значительный опыт и выдающиеся навыки." },
                                    { range: "95-100%", color: "text-purple-600", label: "Идеальное соответствие", text: "Идеальный кандидат с выдающимися квалификациями." }
                                ].map((item, index) => (
                                    <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center">
                                        <span className={`font-semibold ${item.color} min-w-[80px] sm:min-w-[140px] font-roboto text-sm sm:text-base`}>
                                            {item.range}
                                        </span>
                                        <span className="text-gray-700 font-roboto text-sm sm:text-base">
                                            <span className="font-bold">{item.label}:</span> {item.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <h2 className="text-3xl font-bold mb-8 font-montserrat text-gray-800">
                            Основные критерии оценки
                        </h2>
                        <div>
                            <h2 className="text-2xl font-bold mb-4 font-montserrat text-gray-800">
                                1. Соответствие опыта работы требованиям вакансии
                            </h2>
                            <p className="text-gray-600 mb-4 font-roboto">
                                Этот критерий оценивает, насколько опыт работы кандидата
                                соответствует конкретным потребностям и требованиям, указанным в
                                описании вакансии.
                            </p>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold mb-3 font-montserrat">
                                    Что оценивается:
                                </h3>
                                <ul className="list-disc pl-6 space-y-2 font-roboto text-gray-700">
                                    <li>Конкретные задачи и обязанности</li>
                                    <li>Уровень ответственности</li>
                                    <li>Продолжительность опыта</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4 font-montserrat text-gray-800">
                                2. Соответствие навыков требованиям вакансии
                            </h2>
                            <p className="text-gray-600 mb-4 font-roboto">
                                Этот критерий оценивает, насколько навыки, указанные кандидатом
                                в резюме, соответствуют навыкам, необходимым для успешного
                                выполнения работы.
                            </p>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold mb-3 font-montserrat">
                                    Что оценивается:
                                </h3>
                                <ul className="list-disc pl-6 space-y-2 font-roboto text-gray-700">
                                    <li>Наличие ключевых навыков</li>
                                    <li>Уровень владения навыками</li>
                                    <li>Применимость навыков</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4 font-montserrat text-gray-800">
                                3. Опыт работы в отрасли
                            </h2>
                            <p className="text-gray-600 mb-4 font-roboto">
                                Этот критерий оценивает, насколько прошлый опыт кандидата
                                соответствует конкретной отрасли и компании, в которой
                                предлагается работа.
                            </p>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold mb-3 font-montserrat">
                                    Что оценивается:
                                </h3>
                                <ul className="list-disc pl-6 space-y-2 font-roboto text-gray-700">
                                    <li>Знание отрасли</li>
                                    <li>Опыт работы в аналогичных компаниях</li>
                                    <li>Сетевые связи в отрасли</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 font-montserrat text-gray-800">
                                4. Образование и необходимые квалификации
                            </h2>
                            <p className="text-gray-600 mb-4 font-roboto">
                                Этот критерий сравнивает образование и квалификации кандидата с
                                требованиями, указанными в описании вакансии.
                            </p>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold mb-3 font-montserrat">
                                    Что оценивается:
                                </h3>
                                <ul className="list-disc pl-6 space-y-2 font-roboto text-gray-700">
                                    <li>Наличие необходимого образования</li>
                                    <li>Наличие необходимых сертификатов и лицензий</li>
                                    <li>Релевантность образования</li>
                                    <li>Дипломы и грамоты</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default CVEvaluationScale;
