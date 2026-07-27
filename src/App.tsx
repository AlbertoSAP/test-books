import { useState } from "react";
import "./App.css";

interface Libro {
  id: string;
  title: string;
  author: string;
}

function App() {
  const [libros, setLibros] = useState<Libro[]>([]);
  const [libro, setLibro] = useState<Libro>({ id: "", title: "", author: "" });

  return (
    <div className="app">
      <h1>Libros</h1>

      <div style={{ display: "flex", gap: 5, paddingBottom: "5px" }}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="title" placeholder="Author" />
      </div>
      <button>Crear</button>
      <button>Guardar</button>

      {/* show books created */}
      <ul style={{ padding: "5px" }}>
        {libros.map(({ author, id, title }) => (
          <li
            key={id}
            style={{ display: "flex", gap: 5, alignItems: "center" }}
          >
            <span style={{ fontSize: "0.8rem" }}>
              {title} - {author}
            </span>
            <div style={{ display: "flex", gap: 5, paddingTop: "4px" }}>
              <button>Editar</button>
              <button>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
