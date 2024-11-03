import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleCountryCard = ({ country }) => {
    const navigate = useNavigate();
    const { country_Name } = country;
    const click = () => {
        console.log(country_Name);
        navigate(`/europe/${country_Name}`);
    }

    return (
        <div>
            <div onClick={click}
                className="relative group w-full h-64 bg-cover bg-center  overflow-hidden cursor-pointer"
                style={{ backgroundImage: `url(${country.image})` }}
            >
                {/* Overlay that appears on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center text-white p-4">
                    <h2 className="text-2xl font-bold">{country.country_Name}</h2>
                    <p className="mt-2">Explore the stunning beauty of {country.country_Name}, where breathtaking landscapes meet rich history and vibrant culture.</p>


                </div>

                {/* Destination name */}
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{country.country_Name}</h3>
            </div>
        </div>
    );
};

export default SingleCountryCard;
