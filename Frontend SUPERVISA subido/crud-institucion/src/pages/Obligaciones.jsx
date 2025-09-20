import React from 'react';
// Asegúrate de que este archivo CSS contiene los estilos que me diste
import './Principal.css'; 
import { FaFileContract, FaPlus, FaExclamationTriangle } from 'react-icons/fa';

const Obligaciones = () => {
    return (
        <section className="supervision-section">
            <div className="section-header-top">
                <h2 className="section-title">Gestión de Obligaciones</h2>
                <div className="contratos-info-header">
                    <FaFileContract className="contracts-icon" />
                    <span className="label">Obligaciones Pendientes:</span>
                    <strong className="contract-count">3</strong>
                </div>
            </div>
            <button className="btn-primary">
                <FaPlus />
                Registrar Obligación
            </button>

            <div className="contracts-table-container">
                <div className="search-bar">
                    <input type="text" placeholder="Buscar Obligación por contrato" />
                    <button className="btn-search">Buscar</button>
                </div>
                <table className="contratos-table">
                    <thead>
                        <tr>
                            <th>Contrato</th>
                            <th>Descripción de la Obligación</th>
                            <th>Estado</th>
                            <th>Fecha Límite</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CONT01</td>
                            <td>Revisión de contrato</td>
                            <td className="estado-pendiente">
                                <FaExclamationTriangle className="alert-icon" />
                                Pendiente
                            </td>
                            <td>15/09/2025</td>
                            <td><button className="btn-edit">Ver Detalle</button></td>
                        </tr>
                        <tr>
                            <td>CONT02</td>
                            <td>Entrega de informe</td>
                            <td className="estado-pagado">Completado</td>
                            <td>30/08/2025</td>
                            <td><button className="btn-edit">Ver Detalle</button></td>
                        </tr>
                        <tr>
                            <td>CONT03</td>
                            <td>Actualización de póliza</td>
                            <td className="estado-pendiente">
                                <FaExclamationTriangle className="alert-icon" />
                                Pendiente
                            </td>
                            <td>30/09/2025</td>
                            <td><button className="btn-edit">Ver Detalle</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Obligaciones;