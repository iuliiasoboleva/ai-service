"use client";
import React from "react";

function ProjectList({ projects, handleViewProject, handleDownloadReport, isDownloading }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Заголовок и кнопка "Новый проект" */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-2xl font-bold font-montserrat mb-4 md:mb-0">Мои проекты</h2>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-roboto w-full md:w-auto"
        >
          <i className="fas fa-plus mr-2"></i>
          Новый проект
        </button>
      </div>

      {/* Таблица проектов */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-roboto">
                Название проекта (Позиция)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-roboto">
                Загружено резюме
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-roboto">
                Дата создания
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-roboto">
                Статус
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider font-roboto">
                Действия
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((project, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap font-roboto">
                  {project.name} ({project.position_name})
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-roboto">
                  {project.cv_count || 0}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-roboto">
                  {new Date(project.created_at).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-roboto">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      project.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {project.status === "completed" ? "Завершен" : "Анализ"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                  {project.status === "completed" ? (
                    <>
                      <button
                        onClick={() => handleViewProject(project)}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <i className="fas fa-eye"></i>
                      </button>
                      <button
                        onClick={() => handleDownloadReport(project)}
                        disabled={isDownloading}
                        className={`text-green-600 hover:text-green-700 ${
                          isDownloading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        <i
                          className={`fas ${
                            isDownloading ? "fa-spinner fa-spin" : "fa-download"
                          }`}
                        ></i>
                      </button>
                    </>
                  ) : (
                    <span className="text-gray-400">
                      <i className="fas fa-spinner fa-spin"></i>
                    </span>
                  )}
                  <button className="text-red-600 hover:text-red-700">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
            {projects.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-4 text-center text-gray-500 font-roboto"
                >
                  Проектов пока нет. Нажмите "Новый проект", чтобы начать.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectList;
