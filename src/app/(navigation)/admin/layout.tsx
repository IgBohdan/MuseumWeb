"use client";
import Link from "next/link";
import { Sidebar } from "./components/Sidebar";
import AuthPage from "@/components/auth/AuthPage";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    setIsAuth(Boolean(Cookies.get("userId")));
  }, []);

  if (isAuth === false) {
    return <AuthPage />;
  } else if (isAuth) {
    return (
      <div className="flex h-full">
        <Sidebar />
        <main className="flex-1 p-8 overflow-auto">{children}</main>
      </div>
    );
  } else if (isAuth === null) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <p className="h-max w-max">Завантаження...</p>
      </div>
    );
  }
}
