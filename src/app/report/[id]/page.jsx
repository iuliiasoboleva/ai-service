"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

function Report() {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [data, setData] = useState([]);

    const [userInfo] = useState({
        email: "user@company.com",
        companyName: "Company Inc",
        subscription: "Pro Plan",
        nextBilling: "2025-02-01",
        projectLimit: 30,
        projectsUsed: 12,
    });

    useEffect(() => {
        const storedProject = JSON.parse(localStorage.getItem("selectedProject"));

        if (storedProject && storedProject.id === id) {
            setProject(storedProject);
            setData(storedProject.reports || []);
        }
    }, [id]);

    if (!project) {
        return <p className="text-center text-gray-600 font-roboto">Загрузка отчета...</p>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar userInfo={userInfo} />
            <main className="max-w-7xl mx-auto py-6 px-4 pt-20">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold font-roboto text-gray-800">
                            Отчет по проекту "{project.name}" - {new Date().toLocaleDateString()}
                        </h2>
                        <p className="text-gray-600 font-roboto">ID проекта: {id}</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase font-roboto w-40">
                                        Файл
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase font-roboto">
                                        Итоговый балл
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase font-roboto">
                                        Общий комментарий
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase font-roboto">
                                        Рекомендация
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase font-roboto">
                                        Соответствие опыта
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase font-roboto">
                                        Соответствие навыков
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase font-roboto">
                                        Опыт в отрасли
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase font-roboto">
                                        Образование и квалификация
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <a
                                                href={`/downloads/${row.file}`} 
                                                className="text-blue-600 hover:underline"
                                                download
                                            >
                                                {row.file}
                                            </a>
                                        </td>
                                        <td className="px-4 py-4">{row.overallScore}</td>
                                        <td className="px-4 py-4 max-w-md">{row.generalComment}</td>
                                        <td className="px-4 py-4">{row.fitPosition}</td>
                                        <td className="px-4 py-4">{row.relevanceExperience}</td>
                                        <td className="px-4 py-4">{row.skillsMatch}</td>
                                        <td className="px-4 py-4">{row.industryExperience}</td>
                                        <td className="px-4 py-4">{row.culturalFit}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Report;
