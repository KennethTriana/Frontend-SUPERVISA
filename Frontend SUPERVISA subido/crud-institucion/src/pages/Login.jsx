import React, { useState, useEffect } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './login.css';

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Limpiar sesión previa al entrar a login
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");

    // Mensaje de sesión expirada solo una vez
    if (searchParams.get('expired') === 'true' && !sessionStorage.getItem("expiredMessageShown")) {
      alert('Tu sesión ha expirado. Por favor, inicia sesión nuevamente.');
      sessionStorage.setItem("expiredMessageShown", "true"); // Marcar como mostrado
    }
  }, [searchParams]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!login || !password) {
      alert("Por favor completa todos los campos");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/login',
        { login, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      // Guardar token y usuario en localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('usuario', JSON.stringify({
        id: response.data.id,
        nom_usuario: response.data.nom_usuario
      }));

      // Limpiar flag del mensaje de expiración
      sessionStorage.removeItem("expiredMessageShown");

      setLoading(false);
      navigate('/menu', { replace: true });
    } catch (error) {
      setLoading(false);

      if (error.response) {
        alert(`Error: ${error.response.data.error || 'Usuario o contraseña incorrectos'}`);
      } else if (error.request) {
        alert('Error: No se recibió respuesta del servidor.');
      } else {
        alert('Error: ' + error.message);
      }
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-left"></div>
      <div className="login-right">
        <h2><PersonIcon /> Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <PersonIcon className="icon" />
            <input
              type="text"
              placeholder="Nombre de usuario"
              onChange={(e) => setLogin(e.target.value)}
              value={login}
              required
            />
          </div>
          <div className="input-container">
            <LockIcon className="icon" />
            <input
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Cargando...' : 'Entrar'}
          </button>
        </form>
        <p className="supervisa">SUPERVISA</p>
      </div>
    </div>
  );
};

export default LoginForm;