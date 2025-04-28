import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import About from './pages/About';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';
import NotFound from './components/NotFount';

import { CartProvider } from './components/CartContext';
import Register from './components/Register';
import Account from './components/Account';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'product', element: <Products /> },
      { path: 'product/:id', element: <ProductDetails /> },
      { path: 'contact', element: <Contact /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <CheckOut /> },
      { path: 'register' , element: <Register/>},
      { path: 'account' , element: <Account/>},
      { path: '*', element: <NotFound /> }
    ]
  }
]);

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={routes} />
    </CartProvider>
  );
};

export default App;
