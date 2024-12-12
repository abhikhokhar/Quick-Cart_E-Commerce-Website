import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div className="relative w-screen h-screen overflow-hidden">
                <div className="flex sm:flex-row flex-col w-full h-full">
                    <img
                        src="//www.tinyorganics.com/cdn/shop/t/403/assets/herovariantbmobile_450x.png?v=73000676974155308771721059586"
                        alt="Hero Image"
                        className="sm:w-1/2 w-full h-full object-cover"
                    />
                    <img
                        src="//www.tinyorganics.com/cdn/shop/files/Apple_Pie_Oatmeal_-_hero_square_crop_300x@2x.png?v=1718295896"
                        alt=""
                        className="sm:w-1/2 w-full h-full object-cover"
                    />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/20 px-6 animate-fade-in">
                    <img
                        src="//www.tinyorganics.com/cdn/shop/t/403/assets/USDA_123x.png?v=25389839487514579871721059588"
                        alt=""
                        className="flex animate-bounce"
                    />
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center animate-slide-in">
                        Raise A Healthy Eater for Life!
                    </h1>

                    <p className="text-lg sm:text-xl mb-2 text-center animate-fade-in">
                        Tiny Organics delivers nutritious and 100% organic, ready-made meals for your baby and toddler.
                    </p>
                    <p className="text-lg sm:text-xl mb-6 text-center animate-fade-in">
                        Meals starting at <strong>$3.36</strong> per meal
                    </p>

                    <NavLink to="/shop">
                        <button className="bg-violet-900 text-white px-6 py-3 sm:py-3 sm:px-12 rounded-xl hover:bg-violet-800">
                            SHOP NOW
                        </button>
                    </NavLink>
                </div>
            </div>

            <div className="relative w-screen h-screen overflow-hidden m-0 p-0">
                <img
                    src="https://www.deathwishcoffee.com/cdn/shop/files/DTC_No_1_Selling_FTO_Homepage_Banner_Desktop_B2_052b3917-20c8-429f-8a37-e378144ff76a.jpg?v=1724782085&width=3840"
                    alt="image"
                    className="w-full h-full object-cover hidden sm:block"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-center text-white bg-black/10 px-6">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 mt-4 sm:mt-0 text-center text-violet-900 sm:text-white animate-slide-in">
                        IF YOU'RE NOT FIRST,
                    </h1>
                    <h1 className="text-4xl sm:text-5xl ml-14 sm:ml-0 font-bold mb-4 text-center text-violet-900 sm:text-white animate-slide-in">
                        YOU'RE LAST!
                    </h1>

                    <p className="text-lg sm:text-xl mb-2 text-center text-violet-700 sm:text-white animate-fade-in">
                        Death Wish Coffee is the #1 Organic and #1 Fair Trade Coffee brand in the US.
                    </p>

                    <img
                        src="https://www.deathwishcoffee.com/cdn/shop/files/DTC_No_1_Selling_FTO_Homepage_Banner_Mobile_A3_8cac1451-ae90-4c0f-9d29-8835fabd1b66.jpg?v=1724782094&width=768"
                        alt=""
                        className="block sm:hidden w-full h-full object-cover"
                    />
                    <p className="text-lg sm:text-xl sm:mb-6 mb-2 text-center text-gray-900 sm:text-white animate-fade-in">
                        Next stop? <strong>Total world domination</strong>
                    </p>

                    <NavLink to={'/Coffee'}>
                        <button className="sm:bg-violet-900 bg-gray-800 ml-24 mb-6 sm:ml-0 sm:mt-2 text-white px-6 py-3 sm:py-3 sm:px-12 rounded-xl hover:bg-violet-800">
                            SHOP NOW
                        </button>
                    </NavLink>
                </div>
            </div>

            <div className="relative w-screen h-screen bg-gray-100 flex flex-col items-center justify-center">
                    <div className="flex flex-col sm:flex-row items-center gap-8">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/WA/2024/july/libas/category/deals.png"
                        alt="Deals"
                        className="sm:w-1/2 w-full h-auto object-cover rounded-lg shadow-lg"
                      />
                      <div className="text-center sm:text-left">
                        <h2 className="text-4xl font-bold mb-4 text-violet-900 animate-slideInLeft">
                          Exclusive Deals for You!
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 animate-slideInLeft delay-1">
                          Grab the best offers on organic products and stylish apparel today.
                        </p>
                        <NavLink to="/ladies">
                          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition-all animate-slideInLeft delay-2 font-medium">
                            SHOP NOW
                          </button>
                        </NavLink>
                      </div>
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
        </>
    );
}
