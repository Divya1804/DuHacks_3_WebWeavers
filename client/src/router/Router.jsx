import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import AboutUs from '../pages/AboutUs';
const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
           
        ]
    },
    {
        path:'/aboutUs',
        element:<AboutUs/>

    }
])
export default router;