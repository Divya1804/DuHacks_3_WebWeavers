import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import AboutUs from '../pages/AboutUs';
import Home from '../pages/Home';
const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
           
           
        ]
    },
    {
        path:'/aboutUs',
        element:<AboutUs/>

    }
])
export default router;