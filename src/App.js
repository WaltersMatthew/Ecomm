import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Nav from './partials/Nav';
import Home from './pages/Home'
import Product from './pages/Product';
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path='/'
          element={<Home />}
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
