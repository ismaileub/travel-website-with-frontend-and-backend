import React from 'react';

const Country = () => {
    return (
        <div>
            <tbody className="text-gray-700 text-sm font-light text-center">
                {data.map((spot) => (
                    <tr key={spot._id} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 flex flex-col items-center md:flex-row"> {/* Adjust layout for mobile */}
                            <img src={spot.image} alt={spot.tourists_spot_name} className="w-full md:w-1/2 rounded-lg mb-2" loading='lazy' />
                            <div className="text-left md:ml-4"> {/* Add margin on larger screens */}
                                <p className="font-semibold">{spot.tourists_spot_name}</p>
                                <p className="text-sm">{spot.short_description}</p>
                                <p className="text-sm font-medium">{spot.location}</p>
                                <p className="text-sm font-medium">{spot.country_Name}</p>
                                <div className="mt-4 flex justify-center space-x-2"> {/* Center buttons */}
                                    <button
                                        onClick={() => handleUpdate(spot._id)}
                                        className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(spot._id)}
                                        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </td>
                        <td className="hidden">{spot.country_Name}</td> {/* Hide this column for mobile view */}
                        <td className="hidden">{spot.location}</td> {/* Hide this column for mobile view */}
                        <td className="hidden">{spot._id}</td> {/* Hide this column for mobile view */}
                    </tr>
                ))}
            </tbody>

        </div>
    );
};

export default Country;