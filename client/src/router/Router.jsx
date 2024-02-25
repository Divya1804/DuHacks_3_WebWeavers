import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import AboutUs from '../pages/AboutUs';
import Home from '../pages/Home';
import Events from '../pages/Events';
import NGODonator from '../pages/NGODonator';
import DonatorProfile from '../pages/DonatorProfile';
import Login from '../pages/Login';
import Registration from '../pages/Registration'
import NGORegistration from '../pages/NGORegistration'
import EventRegistration from '../pages/EventRegistration'
import DonatorRegistration from '../pages/DonatorRegistration';

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
    {
       
            path:"/donator-registration",
            element:<DonatorRegistration/>
      
    }
])
export default router;