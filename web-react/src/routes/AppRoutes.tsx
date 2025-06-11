import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../features/auth/pages/LoginPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* Aquí luego agregas rutas protegidas, dashboard, etc */}
      </Routes>
    </BrowserRouter>
  );
}
