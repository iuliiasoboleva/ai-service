"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Footer from "../../components/Footer";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Состояния для модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotMessage, setForgotMessage] = useState("");

  const handleToRegister = () => {
    router.push("/register");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (
        formData.email === "test@company.com" &&
        formData.password === "Test123!"
      ) {
        Cookies.set("token", "test-token", { expires: 7 });
        router.push("/service");
      } else {
        setError("Неверный email или пароль. Попробуйте снова.");
      }
    } catch (err) {
      setError("Ошибка авторизации. Проверьте введенные данные.");
    } finally {
      setLoading(false);
    }
  };

  // Открытие модалки
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Закрытие модалки
  const closeModal = () => {
    setIsModalOpen(false);
    setForgotEmail("");
    setForgotMessage("");
  };

  // Восстановление пароля (фейковая логика)
  const handleForgotPassword = async () => {
    if (!forgotEmail) return;

    setForgotMessage("Инструкция по восстановлению пароля отправлена на ваш email.");
    
    setTimeout(() => {
      closeModal();
    }, 2000); // Закрытие модалки через 2 секунды

    // Если есть бэкенд, раскомментировать:
    /*
    const response = await fetch("/api/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email: forgotEmail }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setForgotMessage(data.message);
    */
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600 font-montserrat">
                CVAnalyzer.ai
              </span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-md mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 font-montserrat mb-2">
              Добро пожаловать
            </h1>
            <p className="text-gray-600 font-roboto">
              Войдите в свой аккаунт CVAnalyzer.ai
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-roboto mb-2">
                Адрес электронной почты
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-roboto"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-gray-700 font-roboto">Пароль</label>
                <button
                  type="button"
                  onClick={openModal}
                  className="text-sm text-blue-600 hover:text-blue-700 font-roboto"
                >
                  Забыли пароль?
                </button>
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-roboto"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm font-roboto">
                <i className="fas fa-exclamation-circle mr-2"></i>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-roboto transition duration-150 disabled:opacity-50"
            >
              {loading ? <i className="fas fa-spinner fa-spin mr-2"></i> : null}
              Войти
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              className="text-blue-600 hover:text-blue-700 font-roboto"
              onClick={handleToRegister}
            >
              Нет аккаунта? Зарегистрируйтесь
            </button>
            <p className="mt-4 text-sm text-gray-400 font-roboto">
              Тестовый аккаунт: test@company.com / Test123!
            </p>
          </div>
        </div>
      </main>

      <Footer />

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-bold mb-3">Восстановление пароля</h2>
            <p className="text-sm text-gray-600 mb-4">
              Введите ваш email, и мы отправим вам инструкцию по восстановлению пароля.
            </p>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-roboto"
              placeholder="your@email.com"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
            />
            {forgotMessage && <p className="text-green-600 text-sm mt-2">{forgotMessage}</p>}
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 font-roboto"
              >
                Отмена
              </button>
              <button
                onClick={handleForgotPassword}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-roboto"
              >
                Отправить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
