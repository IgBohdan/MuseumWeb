"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

interface LoginForm {
  username: string;
  password: string;
}

export default function AuthPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: LoginForm) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3009/api/tempory-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result.responseData);

      if (response.ok) {
        // Зберігаємо ID користувача в cookies
        Cookies.set("userId", result.responseData.userId, { expires: 7 }); // Кука дійсна 7 днів
        alert("Авторизація успішна!");
      } else {
        setError(result.message || "Щось пішло не так. Спробуйте ще раз.");
      }
    } catch (err) {
      setError("Помилка під час запиту. Перевірте з'єднання.");
    } finally {
      setLoading(false);
      window.location.reload();
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-full max-w-sm p-6 rounded-lg shadow-lg bg-gray-800/25">
        <h1 className="text-2xl font-bold mb-6 text-center">Авторизація</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium mb-1"
            >
              Логін
            </label>
            <input
              id="username"
              type="text"
              {...register("username", { required: "Це поле обов'язкове" })}
              className="w-full bg-gray-600 px-3 py-2 border-none rounded-md focus:outline-none"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Пароль
            </label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Це поле обов'язкове" })}
              className="w-full px-3 bg-gray-600 py-2 border-none rounded-md focus:outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full border-2 border-transparent bg-[--buttonColor] text-white py-2 px-4 rounded-md transition-all duration-300 ease-in-out hover:bg-transparent hover:border-[--buttonColor] hover:text-[--buttonColor] hover:border-2"
          >
            {loading ? "Зачекайте..." : "Увійти"}
          </button>
        </form>
      </div>
    </div>
  );
}
