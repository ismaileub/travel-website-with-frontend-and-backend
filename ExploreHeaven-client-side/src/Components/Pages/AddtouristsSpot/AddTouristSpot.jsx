import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';



const AddTouristSpot = () => {

    const { user } = useContext(AuthContext)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        try {
            const response = await fetch('https://explore-haven-server-side.vercel.app/touristSpots', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                Swal.fire({
                    title: "Success!",
                    text: "Added successfully.",
                    icon: "success",
                }).then(console.log('added to database'));

                e.target.reset();


            } else {

            }
        } catch (error) {
            console.error('Error adding tourist spot:', error);

        }
    };

    return (
        <div className="flex justify-center items-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 w-full mt-5 max-w-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center">Add New Tourist Spot</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">Image URL</label>
                        <input
                            name="image"
                            type="url"
                            placeholder="Image URL"
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Tourist Spot Name</label>
                        <input
                            name="tourists_spot_name"
                            type="text"
                            placeholder="Tourist Spot Name"
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Country Name</label>
                        <input
                            name="country_Name"
                            type="text"
                            placeholder="Country Name"
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Location</label>
                        <input
                            name="location"
                            type="text"
                            placeholder="Location"
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Short Description</label>
                        <input
                            name="short_description"
                            type="text"
                            placeholder="Short Description"
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Average Cost</label>
                        <input
                            name="average_cost"
                            type="text"
                            placeholder="Average Cost"
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Seasonality</label>
                        <input
                            name="seasonality"
                            type="text"
                            placeholder="Seasonality"
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Travel Time</label>
                        <input
                            name="travel_time"
                            type="text"
                            placeholder="Travel Time"
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Total Visitors per Year</label>
                        <input
                            name="totalVisitorsPerYear"
                            type="text"
                            placeholder="Total Visitors per Year"
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Your Email</label>
                        <input
                            name="userEmail"
                            type="email"
                            value={user.email} // Hardcoded email
                            readOnly
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none  w-full"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Your Name</label>
                        <input
                            name="userName"
                            type="text"
                            placeholder="Name"
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 mt-6"
                >
                    Add
                </button>
            </form>
        </div>
    );

};

export default AddTouristSpot;
