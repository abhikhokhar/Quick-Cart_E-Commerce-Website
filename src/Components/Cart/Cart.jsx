import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext/CartContext';
import { NavLink } from 'react-router-dom';

export default function Cart() {
  const { cartItems } = useCart();
  const [billingItems, setBillingItems] = useState(() => {
    const storedItems = localStorage.getItem('billingItems');
    return storedItems ? JSON.parse(storedItems) : [];
  });
  const [showTotal, setShowTotal] = useState(false);

  useEffect(() => {
    localStorage.setItem('billingItems', JSON.stringify(billingItems));
  }, [billingItems]);

  const handleAddForBilling = (item) => {
    setBillingItems((prevItems) => {
      if (!prevItems.find((billingItem) => billingItem.id === item.id)) {
        return [...prevItems, { id: item.id, name: item.name, price: item.price }];
      }
      return prevItems;
    });
  };

  const handleRemoveFromBilling = (itemId) => {
    setBillingItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const calculateGrandTotal = () => {
    return billingItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="w-screen h-screen bg-gray-50">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Christmasstore/slot6/1500x400.gif"
        alt="Cart Banner"
        className="w-full h-auto"
      />
      <div className="p-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div className="text-center mt-20">
            <p className="text-2xl font-medium text-gray-600">Your cart is currently empty.</p>
            <NavLink to="/offers">
            <button className="mt-6 bg-violet-900 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-violet-800">
              Continue Shopping
            </button>
            </NavLink>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cartItems.map((item) => {
              const isAdded = billingItems.some((billingItem) => billingItem.id === item.id);
              return (
                <div
                  key={item.id}
                  className="bg-white p-2 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-auto object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
                  <p className="text-lg font-bold text-red-600 mt-2">₹{item.price}</p>
                  {isAdded ? (
                    <>
                      <button
                        onClick={() => handleRemoveFromBilling(item.id)}
                        className="mt-4 w-full bg-red-600 text-white py-2 rounded-md font-medium hover:bg-red-500 transition-all"
                      >
                        Remove
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleAddForBilling(item)}
                      className="mt-4 w-full bg-violet-900 text-white py-2 rounded-md font-medium hover:bg-violet-800 transition-all"
                    >
                      Add for Billing
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="bg-white bg-opacity-90 shadow-xl rounded-2xl p-8 w-full lg:max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Your Shopping Basket 🛍️
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300 border border-gray-200 rounded-lg mb-6">
            <thead className="bg-violet-900 text-white rounded-t-lg">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Product Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Price (₹)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-gray-50">
              {billingItems.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-3 text-sm text-gray-700">{item.name}</td>
                  <td className="px-6 py-3 text-sm text-gray-700">₹{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <div className='flex flex-row justify-between'>
            <button
              id="calculateBill"
              onClick={() => setShowTotal(true)}
              className="bg-violet-900 hover:bg-violet-700 text-white font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-lg transition duration-300"
            >
              Finalize Bill
            </button>
            <button
              id="calculateBill"
              onClick={() => localStorage.clear()}
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-lg transition duration-300"
            >
              Clear Cart
            </button>
          </div>
          {showTotal && (
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-gray-800 text-center">Total Amount Payable 💳</h3>
              <div className="bg-gray-50 border-t border-gray-300 mt-4 p-6 rounded-lg shadow-md">
                <p className="text-lg font-medium text-gray-700 text-center">
                  Your grand total is:
                </p>
                <p className="text-4xl font-extrabold text-indigo-800 text-center mt-2">
                  ₹{calculateGrandTotal()}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <footer className="text-white py-6 bg-gray-900">
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 max-w-7xl mx-auto">
          <img src="/logo.png" alt="Logo" className="w-60 h-auto mb-2 sm:mb-0" />
          <span className="text-sm text-gray-400">
            © 2024 Quick Cart. All Rights Reserved. Developed by
            <a href="https://abhikhokhar.live" className="hover:underline font-semibold text-violet-400">
              <span> Abhi Khokhar</span>
            </a>
          </span>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="https://www.instagram.com/abhi_khokhar_23/"
              target="_blank"
              className="hover:text-violet-400"
            >
              <img
                src="https://sdrive.blr1.cdn.digitaloceanspaces.com/files/7c55e0c6c809a94c61ffe41f0d35ff6d.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
            <a href="https://github.com/abhikhokhar" target="_blank" className="hover:text-violet-400">
              <img
                src="https://sdrive.blr1.cdn.digitaloceanspaces.com/files/ef42ab1de87935da57c3f33f509ba13e.png"
                alt="GitHub"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/abhi-khokhar-131851284/"
              target="_blank"
              className="hover:text-violet-400"
            >
              <img
                src="https://sdrive.blr1.cdn.digitaloceanspaces.com/files/764fdbc815443d9db0020e8237ddaa04.png"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
