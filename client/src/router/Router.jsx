import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import NGODonator from '../pages/NGODonator';
import Events from '../pages/Events';
import EventDetail from '../pages/EventDetail';
import NGODetail from '../pages/NGODetail';
import AboutUs from '../pages/AboutUs';
import Login from '../pages/Login';
import DonatorProfile from '../pages/DonatorProfile';
import Registration from '../pages/Registration';
import NGORegistration from '../pages/NGORegistration';
import EventRegistration from '../pages/EventRegistration';
import DonatorRegistration from '../pages/DonatorRegistration';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import NGOEvents from '../pages/NGOEvents';
import NGOHome from '../pages/NGOHome';
import NGOEventDetail from '../pages/NGOEventDetails';
import SuccessPage from '../pages/SuccessPage';
import { useSelector } from 'react-redux';
import UpdateDonatorProfile from '../pages/UpdateDonatorProfile';
import UpdateNGO from '../pages/UpdateNGO';

const stripePromise = loadStripe('pk_test_51OegoCSHej2iRk34mVCth3mM82qjys3P2z7J7ySjohCnjJg17lVAbo7qHsn8JpQ3UxcEJM8mPzNw10h0scwRr11q00gHOCIEZe');

const router = createBrowserRouter([
    {
       
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/ngo-donator",
                element:<NGODonator/>
            },
            {
                path:"/events",
                element:<Events/>
            }, 
            {
                path:"/aboutus",
                element:<AboutUs/>
            },  
            {
                path:"/donator-profile",
                element:<DonatorProfile/>
            },
            {
                path:"/ngo-events",
                element:<NGOEvents/>
            },
            {
                path:'/ngo',
                element:<NGOHome/>
            }            
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
        path:"/ngo-registration/:id",
        element:<NGORegistration/>
    },
    {
        path:"/update-donator-profile",
        element:<UpdateDonatorProfile/>
    },
    {
        path:"/event-registration",
        element:<EventRegistration/>
    },
    {
        path:"/donator-registration/:id",
        element:<DonatorRegistration/>
    },
    
    {
        path:"/ngo-detail/:id",
        element:<NGODetail/>
    },
    {
        path:"/update-ngo-detail",
        element:<UpdateNGO/>
    },    
    {
        path:"/event-detail/:id",
        element:<EventDetail/>
    },
    {
        path:"/ngo-event-detail/:id",
        element:<NGOEventDetail/>
    },{
        path:"/sucess/:ngoId/:paymentId/:amount",
        element:<SuccessPage/>
    }
   
     
])

export default router;