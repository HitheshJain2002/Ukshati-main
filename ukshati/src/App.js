import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy-loaded components
const Home = React.lazy(() => import('./Components/Pages/Home'));
const About = React.lazy(() => import('./Components/Pages/About'));
const Products = React.lazy(() => import('./Components/Pages/Products'));
const Contact = React.lazy(() => import('./Components/Pages/Contact'));
const Blog = React.lazy(() => import('./Components/Pages/Blog'));
const Login = React.lazy(() => import('./Components/Pages/Login'));
const Uno = React.lazy(() => import('./Components/Product_Pages/Uno'));
const Hexa = React.lazy(() => import('./Components/Product_Pages/Hexa'));
const Octa = React.lazy(() => import('./Components/Product_Pages/Octa'));
const Quadra = React.lazy(() => import('./Components/Product_Pages/Quadra'));

/**
 * The main app component
 * @returns {JSX.Element}
 */
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Uno" element={<Uno />} />
          <Route path="/Hexa" element={<Hexa />} />
          <Route path="/Octa" element={<Octa />} />
          <Route path="/Quadra" element={<Quadra />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
