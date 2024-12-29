"use client";
import Link from "next/link";
import Cookies from "js-cookie";
import {
  Home,
  Package,
  Layers,
  FileText,
  Users,
  Settings,
  BarChart2,
  Backpack,
  MoveLeft,
  LogOut,
} from "lucide-react";
import { Cookie } from "next/font/google";

const menuItems = [
  { name: "Головна", icon: Home, href: "/admin" },
  { name: "Експонати", icon: Package, href: "/admin/exhibits" },
  { name: "Категорії", icon: Layers, href: "/admin/categories" },
  { name: "Новини", icon: FileText, href: "/admin/news" },
  { name: "Статистика", icon: BarChart2, href: "/admin/statistics" },
  { name: "Налаштування", icon: Settings, href: "/admin/settings" },
];
const handleLogout = () => {
  Cookies.remove("userId");
  window.location.reload();
};

export function Sidebar() {
  return (
    <aside className="w-auto text-white p-4 flex flex-col">
      <Link
        href="/"
        className="flex items-center py-2 px-4 hover:bg-gray-700 rounded transition-colors"
      >
        <MoveLeft />
        back
      </Link>
      <h1 className="text-2xl font-bold mb-8">Адмін-панель</h1>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center py-2 px-4 hover:bg-gray-700 rounded transition-colors"
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            </li>
          ))}
          <li></li>
        </ul>
      </nav>
      <button onClick={handleLogout} className="flex gap-2 mt-auto">
        <LogOut />
        <p>Logout</p>
      </button>
    </aside>
  );
}
