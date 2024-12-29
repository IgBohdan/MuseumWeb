"use client";

import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Users, Package, FileText, Layers } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Відвідувачі за останній тиждень",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Дні тижня",
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Кількість відвідувачів",
      },
    },
  },
};

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalExhibits: 0,
    totalCategories: 0,
    totalNews: 0,
    totalVisitors: 0,
  });

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Відвідувачі",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  });

  useEffect(() => {
    setStats({
      totalExhibits: 150,
      totalCategories: 10,
      totalNews: 50,
      totalVisitors: 10000,
    });

    setChartData({
      labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
      datasets: [
        {
          label: "Відвідувачі",
          data: [500, 600, 550, 700, 800, 1000, 900],
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
      ],
    });
  }, []);

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-8">Панель управління</h1>
      <div className="grid text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={Package}
          title="Всього експонатів"
          value={stats.totalExhibits}
        />
        <StatCard
          icon={Layers}
          title="Всього категорій"
          value={stats.totalCategories}
        />
        <StatCard
          icon={FileText}
          title="Всього новин"
          value={stats.totalNews}
        />
        <StatCard
          icon={Users}
          title="Всього відвідувачів"
          value={stats.totalVisitors}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-white">
        <div className="bg-gray-600/25 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Статистика відвідувань</h2>
          <Bar options={options} data={chartData} />
        </div>
        <div className="bg-gray-600/25 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Останні дії</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
              <span>Додано новий експонат "Старовинна ваза"</span>
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
              <span>Оновлено категорію "Стародавній Єгипет"</span>
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></span>
              <span>Опубліковано нову статтю "Відкриття нової виставки"</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, title, value }) {
  return (
    <div className="bg-gray-600/25 p-6 rounded-lg shadow-md flex items-center">
      <Icon className="h-12 w-12 text-blue-500 mr-4" />
      <div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-3xl font-bold">{value}</p>
      </div>
    </div>
  );
}
