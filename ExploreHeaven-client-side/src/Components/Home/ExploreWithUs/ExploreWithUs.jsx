import React from 'react';
import { MdLocalHotel, MdOutlineFlight } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import img from '../../../assets/ExtraImg/men.png'

const ExploreWithUs = () => {
    return (
        <div className="container font flex lg:flex-row flex-col items-center justify-around mx-auto px-4 py-16">

            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h1 className="text-4xl leading-[60px] font-bold text-center mb-8">Explore all corners of<br />The world with us</h1>
                <p className=" text-gray-500 text-base max-w-xl text-center mb-16">Travel is fatal to prejudice, and narrow mindedness, and many of our people need it sorely on these accounts.</p>



                <div className=" flex flex-col justify-center items-center ">

                    <div className='flex gap-10'>
                        <div className="feature flex justify-center  gap-2 items-center">

                            <div className='p-2 shadow-xl rounded-lg bg-gray-100'>
                                <MdOutlineFlight size={35} color="#F97316" ></MdOutlineFlight>
                            </div>
                            <div>
                                <p className="text-lg mb-3 font-medium mt-4">Flight</p>
                            </div>

                        </div>


                        <div className="flex gap-2 items-center">

                            <div className='p-2 shadow-xl rounded-lg bg-gray-100'>
                                <MdLocalHotel size={35} color="#F97316"></MdLocalHotel>
                            </div>
                            <div>
                                <p className="text-lg mb-3 font-medium mt-4">Hotel</p>
                            </div>

                        </div>

                    </div>


                    <div className='flex mt-10 gap-10'>
                        <div className="feature flex justify-center  gap-2 items-center">

                            <div className='p-2 shadow-xl rounded-lg bg-gray-100'>
                                <FaWifi size={35} color="#F97316" ></FaWifi>
                            </div>
                            <div>
                                <p className="text-lg mb-3 font-medium mt-4">Wifi</p>
                            </div>

                        </div>


                        <div className="feature flex gap-2 items-center">

                            <div className='p-2 shadow-xl rounded-lg bg-gray-100'>
                                <IoFastFoodSharp size={35} color="#F97316"></IoFastFoodSharp>
                            </div>
                            <div>
                                <p className="text-lg mb-3 font-medium mt-4">Food</p>
                            </div>

                        </div>
                    </div>





                </div>

            </div>

        </div>
    );
};

export default ExploreWithUs;