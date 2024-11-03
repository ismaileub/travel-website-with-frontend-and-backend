import { createBrowserRouter } from "react-router-dom";

import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Register from "../Components/Pages/Register/Register";
import Login from "../Components/Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import AddTouristSpot from "../Components/Pages/AddtouristsSpot/AddTouristSpot";
import MyList from "../Components/Pages/MyList/MyList";
import AllTouristSpot from "../Components/Pages/AllTouristSpot/AlltouristSpot";
import UpdateTouristSpot from "../Components/Pages/UpdateASpot/UpdateTouristSpot";
import Details from "../Components/Details/Details";
import CountryContainer from "../Components/Home/CountryContainer/CountryContainer";


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <p className="text-center">Not found</p>,
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addTouristSpot',
                element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
            },
            {
                path: '/mylist',
                element: <PrivateRoute><MyList></MyList></PrivateRoute>
            },
            {
                path: '/allTouristSpot',
                element: <AllTouristSpot></AllTouristSpot>

            },
            {
                path: '/updateTouristSpot/:id',
                element: <PrivateRoute><UpdateTouristSpot></UpdateTouristSpot></PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute> <Details></Details></PrivateRoute>
            },
            {
                path: '/europe/:country',
                element: <CountryContainer></CountryContainer>
            }
        ]

    },
]);

export default router;