import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllTouristSpot = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://explore-haven-server-side.vercel.app/alltouristSpot', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(result => {
                setData(result);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // Helper function to chunk data into groups of 10
    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    // Chunk data into groups of 10
    const dataChunks = chunkArray(data, 10);

    return (
        <div>
            <h1 className='lg:text-5xl text-xl mb-2 mt-10 font-bold text-center'>All Tourists Spot </h1>
            <hr />
            {
                data.length === 0 &&
                <div className='flex justify-center items-center gap-3 my-5'>
                    <span className="loading loading-bars loading-xs"></span>
                    <span className="loading loading-bars loading-sm"></span>
                    <span className="loading loading-bars loading-md"></span>
                </div>
            }
            {dataChunks.map((tenImg, chunkIndex) => (
                <section key={chunkIndex}>
                    <div className=" mt-5 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-auto">
                        {/* 1st five images */}
                        <div className='gap-2 grid grid-cols-1 sm:grid-cols-2 row-span-2 col-span-4'>
                            <div className='gap-2 grid grid-cols-1 sm:grid-cols-2'>
                                {
                                    tenImg.slice(1, 5).map((spot, index) => (
                                        <div className="cursor-pointer relative group w-full h-full rounded shadow-sm min-h-48 aspect-square" key={index}>
                                            <img src={spot.image} alt={spot.tourists_spot_name} className="w-full h-full rounded" loading='lazy' />
                                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 rounded-lg group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
                                                <p className="text-white font-medium">{spot.location}</p>
                                                <h3 className="text-white font-medium">{spot.country_Name}</h3>
                                                <p className="text-white">{spot.description}</p>
                                                <div className="flex space-x-2 mt-2">
                                                    <button className="bg-blue-500 text-white px-2 py-1 hover:bg-orange-500 font-semibold rounded">Book Now</button>
                                                    <Link to={`/details/${spot._id}`} className="bg-green-500 text-white px-2 py-1 hover:bg-orange-500 font-semibold rounded">View Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className='w-full h-full'>
                                {tenImg[0] && (
                                    <div className="relative group w-full h-full col-span-2 row-span-2 cursor-pointer shadow-sm min-h-96 aspect-square">
                                        <img src={tenImg[0]?.image} alt={tenImg[0]?.tourists_spot_name} className="w-full h-full rounded-lg" loading='lazy' />
                                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 rounded-lg group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
                                            <p className="text-white font-medium">{tenImg[0]?.location}</p>
                                            <h3 className="text-white font-medium">{tenImg[0]?.country_Name}</h3>
                                            <p className="text-white">{tenImg[0]?.description}</p>
                                            <div className="flex space-x-2 mt-2">
                                                <button className="bg-blue-500 text-white px-2 py-1 hover:bg-orange-500 font-semibold rounded">Book Now</button>
                                                <Link to={`/details/${tenImg[0]._id}`} className="bg-green-500 text-white px-2 py-1 hover:bg-orange-500 font-semibold rounded">View Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* 2nd five images */}
                        <div className='gap-2 grid grid-cols-1 sm:grid-cols-2 row-span-2 col-span-4'>
                            <div className=' row-span-2 w-full'>
                                {tenImg[9] && (
                                    <div className="relative group w-full h-full col-span-2 row-span-2 cursor-pointer shadow-sm aspect-square">
                                        <img src={tenImg[9].image} alt="" className="w-full h-full rounded-lg" loading='lazy' />
                                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 rounded-lg group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
                                            <p className="text-white font-medium">{tenImg[9]?.location}</p>
                                            <h3 className="text-white font-medium">{tenImg[9]?.country_Name}</h3>
                                            <p className="text-white">{tenImg[9]?.description}</p>
                                            <div className="flex space-x-2 mt-2">
                                                <button className="bg-blue-500 text-white px-2 py-1 hover:bg-orange-500 font-semibold rounded">Book Now</button>
                                                <Link to={`/details/${tenImg[9]._id}`} className="bg-green-500 text-white px-2 py-1 hover:bg-orange-500 font-semibold rounded">View Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className='gap-2 grid grid-cols-1 sm:grid-cols-2 row-span-2'>
                                {
                                    tenImg.slice(5, 9).map((spot, index) => (
                                        <div className="cursor-pointer relative group w-full h-full rounded shadow-sm aspect-square" key={index}>
                                            <img src={spot.image} alt={spot.tourists_spot_name} className="w-full h-full rounded" loading='lazy' />
                                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 rounded-lg group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
                                                <p className="text-white font-medium">{spot.location}</p>
                                                <h3 className="text-white font-medium">{spot.country_Name}</h3>
                                                <p className="text-white">{spot.description}</p>
                                                <div className="flex space-x-2 mt-2">
                                                    <button className="bg-blue-500 text-white px-2 py-1 hover:bg-orange-500 font-semibold rounded">Book Now</button>
                                                    <Link to={`/details/${spot._id}`} className="bg-green-500 text-white px-2 py-1 hover:bg-orange-500 font-semibold rounded">View Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default AllTouristSpot;
