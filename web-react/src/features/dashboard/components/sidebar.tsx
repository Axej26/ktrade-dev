import './sidebar.css'

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <aside
  className={`sidebar ${isOpen ? "open" : "closed"} `}

>
  {/* Botón para abrir/cerrar */}
  <button
    onClick={toggleSidebar}
    className="text-gray-300 mb-8 focus:outline-none hover:text-white transition-colors"
    aria-label="Toggle sidebar"
  >
    {isOpen ? "⏴" : "⏵"}
  </button>

  {/* Título solo cuando esté abierto */}
  {isOpen && <h2 className="text-3xl font-extrabold mb-10 tracking-wide">K-trade</h2>}

  {/* Navegación */}
  <nav className="flex flex-col space-y-3 text-lg">
    <a
      href="#"
      className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
    >
      <span>{isOpen ? "🫡 Gestion" : "🫡"}</span>
    </a>
    <a
      href="#"
      className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
    >
      <span>{isOpen ? "🛬 Importacion" : "🛬"}</span>
    </a>
    <a
      href="#"
      className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
    >
      <span>{isOpen ? "📊 Reportes" : "📊"}</span>
    </a>
    <a
      href="#"
      className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
    >
      <span>{isOpen ? "⚙️ Configuración" : "⚙️"}</span>
    </a>
  </nav>
</aside>

  );
};

export default Sidebar;
