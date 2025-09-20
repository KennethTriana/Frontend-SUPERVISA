import React from 'react';
import './Principal.css';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Menu = () => {

    return (
        <section className="supervision-section">
            <div className="section-header-top">
                <h2 className="section-title">Gestión Contratos General</h2>
                <div className="contratos-info-header">
                    <span className="label">Contratos a cargo:</span>
                    <strong className="contract-count">3</strong>
                </div>
            </div>
            <button className="btn-primary">Registrar Contrato</button>
            
            <div className="contracts-table-container">
                <div className="search-bar">
                    <input type="text" placeholder="Buscar contrato por nombre o código" />
                    <button className="btn-search">Buscar</button>
                </div>
                <table className="contratos-table">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Proveedor</th>
                            <th>Estado</th>
                            <th>Detalle</th>
                            <th>Detalle Obligaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CONT01</td>
                            <td>Management & Quality</td>
                            <td className="estado-pagado">Pagado</td>
                            <td><button className="btn-edit">Editar</button></td>
                            <td><button className="btn-edit">Editar</button></td>
                        </tr>
                        <tr>
                            <td>CONT02</td>
                            <td>Claro</td>
                            <td className="estado-pendiente"><span className="alert-icon">⚠️</span> Pendiente</td>
                            <td><button className="btn-edit">Editar</button></td>
                            <td><button className="btn-edit">Editar</button></td>
                        </tr>
                        <tr>
                            <td>CONT03</td>
                            <td>Stefanini</td>
                            <td className="estado-pagado">Pagado</td>
                            <td><button className="btn-edit">Editar</button></td>
                            <td><button className="btn-edit">Editar</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Menu;