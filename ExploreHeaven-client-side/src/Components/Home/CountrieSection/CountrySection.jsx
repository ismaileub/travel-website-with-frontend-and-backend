import React, { useEffect, useState } from 'react';

import img1 from '../../../assets/slider img/img4.jpg';
import SingleCountryCard from '../SingleCountryCard/SingleCountryCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import './styles.css';

// Import required modules
// import { Pagination } from 'swiper/modules';
import { Grid, Pagination } from 'swiper/modules';

const CountrySection = () => {


    const [data, setData] = useState([]);

    const countries = data.filter((item, index, self) =>
        index === self.findIndex((t) => t.country_Name === item.country_Name)
    );

    // console.log(countries);




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
        <section id="" className="py-10">
            <h2 className="text-3xl font-bold text-center mb-8">Explore Europe</h2>

            {/* Swiper Component */}
            <Swiper
                // slidesPerView={3}
                grid={{
                    rows: 2,
                    fill: 'row'
                }}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                // modules={[Pagination]}
                modules={[Grid, Pagination]}
                className="mySwiper"
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {
                    countries.map((country, index) => (
                        <SwiperSlide key={index}>

                            <SingleCountryCard country={country}></SingleCountryCard>


                        </SwiperSlide>
                    ))
                }


            </Swiper>




        </section>
    );
};

export default CountrySection;
