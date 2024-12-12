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
      id: 1,
      name: 'Society of Strong Mug',
      price: 3200,
      image: 'https://www.deathwishcoffee.com/cdn/shop/files/DeathWishCoffee_SocietyOfStrong_Mug_Front_057_Web-_1.jpg?v=1708094955&width=360',
      discount: '82% off',
    },
    {
      id: 2,
      name: "Espresso Roast Coffee",
      price: 1599,
      image: 'https://www.deathwishcoffee.com/cdn/shop/files/Espresso_Roast_14oz_Ground_Angle_DTC_A5_2.jpg?v=1726755281&width=360',
      discount: '65% off',
    },
    {
      id: 3,
      name: "Vanilla Coffee",
      price: 999,
      image: 'https://www.deathwishcoffee.com/cdn/shop/files/Vanilla_14oz_Ground_Angle_DTC_A2-_1.jpg?v=1726759714&width=360',
      discount: '49% off',
    },
    {
      id: 4,
      name: "Valhalla Java Odinforce Blend",
      price: 1179,
      image: 'https://deathwishcoffee.com/cdn/shop/files/Valhalla_Java_12oz_Ground_Front_A1_2.jpg?v=1726755695&width=360',
      discount: '49% off',
    },
    {
      id: 5,
      name: "Snow Daze Soda Can Glass Set",
      price: 1799,
      image: 'https://www.deathwishcoffee.com/cdn/shop/files/DeathWishCoffee_November2024_Product_SodaGlasses_Web3_1.jpg?v=1732117767&width=360',
      discount: '58% off',
    },
    {
      id: 6,
      name: "Sidekick Cocktail Shaker",
      price: 2179,
      image: 'https://www.deathwishcoffee.com/cdn/shop/files/DeathWishCoffee_November2024_Product_Shaker_Front_Web_1.jpg?v=1732117924&width=360',
      discount: '35% off',
    },
    {
      id: 7,
      name: "Straight Up Martini Glass Set",
      price: 1199,
      image: "https://www.deathwishcoffee.com/cdn/shop/files/DeathWishCoffee_November2024_Product_MartiniGlasses_Front_Web_1.jpg?v=1732118463&width=360",
      discount: '63% off',
    },
    {
      id: 8,
      name: "Shaken & Stirred Glass Set",
      price: 1999,
      image: 'https://www.deathwishcoffee.com/cdn/shop/files/DeathWishCoffee_November2024_Product_Martini_Rocks_Front_Web_1.jpg?v=1732118227&width=3600',
      discount: '59% off',
    }

  ];

  return (
    <div className="bg-black w-full min-h-screen overflow-x-hidden">
      <div className="px-4 py-8 flex sm:flex-row flex-col space-x-8 justify-center items-center">
        <div className="mt-20">
          <img src="https://www.deathwishcoffee.com/cdn/shop/files/dwc-logo.png?v=1624458280&width=300" alt="Logo" className="w-48 h-48" />
        </div>
        <h1 className="text-5xl font-serif text-white text-center uppercase sm:mt-16">Best Sellers</h1>
      </div>
      <div className="container mx-auto bg-black px-0 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="bg-black p-4 shadow rounded">
            <img src={product.image} alt={product.name} className="mb-4 rounded" />
            <h3 className="text-lg font-bold mb-2 text-white">{product.name}</h3>
            <div className="text-yellow-500 text-sm mt-1">&#9733;&#9733;&#9733;&#9733;&#9734; (4.5)</div>
            <p className="font-bold mt-1 text-gray-400">₹{product.price} <span className="line-through text-gray-500">&#8377;5,799</span></p>
            <p className="text-xs text-green-600">{product.discount}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className={`${
                addedItems.includes(product.id) ? 'bg-violet-700' : 'bg-violet-900'
              } mt-2 text-white px-4 py-2 rounded-lg hover:bg-violet-700`}
            >
              {addedItems.includes(product.id) ? 'Added to Cart' : 'Buy Now'}
            </button>
          </div>
        ))}
      </div>
      <footer className="text-white py-6 bg-transparent">
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
