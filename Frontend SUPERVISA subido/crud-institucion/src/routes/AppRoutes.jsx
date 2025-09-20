import { Route, Routes } from "react-router-dom";

// ✅ Rutas de páginas
import LoginForm from "../pages/Login.jsx";
import Menu from "../pages/Menu_.jsx";
import Contratos from "../pages/Contratos.jsx";
import Obligaciones from "../pages/Obligaciones.jsx";
import Reportes from "../pages/Reportes.jsx";
import CargarPago from "../pages/CargarPago.jsx";
import Otrosi from "../pages/Otrosi.jsx";

// ✅ Rutas de componentes de layout y protección
import ProtectedRoutes from "../components/ProtectedRoutes/ProtectedRoute.jsx";
import DashboardLayout from "../layouts/DashboardLayout.jsx";

function AppRoutes() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<LoginForm />} />
      <Route path="/login" element={<LoginForm />} />

      {/* ✅ Rutas protegidas y con layout
        La ruta padre ahora usa el componente ProtectedRoutes, y las anidadas son las páginas.
      */}
      <Route element={<ProtectedRoutes />}>
        <Route element={<DashboardLayout />}>
          <Route path="/menu" element={<Menu />} /> 
          <Route path="/contratos" element={<Contratos />} />
          <Route path="/obligaciones" element={<Obligaciones />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/cargar-pago" element={<CargarPago />} />
          <Route path="/otrosi" element={<Otrosi />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;