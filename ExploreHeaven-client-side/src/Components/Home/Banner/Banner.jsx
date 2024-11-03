import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import img1 from '../../../assets/slider img/img1.jpg';
import img2 from '../../../assets/slider img/img2.jpg';
import img3 from '../../../assets/slider img/img3.jpg';
import img4 from '../../../assets/slider img/img4.jpg';


const Banner = () => {
    return (
        <div className='mt-10'>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {[img1, img2, img3, img4].map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative">
                            {/* Background image */}
                            <img src={img} alt="" className=" rounded-lg w-full h-[500px] object-cover" />

                            {/* Overlay content */}
                            <div className=" rounded-lg absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
                                <h2 className="text-4xl font-bold mb-2">UP TO 60% OFF ADVENTURE TRAVEL</h2>
                                <p className="text-lg mb-4">JOIN OVER 40,000 MEMBERS.</p>
                                <p className="mb-6">Get exclusive access to members-only deals on amazing adventure holidays by email - it's free.</p>

                                {/* Email subscription input */}
                                <div className="flex items-center space-x-2 bg-white rounded-full p-2 max-w-lg mx-auto w-full">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="bg-transparent outline-none flex-grow text-black px-4 py-2 rounded-l-full"
                                    />
                                    <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full">SUBSCRIBE</button>
                                </div>

                                <p className="text-sm mt-2 text-gray-300">No thanks, I like boring holidays.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default Banner;
