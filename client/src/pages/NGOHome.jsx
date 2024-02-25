import React, { useEffect, useState } from 'react'
import ImageSlider from '../components/ImageSlider'
import DonatorCard from '../components/DonatorCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NGOHome() {

  const [topDonator, setTopDonator] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  let navigate = useNavigate();
  let user =  useSelector(state => state.user);
    useEffect(() => {
      
      // Check if user is logged in after Redux state is updated
    if ( !user.userId  || user.mode !== 'ngo') {
        navigate('/login');
      }
    }, []);
   useEffect(()=>{
      const fetchData = async () => {
         try {
           const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/ngo/home/${user.userId}/`);
           setData(response.data.evCard);
           setTopDonator(response.data.donors)
           console.log("response",response.data);
         } catch (error) {
           setError(error);
           console.log(error);
         }
       };
   
       fetchData(); 
   }, [])
  return (
    <section>   
        {/* <div className=''> */}
        <div className='mt-16'>
            <h3 className='sm:text-3xl text-2xl mb-4 text-gray-400 font-semibold flex justify-center'>CONTRIBUTE</h3>
            <h1 className='sm:text-5xl text-3xl text-gray-500 font-bold flex justify-center'>CHECK UPCOMING EVENTS</h1>
        
        </div>
        {console.log("hello",data)}
        <ImageSlider data={data}/>

        <hr className="mt-6 border-b-1 border-gray-200 " />


        <div className='mt-10 lg:mx-24 md:mx-24 mx-auto'>
            <h3 className='sm:text-5xl text-3xl mb-6 text-gray-500 font-bold flex justify-center '>HIGHEST  CONTRIBUTER</h3>
            {/* iterating here using loop pass value to the props */}
            {topDonator.map((x)=>{
                return  (<DonatorCard data = {x}/>)
            })}
           

        </div>
    </section>
  )
}

export default NGOHome;