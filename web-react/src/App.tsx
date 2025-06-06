import { useEffect, useState } from "react";
import { getHello } from "./services/api";

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    getHello()
      .then((data) => setMensaje(data.message))
      .catch(() => setMensaje("Error al conectar con la API"));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Mensaje desde Functions:</h1>
      <p>{mensaje || "Cargando..."}</p>
    </div>
  );
}

export default App;
