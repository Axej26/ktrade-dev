import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí conectarás con tu authService
    console.log({ email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Correo</label>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Contraseña</label>
        <input
          type="password"
          className="w-full px-3 py-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded"
      >
        Ingresar
      </button>
    </form>
  );
}
