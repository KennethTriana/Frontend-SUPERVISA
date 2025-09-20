import React from 'react';
import './Principal.css'; // Reutiliza los estilos que ya tienes
import { FaFileContract, FaPlus } from 'react-icons/fa';

const Reportes = () => {
    return (
        <section className="supervision-section">
            <div className="section-header-top">
                <h2 className="section-title">Reportes</h2>
                <div className="contratos-info-header">
                    <FaFileContract className="contracts-icon" />
                    <span className="label">Informes Generados:</span>
                    <strong className="contract-count">3</strong>
                </div>
            </div>

            <div className="contracts-table-container">
                <div className="search-bar">
                    <input type="text" placeholder="Buscar reporte por nombre o fecha" />
                    <button className="btn-search">Buscar</button>
                </div>
                
                <table className="contratos-table">
                    <thead>
                        <tr>
                            <th>Nombre del Reporte</th>
                            <th>Fecha de Generación</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Reporte de Contratos Activos</td>
                            <td>31/08/2025</td>
                            <td className="estado-pagado">Finalizado</td>
                            <td><button className="btn-edit">Ver Detalle</button></td>
                        </tr>
                        <tr>
                            <td>Reporte de Obligaciones Pendientes</td>
                            <td>15/08/2025</td>
                            <td className="estado-pendiente">En Proceso</td>
                            <td><button className="btn-edit">Ver Detalle</button></td>
                        </tr>
                        <tr>
                            <td>Resumen de Actividades</td>
                            <td>10/08/2025</td>
                            <td className="estado-pagado">Finalizado</td>
                            <td><button className="btn-edit">Ver Detalle</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Reportes;