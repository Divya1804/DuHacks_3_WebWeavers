import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import AboutUs from '../pages/AboutUs';
import Home from '../pages/Home';
import Events from '../pages/Events';
import NGODonator from '../pages/NGODonator';
import DonatorProfile from '../pages/DonatorProfile';

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/events',
                element:<Events/>
            },
            {
                path:'/ngo-donator',
                element:<NGODonator/>
            },
            {
                path:"/donator-profile",
                element:<DonatorProfile/>
            },
           
           
        ]
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Registration/>
    },
    {
        path:'/aboutUs',
        element:<AboutUs/>

    },
    {
        path:"/ngo-registration",
        element:<NGORegistration/>
    },
    {
        path:"/event-registration",
        element:<EventRegistration/>
    },
])
export default router;