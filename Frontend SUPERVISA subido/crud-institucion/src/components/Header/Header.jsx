import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import LogoSupervisa from '../../assets/images/loguito.png';
import './Header.css';

const Header = ({ handleLogout }) => {
    return (
        <header className="main-header">
            <div className="header-left">
                <h1 className="header-title">SISTEMA GESTIÓN DE CONTRATOS</h1>
            </div>
            <div className="header-right">
                <div className="user-info">
                    <span className="user-text">Nombre Supervisor</span>
                    <PersonIcon className="user-icon" />
                    <button className="logout-btn-header" onClick={handleLogout}>
                        <LogoutIcon /> Salir
                    </button>
                </div>
                <img src={LogoSupervisa} alt="Logo Supervisa" className="supervisalogo" />
            </div>
        </header>
    );
};

export default Header;