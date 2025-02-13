"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

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
      // Проверяем тестовый аккаунт
      if (
        formData.email === "test@company.com" &&
        formData.password === "Test123!"
      ) {
        localStorage.setItem("token", "test-token"); // Имитация токена
        router.push("/"); // Редирект на главную
      } else {
        setError("Неверный email или пароль. Попробуйте снова.");
      }
    } catch (err) {
      setError("Ошибка авторизации. Проверьте данные.");
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
              Welcome Back
            </h1>
            <p className="text-gray-600 font-roboto">
              Sign in to your CVAnalyzer.ai account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-roboto mb-2">
                Email Address
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
                <label className="block text-gray-700 font-roboto">
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-700 font-roboto"
                >
                  Forgot password?
                </a>
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
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/register"
              className="text-blue-600 hover:text-blue-700 font-roboto"
            >
              Don't have an account? Sign up
            </a>
            <p className="mt-4 text-sm text-gray-400 font-roboto">
              Test account: test@company.com / Test123!
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0 font-montserrat">
            CVAnalyzer.ai
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400 font-roboto">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 font-roboto">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-400 font-roboto">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LoginPage;
