import React from 'react';
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";


const SingleSpotCard = ({ spot }) => {
    // console.log(spot);


    return (
        <div className=" bg-white cursor-pointer rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            <img src={spot.image} alt={spot.name} className="w-full h-56  object-cover" />
            <div className="p-4 text-center flex justify-between items-center">
                <div className=''>
                    <h3 className="text-lg font-semibold">{spot.name}</h3>
                    <div className='flex gap-2 items-center'>
                        < IoLocationOutline className='text-blue-500'></IoLocationOutline>
                        <p className="text-gray-500">{spot.location}</p>
                    </div>
                </div>

                <div>
                    <Link to={`/details/${spot._id}`} className="mt-4 rounded-lg px-4 py-2 bg-green-500 text-white  hover:bg-green-600 transition-colors text-nowrap">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleSpotCard;