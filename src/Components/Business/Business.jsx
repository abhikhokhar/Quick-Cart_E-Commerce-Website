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
      name: 'Women Solid Straight Kurti',
      price: 499,
      image: 'https://m.media-amazon.com/images/I/41HRFPBfpyL.AC_SX250.jpg',
      discount: '82% off',
    },
    {
      id: 2,
      name: "BRUTON EVA Lite Sport Shoes Running Shoes for Men- Blue",
      price: 1279,
      image: 'https://m.media-amazon.com/images/I/71f3BmjCwtL._AC_UL320_.jpg',
      discount: '65% off',
    },
    {
      id: 3,
      name: "Black and Gold Metal 2-Tier Cake Stand",
      price: 799,
      image: 'https://m.media-amazon.com/images/I/41hWCb8JueL.AC_SX250.jpg',
      discount: '49% off',
    },
    {
      id: 4,
      name: "Lamcy Plaza Handmade Wooden Tea Light Candle Holder for Christmas",
      price: 1179,
      image: 'https://m.media-amazon.com/images/I/519Grhr4QyL.AC_SX250.jpg',
      discount: '49% off',
    },
    {
      id: 5,
      name: "MORE BUY 14 In Round Hanging Paper Lantern Ball",
      price: 1799,
      image: 'https://m.media-amazon.com/images/I/51jZgm81zmL.AC_SX250.jpg',
      discount: '58% off',
    },
    {
      id: 6,
      name: "SEER Christmas Decoration rain Drop Lights Meteor Shower",
      price: 2179,
      image: 'https://m.media-amazon.com/images/I/61VtXwNBkeL.AC_SX250.jpg',
      discount: '35% off',
    },
    {
      id: 7,
      name: "Drumstone VR Headset Compatible with iOS & Android",
      price: 1199,
      image: "https://m.media-amazon.com/images/I/311y+AmHagL.AC_SX250.jpg",
      discount: '63% off',
    },
    {
      id: 8,
      name: "OneOdio A71 (red) PC Headsets with Microphone",
      price: 1999,
      image: 'https://m.media-amazon.com/images/I/41XlzzbFlXL.AC_SX250.jpg',
      discount: '59% off',
    },
    {
      id: 9,
      name: "Divine Senses Mosaic Glass Tealight Candle Holder",
      price: 340,
      image: 'https://m.media-amazon.com/images/I/517zZfneADL.AC_SX250.jpg',
      discount: '80% off',
    },
    {
      id: 10,
      name: "CHKOKKO Women's Round Neck Half Sleeves Gym Sports Regular Fit T-Shirt",
      price: 549,
      image: 'https://m.media-amazon.com/images/I/51rgPt6ef8L._AC_UL320_.jpg',
      discount: '68% off',
    },

  ];

  return (
    <div className="w-screen h-screen">
         <img src="https://m.media-amazon.com/images/G/31/2024/LandG/Hnk/Heroslider/December/Pc_header-12._SX3000_QL85_.jpg" alt="" class="w-full h-auto"/>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl mt-6 font-bold mb-4">Up to 70% off | Top picks from Small businesses</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow rounded">
              <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
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
