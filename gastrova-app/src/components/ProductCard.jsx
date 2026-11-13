
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

function ProductCard({ producto }) {
  return (
    <div className="product-card">
      <img src={producto.imagen} alt={producto.nombre} />

      <div className="product-info">
        <span>{producto.categoria}</span>

        <h3>{producto.nombre}</h3>

        <p>{producto.descripcion}</p>

        <div className="product-footer">
          <strong>${producto.precio} MXN</strong>

          <Link to={`/producto/${producto.id}`}>
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
