import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Shop from './Components/Shop/Shop.jsx';
import Coffee from './Components/Coffee/Coffee.jsx';
import Games from './Components/Games/Games.jsx';
import Business from './Components/Business/Business.jsx';
import Ladies from './Components/Ladies/Ladies.jsx';
import Offers from './Components/Offers/Offers.jsx';
import { CartProvider } from './Components/CartContext/CartContext'; // Ensure correct path
import Cart from './Components/Cart/Cart.jsx';

// Create the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="games" element={<Games />} />
      <Route path="coffee" element={<Coffee />} />
      <Route path="business" element={<Business />} />
      <Route path="ladies" element={<Ladies />} />
      <Route path="offers" element={<Offers />} />
      <Route path="cart" element={<Cart />} /> {/* Note lowercase path */}
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);

