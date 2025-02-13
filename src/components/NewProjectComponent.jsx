"use client";
import React, { useState, useRef, useEffect } from "react";

function NewProjectComponent({ onClose, onSubmit, isOpen = false }) {
  const [projectName, setProjectName] = useState("");
  const [positionFile, setPositionFile] = useState(null);
  const [cvFiles, setCvFiles] = useState([]);
  const [error, setError] = useState("");
  const [updateStatus, setUpdateStatus] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const modalRef = useRef(null);

  // Закрытие попапа при клике вне окна
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-8 max-w-md w-full relative shadow-lg"
      >
        {/* Кнопка закрытия (крестик) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center"
        >
          <span className="text-2xl font-bold">&times;</span>
        </button>

        <h2 className="text-2xl font-bold mb-6 font-montserrat text-center">
          Создать новый проект
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2 font-roboto">
              Название проекта
            </label>
            <input
              type="text"
              maxLength="100"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Введите название проекта"
              required
            />
            <span className="text-sm text-gray-500">{projectName.length}/100</span>
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-roboto">
              Описание позиции
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setPositionFile(e.target.files[0])}
                className="hidden"
                id="position-file"
                required
              />
              <label
                htmlFor="position-file"
                className="flex flex-col items-center cursor-pointer"
              >
                <i className="fas fa-file-upload text-2xl text-blue-600 mb-2"></i>
                <span className="text-gray-600">
                  {positionFile ? positionFile.name : "Загрузить описание позиции"}
                </span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-roboto">
              Резюме кандидатов
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                multiple
                onChange={(e) => setCvFiles(Array.from(e.target.files))}
                className="hidden"
                id="cv-files"
                required
              />
              <label
                htmlFor="cv-files"
                className="flex flex-col items-center cursor-pointer"
              >
                <i className="fas fa-file-upload text-2xl text-blue-600 mb-2"></i>
                <span className="text-gray-600">
                  {cvFiles.length > 0 ? `Выбрано файлов: ${cvFiles.length}` : "Загрузить резюме кандидатов"}
                </span>
              </label>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm">
              <i className="fas fa-exclamation-circle mr-2"></i>
              {error}
            </p>
          )}

          {updateStatus && (
            <div className="space-y-2">
              <p className="text-blue-600 text-sm">
                <i className="fas fa-spinner fa-spin mr-2"></i>
                {updateStatus}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-roboto"
            style={{ whiteSpace: 'break-spaces' }}
          >
            Создать проект и запустить анализ
          </button>
        </form>
      </div>
    </div >
  );
}

export default NewProjectComponent;
