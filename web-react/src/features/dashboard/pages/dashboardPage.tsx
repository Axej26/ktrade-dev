// DashboardPage.tsx
import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Card from '../components/statsCard';
import './dashboardPage.css';

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar con estado y función para abrir/cerrar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Contenedor principal que crece y cambia margen según sidebar */}
      <div className="flex flex-col flex-grow">
        <Header />

        {/* Contenido principal con margen dinámico y transición suave */}
        <main
          className={`dashboard-main flex-grow p-6 overflow-auto transition-all duration-300 ${
            sidebarOpen ? 'ml-64' : 'ml-20'
          }`}
        >
          <section  className="card-grid">
            <Card title="Valores" value="1,234" />
            <Card title="Informacion pendiente" value="12" />
            <Card title="Ingresos" value="12345" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
