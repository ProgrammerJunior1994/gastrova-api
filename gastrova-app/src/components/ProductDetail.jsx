import { useParams, Link } from 'react-router-dom';
import '../styles/ProductDetail.css';

function ProductDetail({ productos }) {
  const { id } = useParams();

  const producto = productos.find(
    (item) => item.id === Number(id)
  );

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="detail-container">
      <Link to="/" className="back-link">
        Volver al inicio
      </Link>

      <div className="detail-card">
        <img src={producto.imagen} alt={producto.nombre} />

        <div className="detail-info">
          <span>{producto.categoria}</span>

          <h1>{producto.nombre}</h1>

          <p>{producto.descripcion}</p>

          <h2>${producto.precio} MXN</h2>

          <p>
            Disponibilidad: {producto.disponible ? 'Disponible' : 'No disponible'}
          </p>

          <p>
            Tiempo de preparación: {producto.tiempoPreparacion} minutos
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;