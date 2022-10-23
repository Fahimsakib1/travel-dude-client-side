import { createBrowserRouter } from "react-router-dom";
import AllHotels from "../../components/AllHotels/AllHotels";
import Booking from "../../components/Booking/Booking";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Home from "../../components/Home/Home";
import Hotels from "../../components/Hotels/Hotels";
import Layout from "../../components/Layout/Layout";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import UpdateProfile from "../../components/UpdateProfile/UpdateProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/home',
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
                path: '/hotels/:id',
                loader: ({params}) => fetch(`https://travel-dude-server-side.vercel.app/hotels/${params.id}`),
                element:<PrivateRoute><Hotels></Hotels></PrivateRoute>
            },

            {
                path:'/booking/:id',
                loader: ({params}) => fetch(`https://travel-dude-server-side.vercel.app/places/${params.id}`),
                element: <Booking></Booking>
            },

            {
                path: '/allHotels',
                loader: () => fetch(`https://travel-dude-server-side.vercel.app/hotels`),
                element: <AllHotels></AllHotels>
            },

            {
                path: '/profile',
                element: <UpdateProfile></UpdateProfile>
            }
        ]
    },

    {
        path: '*',
        element:<ErrorPage></ErrorPage>
    }
])