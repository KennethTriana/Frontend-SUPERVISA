import React from 'react';
import './Principal.css';
import { FaFileContract, FaPlus } from 'react-icons/fa';

const Otrosi = () => {
    return (
        <section className="supervision-section">
            <div className="section-header-top">
                <h2 className="section-title">Gestión de Otrosí</h2>
                <div className="contratos-info-header">
                    <FaFileContract className="contracts-icon" />
                    <span className="label">Otrosí a cargo:</span>
                    <strong className="contract-count">2</strong>
                </div>
            </div>
            <button className="btn-primary">
                <FaPlus />
                Registrar Otrosí
            </button>

            <div className="contracts-table-container">
                <div className="search-bar">
                    <input type="text" placeholder="Buscar Otrosí por nombre o código" />
                    <button className="btn-search">Buscar</button>
                </div>
                <table className="contratos-table">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Contrato Asociado</th>
                            <th>Tipo de Otrosí</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>OTROSI01</td>
                            <td>CONT01</td>
                            <td className="estado-pagado">Cambio de valor</td>
                            <td>Aprobado</td>
                            <td><button className="btn-edit">Ver Detalle</button></td>
                        </tr>
                        <tr>
                            <td>OTROSI02</td>
                            <td>CONT03</td>
                            <td className="estado-pendiente">Prórroga</td>
                            <td>En revisión</td>
                            <td><button className="btn-edit">Ver Detalle</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Otrosi;