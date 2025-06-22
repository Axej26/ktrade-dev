// Header.tsx
import './header.css'
const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white shadow px-6 py-4 sticky top-0 z-10">
      <h1 className="text-2xl font-bold">Bienvenido Usuario!</h1>
      <div className="w-10 h-10 rounded-full  flex items-center justify-center  font-semibold">
        👤
      </div>
    </header>
  );
};

export default Header;
