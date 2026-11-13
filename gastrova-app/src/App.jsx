import { Routes, Route } from 'react-router-dom';

import './styles/global.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

import About from './pages/About';
import Contact from './pages/Contact';

import useProductos from './hooks/useProductos';

function App() {
  const { productos, cargando, error } = useProductos();

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div>
  <section className="hero">
    <h1>Bienvenido a Gastrova</h1>
    <p>Descubre nuestros productos y conoce todo lo que tenemos para ti.</p>
  </section>

  {cargando && <p className="message">Cargando productos...</p>}

  {error && <p className="message">{error}</p>}

  {!cargando && !error && (
    <>
      <h2 className="section-title">Nuestros productos</h2>
      <ProductList productos={productos} />
    </>
  )}
</div>
          }
        />

        <Route
          path="/producto/:id"
          element={<ProductDetail productos={productos} />}
        />

        <Route path="/acerca-de" element={<About />} />

        <Route path="/contacto" element={<Contact />} />

        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </div>
  );
}

export default App;