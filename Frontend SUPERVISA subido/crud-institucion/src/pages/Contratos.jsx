import React, { useEffect } from 'react';
import ProtectedRoutes from '../components/ProtectedRoutes/ProtectedRoute';
import { useNavigate } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import './Contratos.css';

const Contratos = () => {
  const navigate = useNavigate();

  // Verificación y sincronización de sesión
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login?expired=true', { replace: true });
    }

    const handleStorageChange = (event) => {
      if (event.key === 'token' && !event.newValue) {
        navigate('/login?expired=true', { replace: true });
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [navigate]);

  const usuarioData = JSON.parse(localStorage.getItem('usuario'));
  const usuario = usuarioData ? usuarioData.nom_usuario : "Usuario";

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    navigate('/login?expired=true', { replace: true });
  };

  return (
    <ProtectedRoutes>
      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <h2>Gestión</h2>
          </div>
          <nav>
            <ul>
              <li onClick={() => navigate('/contratos')}>
                <AssignmentIcon /> Contratos
              </li>
              <li onClick={() => navigate('/obligaciones')}>
                <ListAltIcon /> Obligaciones
              </li>
              <li onClick={() => navigate('/reportes')}>
                <BarChartIcon /> Reportes
              </li>
            </ul>
          </nav>
          <button className="logout-btn" onClick={handleLogout}>
            <LogoutIcon /> Cerrar Sesión
          </button>
        </aside>

        {/* Contenido principal */}
        <main className="main-content">
          <header className="header">
            <h1>Gestión de Contratos</h1>
            <div className="user-info">
              <PersonIcon /> {usuario}
            </div>
          </header>

          {/* Datos estáticos */}
          <section className="content">
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Estado</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>Contrato A</td>
                  <td>Activo</td>
                  <td>2025-01-10</td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Contrato B</td>
                  <td>Pendiente</td>
                  <td>2025-02-15</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </ProtectedRoutes>
  );
};

export default Contratos;