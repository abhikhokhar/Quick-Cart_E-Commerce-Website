import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Shop() {
  return (
    <>
    <div class="relative w-screen h-screen">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/MED_MAY/Tall_Hero_1500X600_BAU_NewLaunches._CB554931622_.jpg"
            alt="" class="w-full h-auto"/>

        <div class="absolute inset-0 sm:mt-64 mt-40 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            <div class="bg-white shadow-md rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-4">Min. 40% off | Toys for your little ones</h3>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/baby/QC_PC_186x116_9._SY116_CB563558900_.jpg"
                            alt="Soft toys" class="w-full rounded"/>
                        <p class="text-sm mt-2">Min. 40% off | Soft toys</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_186x116_14._SY116_CB541414575_.jpg"
                            alt="Indoor games" class="w-full rounded"/>
                        <p class="text-sm mt-2">Min. 40% off | Indoor games</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_186x116_16._SY116_CB541411275_.jpg"
                            alt="Ride ons" class="w-full rounded"/>
                        <p class="text-sm mt-2">Min. 40% off | Ride ons</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_186x116_11._SY116_CB541414575_.jpg"
                            alt="Outdoor games" class="w-full rounded"/>
                        <p class="text-sm mt-2">Min. 40% off | Outdoor games</p>
                    </div>
                </div>
                <NavLink to="/games" className="bg-blue-700 text-white px-6 py-2 rounded-lg text-lg mt-4 inline-block shadow-lg hover:bg-violet-800 hover:shadow-lg">Explore all Offers +</NavLink>
            </div>
            <div class="bg-white shadow-md rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-4">Latest styles | Dresses, kurta & more | 50% - 80% off</h3>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/GW/BTF_Refersh/June_17/PCQC/1x/New/05._SY116_CB555616559_.jpg"
                            alt="boAt" class="w-full h-auto rounded"/>
                        <p class="text-sm mt-2">Kurta & Sets</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/GW/BTF_Refersh/June_17/PCQC/1x/New/07._SY116_CB555616559_.jpg"
                            alt="Boult" class="w-full rounded"/>
                        <p class="text-sm mt-2">Tops</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/GW/BTF_Refersh/June_17/PCQC/1x/New/04._SY116_CB555616559_.jpghttps://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/GW/BTF_Refersh/June_17/PCQC/1x/New/06._SY116_CB555616559_.jpg"
                            alt="Noise" class="w-full rounded"/>
                        <p class="text-sm mt-2">Dresses</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/GW/BTF_Refersh/June_17/PCQC/1x/New/06._SY116_CB555616559_.jpg"
                            alt="Zebronics" class="w-full rounded"/>
                        <p class="text-sm mt-2">Sarees</p>
                    </div>
                </div>
                <NavLink to="/ladies" className="bg-blue-700 text-white px-6 py-2 rounded-lg text-lg mt-4 inline-block shadow-lg hover:bg-violet-800 hover:shadow-lg">Explore all Offers +</NavLink>            </div>

            <div class="bg-white shadow-md rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-4">Explore more from Small Businesses</h3>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/December/Desktop_QC_Clothing_1x._SY116_CB540581077_.jpg"
                            alt="Ethnic dresses" class="w-full rounded"/>
                        <p class="text-sm mt-2">Ethnic, dresses & more</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/December/Desktop_QC_Decor_1x._SY116_CB540581077_.jpg"
                            alt="Décor" class="w-full rounded"/>
                        <p class="text-sm mt-2">Décor</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/December/Desktop_QC_Fashion_Accessories_1x._SY116_CB540581077_.jpg"
                            alt="Fashion accessories" class="w-full rounded"/>
                        <p class="text-sm mt-2">Fashion accessories</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/December/Desktop_QC_Glasses_1x._SY116_CB540581077_.jpg"
                            alt="Glassware" class="w-full rounded"/>
                        <p class="text-sm mt-2">Glassware & drinkware</p>
                    </div>
                </div>
                <NavLink to="/business" className="bg-blue-700 text-white px-6 py-2 rounded-lg text-lg mt-4 inline-block shadow-lg hover:bg-violet-800 hover:shadow-lg">Explore all Offers +</NavLink>          
                </div>

            <div class="bg-white shadow-md rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-4">Society of Strong Coffee</h3>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <img src="https://www.deathwishcoffee.com/cdn/shop/files/Dark_Roast_16oz_Ground_Angle_DTC_A4_2.jpg?v=1726752263&width=360"
                            alt="Cushion covers" class="w-full rounded"/>
                        <p class="text-sm mt-2">Dark Roast Coffee Death Wish Coffee.</p>
                    </div>
                    <div>
                        <img src="https://www.deathwishcoffee.com/cdn/shop/files/Espresso_Roast_14oz_Ground_Angle_DTC_A5_2.jpg?v=1726755281&width=360"
                            alt="Vases" class="w-full rounded"/>
                        <p class="text-sm mt-2">Espresso Roast Coffee</p>
                    </div>
                    <div>
                        <img src="https://www.deathwishcoffee.com/cdn/shop/files/Medium_Roast_16oz_Ground_Angle_DTC_A4_2.jpg?v=1726752632&width=360"
                            alt="Home storage" class="w-full rounded"/>
                        <p class="text-sm mt-2">Medium Roast Coffee</p>
                    </div>
                    <div>
                        <img src="https://www.deathwishcoffee.com/cdn/shop/files/Vanilla_14oz_Ground_Angle_DTC_A2-_1.jpg?v=1726759714&width=360"
                            alt="Lighting solutions" class="w-full rounded"/>
                        <p class="text-sm mt-2">Vanilla Coffee</p>
                    </div>
                </div>
                <NavLink to="/coffee" className="bg-blue-700 text-white px-6 py-2 rounded-lg text-lg mt-4 inline-block shadow-lg hover:bg-violet-800 hover:shadow-lg">Explore all Offers +</NavLink>          </div>

            <div class="bg-white shadow-md rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-4">Up to 60% off | Top picks</h3>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/ATF_BAU/Dec/WRS/PCQC/Sports_low1._SY116_CB540896048_.jpg"
                            alt="boAt" class="w-full rounded"/>
                        <p class="text-sm mt-2">Sports Shoes</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/ATF_BAU/Dec/WRS/PCQC/Jewellery_low_1._SY116_CB540896048_.jpg"
                            alt="Boult" class="w-full rounded"/>
                        <p class="text-sm mt-2">Jewellery & Accessories</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/ATF_BAU/Dec/WRS/PCQC/Watches_low1._SY116_CB540896048_.jpg"
                            alt="Noise" class="w-full rounded"/>
                        <p class="text-sm mt-2">Watches & Smartwatches</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/ATF_BAU/Dec/WRS/PCQC/HB_Low_1._SY116_CB540896048_.jpg"
                            alt="Zebronics" class="w-full rounded"/>
                        <p class="text-sm mt-2">Bags, Wallets & Luggage</p>
                    </div>
                </div>
                <NavLink to="/offers" className="bg-blue-700 text-white px-6 py-2 rounded-lg text-lg mt-4 inline-block shadow-lg hover:bg-violet-800 hover:shadow-lg">Explore all Offers +</NavLink>           
            </div>
            


            <div class="bg-white shadow-md rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-4">Automotive essentials | Up to 60% off</h3>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg"
                            alt="boAt" class="w-full rounded"/>
                        <p class="text-sm mt-2">Cleaning accessories</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg"
                            alt="Boult" class="w-full rounded"/>
                        <p class="text-sm mt-2">Tyre & Rim care</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg"
                            alt="Noise" class="w-full rounded"/>
                        <p class="text-sm mt-2">Helmets</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg"
                            alt="Zebronics" class="w-full rounded"/>
                        <p class="text-sm mt-2">Vaccum Cleaner</p>
                    </div>
                </div>
                <NavLink to="/offers" className="bg-blue-700 text-white px-6 py-2 rounded-lg text-lg mt-4 inline-block shadow-lg hover:bg-violet-800 hover:shadow-lg">Explore all Offers +</NavLink>            </div>

            <div class="bg-white shadow-md rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-4">Starting ₹199 | Amazon Brands & more</h3>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg"
                            alt="boAt" class="w-full rounded"/>
                        <p class="text-sm mt-2">Starting ₹ 199 | Badsheets</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_3._SY116_CB567468236_.jpg"
                            alt="Boult" class="w-full rounded"/>
                        <p class="text-sm mt-2">Starting ₹ 199 | Curtains</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_4._SY116_CB567468236_.jpg"
                            alt="Noise" class="w-full rounded"/>
                        <p class="text-sm mt-2">Ironing Board and More</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_1._SY116_CB567468236_.jpg"
                            alt="Zebronics" class="w-full rounded"/>
                        <p class="text-sm mt-2">Up to 60% off | Home Decor</p>
                    </div>
                </div>
                <NavLink to="/offers" className="bg-blue-700 text-white px-6 py-2 rounded-lg text-lg mt-4 inline-block shadow-lg hover:bg-violet-800 hover:shadow-lg">Explore all Offers +</NavLink>    </div>


            <div class="bg-white shadow-md rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-4">Appliances for your home | Up to 55% off</h3>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg0"
                            alt="boAt" class="w-full rounded"/>
                        <p class="text-sm mt-2">Air Conditioner</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
                            alt="Boult" class="w-full rounded"/>
                        <p class="text-sm mt-2">Microwaves</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
                            alt="Noise" class="w-full rounded"/>
                        <p class="text-sm mt-2 ">Refrigerators</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
                            alt="Zebronics" class="w-full rounded"/>
                        <p class="text-sm mt-2">Waching Machines</p>
                    </div>
                </div>
                <NavLink to="/offers" className="bg-blue-700 text-white px-6 py-2 rounded-lg text-lg mt-4 inline-block shadow-lg hover:bg-violet-800 hover:shadow-lg">Explore all Offers +</NavLink>            
                </div>
        </div>

    </div>
    </>
  )
}
