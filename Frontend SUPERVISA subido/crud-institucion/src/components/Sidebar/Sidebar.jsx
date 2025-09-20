import React from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PaymentIcon from '@mui/icons-material/Payment';
import BarChartIcon from '@mui/icons-material/BarChart';
import './Sidebar.css';

const Sidebar = ({ navigate, location }) => {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li className={location.pathname === '/menu' ? 'active' : ''} onClick={() => navigate('/menu')}>
                        <AssignmentIcon /> Supervisión
                    </li>
                    <li className={location.pathname === '/obligaciones' ? 'active' : ''} onClick={() => navigate('/obligaciones')}>
                        <AssignmentIcon /> Obligaciones
                    </li>
                    <li className={location.pathname === '/otrosi' ? 'active' : ''} onClick={() => navigate('/otrosi')}>
                        <ListAltIcon /> OtroSí
                    </li>
                    <li className={location.pathname === '/cargar-pago' ? 'active' : ''} onClick={() => navigate('/cargar-pago')}>
                        <PaymentIcon /> Cargar Pago
                    </li>
                    <li className={location.pathname === '/reportes' ? 'active' : ''} onClick={() => navigate('/reportes')}>
                        <BarChartIcon /> Reportes
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;