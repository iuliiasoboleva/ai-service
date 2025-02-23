"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Footer from "../../components/Footer";

function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "test@company.com",
    password: "Test123!",
    confirmPassword: "Test123!",
    companyName: "Company",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleToLogin = () => {
    router.push("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!validateEmail(formData.email)) {
      setError("Введите корректный адрес электронной почты.");
      setLoading(false);
      return;
    }

    if (formData.password.length < 8) {
      setError("Пароль должен содержать не менее 8 символов.");
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Пароли не совпадают.");
      setLoading(false);
      return;
    }

    try {
      const emailCheckResponse = await fetch("/api/user_check", {
        method: "POST",
        body: JSON.stringify({ email: formData.email }),
      });
      const emailCheckData = await emailCheckResponse.json();
      if (emailCheckData.exists) {
        throw new Error("Этот email уже зарегистрирован.");
      }

      const userId = crypto.randomUUID();

      const insertUserResponse = await fetch("/api/db/cvanalyzer-1712443", {
        method: "POST",
        body: JSON.stringify({
          query:
            "INSERT INTO users (id, email, password, company_name, created_at, status) VALUES (?, ?, ?, ?, ?, ?)",
          values: [
            userId,
            formData.email,
            btoa(formData.password),
            formData.companyName,
            new Date().toISOString(),
            "active",
          ],
        }),
      });

      const createUserData = await insertUserResponse.json();
      if (createUserData.error) {
        throw new Error("Не удалось создать пользователя.");
      }

      await fetch("/api/db/cvanalyzer-1712443", {
        method: "POST",
        body: JSON.stringify({
          query: `CREATE TABLE IF NOT EXISTS user_subscriptions (
            id TEXT PRIMARY KEY,
            plan_name TEXT,
            price INTEGER,
            project_limit INTEGER,
            projects_used INTEGER,
            start_date TEXT,
            status TEXT
          )`,
        }),
      });

      await fetch("/api/db/cvanalyzer-1712443", {
        method: "POST",
        body: JSON.stringify({
          query:
            "INSERT INTO `user_subscriptions` (id, plan_name, price, project_limit, projects_used, start_date, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
          values: [
            userId,
            "Бесплатный пробный период",
            0,
            3,
            0,
            new Date().toISOString(),
            "active",
          ],
        }),
      });

      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
        companyName: "",
      });
      setSuccess(true);
      Cookies.set("token", registerData.token, { expires: 7 });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
              Создайте аккаунт
            </h1>
            <p className="text-gray-600 font-roboto">
              Присоединяйтесь к CVAnalyzer.ai и начните анализировать резюме
            </p>
          </div>
          {success ? (
            <div className="text-center">
              <i className="fas fa-check-circle text-green-500 text-5xl mb-4"></i>
              <h2 className="text-2xl font-bold text-gray-900 font-montserrat mb-2">
                Аккаунт успешно создан!
              </h2>
              <p className="text-gray-600 font-roboto mb-6">
                Теперь вы можете войти в свою учетную запись.
              </p>
              <a
                href="/login"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-roboto transition duration-150"
              >
                Войти
              </a>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-roboto mb-2">
                    Рабочий email
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
                  <label className="block text-gray-700 font-roboto mb-2">
                    Название компании
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-roboto"
                    placeholder="Ваша компания"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-roboto mb-2">
                    Пароль
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    minLength="8"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-roboto"
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-roboto mb-2">
                    Подтвердите пароль
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
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
                  Создать аккаунт
                </button>
              </form>
              <div className="mt-6 text-center">
                <button
                  onClick={handleToLogin}
                  className="text-blue-600 hover:text-blue-700 font-roboto"
                >
                  Уже есть аккаунт? Войти
                </button>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default RegisterPage;
