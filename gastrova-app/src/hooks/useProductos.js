import { useState, useEffect } from 'react';

function useProductos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'https://raw.githubusercontent.com/ProgrammerJunior1994/gastrova-api/refs/heads/main/productos.json';

  useEffect(() => {
    fetch(API_URL)
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('Error al obtener los productos');
        }

        return respuesta.json();
      })
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        setError(error.message);
        setCargando(false);
      });
  }, []);

  return { productos, cargando, error };
}

export default useProductos;