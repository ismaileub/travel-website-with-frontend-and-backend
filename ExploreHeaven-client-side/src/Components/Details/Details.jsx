import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();

    const [spotData, setData] = useState([]);

    useEffect(() => {

        fetch(`https://explore-haven-server-side.vercel.app/touristSpots/${id}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => {
                console.error('Error fetching tourist spot:', error)
            });
    }, []);







    return (

        <div className="p-6">
            <img src={spotData.image} alt={spotData.tourists_spot_name} className="w-full max-h-96 object-cover rounded-lg mb-4" />
            <h1 className="text-3xl font-bold">{spotData.tourists_spot_name}</h1>
            <p className="text-gray-500 text-sm">{spotData.location}, {spotData.country_Name}</p>
            <p className="mt-4">{spotData.short_description}</p>

            <div className="mt-6 space-y-2">
                <p><strong>Average Cost:</strong> {spotData.average_cost}</p>
                <p><strong>Best Season:</strong> {spotData.seasonality}</p>
                <p><strong>Travel Time:</strong> {spotData.travel_time}</p>
                <p><strong>Total Visitors per Year:</strong> {spotData.totalVisitorsPerYear}</p>
            </div>

            {/* User Information */}
            <div className="mt-6 border-t pt-4">
                <h2 className="text-xl font-semibold">User Information</h2>
                <p><strong>Name:</strong> {spotData.userName || 'N/A'}</p>
                <p><strong>Email:</strong> {spotData.userEmail}</p>
            </div>

            {/* Book Now Button */}
            <div className="mt-6">
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                    Book Now
                </button>
            </div>
        </div>

    );
};

export default Details;
