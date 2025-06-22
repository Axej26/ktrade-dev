import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../../../firebase/firebase.config';
//corregir la ruta import { login } from '../services/authService'; 

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const navigate = useNavigate(); 

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email.trim()) {
      newErrors.email = 'El correo es obligatorio';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = 'Correo electrónico no válido';
    }

    if (!password.trim()) {
      newErrors.password = 'La contraseña es obligatoria';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Inicio de sesión exitoso');
      navigate('/dashboard');
    } catch (error: any) {
      alert('Error al iniciar sesión: ' + error.message);
    }
  };
  /*const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const userData = await login(email, password);
    // userData contiene { uid, email, token }
    localStorage.setItem('token', userData.token);
    navigate('/dashboard');
  } catch (error) {
    // Manejo de errores
  }
};*/
//coregir el authService junto con la ruta
  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Inicio de sesión con Google exitoso');
    } catch (error: any) {
      alert('Error con Google: ' + error.message);
    }
  };

  return (
    <div className="login-card">


      <h1>Iniciar Sesión</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Entrar</button>
      </form>

      <div className="social-login">
        <p>O continúa con</p>
        <button className="google-btn" onClick={loginWithGoogle}>Google</button>
      </div>

      <div className="links">
        <a href="#">¿Olvidaste tu contraseña?</a>
        <Link to="/newaccount">¿No tienes cuenta? Crear una</Link>
      </div>
    </div>
  );
}
