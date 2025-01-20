import React, { useState } from 'react';
import { useCart } from '../CartContext/CartContext';

export default function Games() {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (item) => {
    addToCart(item); 
    setAddedItems([...addedItems, item.id]); 
  };
  

  const products = [
    {
      id: 19,
      name: 'popsugar',
      price: 1179,
      image: 'https://m.media-amazon.com/images/I/41ehglaYrPL.AC_SX250.jpg',
      discount: '58% off',
    },
    {
      id: 20,
      name: "popsugar",
      price: 1179,
      image: 'https://m.media-amazon.com/images/I/41-3p79ueuL.AC_SX250.jpg',
      discount: '58% off',
    },
    {
      id: 21,
      name: "popsugar",
      price:1179,
      image: 'https://m.media-amazon.com/images/I/4181od6migL.AC_SX250.jpg',
      discount: '58% off',
    },
    {
      id: 22,
      name: "popsugar",
      price: 1179,
      image: 'https://m.media-amazon.com/images/I/41K-66Wd7WL.AC_SX250.jpg',
      discount: '58% off',
    },
    {
      id: 23,
      name: "popsugar",
      price: 1799,
      image: 'https://m.media-amazon.com/images/I/41aZWAfMsLL.AC_SX250.jpg',
      discount: '58% off',
    },
    {
      id: 24,
      name: "Tony Magic",
      price: 2179,
      image: 'https://m.media-amazon.com/images/I/51H6DqsN-fL.AC_SX250.jpg',
      discount: '35% off',
    },
    {
      id: 25,
      name: "Teddy Bear",
      price: 1199,
      image: "https://m.media-amazon.com/images/I/4158gJ-ENiL.AC_SX250.jpg",
      discount: '63% off',
    },
    {
      id: 26,
      name: "Bunni Rabbite Doll",
      price: 1999,
      image: "https://m.media-amazon.com/images/I/51TnzgYWTaL.AC_SX250.jpg",
      discount: '59% off',
    },
    {
      id: 27,
      name: "ToyMagic Hoodie",
      price: 340,
      image: 'https://m.media-amazon.com/images/I/41apdXJ0PzL.AC_SX250.jpg',
      discount: '80% off',
    },
    {
      id: 28,
      name: "Supples Baby Elephent",
      price: 549,
      image: 'https://m.media-amazon.com/images/I/41gksvAqe+L.AC_SX250.jpg',
      discount: '68% off',
    },

  ];

  return (
    <div className="w-screen h-screen">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/1500x300.ju.jpg" alt="" class="w-full h-auto"/>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl mt-6 font-bold mb-4">Up to 70% off | Top picks from Small businesses</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow rounded">
              <img src={product.image} alt={product.name} className="w-full h-52 object-cover" />
              <h3 className="mt-2 text-sm font-medium">{product.name}</h3>
              <div class="text-yellow-500 text-sm mt-1">&#9733;&#9733;&#9733;&#9733;&#9734; (4.5)</div>
              <p className="text-red-600 font-bold mt-1">₹{product.price} <span className="line-through text-gray-500">&#8377;2,799</span></p>
              <p className="text-xs text-green-600">{product.discount}</p>
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
    </div>
  );
}
