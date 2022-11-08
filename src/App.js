import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' 
import Products from './pages/Products'
import Product from './pages/Product';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/products'
          element={<Products />}
        />

        <Route
          path='/product/:id'
          element={<Product />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
