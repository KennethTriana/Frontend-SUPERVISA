import React from 'react';
import './Principal.css'; // Reutiliza el mismo archivo CSS principal
import { FaFileContract, FaPlus, FaCreditCard, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'; // Importa los íconos que necesites

const CargarPago = () => {
    return (
        <section className="supervision-section">
            <div className="section-header-top">
                <h2 className="section-title">Cargar Pago</h2>
                <div className="contratos-info-header">
                    <FaCreditCard className="contracts-icon" /> {/* Icono para pagos */}
                    <span className="label">Pagos pendientes:</span>
                    <strong className="contract-count">1</strong>
                </div>
            </div>
            <button className="btn-primary">
                <FaPlus />
                Registrar Nuevo Pago
            </button>

            <div className="contracts-table-container">
                <div className="search-bar">
                    <input type="text" placeholder="Buscar contrato por nombre o código" />
                    <button className="btn-search">Buscar</button>
                </div>
                <table className="contratos-table">
                    <thead>
                        <tr>
                            <th>Código Contrato</th>
                            <th>Valor Total</th>
                            <th>Estado de Pago</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CONT01</td>
                            <td>$1.500.000</td>
                            <td className="estado-pendiente">
                                <FaExclamationTriangle className="alert-icon" /> {/* Icono de alerta */}
                                Pendiente
                            </td>
                            <td><button className="btn-edit">Cargar Pago</button></td>
                        </tr>
                        <tr>
                            <td>CONT02</td>
                            <td>$2.000.000</td>
                            <td className="estado-pagado">
                                <FaCheckCircle /> {/* Icono de check */}
                                Pagado
                            </td>
                            <td><button className="btn-edit" disabled>Cargar Pago</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default CargarPago;