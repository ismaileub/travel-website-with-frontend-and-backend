import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle, FaBars } from "react-icons/fa";


import userImg from '../../assets/icons/user.png'
import { AuthContext } from '../AuthProvider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);

    const dropdown1Ref = useRef(null);
    const dropdown2Ref = useRef(null);


    const toggleDropdown1 = () => {
        setDropdownOpen1(!dropdownOpen1);
    };


    const toggleDropdown2 = () => {
        setDropdownOpen2(!dropdownOpen2);
    };


    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch((error) => {
                console.error('Logout error:', error);

            });
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
                setDropdownOpen1(false);
            }
            if (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) {
                setDropdownOpen2(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="navbar bg-base-100 mt-3 lg:mt-8 items-center Work-Sans shadow-md">
            <div className="navbar-start">

                <div className="dropdown flex lg:hidden" ref={dropdown1Ref}>
                    <div className="relative">
                        <div onClick={toggleDropdown1} className="cursor-pointer btn btn-ghost">
                            <FaBars size={24} />
                        </div>
                        {dropdownOpen1 && (
                            <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                                <ul className="text-center">
                                    <NavLink to="/" className="block py-2 border-b hover:bg-gray-100">Home</NavLink>
                                    <NavLink to="/allTouristSpot" className="block py-2 border-b hover:bg-gray-100">All Tourists Spot</NavLink>
                                    <NavLink to="/mylist" className="block py-2 hover:bg-gray-100">My List</NavLink>
                                    <NavLink to="/addTouristSpot" className="block py-2 hover:bg-gray-100">Add Tourists Spot</NavLink>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>


                <NavLink to="/" className="btn btn-ghost hover:bg-orange-500 hover:text-white text-orange-500 text-2xl font-bold">
                    Explore Heaven
                </NavLink>
            </div>

            <div className="navbar-center hidden lg:flex">
                {/* Desktop Menu */}
                <ul className="menu menu-horizontal  gap-5 items-center font-semibold">

                    <NavLink className={({ isActive }) =>
                        `${isActive ? 'text-orange-500 ' : 'text-black opacity-60'}`
                    } to="/">Home</NavLink>

                    <NavLink className={({ isActive }) =>
                        `${isActive ? 'text-orange-500' : 'text-black opacity-60'}`
                    } to="/allTouristSpot">All Tourists Spot</NavLink>

                    <NavLink className={({ isActive }) =>
                        `${isActive ? 'text-orange-500' : 'text-black opacity-60'}`
                    } to="/mylist">My List</NavLink>

                    <NavLink className={({ isActive }) =>
                        `${isActive ? 'text-orange-500' : 'text-black opacity-60'}`
                    } to="/addTouristSpot">Add Tourists Spot</NavLink>






                </ul>
            </div>

            <div className="navbar-end">
                {/* Conditional rendering based on user's authentication status */}
                {user ? (

                    <div data-tip={user.displayName || "User"} className=" tooltip tooltip-left dropdown flex items-center" ref={dropdown2Ref}>
                        <div className="relative">
                            <div onClick={toggleDropdown2} className="cursor-pointer ">
                                <img src={user.photoURL || userImg} alt="" className="w-12 rounded-full" />
                            </div>

                            {dropdownOpen2 && (

                                <div>
                                    <div className="  absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10" >

                                        <div >
                                            <ul className="text-center">

                                                <li className="py-2 hover:bg-gray-100">
                                                    <button onClick={handleLogout} className="block w-full text-left px-4">Logout</button>
                                                </li>
                                            </ul>

                                        </div>

                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (


                    <div>
                        <div className='flex gap-4'>
                            <div className=" hidden lg:flex">
                                <NavLink to="/login" className="btn bg-orange-500 text-white px-10 hover:text-red-400  ">Sign In</NavLink>
                            </div>
                            <div className=" hidden lg:flex">
                                <NavLink to="/register" className="btn bg-orange-500 text-white px-10 hover:text-red-400 ">Sign Up</NavLink>
                            </div>
                        </div>


                        <div className='flex lg:hidden' ref={dropdown2Ref}>
                            <div className="relative">
                                <div onClick={toggleDropdown2} className="cursor-pointer btn btn-ghost">
                                    <FaRegUserCircle size={24} />
                                </div>

                                {dropdownOpen2 && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                                        <ul className="text-center">
                                            <li className="py-2 border-b hover:bg-gray-100">
                                                <NavLink to="/login" className="block">Sign In</NavLink>
                                            </li>
                                            <li className="py-2 border-b hover:bg-gray-100">
                                                <NavLink to="/register" className="block">Sign Up</NavLink>
                                            </li>



                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>


                )}
            </div>
        </div>
    );
};

export default NavBar;
