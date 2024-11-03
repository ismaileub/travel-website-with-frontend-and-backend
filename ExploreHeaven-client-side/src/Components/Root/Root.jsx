import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../../Components/Footer/Footer'
const Root = () => {
    return (
        <div className='font box-border container mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;