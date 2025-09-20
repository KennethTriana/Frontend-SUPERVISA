import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom"; // ✅ Importa Outlet

const ProtectedRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login?expired=true", { replace: true });
      return;
    }

    const handleStorageChange = (event) => {
      if (event.key === "token" && !event.newValue) {
        navigate("/login?expired=true", { replace: true });
      }
    };

    window.addEventListener("storage", handleStorageChange);

    const blockBackNavigation = () => {
      if (!localStorage.getItem("token")) {
        navigate("/login?expired=true", { replace: true });
      }
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", blockBackNavigation);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("popstate", blockBackNavigation);
    };
  }, [navigate]);

  return <Outlet />; // ✅ CORREGIDO: Renderiza la ruta anidada
};

export default ProtectedRoutes;