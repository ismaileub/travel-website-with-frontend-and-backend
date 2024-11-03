import React, { useState } from 'react';
import client from '../../../assets/ExtraImg/client.png';
import client2 from '../../../assets/ExtraImg/client2.jpg';
import client3 from '../../../assets/ExtraImg/client3.jpg';
import client4 from '../../../assets/ExtraImg/client4.jpg';
import client5 from '../../../assets/ExtraImg/client5.jpg';
import client6 from '../../../assets/ExtraImg/client6.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const OurClient = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            quote: "Awesome service",
            text: "Ad non quis quis commodo ut nostrud ipsum ad reprehenderit. Lorem eiusmod excepteur anim adipisicing officia officia.",
            name: "Cameron Douglas",
            role: "Businessman",
            image: client
        },
        {
            quote: "Exceptional experience",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae convallis mauris, eget condimentum justo.",
            name: "Sarah Lee",
            role: "Entrepreneur",
            image: client4
        },
        {
            quote: "Highly recommend",
            text: "Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
            name: "James Brown",
            role: "Photographer",
            image: client3
        },
        {
            quote: "Outstanding support",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            name: "Emily Carter",
            role: "Designer",
            image: client6
        },
        {
            quote: "Top-notch quality",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            name: "Michael Green",
            role: "Writer",
            image: client5
        },
        {
            quote: "Amazing experience",
            text: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            name: "Anna Blue",
            role: "Manager",
            image: client2
        }
    ];

    return (
        <div className='mt-20 px-4 md:px-10'>
            <h3 className='text-center font-extrabold my-10 text-2xl md:text-4xl text-orange-500'>What Our Client Say About Us!</h3>
            <div className='flex flex-col lg:flex-row max-h-96 items-center lg:items-start'>

                <div className='w-full lg:w-auto mb-6 lg:mb-0'>
                    <Swiper
                        effect={'flip'}
                        grabCursor={true}
                        pagination={true}
                        navigation={true}
                        modules={[EffectFlip, Pagination, Navigation]}
                        className="mySwiper w-full md:w-[500px] h-full"
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
                                <div className='flex flex-col justify-center items-center bg-gray-100 h-full p-4 md:p-10'>
                                    <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-2">"{testimonial.quote}"</h3>
                                    <p className="text-gray-700 my-4 md:my-10 text-xs md:text-sm">{testimonial.text}</p>
                                    <p className="text-md md:text-lg font-semibold text-gray-900">{testimonial.name}</p>
                                    <span className="text-sm text-gray-500">{testimonial.role}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 pt-6'>
                    {testimonials.map((testimonial, index) => (
                        <img
                            key={index}
                            className={`w-full h-32 sm:h-40 md:h-full transition-opacity duration-300 ${index === activeIndex ? 'opacity-100' : 'opacity-90 blur-sm'}`}
                            src={testimonial.image}
                            alt={testimonial.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurClient;
