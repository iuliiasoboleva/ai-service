"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import MainComponent from "./MainComponent";
import RegisterPage from "./register/page";
import LoginPage from "./login/page";

export default function Router() {
  const pathname = usePathname();
  const router = useRouter();
  const isAuthenticated = typeof window !== "undefined" && localStorage.getItem("token");

  useEffect(() => {
    if (!isAuthenticated && pathname !== "/login" && pathname !== "/register") {
      router.replace("/login"); // Жесткий редирект, убирает из истории
    }
  }, [isAuthenticated, pathname, router]);

  if (pathname === "/register") return <RegisterPage />;
  if (pathname === "/login") return <LoginPage />;
  
  return isAuthenticated ? <MainComponent /> : null;
}
