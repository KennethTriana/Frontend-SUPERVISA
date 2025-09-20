import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import './DashboardLayout.css';

const DashboardLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Lógica para el manejo de sesión
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        navigate('/login', { replace: true });
    };

    return (
        <div className="dashboard-container">
            {/* El Header se mantiene en la parte superior */}
            <Header handleLogout={handleLogout} />

            {/* Este contenedor organiza la barra lateral y el contenido */}
            <div className="dashboard-content-wrapper">
                <Sidebar navigate={navigate} location={location} />
                <main className="main-content">
                    <Outlet /> {/* Aquí se renderiza el componente de la ruta actual */}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;