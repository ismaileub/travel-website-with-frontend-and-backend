import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import img1 from '../../../assets/slider img/img1.jpg'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyList = () => {
    const [data, setData] = useState([]);

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const email = user.email;
        fetch(`https://explore-haven-server-side.vercel.app/user/${email}`, {
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


    const handleUpdate = (id) => {
        navigate(`/updateTouristSpot/${id}`);
    };

    const handleDelete = (id) => {

        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://explore-haven-server-side.vercel.app/touristSpots/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tourist Spot deleted.",
                                icon: "success"
                            });
                            setData(prevData => prevData.filter(spot => spot._id !== id));
                        }
                    })
            }
        });


    };




    return (
        <div className="container mx-auto p-4 text-center ">
            <h2 className="text-2xl text-center font-bold mb-4">My Tourist Spots List</h2>
            {
                data.length === 0 &&
                <div className='flex justify-center items-center gap-3 my-5'>
                    <span className="loading loading-bars loading-xs"></span>
                    <span className="loading loading-bars loading-sm"></span>
                    <span className="loading loading-bars loading-md"></span>
                </div>
            }
            <table className="  hidden lg:block md:block min-w-full ">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal text-center">
                        <th className="py-3 px-6 ">Tourist Spot</th>
                        <th className="py-3 px-6 ">Country</th>
                        <th className="py-3 px-6 ">Location</th>
                        <th className="py-3 px-6 ">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700 text-sm font-light text-center">

                    {data.map((spot) => (
                        <tr key={spot._id} className="border-b border-gray-200 hover:bg-gray-100">

                            <td className="py-3 px-6 flex items-center ">
                                <img src={spot.image} alt={spot.tourists_spot_name} className=" w-1/2 rounded-lg mr-4" loading='lazy' />
                                <div>
                                    <p className="font-semibold">{spot.tourists_spot_name}</p>
                                    <p>{spot.short_description}</p>
                                </div>
                            </td>
                            <td className="py-3 px-6 text-nowrap">{spot.country_Name}</td>
                            <td className="py-3 px-6 text-nowrap">{spot.location}</td>
                            <td className="py-3 px-6 text-center text-nowrap">
                                <button
                                    onClick={() => handleUpdate(spot._id)}
                                    className="bg-blue-500 text-white py-1 px-3 rounded mr-2 hover:bg-blue-600"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => handleDelete(spot._id)}
                                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <table className=' block lg:hidden md:hidden '>
                <tbody className=" text-gray-700 text-sm font-light text-center">
                    {data.map((spot) => (
                        <tr key={spot._id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 flex flex-col items-center md:flex-row">
                                <img src={spot.image} alt={spot.tourists_spot_name} className="w-full md:w-1/2 rounded-lg mb-2" loading='lazy' />
                                <div className="md:ml-4">
                                    <p className="font-semibold">{spot.tourists_spot_name}</p>
                                    <p className="text-sm">{spot.short_description}</p>
                                    <p className="text-sm font-medium">{spot.location}</p>
                                    <p className="text-sm font-medium">{spot.country_Name}</p>
                                    <div className="mt-4 flex justify-center space-x-2">
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

                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default MyList;    