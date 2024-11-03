import React, { useEffect, useState } from 'react';
import img1 from '../../../assets/slider img/img3.jpg'
import SingleSpotCard from '../../SingleSpotCard/SingleSpotCard';
import { Link } from 'react-router-dom';

const TouristSpots = () => {


    const [data, setData] = useState([]);

    const spots = data.slice(0, 6);
    useEffect(() => {

        fetch('https://explore-haven-server-side.vercel.app/allTouristSpot', {
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

    return (
        <div>
            {
                data.length === 0 &&
                <div className='flex justify-center items-center gap-3 my-5'>
                    <span className="loading loading-bars loading-xs"></span>
                    <span className="loading loading-bars loading-sm"></span>
                    <span className="loading loading-bars loading-md"></span>
                </div>
            }
            <section id="tourist-spots" className="py-10">

                <h2 className="text-3xl underline font-bold text-center my-8 mb-10">Choose Your Destination</h2>



                <div className="grid lg:grid-cols-3 md:grid-cols-2   grid-cols-1 justify-center gap-8  bg-gray-100 ">


                    {
                        spots.map(spot => <SingleSpotCard
                            key={spot._id}
                            spot={spot}
                        ></SingleSpotCard>)
                    }
                </div>



            </section>
            <Link to={'/allTouristSpot'} className="mt-4 block w-28 text-center font-semibold mx-auto rounded-lg px-4 py-2 bg-orange-500 text-white  hover:bg-orange-600 transition-colors text-nowrap">
                View All
            </Link>
        </div>
    );
};

export default TouristSpots;
