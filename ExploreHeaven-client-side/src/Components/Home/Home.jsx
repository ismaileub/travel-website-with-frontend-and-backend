import React from 'react';
import Banner from './Banner/Banner';
import TouristSpots from './TouristSpots/TouristSpots';
import CountrySection from './CountrieSection/CountrySection';
import StatCard from '../../Components/Home/StatCard/StatCard'
import OurClient from '../../Components/Home/OurClient/OurClient'
import { Link } from 'react-router-dom';
import ExploreWithUs from './ExploreWithUs/ExploreWithUs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TouristSpots></TouristSpots>


            <hr />
            <ExploreWithUs></ExploreWithUs>
            <CountrySection></CountrySection>
            <StatCard></StatCard>
            <OurClient></OurClient>

        </div>
    );
};

export default Home;