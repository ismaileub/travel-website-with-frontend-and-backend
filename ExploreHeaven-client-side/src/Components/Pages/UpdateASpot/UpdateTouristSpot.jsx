import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateTouristSpot = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null); // Initialize as null for better check later

    useEffect(() => {
        // Fetch specific tourist spot data by id to pre-fill the form
        fetch(`https://explore-haven-server-side.vercel.app/touristSpots/${id}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching tourist spot:', error));
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const updatedData = Object.fromEntries(formData.entries());

        fetch(`https://explore-haven-server-side.vercel.app/updatedSpot/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Updated successfully.",
                        icon: "success",
                    }).then(() => navigate('/mylist'));
                }
            })
            .catch(error => console.error('Error updating tourist spot:', error));
    };

    if (!data) return <p>Not found the data...</p>;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleUpdate}
                className="bg-white shadow-lg rounded-lg p-6 w-full mt-5 max-w-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center">Update Tourist Spot</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="image" className="block mb-1">Image URL</label>
                        <input
                            id="image"
                            name="image"
                            type="url"
                            placeholder="Image URL"
                            defaultValue={data.image}
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="tourists_spot_name" className="block mb-1">Tourist Spot Name</label>
                        <input
                            id="tourists_spot_name"
                            name="tourists_spot_name"
                            type="text"
                            placeholder="Tourist Spot Name"
                            defaultValue={data.tourists_spot_name}
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="country_Name" className="block mb-1">Country Name</label>
                        <input
                            id="country_Name"
                            name="country_Name"
                            type="text"
                            placeholder="Country Name"
                            defaultValue={data.country_Name}
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="location" className="block mb-1">Location</label>
                        <input
                            id="location"
                            name="location"
                            type="text"
                            placeholder="Location"
                            defaultValue={data.location}
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="short_description" className="block mb-1">Short Description</label>
                        <input
                            id="short_description"
                            name="short_description"
                            type="text"
                            placeholder="Short Description"
                            defaultValue={data.short_description}
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="average_cost" className="block mb-1">Average Cost</label>
                        <input
                            id="average_cost"
                            name="average_cost"
                            type="text"
                            placeholder="Average Cost"
                            defaultValue={data.average_cost}
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="seasonality" className="block mb-1">Seasonality (e.g., summer)</label>
                        <input
                            id="seasonality"
                            name="seasonality"
                            type="text"
                            placeholder="Seasonality (e.g., summer)"
                            defaultValue={data.seasonality}
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="travel_time" className="block mb-1">Travel Time (e.g., 7 days)</label>
                        <input
                            id="travel_time"
                            name="travel_time"
                            type="text"
                            placeholder="Travel Time (e.g., 7 days)"
                            defaultValue={data.travel_time}
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="totalVisitorsPerYear" className="block mb-1">Total Visitors per Year</label>
                        <input
                            id="totalVisitorsPerYear"
                            name="totalVisitorsPerYear"
                            type="text"
                            placeholder="Total Visitors per Year"
                            defaultValue={data.totalVisitorsPerYear}
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 mt-6"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateTouristSpot;
