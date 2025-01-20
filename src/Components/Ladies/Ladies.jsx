import React, { useState } from 'react';
import { useCart } from '../CartContext/CartContext';

export default function Business() {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (item) => {
    addToCart(item); 
    setAddedItems([...addedItems, item.id]); 
  };
  

  const products = [
    {
      id: 29,
      name: 'Premiun Ethinic Wear',
      price: 999,
      image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/ubs/22tiles/Premium_Ethnic_Brands_978x1432.png',
      discount: '82% off',
    },
    {
      id: 30,
      name: "Premium Western Wear",
      price: 2440,
      image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/ubs/22tiles/Premium_westernwear_978x1432.png',
      discount: '65% off',
    },
    {
      id: 31,
      name: "Ethnic Wear",
      price: 1870,
      image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/ubs/22tiles/Ethnic_Wear_978x1432.png',
      discount: '49% off',
    },
    {
      id: 32,
      name: "Ethnic Bottom Wear",
      price: 799,
      image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/ubs/22tiles/Ethnicwear_bottom_978x1432.png',
      discount: '49% off',
    },
    {
      id: 33,
      name: "Trendy Western Wear",
      price: 1799,
      image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/ubs/22tiles/trendywestwear_978x1432.png',
      discount: '58% off',
    },
    {
      id: 34,
      name: "Exquisite Lingeries",
      price:999,
      image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/ubs/22tiles/exling_978x1432.png',
      discount: '35% off',
    },
    {
      id: 35,
      name: "partywear saree",
      price: 2199,
      image: "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/ubs/22tiles/partysaree_978x1432.png",
      discount: '63% off',
    },
    {
      id: 36,
      name: "CHIC STYLES",
      price: 1870,
      image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/ubs/22tiles/chicstyles_978x1432.png',
      discount: '59% off',
    },


  ];

  return (
    <div className="w-screen h-screen">
         <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/XCM_TRENDS/BIF/pantaloons_1236x550.jpeg" alt="" class="w-full h-auto"/>
      <div className="mx-auto w-screen">
        <div className="grid grid-cols-2 md:grid-cols-4 w-screen mt-2">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow rounded">
              <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
              <h3 className="mt-2 text-sm font-medium">{product.name}</h3>
              <div class="text-yellow-500 text-sm mt-1">&#9733;&#9733;&#9733;&#9733;&#9734; (4.5)</div>
              <p className="text-red-600 font-bold mt-1">₹{product.price} <span className="line-through text-gray-500">&#8377;2,799</span></p>
              <button
                onClick={() => handleAddToCart(product)}
                className={`${
                  addedItems.includes(product.id) ? 'bg-green-500' : 'bg-red-500'
                } text-white text-xs px-2 py-1 inline-block rounded mt-2`}
              >
                {addedItems.includes(product.id) ? 'Added to Cart' : '+Add to Cart'}
              </button>
            </div>
          ))}
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
