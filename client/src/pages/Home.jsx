import React, { useEffect, useState } from 'react'
import ImageSlider from '../components/ImageSlider';

import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



function Home() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  let user =  useSelector(state => state.user);

    useEffect(() => {
      
      // Check if user is logged in after Redux state is updated
    if ( !user.userId  || user.mode !== 'donator') {
        navigate('/login');
      }
    }, []);
    useEffect(() => {
      if (user.userId !== '') { // Only fetch data if user is logged in
        const fetchData = async () => {
          try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/home/`);
            setData(response.data);
            setLoading(false); // Set loading to false when data is fetched
          } catch (error) {
            setError(error);
            setLoading(false); // Set loading to false if there's an error
          }
        };
    
        fetchData();
      } else {
        setLoading(false); // Set loading to false when user is not logged in
      }
    }, [user.userId]); // Make sure to include user.userId in the dependency array
    if(!user){
      return <></>
    }
 
  return (
   <section>
      
      {/* <div className=''> */}
         <div className='mt-16'>
             <h3 className='sm:text-3xl text-2xl mb-4 text-gray-400 font-semibold flex justify-center'>CONTRIBUTE</h3>
             <h1 className='sm:text-5xl text-3xl text-gray-500 font-bold flex justify-center'>CHECK UPCOMING EVENTS</h1>
         </div>
          <ImageSlider data={data}/>
          <div className='mt-20'>
             
         </div>
      {/* </div> */}

      {/* Stories  --baki */}

   </section>
    
  )
}

export default Home;