import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

const CountryContainer = () => {
    const { country } = useParams();
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(0);

    useEffect(() => {
        fetch(`https://explore-haven-server-side.vercel.app/europe/${country}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(result => {
                setData(result);
                setSelectedItem(result[0]); // Set the first item as default
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [country]);

    console.log(data.length);

    useEffect(() => {
        AOS.init({
            duration: 300,
            easing: 'linear',
            once: true,
        });
    }, []);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    };

    // Split remaining items into rows of 3
    const rows = [];
    for (let i = 1; i < data.length; i += 3) {
        rows.push(data.slice(i, i + 3));
    }

    return (
        <div>
            <h1 className='text-cyan-300 text-center text-xl lg:text-5xl my-10 font-extrabold '>Explore the beauty of {selectedItem.country_Name}</h1>
            {/* Featured Section */}
            {selectedItem && (
                <div className="relative bg-cover object-cover bg-center min-h-[400px] rounded-lg  "
                    style={{ backgroundImage: `url(${selectedItem.image})` }}>

                    <div className="absolute rounded-lg inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col text-center p-2 lg:p-4 ">
                        <h1 className="text-2xl lg:text-5xl font-bold text-white">{selectedItem.country_Name}</h1>
                        <p className="text-teal-300 mt-3 font-medium lg:mt-4 uppercase text-sm tracking-wide">{selectedItem.location}</p>

                        {/* Description */}
                        <p className="text-white mt-2 max-w-2xl">
                            {selectedItem.short_description}
                        </p>

                        <div className="mt-2 w-full lg:w-auto lg:mt-6 flex  flex-col lg:flex-row justify-center gap-3 lg:gap-10 text-center text-white">

                            <div className='  flex lg:justify-center justify-around w-full gap-3 flex-row'>
                                <div>
                                    <p className="uppercase text-xl">Duration</p>
                                    <p className="font-semibold text-red-500 text-lg">{selectedItem.travel_time}</p>
                                </div>

                                <div>
                                    <p className="uppercase text-xl">Price</p>
                                    <p className="text-red-500 text-lg font-semibold">{selectedItem.average_cost}</p>
                                </div>
                            </div>

                            <div>
                                <p className="uppercase text-xl">Seasonality</p>
                                <p className="text-lg text-red-500 text-nowrap font-semibold">{selectedItem.seasonality}</p>
                            </div>

                            <div className='block'>
                                <button className="px-6 py-2 bg-blue-500 text-white text-nowrap font-bold rounded hover:bg-orange-500">Book Now</button>
                            </div>

                        </div>
                    </div>

                </div>
            )}



            <h2 className=' text-3xl font-semibold text-center text-orange-600 my-10'>Other Places in {selectedItem.country_Name}</h2>
            {/* Grid of Items */}
            <div className="mt-6 space-y-4">
                {rows.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  "
                        data-aos="fade-up"
                        data-aos-delay={rowIndex * 300} // Delay for each row
                    >
                        {row.map((spot, index) => (

                            <div
                                key={index}
                                className="h-64 bg-cover bg-center relative cursor-pointer group rounded-lg overflow-hidden"
                                style={{ backgroundImage: `url(${spot.image})` }}
                                onClick={() => handleItemClick(spot)}
                            >
                                <div className="absolute bottom-0 left-0 text-white p-2 w-full bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300">
                                    <p className="text-sm">{spot.location}</p>
                                    <p className="font-bold">{spot.country_Name}</p>
                                </div>
                            </div>


                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountryContainer;
