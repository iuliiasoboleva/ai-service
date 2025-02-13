"use client";
import React from "react";

function QuickActions({ setShowNewProject }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2 font-montserrat text-gray-800">
        Быстрые действия
      </h3>
      <button
        onClick={() => setShowNewProject(true)}
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-roboto mb-2"
      >
        <i className="fas fa-plus mr-2"></i>
        Новый проект
      </button>
      <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 font-roboto">
        <i className="fas fa-cog mr-2"></i>
        Настройки
      </button>
    </div>
  );
}

export default QuickActions;
